import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "../components/ui/auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-tr from-primary to-secondary">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            poppins.className
          )}
        >
          🔒 Auth
        </h1>
        <p className="text-white text-lg ">A simple authentication app</p>
        <div className="text-center">
          <LoginButton>
            <Button size={"lg"} variant={"secondary"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
