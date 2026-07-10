const tools = [
  {
    label: "Simulator · Free core",
    name: "PipeLab",
    description:
      "Step through instruction pipelines, inspect stalls, and explain hazards without installing a local simulator.",
    action: "Open simulator",
  },
  {
    label: "Writing · Local",
    name: "Prompt Shelf",
    description:
      "Save reusable prompt templates with variables, then copy the exact version you need from a clean browser workspace.",
    action: "See prompt shelf",
  },
  {
    label: "Research · Beta",
    name: "CiteGuard",
    description:
      "Check bibliographies for retractions, weak citation chains, and sources that deserve another pass before submission.",
    action: "Analyze sources",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose one job",
    text: "Each utility has a clear boundary, so the interface stays direct.",
  },
  {
    number: "02",
    title: "Work in the browser",
    text: "Use the free surface immediately, without account setup.",
  },
  {
    number: "03",
    title: "Keep control",
    text: "Local-first flows and plain outputs make the data easy to move.",
  },
];

const principles = [
  {
    title: "One task per tool",
    text: "Each product is scoped around a specific workflow, not a vague suite.",
  },
  {
    title: "Try before signup",
    text: "The useful part of every tool is visible before any account decision.",
  },
  {
    title: "Built for practice",
    text: "Interfaces favor scanning, quick correction, and repeated use.",
  },
  {
    title: "Plain claims",
    text: "No inflated metrics, fake logos, or hidden constraints in the pitch.",
  },
];

