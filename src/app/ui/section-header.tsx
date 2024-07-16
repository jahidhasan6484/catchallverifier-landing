import { ReactNode } from "react";

export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="text-on-surface text-3xl font-bold mb-3 mt-5">
      {children}
    </div>
  );
}
