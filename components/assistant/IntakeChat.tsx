"use client";

import { useEffect, useRef, useState } from "react";
import AssistantAvatar from "./AssistantAvatar";
import ChatBubble from "./ChatBubble";
import { getAssistantReply } from "@/lib/assistant/respond";
import type { AssistantState, ChatMessage } from "@/lib/assistant/types";

const QUICK_OPTIONS = ["A website", "An AI feature", "An automation", "Not sure yet"];

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export default function IntakeChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nextId(),
      role: "assistant",
      text: "Hey — I'm Tanay's project assistant. What are you looking to build?",
    },
  ]);
  const [assistantState, setAssistantState] = useState<AssistantState>("idle");
  const [input, setInput] = useState("");
  const [showQuickOptions, setShowQuickOptions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, assistantState]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setShowQuickOptions(false);
    const userMessage: ChatMessage = { id: nextId(), role: "user", text: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setAssistantState("thinking");

    const reply = await getAssistantReply(nextMessages);

    setAssistantState("speaking");
    setMessages((current) => [...current, { id: nextId(), role: "assistant", text: reply }]);
    window.setTimeout(() => setAssistantState("idle"), 900);
  }

  return (
    <div className="assistant-widget">
      <AssistantAvatar state={assistantState} />

      <div className="chat-panel">
        <div className="chat-messages" ref={scrollRef}>
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          {assistantState === "thinking" && (
            <div className="chat-bubble chat-bubble--assistant chat-bubble--thinking">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {showQuickOptions && (
          <div className="quick-options">
            {QUICK_OPTIONS.map((option) => (
              <button key={option} type="button" onClick={() => sendMessage(option)}>
                {option}
              </button>
            ))}
          </div>
        )}

        <form
          className="chat-input"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(input);
          }}
        >
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setAssistantState(event.target.value ? "listening" : "idle");
            }}
            placeholder="Or type what you have in mind…"
            aria-label="Message"
          />
          <button type="submit" aria-label="Send">
            ↗
          </button>
        </form>
      </div>
    </div>
  );
}
