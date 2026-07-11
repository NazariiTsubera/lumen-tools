import OptInForm from "./OptInForm";

const thesis = [
  {
    label: "The problem",
    title: "Suites are heavy",
    body: "Most jobs don't need a platform, an onboarding flow, and a dashboard. They need one screen that does the thing and gets out of the way.",
  },
  {
    label: "The approach",
    title: "One tool, one job",
    body: "Every Lumen tool is built around a single repeatable task with obvious inputs and portable outputs. No account wall between you and the result.",
  },
  {
    label: "The payoff",
    title: "Faster than opening an app",
    body: "Browser-native, local-first where it counts. Open the exact surface, run the job, leave with a clean artifact in under a minute.",
  },
];

const steps = [
  {
    index: "01",
    title: "Open the exact tool",
    body: "No suite navigation, no generic dashboard. You land on the useful screen.",
  },
  {
    index: "02",
    title: "Run the job in-browser",
    body: "Designed around one task with obvious inputs and immediate feedback.",
  },
  {
    index: "03",
    title: "Leave with an artifact",
    body: "Copy, save locally, or hand the output to another workflow. No hidden lock-in.",
  },
];

const metrics = [
  ["3", "focused tools at launch"],
  ["0", "account walls"],
  ["< 30s", "to first result"],
];

function Crosshair() {
  return (
    <span className="crosshair" aria-hidden="true">
      <span className="crosshairLine crosshairLine--v" />
      <span className="crosshairLine crosshairLine--h" />
    </span>
  );
}

function Divider({ tone }: { tone: "dark" | "light" }) {
  return (
    <div className={`divider divider--${tone}`} aria-hidden="true">
      <div className="dividerInner">
        <Crosshair />
        <span className="dividerRule" />
        <Crosshair />
        <span className="dividerRule" />
        <Crosshair />
      </div>
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Lumen Tools home">
      <span className="brandMark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="brandName">Lumen Tools</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="page" id="top">
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <Brand />
          <nav className="navLinks" aria-label="Primary">
            <a href="#thesis">Why</a>
            <a href="#workflow">How</a>
            <a href="#proof">Proof</a>
          </nav>
          <a className="pillButton pillButton--ghost" href="#access">
            Get early access
          </a>
        </div>
      </header>

      <main>
        {/* HERO — dark */}
        <section className="section section--dark heroSection">
          <div className="frame">
            <div className="heroInner">
              <p className="eyebrow">Browser utilities · early access</p>
              <h1 className="displayHeading">
                Small tools that feel like an unfair advantage.
              </h1>
              <p className="lede">
                Lumen Tools turns specific, annoying workflows into fast browser
                surfaces. Simulate, check, organize, and ship the result — no
                heavyweight app, no account wall.
              </p>
              <div className="heroForm" id="access">
                <OptInForm tone="dark" />
              </div>
            </div>
          </div>
        </section>

        <Divider tone="dark" />

        {/* THESIS — dark */}
        <section className="section section--dark" id="thesis">
          <div className="frame framePadded">
            <div className="sectionHead">
              <p className="eyebrow">Our thesis</p>
              <h2 className="sectionHeading">
                Focused beats impressive.
              </h2>
            </div>
            <div className="cardGrid cardGrid--3">
              {thesis.map((item) => (
                <article className="card card--dark" key={item.title}>
                  <p className="cardLabel">{item.label}</p>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardBody">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Divider tone="dark" />

        {/* HOW IT WORKS — light paper */}
        <section className="section section--light" id="workflow">
          <div className="frame framePadded">
            <div className="sectionHead">
              <p className="eyebrow eyebrow--muted">How it works</p>
              <h2 className="sectionHeading sectionHeading--ink">
                Landing page to useful result in one minute.
              </h2>
            </div>
            <div className="stepList">
              {steps.map((step) => (
                <article className="step" key={step.index}>
                  <span className="stepIndex">{step.index}</span>
                  <div>
                    <h3 className="stepTitle">{step.title}</h3>
                    <p className="stepBody">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Divider tone="dark" />

        {/* PROOF — dark */}
        <section className="section section--dark" id="proof">
          <div className="frame framePadded">
            <div className="sectionHead sectionHead--center">
              <p className="eyebrow">Why it converts</p>
              <h2 className="sectionHeading">Specific, visible, honest.</h2>
            </div>
            <dl className="metricGrid">
              {metrics.map(([value, label]) => (
                <div className="metric" key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Divider tone="dark" />

        {/* CTA — dark */}
        <section className="section section--dark ctaSection">
          <div className="frame framePadded">
            <div className="ctaInner">
              <p className="eyebrow">Start lightweight</p>
              <h2 className="sectionHeading">
                Be first through the door.
              </h2>
              <p className="lede lede--center">
                Join the early access list. We&apos;ll send one note when the
                first tools open — nothing else.
              </p>
              <div className="ctaForm">
                <OptInForm tone="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter section--dark">
        <div className="frame framePadded siteFooterInner">
          <Brand />
          <nav aria-label="Footer">
            <a href="#thesis">Why</a>
            <a href="#workflow">How</a>
            <a href="#proof">Proof</a>
            <a href="mailto:hello@lumentools.example">Contact</a>
          </nav>
          <p className="footerMeta">© 2026 Lumen Tools</p>
        </div>
      </footer>
    </div>
  );
}
