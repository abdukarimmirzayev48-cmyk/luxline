import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { sendQuoteToTelegram, validateQuotePayload } from './api/_lib/quote.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/quote', async (req, res) => {
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

  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`LuxLine quote server listening on http://localhost:${port}`);
});
