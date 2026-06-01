import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

app.use(cors());
app.use(express.json());

function normalizeUsPhone(input) {
  const digits = input.replace(/\D/g, '');
  const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  return normalized;
}

function formatUsPhone(digits) {
  return `+1 ${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validateQuotePayload(body) {
  const requiredFields = ['name', 'phone', 'vehicleType', 'from', 'to', 'date', 'time', 'passengers'];

  for (const field of requiredFields) {
    if (!String(body[field] || '').trim()) {
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

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/quote', async (req, res) => {
  const validationError = validateQuotePayload(req.body);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  if (!telegramBotToken || !telegramChatId) {
    return res.status(500).json({
      ok: false,
      error: 'Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.',
    });
  }

  const normalizedPhone = normalizeUsPhone(req.body.phone);
  const notes = String(req.body.notes || '').trim();

  const lines = [
    'LuxLine quote request',
    '',
    `Name: ${String(req.body.name).trim()}`,
    `Phone: ${formatUsPhone(normalizedPhone)}`,
    `Vehicle type: ${String(req.body.vehicleType).trim()}`,
    `Pickup: ${String(req.body.from).trim()}`,
    `Drop-off: ${String(req.body.to).trim()}`,
    `Date: ${String(req.body.date).trim()}`,
    `Time: ${String(req.body.time).trim()}`,
    `Passengers: ${String(req.body.passengers).trim()}`,
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
      return res.status(502).json({
        ok: false,
        error: 'Telegram rejected the message.',
        details: telegramData,
      });
    }

    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown server error',
    });
  }
});

app.listen(port, () => {
  console.log(`LuxLine quote server listening on http://localhost:${port}`);
});
