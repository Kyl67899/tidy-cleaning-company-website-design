import { convertToModelMessages, gateway, streamText } from "ai"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!Array.isArray(messages)) {
      return Response.json({ error: "Messages are required." }, { status: 400 })
    }

    const result = streamText({
      model: gateway("openai/gpt-4o-mini"),
      system:
        "You are Tidy's friendly booking assistant. Help visitors choose home cleaning, deep cleaning, or move in / out services and prepare an appointment request. Be concise, warm, and practical. Never claim an appointment is booked or availability is confirmed; tell the visitor to submit the booking form for crew confirmation. Mention that donations help keep the assistant maintained only when asked.",
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 300,
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("[v0] Assistant route error", error)
    return Response.json({ error: "The assistant is temporarily unavailable." }, { status: 500 })
  }
}
