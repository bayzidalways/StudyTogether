// src/api/grok.ts
export async function getGrokStream(
  messages: { role: string; content: string }[]
) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "StudyTogether AI Widget",
      },
      body: JSON.stringify({
        model: "x-ai/grok-4.1-fast:free", // Best free Grok model
        messages,
        stream: true,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to connect to Grok");

  return response.body?.getReader();
}
