import type { AssistantAvatarProps } from "@/lib/assistant/types";

/**
 * Temporary stand-in for the Blender-modeled 3D assistant. Implements the
 * same AssistantAvatarProps contract a future React Three Fiber component
 * will use, so it can be swapped out by editing only the re-export in
 * AssistantAvatar.tsx — nothing that renders <AssistantAvatar /> needs to
 * change.
 */
export default function AssistantAvatarPlaceholder({ state }: AssistantAvatarProps) {
  return (
    <div className={`assistant-avatar assistant-avatar--${state}`}>
      <div className="assistant-avatar-ring" />
      <div className="assistant-avatar-core">
        <span className="assistant-avatar-eye" />
        <span className="assistant-avatar-eye" />
      </div>
      {state === "thinking" && (
        <div className="assistant-avatar-dots">
          <i />
          <i />
          <i />
        </div>
      )}
    </div>
  );
}
