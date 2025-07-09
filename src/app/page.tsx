import { Suspense } from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import { getQueryClient,trpc } from "@/trpc/server"

import { Client } from "./client"


const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: 'Hello!'}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
      <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page