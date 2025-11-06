import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function OAuthButtons() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Button
      className="w-full"
      variant="outline"
      onClick={() => signIn("github", { redirectTo: "/" })}
    >
      <Image
        src={isDark ? "/github-mark-white.png" : "/github-mark.png"}
        width={22}
        height={22}
        alt="Picture of the author"
      />
      使用 Github
    </Button>
  );
}
