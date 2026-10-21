import Link from "next/link";
import { Leaf } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";
import { references } from "@/content/references";

export function Footer() {
  return (
    <footer className="bg-deep-green text-paper">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-serif text-lg">
            <Leaf className="h-5 w-5 text-leaf" aria-hidden="true" strokeWidth={1.75} />
            {siteConfig.name}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
            {siteConfig.subtitle}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-paper/50">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/75 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-paper/50">
            Research & resources
          </p>
          <ul className="mt-4 space-y-2">
            {references.slice(0, 4).map((ref) => (
              <li key={ref.id}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 hover:text-paper"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-paper/50">
            A note on accuracy
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/65">
            Government schemes, subsidies and state-level regulations can change. This site
            summarises publicly available material for general understanding — always verify
            current requirements with the relevant official department before acting. Video
            content, when configured, is credited to its original publisher.
          </p>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. An independent research website.</p>
        <p>Not an official Government of India publication.</p>
      </div>
    </footer>
  );
}
