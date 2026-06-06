import { ProjectForm } from "@/modules/home/ui/components/project-form";
import Image from "next/image";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import {
  ArrowRightIcon,
  BoxesIcon,
  BracesIcon,
  CheckCircle2Icon,
  CircleIcon,
  Code2Icon,
  FileCode2Icon,
  GitBranchIcon,
  LockKeyholeIcon,
  PlayIcon,
  TerminalIcon,
} from "lucide-react";

const workflow = [
  {
    icon: BracesIcon,
    title: "Prompt",
    description: "Capture the maintainer task or product idea.",
  },
  {
    icon: GitBranchIcon,
    title: "Agent run",
    description: "Route work through Inngest and OpenAI tools.",
  },
  {
    icon: BoxesIcon,
    title: "Sandbox",
    description: "Write and test files in an isolated E2B runtime.",
  },
  {
    icon: PlayIcon,
    title: "Preview",
    description: "Save the generated fragment with a live URL.",
  },
];

const files = [
  "app/page.tsx",
  "components/agent-run.tsx",
  "lib/sandbox.ts",
  "inngest/functions.ts",
];

const timeline = [
  ["prompt", "Issue triage console"],
  ["tool", "createOrUpdateFiles"],
  ["run", "npm run lint"],
  ["save", "fragment preview ready"],
];

const Page = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-6xl items-center gap-12 overflow-hidden px-1 py-24 md:grid-cols-[0.92fr_1.08fr] md:py-28 lg:gap-16">
        <div className="relative z-10 min-w-0">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border bg-background/85 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur">
            <Image src="/logo.svg" alt="LaunchKit AI" width={18} height={18} />
            <span>Open-source AI app builder</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>MIT</span>
          </div>
          <h1 className="max-w-full text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl md:max-w-3xl md:text-6xl lg:text-7xl">
            Turn prompts into runnable apps
          </h1>
          <p className="mt-6 max-w-full text-pretty text-base leading-7 text-muted-foreground md:max-w-xl md:text-lg">
            LaunchKit AI is a forkable app-builder product powered by
            sandboxed coding agents: OpenAI reasoning, Inngest orchestration,
            E2B execution, tRPC APIs, Clerk auth, and Prisma persistence.
          </p>

          <div className="mt-8 w-full max-w-full md:max-w-2xl">
            <ProjectForm />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <LockKeyholeIcon className="size-3.5 text-primary" />
              Generated code runs outside the app process
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2Icon className="size-3.5 text-emerald-600" />
              CI-ready smoke mode
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[calc(100vw-2rem)] min-w-0 md:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(201,99,66,0.16),transparent_34%),radial-gradient(circle_at_78%_52%,rgba(22,163,130,0.12),transparent_30%)]" />
          <div className="overflow-hidden rounded-2xl border bg-background/92 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="flex items-center justify-between border-b bg-muted/35 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff6b5f]" />
                <span className="size-2.5 rounded-full bg-[#f5bf4f]" />
                <span className="size-2.5 rounded-full bg-[#54c76f]" />
              </div>
              <div className="rounded-full border bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
                code-agent/run
              </div>
            </div>

            <div className="grid min-h-[520px] md:grid-cols-[160px_minmax(0,1fr)]">
              <aside className="hidden border-r bg-sidebar/70 p-4 md:block">
                <div className="mb-5 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <FileCode2Icon className="size-3.5" />
                  sandbox files
                </div>
                <div className="space-y-1">
                  {files.map((file, index) => (
                    <div
                      key={file}
                      className={`rounded-md px-2.5 py-2 font-mono text-[11px] ${
                        index === 1
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {file}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-lg border bg-background p-3">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium">
                    <CircleIcon className="size-2 fill-emerald-500 text-emerald-500" />
                    sandbox live
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 rounded bg-muted" />
                    <div className="h-1.5 w-8/12 rounded bg-muted" />
                    <div className="h-1.5 w-10/12 rounded bg-muted" />
                  </div>
                </div>
              </aside>

              <div className="grid min-w-0 gap-0 md:grid-rows-[1fr_190px]">
                <div className="grid min-w-0 gap-4 p-4 md:grid-cols-[minmax(0,1fr)_170px]">
                  <div className="rounded-xl border bg-[#111318] p-4 text-slate-100 shadow-inner">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Code2Icon className="size-3.5" />
                        components/agent-run.tsx
                      </div>
                      <span className="rounded bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                        saved
                      </span>
                    </div>
                    <pre className="overflow-hidden font-mono text-[11px] leading-6 text-slate-300">
{`export function AgentRun() {
  const run = useSandboxRun();

  return (
    <Timeline>
      <Tool name="terminal" />
      <Preview url={run.previewUrl} />
    </Timeline>
  );
}`}
                    </pre>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border bg-background p-3 shadow-sm">
                      <div className="mb-3 flex items-center gap-2 text-xs font-medium">
                        <TerminalIcon className="size-3.5 text-primary" />
                        agent timeline
                      </div>
                      <div className="space-y-3">
                        {timeline.map(([label, value]) => (
                          <div key={label} className="flex gap-2">
                            <div className="mt-1.5 size-1.5 rounded-full bg-primary" />
                            <div>
                              <div className="font-mono text-[10px] uppercase text-muted-foreground">
                                {label}
                              </div>
                              <div className="truncate text-xs">{value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border bg-primary p-3 text-primary-foreground shadow-sm">
                      <div className="text-xs font-medium">fragment ready</div>
                      <div className="mt-2 flex items-center justify-between text-[11px] opacity-85">
                        <span className="truncate">localhost:3000</span>
                        <ArrowRightIcon className="size-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t bg-muted/25 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium">Sandbox preview</span>
                    <span className="text-muted-foreground">E2B isolated runtime</span>
                  </div>
                  <div className="grid h-[120px] grid-cols-[1fr_0.72fr] gap-3">
                    <div className="rounded-lg border bg-background p-3">
                      <div className="mb-3 h-2 w-24 rounded bg-primary/30" />
                      <div className="space-y-2">
                        <div className="h-2 rounded bg-muted" />
                        <div className="h-2 w-9/12 rounded bg-muted" />
                        <div className="h-2 w-7/12 rounded bg-muted" />
                      </div>
                      <div className="mt-4 h-7 w-24 rounded-md bg-primary" />
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-10 rounded bg-muted" />
                        <div className="h-10 rounded bg-muted" />
                        <div className="col-span-2 h-8 rounded bg-emerald-500/15" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto w-full max-w-6xl scroll-mt-24 px-1 pb-20">
        <div className="border-t pt-8">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold">One inspectable loop</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                Every generated artifact moves through a visible, forkable path
                from prompt to isolated preview.
              </p>
            </div>
            <span className="hidden font-mono text-xs text-muted-foreground md:block">
              Prompt -&gt; Agent -&gt; Sandbox -&gt; Preview
            </span>
          </div>

          <div className="grid w-full gap-3 md:grid-cols-4">
          {workflow.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur transition-colors hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              {index < workflow.length - 1 && (
                <div className="absolute left-[calc(100%-0.25rem)] top-7 hidden h-px w-4 bg-border md:block" />
              )}
              <div className="mb-4 flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <item.icon className="size-4" />
              </div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl border-t px-1 py-10">
        <ProjectsList />
      </section>
    </div>
  );
};

export default Page;
