import type { ChatMessage } from "./types";

/**
 * Produces the assistant's next reply given the conversation so far.
 *
 * This is a placeholder: canned, keyword-based responses, so the chat UI
 * is fully demoable without any backend. Block 5 replaces the body of this
 * function with a real LLM call (Vercel AI SDK) that extracts structured
 * project requirements and stores them — the signature (messages in,
 * string out) stays the same, so IntakeChat doesn't need to change.
 */
export async function getAssistantReply(
  messages: ChatMessage[]
): Promise<string> {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const text = (lastUserMessage?.text ?? "").toLowerCase();

  await wait(700 + Math.random() * 500);

  if (text.includes("website") || text.includes("web app")) {
    return "Got it — a website or web app. What's the core thing it needs to do for a visitor?";
  }
  if (text.includes("ai")) {
    return "An AI feature — is this adding AI to something that already exists, or a new product built around it?";
  }
  if (text.includes("automat")) {
    return "Automation — what's the manual, repetitive process you're trying to get rid of?";
  }
  if (text.includes("not sure")) {
    return "That's fine — describe the problem in your own words and I'll help shape it into something buildable.";
  }
  return "Tell me a bit more about that, and I'll start putting together what this project would actually involve.";
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
