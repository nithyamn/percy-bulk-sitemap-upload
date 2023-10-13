const fetch = require('node-fetch');
const yaml = require('js-yaml');
const fs = require('fs/promises');
const {execSync} = require('child_process');

const sitemapUrl = process.argv[2];

const username = "username";
const password = "password";

async function parseSitemap(){
  //fetch the sitemap with authentication

  let response = await fetch(sitemapUrl, {
    headers: { 
        authorization:`Basic ${Buffer.from(username + ":"+password).toString('base64')}`
     }
  });

  // parse XML content into a list of URLs  
  let content = await response.text();
  let urls = content.match(/(?<=<loc>)(.*)(?=<\/loc>)/ig) ?? [];

  // filter out duplicate URLs or other URLs
  urls = urls.filter((url, i) => {
    let match = urls.indexOf(url.replace(/\/$/, ''));
    return match === -1 || match === i;
  });
 
  // write to file
  let newContent = urls.map(url => ({name: url, url: url, execute: ``}));
  //document.querySelector('.action-links .close').click()
  await fs.writeFile(`./tmp_snapshot/${process.env.PERCY_TOKEN}-snapshots.tmp.yml`, yaml.dump(newContent));
}

parseSitemap().then(() => {
  execSync(`npx percy snapshot ./tmp_snapshot/${process.env.PERCY_TOKEN}-snapshots.tmp.yml`, {stdio: 'inherit'})
  console.log('done')
})
