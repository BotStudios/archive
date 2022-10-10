const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require("fs")

async function browser(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)

    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
  
  return page.content();
}

const data = browser("https://joelee.works");
writeFileSync("/output.txt", data);
console.log(data);
