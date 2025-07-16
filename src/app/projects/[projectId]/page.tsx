import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient,trpc } from "@/trpc/server";


import { ProjectView } from "@/modules/projects/ui/views/project-view";



interface PageProps {
  params: Promise< {
    projectId: string;
  }>
};

const Page = async ({ params }: PageProps) => {
    const { projectId } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({ 
      projectId,
    }));
    void queryClient.prefetchQuery(trpc.projects.getOne.queryOptions({ 
      id: projectId,
    }));



  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading Project...</div>}>
          <ProjectView projectId={projectId} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>

    );
  
}

export default Page;