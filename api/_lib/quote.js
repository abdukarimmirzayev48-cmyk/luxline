export function normalizeUsPhone(input) {
  const digits = String(input || '').replace(/\D/g, '');
  return digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
}

export function formatUsPhone(digits) {
  return `+1 ${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function validateQuotePayload(body) {
  const requiredFields = ['name', 'phone', 'vehicleType', 'from', 'to', 'date', 'time', 'passengers'];

  for (const field of requiredFields) {
    if (!String(body?.[field] || '').trim()) {
      return `Missing required field: ${field}`;
    }
  }

  const normalizedPhone = normalizeUsPhone(body.phone);
  if (normalizedPhone.length !== 10) {
    return 'Phone number must contain exactly 10 U.S. digits after +1.';
  }

  if (!['Sedan', 'SUV'].includes(String(body.vehicleType))) {
    return 'Vehicle type must be Sedan or SUV.';
  }

  const passengerCount = Number(body.passengers);
  if (!Number.isInteger(passengerCount) || passengerCount < 1 || passengerCount > 20) {
    return 'Passengers must be a whole number between 1 and 20.';
  }

  return null;
}

export async function sendQuoteToTelegram(body, env = process.env) {
  const telegramBotToken = env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !telegramChatId) {
    return {
      ok: false,
      status: 500,
      error: 'Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.',
    };
  }

  const normalizedPhone = normalizeUsPhone(body.phone);
  const notes = String(body.notes || '').trim();

  const lines = [
    'LuxLine quote request',
    '',
    `Name: ${String(body.name).trim()}`,
    `Phone: ${formatUsPhone(normalizedPhone)}`,
    `Vehicle type: ${String(body.vehicleType).trim()}`,
    `Pickup: ${String(body.from).trim()}`,
    `Drop-off: ${String(body.to).trim()}`,
    `Date: ${String(body.date).trim()}`,
    `Time: ${String(body.time).trim()}`,
    `Passengers: ${String(body.passengers).trim()}`,
  ];

  if (notes) {
    lines.push(`Notes: ${notes}`);
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: lines.join('\n'),
      }),
    });

    const telegramData = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramData.ok) {
      return {
        ok: false,
        status: 502,
        error: 'Telegram rejected the message.',
        details: telegramData,
      };
    }

    return { ok: true, status: 200 };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: error instanceof Error ? error.message : 'Unknown server error',
    };
  }
}
