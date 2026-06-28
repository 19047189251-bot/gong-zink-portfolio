export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectImages = {
  hero: ProjectImage;
  stills?: ProjectImage[];
  storyboard?: ProjectImage[];
  visualDevelopment?: ProjectImage[];
  process?: ProjectImage[];
};

export type Project = {
  slug: string;
  titleZh: string;
  titleEn: string;
  year: string;
  category: string;
  role: string;
  descriptionZh: string;
  coverImage: string;
  coverImageAlt: string;
  images: ProjectImages;
  credits: string[];
  externalVideoUrl?: string;
  videoLabel?: string;
  archiveMode?: boolean;
  useProjectRail?: boolean;
};

// Edit this list to update project names, dates, categories, descriptions, and image paths.
export const projects: Project[] = [
  {
    slug: "night-tag",
    titleZh: "夜游",
    titleEn: "Night Tag",
    year: "2026",
    category: "AI 影像",
    role: "导演 / AIGC / 分镜",
    descriptionZh: "一个关于夜晚城市背面、涂鸦与新老城市痕迹的黑色幽默 AI 影像短片。",
    coverImage: "/images/projects/night%20tag.png",
    coverImageAlt: "Still from Night Tag",
    images: {
      hero: {
        src: "/images/projects/Night%20tag/00.png",
        alt: "Night Tag image 00",
      },
      stills: [
        {
          src: "/images/projects/Night%20tag/01.png",
          alt: "Night Tag image 01",
        },
        {
          src: "/images/projects/Night%20tag/02.png",
          alt: "Night Tag image 02",
        },
        {
          src: "/images/projects/Night%20tag/03.png",
          alt: "Night Tag image 03",
        },
        {
          src: "/images/projects/Night%20tag/04.png",
          alt: "Night Tag image 04",
        },
        {
          src: "/images/projects/Night%20tag/05.png",
          alt: "Night Tag image 05",
        },
        {
          src: "/images/projects/Night%20tag/06.png",
          alt: "Night Tag image 06",
        },
        {
          src: "/images/projects/Night%20tag/07.png",
          alt: "Night Tag image 07",
        },
        {
          src: "/images/projects/Night%20tag/08.png",
          alt: "Night Tag image 08",
        },
        {
          src: "/images/projects/Night%20tag/09.png",
          alt: "Night Tag image 09",
        },
        {
          src: "/images/projects/Night%20tag/10.png",
          alt: "Night Tag image 10",
        },
        {
          src: "/images/projects/Night%20tag/11.png",
          alt: "Night Tag image 11",
        },
        {
          src: "/images/projects/Night%20tag/12.png",
          alt: "Night Tag image 12",
        },
        {
          src: "/images/projects/Night%20tag/13.png",
          alt: "Night Tag image 13",
        },
        {
          src: "/images/projects/Night%20tag/14.png",
          alt: "Night Tag image 14",
        },
        {
          src: "/images/projects/Night%20tag/15.png",
          alt: "Night Tag image 15",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/01.png",
          alt: "Night Tag storyboard 01",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/02.png",
          alt: "Night Tag storyboard 02",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/03.png",
          alt: "Night Tag storyboard 03",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/04.png",
          alt: "Night Tag storyboard 04",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/05.png",
          alt: "Night Tag storyboard 05",
        },
        {
          src: "/images/projects/Night%20tag/storyboard/06.png",
          alt: "Night Tag storyboard 06",
        },
      ],
    },
    credits: ["Direction — Zink", "Animation — Zink", "Sound — Placeholder Name"],
    externalVideoUrl: "https://4277852.ma3you.cn/html/content_show/index.html?v=20250213&article_id=AW8223K#/",
    videoLabel: "观看完整视频",
    archiveMode: true,
    useProjectRail: true,
  },
  {
    slug: "shadow",
    titleZh: "墨影",
    titleEn: "Shadow",
    year: "2026",
    category: "二维动画",
    role: "分镜 原画",
    descriptionZh: "“我”在压力幻化之影的不断追逐压迫下寻找金鱼（希望化身））以获新生",
    coverImage: "/images/projects/shadow.jpg",
    coverImageAlt: "Shadow cover image",
    images: {
      hero: {
        src: "/images/projects/shadow/01-color/01.png",
        alt: "Shadow - 01 color 01",
      },
      stills: [
        {
          src: "/images/projects/shadow/01-color/02.jpg",
          alt: "Shadow - 01 color 02",
        },
        {
          src: "/images/projects/shadow/01-color/03.jpg",
          alt: "Shadow - 01 color 03",
        },
        {
          src: "/images/projects/shadow/01-color/04.jpg",
          alt: "Shadow - 01 color 04",
        },
        {
          src: "/images/projects/shadow/01-color/05.jpg",
          alt: "Shadow - 01 color 05",
        },
        {
          src: "/images/projects/shadow/01-color/06.jpg",
          alt: "Shadow - 01 color 06",
        },
        {
          src: "/images/projects/shadow/01-color/07.jpg",
          alt: "Shadow - 01 color 07",
        },
        {
          src: "/images/projects/shadow/01-color/08.jpg",
          alt: "Shadow - 01 color 08",
        },
        {
          src: "/images/projects/shadow/01-color/09.jpg",
          alt: "Shadow - 01 color 09",
        },
        {
          src: "/images/projects/shadow/01-color/10.jpg",
          alt: "Shadow - 01 color 10",
        },
        {
          src: "/images/projects/shadow/01-color/11.jpg",
          alt: "Shadow - 01 color 11",
        },
        {
          src: "/images/projects/shadow/01-color/12.jpg",
          alt: "Shadow - 01 color 12",
        },
        {
          src: "/images/projects/shadow/02-storyboard/00.jpg",
          alt: "Shadow - 02 storyboard 00",
        },
        {
          src: "/images/projects/shadow/02-storyboard/01.jpg",
          alt: "Shadow - 02 storyboard 01",
        },
        {
          src: "/images/projects/shadow/02-storyboard/02.jpg",
          alt: "Shadow - 02 storyboard 02",
        },
        {
          src: "/images/projects/shadow/02-storyboard/03.jpg",
          alt: "Shadow - 02 storyboard 03",
        },
        {
          src: "/images/projects/shadow/02-storyboard/04.jpg",
          alt: "Shadow - 02 storyboard 04",
        },
        {
          src: "/images/projects/shadow/02-storyboard/05.jpg",
          alt: "Shadow - 02 storyboard 05",
        },
        {
          src: "/images/projects/shadow/02-storyboard/06.jpg",
          alt: "Shadow - 02 storyboard 06",
        },
        {
          src: "/images/projects/shadow/02-storyboard/07.jpg",
          alt: "Shadow - 02 storyboard 07",
        },
        {
          src: "/images/projects/shadow/02-storyboard/08.jpg",
          alt: "Shadow - 02 storyboard 08",
        },
        {
          src: "/images/projects/shadow/02-storyboard/09.jpg",
          alt: "Shadow - 02 storyboard 09",
        },
        {
          src: "/images/projects/shadow/02-storyboard/10.jpg",
          alt: "Shadow - 02 storyboard 10",
        },
        {
          src: "/images/projects/shadow/02-storyboard/11.jpg",
          alt: "Shadow - 02 storyboard 11",
        },
        {
          src: "/images/projects/shadow/02-storyboard/12.jpg",
          alt: "Shadow - 02 storyboard 12",
        },
        {
          src: "/images/projects/shadow/02-storyboard/13.jpg",
          alt: "Shadow - 02 storyboard 13",
        },
        {
          src: "/images/projects/shadow/02-storyboard/14.jpg",
          alt: "Shadow - 02 storyboard 14",
        },
      ],
    },
    externalVideoUrl: "https://4277852.ma3you.cn/html/content_show/index.html?v=20250213&article_id=AVLd64D#/",
    videoLabel: "观看完整视频",
    credits: ["Direction — Zink", "Storyboard — Zink", "Key Animation — Zink"],
    archiveMode: true,
    useProjectRail: true,
  },
  {
    slug: "temple-in-the-snow",
    titleZh: "风雪山神庙",
    titleEn: "Temple In The Snow",
    year: "2025",
    category: "二维动画",
    role: "动画短片 · 分镜 / 视觉设计",
    descriptionZh: "一组围绕雪夜、寺庙空间与人物行动展开的分镜 / 视觉设计项目。",
    coverImage: "/images/projects/Temple in the snow.jpg",
    coverImageAlt: "Temple In The Snow cover image",
    images: {
      hero: {
        src: "/images/projects/temple-in-the-snow/01.jpg",
        alt: "Temple In The Snow image 01",
      },
      stills: [
        {
          src: "/images/projects/temple-in-the-snow/02.jpg",
          alt: "Temple In The Snow image 02",
        },
        {
          src: "/images/projects/temple-in-the-snow/03.jpg",
          alt: "Temple In The Snow image 03",
        },
        {
          src: "/images/projects/temple-in-the-snow/04.jpg",
          alt: "Temple In The Snow image 04",
        },
        {
          src: "/images/projects/temple-in-the-snow/05.jpg",
          alt: "Temple In The Snow image 05",
        },
        {
          src: "/images/projects/temple-in-the-snow/06.png",
          alt: "Temple In The Snow image 06",
        },
        {
          src: "/images/projects/temple-in-the-snow/07.jpg",
          alt: "Temple In The Snow image 07",
        },
        {
          src: "/images/projects/temple-in-the-snow/08.jpg",
          alt: "Temple In The Snow image 08",
        },
        {
          src: "/images/projects/temple-in-the-snow/09.png",
          alt: "Temple In The Snow image 09",
        },
      ],
    },
    externalVideoUrl: "https://4277852.ma3you.cn/html/content_show/index.html?v=20250213&article_id=A01J1am#/",
    videoLabel: "观看完整视频",
    credits: ["Storyboard — Zink", "Visual Design — Zink"],
    archiveMode: true,
    useProjectRail: true,
  },
  {
    slug: "misc",
    titleZh: "其他",
    titleEn: "Miscellaneous",
    year: "2024—2026",
    category: "视觉档案",
    role: "零碎项目 / 图像实验",
    descriptionZh: "一些零散的项目图片、视觉实验与未归入独立项目的作品档案。",
    coverImage: "/images/projects/misc/01-fivesixseven/01.jpg",
    coverImageAlt: "Miscellaneous - 01 fivesixseven 01",
    images: {
      hero: {
        src: "/images/projects/misc/01-fivesixseven/01.jpg",
        alt: "Miscellaneous - 01 fivesixseven 01",
      },
      stills: [
        {
          src: "/images/projects/misc/01-fivesixseven/02.jpg",
          alt: "Miscellaneous - 01 fivesixseven 02",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/03.jpg",
          alt: "Miscellaneous - 01 fivesixseven 03",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/04.jpg",
          alt: "Miscellaneous - 01 fivesixseven 04",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/05.jpg",
          alt: "Miscellaneous - 01 fivesixseven 05",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/06.jpg",
          alt: "Miscellaneous - 01 fivesixseven 06",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/07.jpg",
          alt: "Miscellaneous - 01 fivesixseven 07",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/08.jpg",
          alt: "Miscellaneous - 01 fivesixseven 08",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/09.jpg",
          alt: "Miscellaneous - 01 fivesixseven 09",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/10.jpg",
          alt: "Miscellaneous - 01 fivesixseven 10",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/11.png",
          alt: "Miscellaneous - 01 fivesixseven 11",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/12.png",
          alt: "Miscellaneous - 01 fivesixseven 12",
        },
        {
          src: "/images/projects/misc/01-fivesixseven/13.png",
          alt: "Miscellaneous - 01 fivesixseven 13",
        },
        {
          src: "/images/projects/misc/02-bunbun/01.png",
          alt: "Miscellaneous - 02 bunbun 01",
        },
        {
          src: "/images/projects/misc/02-bunbun/02.png",
          alt: "Miscellaneous - 02 bunbun 02",
        },
        {
          src: "/images/projects/misc/02-bunbun/03.jpg",
          alt: "Miscellaneous - 02 bunbun 03",
        },
      ],
    },
    externalVideoUrl: "https://4277852.ma3you.cn/html/content_show/index.html?v=20250213&article_id=b1a5oKP#/",
    videoLabel: "观看完整视频",
    credits: ["Archive — Zink"],
    archiveMode: true,
    useProjectRail: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
