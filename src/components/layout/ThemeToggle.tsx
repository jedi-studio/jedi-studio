"use client";

import * as React from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";


export function ThemeToggle({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {

  const { setTheme, theme } = useTheme();

  return (
    <div {...props}>
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        <LuSun
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          strokeWidth={1.5}
        />
        <LuMoonStar
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          strokeWidth={1.5}
        />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </div>
  );
}
