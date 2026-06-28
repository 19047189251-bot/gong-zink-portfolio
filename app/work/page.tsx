import type { Metadata } from "next";
import Link from "next/link";
import { ProjectImage } from "../components/project-image";
import { projects } from "../data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="work-page page-shell">
      <header className="page-title">
        <p className="eyebrow">Archive / 2024—2026</p>
        <h1>Selected work</h1>
      </header>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <Link href={`/work/${project.slug}`}>
              <ProjectImage src={project.coverImage} alt={project.coverImageAlt} preload={index === 0} />
              <div className="work-caption">
                <div>
                  <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{project.titleEn}</h2>
                </div>
                <div className="work-meta">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
