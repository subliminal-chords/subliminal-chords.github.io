import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://subliminal-chords.github.io/",
  author: "Sagnik Modak",
  desc: "An educational and informative original content library",
  title: "Subliminal Chords",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 32,
  height: 32,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://x.com/subchords",
    linkTitle: `${SITE.title} on X`,
    active: true
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@subchords",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/mind-matrix/subliminal-chords",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://vmst.io/@mindmatrix",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mail.mind.matrix@gmail.com",
    linkTitle: `Send an email to ${SITE.title} Author`,
    active: true,
  }
];
