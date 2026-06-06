"use client";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { GithubIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { UserControl } from "@/components/user-control";

const SMOKE_TEST_CLERK_PUBLISHABLE_KEY =
  "pk_test_ZHVtbXkuY2xlcmsuYWNjb3VudHMuZGV2JA";

export const Navbar = () => {
  const isScrolled = useScroll();
  const isSmokeTestAuth =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ===
    SMOKE_TEST_CLERK_PUBLISHABLE_KEY;

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-transparent px-4 py-3 transition-all duration-200",
        isScrolled && "border-border bg-background/85 shadow-sm backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LaunchKit AI" width={24} height={24} />
          <span className="font-semibold text-lg">LaunchKit AI</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <Link href="/#workflow" className="transition-colors hover:text-foreground">
            Workflow
          </Link>
          <a
            href="https://github.com/AndyY-Q/launchkit-ai#readme"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
          <a
            href="https://github.com/AndyY-Q/launchkit-ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
        {isSmokeTestAuth ? (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        ) : (
          <>
          <SignedOut>
            <div className="flex gap-2">
                <SignUpButton>
                   <Button variant="outline" size="sm">
                        Sign up
                    </Button>
                </SignUpButton>
                <SignInButton>
                    <Button size="sm">
                        Sign in
                    </Button>
                </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserControl showName />
          </SignedIn>
          </>
        )}
      </div>
    </nav>
  );
};
