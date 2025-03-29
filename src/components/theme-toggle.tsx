import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getTranslations } from "next-intl/server";
import { ComponentProps } from "react";
import { ThemeButton } from "./theme-button";

export async function ModeToggle(
  props: Partial<ComponentProps<typeof Button>>
) {
  const t = await getTranslations("Common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" {...props}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("theme-toggle")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild className="w-full">
          <ThemeButton theme="light">{t("theme.light")}</ThemeButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="w-full">
          <ThemeButton theme="dark">{t("theme.dark")}</ThemeButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="w-full">
          <ThemeButton theme="system">{t("theme.system")}</ThemeButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
