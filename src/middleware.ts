import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

const SMOKE_TEST_CLERK_SECRET = "sk_test_ZHVtbXk";

const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/pricing(.*)",
    "/api(.*)",
]);

const clerkMiddlewareHandler = clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect()
    }
  })

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  if (
    !process.env.CLERK_SECRET_KEY ||
    process.env.CLERK_SECRET_KEY === SMOKE_TEST_CLERK_SECRET
  ) {
    return NextResponse.next();
  }

  return clerkMiddlewareHandler(req, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
