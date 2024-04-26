export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Mixtura de ideas",
  /** your name */
  author: "Eduardo Palomino",
  /** website description */
  desc: "Mixtura de Ideas es un blog donde exploro y comparto una amplia gama de temas, desde reflexiones hasta innovaciones tecnológicas con un efoque personal.",
  /** your deployed domain */
  website: "https://blog.edopalomino.com/",
  /** your locale */
  locale: "es-mx",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "mastodon",
      href: "https://superhappy.social/@edopalomino",
    }
  ],
  /** your header info */
  header: {
    twitter: "",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    disqus: {
      shortname: "",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

