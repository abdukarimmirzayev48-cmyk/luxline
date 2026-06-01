import { sendQuoteToTelegram, validateQuotePayload } from './_lib/quote.js';

function setJsonHeaders(res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setJsonHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const validationError = validateQuotePayload(req.body);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  const result = await sendQuoteToTelegram(req.body);
  if (!result.ok) {
    return res.status(result.status).json({
      ok: false,
      error: result.error,
      ...(result.details ? { details: result.details } : {}),
    });
  }

  return res.status(200).json({ ok: true });
}
