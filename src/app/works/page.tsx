const projects = [
  {
    title: "Stock Trader Agent",
    description:
      "Autonomous trading agent that analyzes market signals, executes trades, and manages portfolio risk using AI-driven decision making.",
    tags: ["Python", "AI Agents", "Finance"],
    private: true,
  },
  {
    title: "AI Fraud Intelligence Copilot",
    description:
      "LLM-assisted transaction risk classification system using structured prompts and contextual metadata. Hybrid rule-based + LLM framework improved fraud signal precision by 18% over baseline heuristics. Deployed via FastAPI with SQL-backed ingestion for real-time scoring.",
    tags: ["Python", "OpenAI", "SQL", "FastAPI"],
    github: "https://github.com/pranithcrk/fraud-copilot",
  },
  {
    title: "Fraud Early Warning System",
    description:
      "Risk scoring pipeline to detect friendly fraud in subscription payments by profiling dispute behavior. XGBoost classifier with feature engineering on transaction history, served via FastAPI endpoint with analyst review dashboard and risk-tier badges. Reduced simulated chargeback exposure by 23%.",
    tags: ["Python", "XGBoost", "FastAPI", "Pandas"],
  },
  {
    title: "Customer Segmentation Engine",
    description:
      "End-to-end customer segmentation initiative using K-Means clustering on behavioral data. Identified 5 distinct segments with 95% accuracy, guiding targeted marketing strategies. Built with Python & SQL for data processing, Tableau for visualization.",
    tags: ["Python", "Scikit-Learn", "Tableau", "SQL"],
    github: "https://github.com/pranithcrk/GESTSUC",
  },
  {
    title: "Graph-based Fraud Detection",
    description:
      "Engineered graph-based analytical models on large-scale transactional data at Persistent Systems. Applied Node2Vec & FastRP embeddings to identify suspicious network behavior, improving fraud classification accuracy by 88%.",
    tags: ["Python", "Neo4j", "Node2Vec", "Graph ML"],
  },
  {
    title: "FlipBook Scraper & Viz",
    description:
      "Web scraping pipeline for book data extraction with automated data cleaning and Tableau visualizations for trend analysis.",
    tags: ["Python", "BeautifulSoup", "Tableau"],
    github: "https://github.com/pranithcrk/FlipBookScrapper",
  },
  {
    title: "Air Quality Analysis",
    description:
      "Statistical analysis and visualization of air quality data, exploring temporal patterns and environmental correlations.",
    tags: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/pranithcrk/AirQualityAnalysis",
  },
];

export default function Works() {
  return (
    <div className="space-y-0">
      <p className="text-[var(--color-text-muted)] text-[13px] mb-8">
        Things I&apos;ve built — at work, in school, and on weekends.
      </p>

      {projects.map((project, i) => (
        <article
          key={project.title}
          className="py-5 group"
          style={{
            borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <h3 className="text-[14px] font-medium text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              {"private" in project && project.private && (
                <span className="text-[10px] text-[var(--color-text-muted)] border border-[var(--color-border)] px-1.5 py-0.5 rounded">
                  private
                </span>
              )}
              {"github" in project && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label="Source"
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wide uppercase text-[var(--color-text-muted)] bg-[var(--color-bg-card)] px-2 py-[2px] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
