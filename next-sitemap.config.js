/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cvai.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