function Brand() {
  return (
    <a className="inline-flex items-center gap-2.5 font-extrabold" href="#top">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-white">
        L
      </span>
      <span>Lumen Tools</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3.5 text-[0.82rem] font-extrabold uppercase tracking-normal text-moss">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 mx-auto mt-4 flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-6 rounded-[999px] border border-ink/10 bg-canvas/85 px-3.5 py-3 backdrop-blur-lg max-sm:w-[min(100%-20px,1180px)] max-sm:rounded-[22px] max-sm:p-2.5">
        <Brand />
        <nav
          className="flex gap-5 text-[0.93rem] font-semibold text-muted max-md:hidden"
          aria-label="Primary navigation"
        >
          <a className="hover:text-moss" href="#tools">
            Tools
          </a>
          <a className="hover:text-moss" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-moss" href="#principles">
            Principles
          </a>
        </nav>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-ink px-4.5 text-[0.92rem] font-bold text-white max-sm:hidden"
          href="#tools"
        >
          Try a tool
        </a>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100vh-92px)] w-[min(1180px,calc(100%-32px))] grid-cols-[minmax(0,1.03fr)_minmax(320px,0.97fr)] items-center gap-13 py-24 max-lg:grid-cols-1 max-lg:py-18 max-sm:min-h-0 max-sm:w-[min(100%-24px,1180px)] max-sm:gap-8 max-sm:py-14">
          <div>
            <Eyebrow>Students · Makers · Analysts</Eyebrow>
            <h1 className="mb-6 max-w-[760px] text-[clamp(3.4rem,10vw,8.6rem)] font-extrabold leading-[0.9] tracking-normal max-sm:text-[clamp(3rem,18vw,5.2rem)]">
              Small tools for sharp work.
            </h1>
            <p className="max-w-[620px] text-[clamp(1.05rem,2vw,1.25rem)] text-muted">
              Lumen Tools collects fast, browser-native utilities that solve one
              job at a time. No app suite to learn, no account wall, and no
              heavy setup before the work starts.
            </p>
            <div className="my-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-leaf px-5.5 font-bold text-white"
                href="#tools"
              >
                Explore tools
              </a>
              <a
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-line bg-white/70 px-5.5 font-bold"
                href="#workflow"
              >
                See workflow
              </a>
            </div>
            <dl className="grid max-w-[600px] grid-cols-3 gap-3.5 max-sm:grid-cols-1">
              {[
                ["3", "Tools live"],
                ["0", "Accounts needed"],
                ["100%", "Browser-first"],
              ].map(([value, label]) => (
                <div
                  className="rounded-lg border border-line bg-white/60 p-4.5"
                  key={label}
                >
                  <dt className="text-3xl font-extrabold">{value}</dt>
                  <dd className="m-0 text-[0.92rem] text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(241,184,69,0.55),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(61,104,216,0.28),transparent_23%),linear-gradient(145deg,#e7eee4,#ffffff_60%,#d7ece2)] shadow-soft max-sm:min-h-[360px] max-sm:rounded-[22px]"
            aria-hidden="true"
          >
            <div className="absolute inset-x-10 top-18 rounded-[18px] border border-ink/10 bg-white/85 p-5.5 shadow-[0_20px_50px_rgba(23,32,29,0.12)] max-sm:inset-x-4.5 max-sm:top-10">
              <div className="mb-6 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </div>
              {["load notebook-check", "scan citations", "flag stale source"].map(
                (line, index) => (
                  <div
                    className={`mt-2.5 flex min-h-11 items-center rounded-lg px-4 font-bold ${
                      index === 0 ? "bg-ink text-white" : "bg-[#f0f4ef] text-muted"
                    }`}
                    key={line}
                  >
                    {line}
                  </div>
                ),
              )}
              <div className="mt-7 h-3 overflow-hidden rounded-full bg-[#e1e7dd]">
                <span className="block h-full w-[78%] rounded-full bg-gradient-to-r from-leaf to-amber" />
              </div>
            </div>
            <div className="absolute bottom-20 right-7 grid w-36 gap-1 rounded-lg border border-ink/10 bg-white/90 p-4.5 shadow-[0_18px_40px_rgba(23,32,29,0.14)] max-sm:w-32">
              <strong>Latency</strong>
              <span className="text-2xl font-extrabold text-moss">12 ms</span>
            </div>
            <div className="absolute bottom-9 left-8 grid w-36 gap-1 rounded-lg border border-ink/10 bg-white/90 p-4.5 shadow-[0_18px_40px_rgba(23,32,29,0.14)] max-sm:w-32">
              <strong>Checks</strong>
              <span className="text-2xl font-extrabold text-moss">24 passed</span>
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-[min(1180px,calc(100%-32px))] py-22 max-sm:w-[min(100%-24px,1180px)]"
          id="tools"
        >
          <div className="mb-8 grid gap-2">
            <Eyebrow>What&apos;s live</Eyebrow>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,4.4rem)] font-extrabold leading-none tracking-normal">
              Three utilities, three focused jobs.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {tools.map((tool) => (
              <article
                className="flex min-h-[300px] flex-col rounded-lg border border-line bg-white p-6"
                key={tool.name}
              >
                <span className="mb-6.5 self-start rounded-full bg-[#eef5ec] px-2.5 py-1.5 text-[0.78rem] font-extrabold text-moss">
                  {tool.label}
                </span>
                <h3 className="mb-2.5 text-xl font-extrabold leading-tight">
                  {tool.name}
                </h3>
                <p className="text-muted">{tool.description}</p>
                <a className="mt-auto font-extrabold text-moss" href="#book">
                  {tool.action}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto w-[min(1180px,calc(100%-32px))] rounded-[28px] bg-ink px-8 py-22 text-white max-sm:w-[min(100%-24px,1180px)] max-sm:px-5 max-sm:py-8"
          id="workflow"
        >
          <div className="mb-8 grid gap-2">
            <p className="mb-3.5 text-[0.82rem] font-extrabold uppercase tracking-normal text-[#9ce5c8]">
              How it works
            </p>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,4.4rem)] font-extrabold leading-none tracking-normal">
              Open the page. Finish the task.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3.5 max-lg:grid-cols-1">
            {steps.map((step) => (
              <article
                className="min-h-[220px] rounded-lg border border-white/10 bg-white/[0.06] p-6"
                key={step.number}
              >
                <span className="mb-8 block font-extrabold text-amber">
                  {step.number}
                </span>
                <h3 className="mb-2.5 text-xl font-extrabold leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto w-[min(1180px,calc(100%-32px))] py-22 max-sm:w-[min(100%-24px,1180px)]"
          id="principles"
        >
          <div className="mb-8 grid gap-2">
            <Eyebrow>Principles</Eyebrow>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,4.4rem)] font-extrabold leading-none tracking-normal">
              Designed for focused, repeatable work.
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-1">
            {principles.map((principle) => (
              <article
                className="rounded-lg border border-line bg-white p-6"
                key={principle.title}
              >
                <h3 className="mb-2.5 text-xl font-extrabold leading-tight">
                  {principle.title}
                </h3>
                <p className="text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-[0.85fr_1fr] items-center gap-9 border-y border-line px-11 py-11 max-lg:grid-cols-1 max-sm:w-[min(100%-24px,1180px)] max-sm:px-5 max-sm:py-8">
          <div>
            <Eyebrow>Agent-ready</Eyebrow>
            <h2 className="max-w-[760px] text-[clamp(2rem,4vw,4.4rem)] font-extrabold leading-none tracking-normal">
              Structured pages for humans and agents.
            </h2>
          </div>
          <p className="text-muted">
            Lumen Tools can expose Markdown docs, a public agent guide, and a
            tool map so assistants can understand what each utility does before
            they call into it.
          </p>
        </section>

        <section
          className="mx-auto grid w-[min(1180px,calc(100%-32px))] justify-items-center py-22 text-center max-sm:w-[min(100%-24px,1180px)]"
          id="book"
        >
          <h2 className="max-w-[760px] text-[clamp(2rem,4vw,4.4rem)] font-extrabold leading-none tracking-normal">
            Pick a focused tool and get moving.
          </h2>
          <p className="my-7 max-w-[620px] text-lg text-muted">
            Start from the browser, keep the workflow lightweight, and leave
            when the job is done.
          </p>
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-leaf px-5.5 font-bold text-white"
            href="#tools"
          >
            Explore the tools
          </a>
        </section>
      </main>

      <footer className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-start justify-between gap-8 border-t border-line py-8 max-sm:w-[min(100%-24px,1180px)] max-sm:flex-col">
        <div>
          <Brand />
          <p className="mt-3.5 max-w-[430px] text-muted">
            Focused browser utilities for students, makers, and analysts.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-4.5 font-bold text-muted"
          aria-label="Footer navigation"
        >
          <a className="hover:text-moss" href="#tools">
            Tools
          </a>
          <a className="hover:text-moss" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-moss" href="#principles">
            Principles
          </a>
          <a className="hover:text-moss" href="mailto:hello@lumentools.example">
            Contact
          </a>
        </nav>
      </footer>
    </>
  );
}
