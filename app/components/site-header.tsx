import Link from "next/link";

const archiveGroups = [
  {
    label: "AI 影像",
    links: [{ title: "Night Tag", href: "/work/night-tag" }],
  },
  {
    label: "动画",
    links: [
      { title: "墨影 / Shadow", href: "/work/shadow" },
      { title: "风雪山神庙 / Temple In The Snow", href: "/work/temple-in-the-snow" },
      { title: "其他 / Miscellaneous", href: "/work/misc" },
    ],
  },
  {
    label: "分镜",
    links: [
      { title: "夜游", href: "/work/night-tag?start=storyboard" },
      { title: "墨影", href: "/work/shadow?start=storyboard" },
      { title: "其他", href: "/work/misc" },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="site-name" href="/" aria-label="Zink 首页">
        ZINK
      </Link>

      <nav className="site-nav" aria-label="主导航">
        <Link href="/about">个人简历</Link>

        {archiveGroups.map((group) => (
          <div className="category-menu-item" key={group.label}>
            <button className="category-menu-label" type="button">
              {group.label}
            </button>
            <ul className="category-dropdown">
              {group.links.map((item) => (
                <li key={`${group.label}-${item.title}`}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link href="/work">作品</Link>
        <a href="mailto:hello@example.com">联系</a>
      </nav>
    </header>
  );
}
