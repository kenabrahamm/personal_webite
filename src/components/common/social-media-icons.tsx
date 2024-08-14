import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site"

export function SocialMediaIcons() {
  return (
    <div className="flex mt-6">
   
      <a
        target="_blank"
        href={siteConfig.links.twitter}
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.linkedin}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}