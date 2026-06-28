import Link from "next/link";
import { LayoutFrame } from "./components/layout-frame";
import { ProjectImage } from "./components/project-image";
import { projects, type Project } from "./data/projects";

const visualArchiveOrder = [
  "night-tag",
  "shadow",
  "temple-in-the-snow",
  "misc",
];

const visualArchiveProjects = visualArchiveOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-main-layout page-shell">
        <LayoutFrame mode="page" className="home-page-frame">
          <div className="home-frame-grid">
            <section className="home-directory" aria-labelledby="artist-name">
              <div className="directory-identity">
                <h1 id="artist-name">江子健</h1>
                <p>动画人</p>
                <p>AIGC 创作者 / 分镜师</p>
                <p className="directory-edition">作品选集 · 2024—2026</p>
              </div>
            </section>

            <section className="visual-archive" aria-labelledby="visual-archive-title">
              <header className="visual-archive-heading">
                <h2 id="visual-archive-title">视觉档案</h2>
              </header>
              <div className="thumbnail-grid">
                {visualArchiveProjects.map((project, index) => (
                  <article className="thumbnail-project" key={project.slug}>
                    <Link href={`/work/${project.slug}`}>
                      <ProjectImage
                  src={project.coverImage}
                  alt={project.coverImageAlt}
                        preload={index === 0}
                      />
                      <div className="thumbnail-caption">
                        <h3>
                          <span>{project.titleZh}</span>
                          <small>{project.titleEn}</small>
                        </h3>
                        <p>{project.category} · {project.year}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </LayoutFrame>
      </div>
    </main>
  );
}
