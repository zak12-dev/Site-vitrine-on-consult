import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>{children}</Button>
    </div>
  );
}
