/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.arshchildtherapy.com',
  generateRobotsTxt: true,
  changefreq: 'daily', // Encourage daily crawling
  priority: 0.9,       // Higher priority for most pages
  sitemapSize: 7000,   // Default is 5000; adjusted if needed
  generateIndexSitemap: true,
  exclude: ['/admin', '/private'], // Add any pages you want to hide
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // You can disallow specific routes here if needed
      },
    ],
    additionalSitemaps: [
      'https://www.arshchildtherapy.com/sitemap.xml',
    ],
  },
};
