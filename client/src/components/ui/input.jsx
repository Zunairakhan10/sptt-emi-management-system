import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        w-full
        h-12
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        text-[15px]
        text-slate-700
        placeholder:text-slate-400
        shadow-sm
        transition-all
        duration-300

        focus:outline-none
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100

        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };