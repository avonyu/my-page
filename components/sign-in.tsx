import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function OAuths() {
  return (
    <form
      action={async () => {
        // "use server";
        await signIn("github");
      }}
    >
      <Button className="w-full" variant="outline" type="submit">
        <Github />
        使用 Github
      </Button>
    </form>
  );
}
