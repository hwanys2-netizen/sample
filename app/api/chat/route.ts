import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    system: "You are an expert math tutor. Your goal is to help students understand mathematical concepts. Provide clear, step-by-step explanations. Encourage the student to think for themselves when possible, rather than just giving the final answer. Use LaTeX formatting for math expressions when appropriate.",
    messages,
  });

  return result.toTextStreamResponse();
}
