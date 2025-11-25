// src/api/openrouter.ts
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function getGrokResponse(messages: { role: string; content: string }[]) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "StudyTogether AI",
    },
    body: JSON.stringify({
      model: "x-ai/grok-4.1-fast:free", // ← Best free Grok model
      messages,
      stream: true, // ← Important for real-time typing
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter Error: ${response.status} - ${err}`);
  }

  return response.body?.getReader();
}