import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Ken Abraham",
  author: "Ken Abraham",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    github: "https://github.com/redpangilinan",
    facebook: "https://facebook.com/redpangilinan15",
    twitter: "https://twitter.com/Kenmabraham",
    linkedin: "https://www.linkedin.com/in/kenabrahamm/",
  },
}
