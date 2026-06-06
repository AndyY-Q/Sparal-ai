"use client";

import Image from "next/image";
import { dark } from '@clerk/themes'
import { PricingTable } from "@clerk/nextjs";

import { useCurrentTheme } from "@/hooks/use-current-theme";

const SMOKE_TEST_CLERK_PUBLISHABLE_KEY =
  "pk_test_ZHVtbXkuY2xlcmsuYWNjb3VudHMuZGV2JA";

const Page = () => {
    const currentTheme = useCurrentTheme();
    const isSmokeTestAuth =
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ===
      SMOKE_TEST_CLERK_PUBLISHABLE_KEY;
    
    return (
      <div className="flex flex-col max-w-3xl mx-auto w-full">
        <section className="space-y-6 pt-[16vh] 2xl:pt-48">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.svg"
              alt="LaunchKit AI"
              width={50}
              height={50}
              className="hidden md:block"
            />
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-center">Pricing</h1>
          <p className="text-muted-foreground text-center text-sm md:text-base">
            Choose the plan that fits your needs
          </p>
          {isSmokeTestAuth ? (
            <div className="rounded-lg border bg-background p-6 text-center shadow-sm">
              <h2 className="text-base font-semibold">Provider setup required</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Add real Clerk billing keys to render the hosted pricing table.
              </p>
            </div>
          ) : (
            <PricingTable
              appearance={{
                baseTheme: currentTheme === "dark" ? dark : undefined,
                elements: {
                  pricingTableCard: "border! shadow-none! rounded-lg!",
                },
              }}
            />
          )}
        </section>
      </div>
    );
};

export default Page;
