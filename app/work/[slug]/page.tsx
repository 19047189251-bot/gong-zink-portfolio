import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LayoutFrame } from "../../components/layout-frame";
import { ProjectCarousel } from "../../components/project-carousel";
import { getProject, projects } from "../../data/projects";

const projectSections = [
  { title: "剧照 / 关键帧", mediaKey: "stills" },
  { title: "分镜 / 动态预演", mediaKey: "storyboard" },
  { title: "视觉开发", mediaKey: "visualDevelopment" },
  { title: "过程", mediaKey: "process" },
] as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const storyboardStartFragments: Record<string, string[]> = {
  "night-tag": [
    "/images/projects/Night%20tag/storyboard/",
    "/images/projects/Night tag/storyboard/",
  ],
  shadow: ["/images/projects/shadow/02-storyboard/"],
};

export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  return { title: project?.titleEn ?? "Project" };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const project = getProject(slug);

  if (!project) notFound();

  const heroImage = project.images.hero;
  const category = project.category;
  const role = project.role === project.category ? "" : project.role;
  const summary = project.descriptionZh;
  const displayTitle = project.titleZh;
  const isImageArchive = Boolean(project.archiveMode);
  const usesProjectRail = Boolean(project.useProjectRail);
  const carouselImages = [
    { ...heroImage, label: "Hero" },
    ...projectSections.flatMap((section) =>
      (project.images[section.mediaKey] ?? []).map((image) => ({
        ...image,
        label: section.title,
      })),
    ),
  ];
  const startParam = Array.isArray(searchParams.start)
    ? searchParams.start[0]
    : searchParams.start;
  const storyboardFragments = storyboardStartFragments[project.slug] ?? [];
  const storyboardStartIndex =
    startParam === "storyboard"
      ? carouselImages.findIndex((image) =>
          storyboardFragments.some((fragment) => image.src.includes(fragment)),
        )
      : -1;
  const initialCarouselIndex = storyboardStartIndex >= 0 ? storyboardStartIndex : 0;

  const projectHeader = (
    <>
      {!usesProjectRail && (
        <nav className="project-local-nav" aria-label="项目导航">
          <Link href="/">← 返回首页</Link>
          <span>项目档案</span>
        </nav>
      )}

      <header className="project-overview project-hero-header">
        <div className="project-title-row">
          <div className="project-heading project-title-copy">
            <h1>{displayTitle}</h1>
            <p>{project.titleEn}</p>
            {usesProjectRail && (
              <p className="project-description">{summary}</p>
            )}
          </div>
          <dl className="project-facts project-meta">
            <div>
              <dt>年份</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>类别 / 角色</dt>
              <dd>
                {category}
                {role && (
                  <>
                    <br />
                    {role}
                  </>
                )}
              </dd>
            </div>
            {project.externalVideoUrl && (
              <div className="project-video-link-block">
                <dt className="project-video-label">VIDEO</dt>
                <dd>
                  <a
                    className="project-external-video-link"
                    href={project.externalVideoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.videoLabel ?? "观看完整视频"} →
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
        {!usesProjectRail && (
          <p className="project-description">{summary}</p>
        )}
      </header>
    </>
  );

  const projectGallery = (
    <div className="project-gallery-rail">
      <ProjectCarousel images={carouselImages} initialIndex={initialCarouselIndex} />
    </div>
  );

  const projectContent = (
    <>
      {projectHeader}
      {projectGallery}
    </>
  );

  return (
    <main
      className={`project-detail project-detail-page page-shell project-detail--${project.slug}${
        isImageArchive ? " project-detail--image-archive" : ""
      }${usesProjectRail ? " project-detail--rail" : ""}`}
    >
      {usesProjectRail ? (
        <LayoutFrame mode="page" className="project-page-frame">
          <div className="project-frame-content">
            <div className="project-content-rail">{projectHeader}</div>
            {projectGallery}
          </div>
        </LayoutFrame>
      ) : (
        projectContent
      )}
    </main>
  );
}
