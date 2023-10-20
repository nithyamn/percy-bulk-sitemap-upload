mkdir -p tmp_snapshot
export PERCY_TOKEN=PERCY_TOKEN_1
export PERCY_BRANCH=main
node percySitemapSnapshot.js link-to-sitemap.xml

export PERCY_TOKEN=PERCY_TOKEN_2
export PERCY_BRANCH=main
node percySitemapSnapshot.js link-to-sitemap.xml

export PERCY_TOKEN=PERCY_TOKEN_3
export PERCY_BRANCH=main
node percySitemapSnapshot.js link-to-sitemap.xml

rm -rf tmp_snapshot