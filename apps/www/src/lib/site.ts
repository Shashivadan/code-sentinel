export const siteConfig = {
  name: "Code Sentinels",
  description:
    "AI code reviewer that helps developers improve their code quality and efficiency.",
  url:
    process.env.NODE_ENV === "production"
      ? "https://codesentinals.lab-x.xyz"
      : "http://localhost:3000",
  ogImage:
    process.env.NODE_ENV === "production"
      ? "https://codesentinals.lab-x.xyz/og.jpg"
      : "http://localhost:3000/og.jpg",
  links: {
    twitter: "https://twitter.com/shashivadan",
    github: "https://github.com/shashivadan",
  },
};
