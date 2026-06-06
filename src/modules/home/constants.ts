export const PROJECT_TEMPLATES = [
  {
    title: "SaaS dashboard",
    prompt:
      "Build a polished SaaS dashboard with a sidebar, KPI rows, a timeline, filters, and a responsive data table. Use local mock data and meaningful selected states.",
  },
  {
    title: "Issue triage tool",
    prompt:
      "Create an open-source issue triage tool with priority filters, maintainer notes, status changes, and a compact activity feed using local state.",
  },
  {
    title: "Release planner",
    prompt:
      "Build a release planning board with milestones, tasks, owners, risk flags, and a previewable release note summary. Keep the layout dense and professional.",
  },
  {
    title: "Docs assistant",
    prompt:
      "Build a documentation assistant interface with source files, suggested edits, diff previews, and accept or reject controls using local state.",
  },
  {
    title: "Sandbox monitor",
    prompt:
      "Build a sandbox run monitor with command logs, generated files, health status, and a live preview frame using mock data.",
  },
  {
    title: "Maintainer CRM",
    prompt:
      "Build a maintainer CRM for contributors with profile cards, contribution history, labels, and outreach tasks using local state.",
  },
  {
    title: "Test report",
    prompt:
      "Build a test report viewer with suite filters, failing cases, stack traces, run metadata, and a clear empty state.",
  },
  {
    title: "Agent console",
    prompt:
      "Build an agent console with tool calls, memory summary, generated artifacts, retry controls, and a compact transcript. Use local state.",
  },
] as const;
