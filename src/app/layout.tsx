import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";
import { TRPCReactProvider } from "@/trpc/client";

import "./globals.css";

const SMOKE_TEST_CLERK_PUBLISHABLE_KEY =
  "pk_test_ZHVtbXkuY2xlcmsuYWNjb3VudHMuZGV2JA";

export const metadata: Metadata = {
  title: "LaunchKit AI | Open-Source AI App Builder",
  description:
    "Open-source AI app builder for turning prompts into runnable web apps with sandboxed coding agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const app = (
    <TRPCReactProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
    </TRPCReactProvider>
  );

  if (
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ===
    SMOKE_TEST_CLERK_PUBLISHABLE_KEY
  ) {
    return app;
  }

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#C96342",
        },
      }}
    >
      {app}
    </ClerkProvider>
  );
};
