/**
 * The assistant's current conversational state. Both the placeholder avatar
 * and the future 3D avatar render off this same state, so the chat logic
 * never needs to know which one is mounted.
 */
export type AssistantState = "idle" | "listening" | "thinking" | "speaking";

export interface AssistantAvatarProps {
  state: AssistantState;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}
