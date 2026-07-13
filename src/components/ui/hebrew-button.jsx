import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HebrewButton({ className, children, ...props }) {
  return (
    <Button
      className={cn("font-heebo text-right", className)}
      {...props}
    >
      {children}
    </Button>
  );
}