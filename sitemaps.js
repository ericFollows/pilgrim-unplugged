sitemaps.add('/sitemap.xml', function() {
  return [{
    page: '/',
    changefreq: 'weekly'
  }, {
    page: '/blog',
    changefreq: 'weekly'
  }, {
    page: '/gallery',
    changefreq: 'weekly'
  }, {
    page: '/about',
    changefreq: 'weekly'
  }, {
    page: '/contact',
    changefreq: 'weekly'
  }, {
    page: '/signin',
    changefreq: 'weekly'
  },
  // https://support.google.com/webmasters/answer/2620865?hl=en
    { page: 'lang/english', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'en', href: '/lang/english' }
    ]}
  ];
});