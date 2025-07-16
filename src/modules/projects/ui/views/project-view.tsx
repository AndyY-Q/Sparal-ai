"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { EyeIcon, CodeIcon, CrownIcon } from "lucide-react";

import { Fragment } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { UserControl } from "@/components/user-control";
import { FileExplorer } from "@/components/file-explorer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ErrorBoundary } from "react-error-boundary";

import { FragmentWeb } from "../components/fragment-web";
import { ProjectHeader } from "../components/project-header";
import { MessagesContainer } from "../components/messages-container";




interface Props {
    projectId: string;
}
export const ProjectView = ({ projectId }: Props) => {
    const { has } = useAuth();
    const hasProAccess = has?.({plan: "pro"});

    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
    const [tabState, setTabState] = useState<"preview" | "code">("preview");

    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={35}
                    minSize={20}
                    className="flex flex-col min-h-0"
                >
                    <ErrorBoundary fallback={<div>Project Header Error</div>}>
                    <Suspense fallback={<div>Loading project...</div>}>
                        <ProjectHeader projectId={projectId} />
                    </Suspense>
                    </ErrorBoundary>
                    <ErrorBoundary fallback={<div>Messages Container Error</div>}>
                    <Suspense fallback={<div>Loading messages...</div>}>
                        <MessagesContainer
                         projectId={projectId}
                         activeFragment={activeFragment}
                         setActiveFragment={setActiveFragment}
                        />
                    </Suspense>
                    </ErrorBoundary>
                </ResizablePanel>
                <ResizableHandle className="hover:bg-primary transition-colors" />
                <ResizablePanel
                    defaultSize={65}
                    minSize={50}
                >
                    <Tabs
                        className="h-full gap-y-0"
                        defaultValue="preview"
                        value={tabState}
                        onValueChange= {value => setTabState(value as "preview" | "code")}
                    >
                        <div className="w-full flex items-center p-2 border-b gap-x-2">
                            <TabsList className="h-8 p-0 border rounded-md">
                                    <TabsTrigger value="preview" className="rounded-md">
                                        <EyeIcon /><span>Demo</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="code" className="rounded-md">
                                        <CodeIcon /><span>Code</span>
                                    </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-x-2">
                                {hasProAccess && (
                                <Button asChild size="sm" variant="tertiary">
                                    <Link href="/pricing">
                                        <CrownIcon />Upgrade
                                    </Link>
                                </Button>
                                )}
                                <UserControl />
                            </div>
                        </div>
                        <TabsContent value="preview">
                            {!!activeFragment && <FragmentWeb data={activeFragment} />}
                        </TabsContent>
                        <TabsContent value="code" className="min-h-0">
                            {!!activeFragment?.files && (
                                <FileExplorer
                                    files={activeFragment.files as { [path: string]: string }}
                                />
                            )}
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};
