import type { Metadata } from "next";
import Image from "next/image";
import { LayoutFrame } from "../components/layout-frame";

export const metadata: Metadata = {
  title: "江子健 / Zink Gong",
};

const portfolioPages = [
  {
    src: "/images/projects/个人简历/portfolio-page-01.jpg",
    alt: "江子健个人简历第 01 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-02.jpg",
    alt: "江子健个人简历第 02 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-03.jpg",
    alt: "江子健个人简历第 03 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-04.jpg",
    alt: "江子健个人简历第 04 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-05.jpg",
    alt: "江子健个人简历第 05 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-06.jpg",
    alt: "江子健个人简历第 06 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-07.jpg",
    alt: "江子健个人简历第 07 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-08.jpg",
    alt: "江子健个人简历第 08 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-09.jpg",
    alt: "江子健个人简历第 09 页",
  },
  {
    src: "/images/projects/个人简历/portfolio-page-10.jpg",
    alt: "江子健个人简历第 10 页",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page page-shell">
      <LayoutFrame mode="page" className="about-page-frame">
        <div className="about-frame-content">
          <header className="about-heading">
            <h1>江子健</h1>
            <p>Zink Gong</p>
          </header>

          <div className="about-portfolio-pages">
            {portfolioPages.map((page, index) => (
              <figure className="about-portfolio-page" key={page.src}>
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={1100}
                  height={1556}
                  sizes="(max-width: 900px) calc(100vw - 72px), 1100px"
                  priority={index === 0}
                />
              </figure>
            ))}
          </div>
        </div>
      </LayoutFrame>
    </main>
  );
}
