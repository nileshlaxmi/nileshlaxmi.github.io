import type { AvatarProps } from "./types";

export function Avatar({ initials = "NL" }: AvatarProps) {
  return (
    <div className="avatar" aria-hidden="true">
      {initials}
    </div>
  );
}