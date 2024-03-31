import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
          <Icons.sun className="w-4 h-4" />
      ) : (
          <Icons.moon className="w-4 h-4" />
      )}
    </Button>
  );
}
