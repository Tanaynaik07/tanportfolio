import type { ChatMessage } from "@/lib/assistant/types";

export default function ChatBubble({ message }: { message: ChatMessage }) {
  return (
    <div className={`chat-bubble chat-bubble--${message.role}`}>{message.text}</div>
  );
}
