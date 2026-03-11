export default function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-3 text-[13px]">
        <p className="text-[var(--color-text-muted)]">Currently —</p>
        <div>
          <p>
            <span className="text-[var(--color-white)]">Risk Engineer</span>
            <span className="text-[var(--color-text-muted)]"> — Goldman Sachs, Risk Analytics & Reporting</span>
          </p>
          <p className="text-[var(--color-text-muted)] text-[12px]">Writing Python and SQL so that $750B+ in daily transactions doesn&apos;t quietly misbehave. Built forecasting models that improved funding accuracy by 25% — basically teaching math to predict when money gets weird. Also the person Treasury blames when their Tableau dashboards break.</p>
        </div>
      </div>

      <div className="space-y-3 text-[13px]">
        <p className="text-[var(--color-text-muted)]">Previously —</p>
        <div className="space-y-3">
          <div>
            <p>
              <span className="text-[var(--color-white)]">Summer Analyst</span>
              <span className="text-[var(--color-text-muted)]"> — Goldman Sachs, Risk Analytics</span>
            </p>
            <p className="text-[var(--color-text-muted)] text-[12px]">Built a regulatory lookup tool so 300+ people could stop Ctrl+F-ing through compliance docs</p>
          </div>
          <div>
            <p>
              <span className="text-[var(--color-white)]">Data Science Intern</span>
              <span className="text-[var(--color-text-muted)]"> — Veritas Technologies</span>
            </p>
            <p className="text-[var(--color-text-muted)] text-[12px]">Predicted when servers would get tired before they actually did</p>
          </div>
          <div>
            <p>
              <span className="text-[var(--color-white)]">Data Analyst Intern</span>
              <span className="text-[var(--color-text-muted)]"> — Persistent Systems, Fraud Analytics</span>
            </p>
            <p className="text-[var(--color-text-muted)] text-[12px]">Taught a graph database to sniff out fraudsters — it got pretty good at it (88% good)</p>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-[13px]">
        <p className="text-[var(--color-text-muted)]">Education —</p>
        <p>
          <span className="text-[var(--color-white)]">Masters&apos; of Management Information Systems</span>
          <br />
          <span className="text-[var(--color-text-muted)]">@ Eller College of Management, University of Arizona</span>
        </p>
        <p className="pt-1">
          <span className="text-[var(--color-white)]">Bachelors&apos; of Technology, Information Technology</span>
          <br />
          <span className="text-[var(--color-text-muted)]">@ Pune Institute of Computer Technology</span>
        </p>
      </div>

      <div className="pt-2">
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-[13px] text-[var(--color-accent)] hover:text-[var(--color-white)] transition-colors"
        >
          View resume &rarr;
        </a>
      </div>
    </div>
  );
}
