// SWAP POINT: when the Blender model + React Three Fiber renderer are
// ready, add `AssistantAvatar3D.tsx` (implementing AssistantAvatarProps
// from "@/lib/assistant/types") and point this re-export at it:
//
//   export { default } from "./AssistantAvatar3D";
//
// IntakeChat and everything else imports AssistantAvatar from this file
// only, so no other code needs to change.
export { default } from "./AssistantAvatarPlaceholder";
