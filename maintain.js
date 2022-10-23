const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require("fs")

async function browser(url) {
    const browser = await puppeteer.launch();
   
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=joeleeofficial`, {waitUntil: ['networkidle0']});
    await page.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/joeleeofficial'))?.click()`)
   
    const page2 = await browser.newPage();
    await page2.goto(`https://www.google.com/search?q=leecheeyong`, {waitUntil: ['networkidle0']});
    await page2.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/leecheeyong'))?.click()`)
      
    const page3 = await browser.newPage();
    await page3.goto(`https://www.youtube.com/watch?v=U9BtF_oMHQg`, {waitUntil: ['networkidle0']});
    await page3.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    
    const page4 = await browser.newPage();
    await page4.goto(`https://www.youtube.com/shorts/U9BtF_oMHQg`, {waitUntil: 'networkidle0'});
    await page4.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    
    const page5 = await browser.newPage();
    await page5.goto(`https://www.google.com/search?q=joelee+chee+yong+lee`, {waitUntil: ['networkidle0']});
    await page5.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://www.joelee.works' || a.href === 'https://www.joelee.works/'))?.click()`)

    const page6 = await browser.newPage();
    await page6.goto(`https://proxyium.com/proxyrequest`, {waitUntil: ['networkidle0']});
    setTimeout(async () => {
        await page6.waitForSelector("#__cpsUrl");
        await page6.evaluate(`document.querySelector("#__cpsUrl").value = "https://joelee.works"`);
        await page6.evaluate(`document.querySelector("#__cpsButton").click()`);
     //  await page6.evaluate(`document.querySelector("#search_form_input_homepage").value = 'google'; document.querySelector("#search_button_homepage").click()`),
      // await page6.waitForNavigation({waitUntil: 'networkidle2'})
     //  await page6.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://www.google.com/'))?.click()`);
    }, 5000)

    setTimeout(async () => {
    await page6.screenshot({path: './proxy.png', fullPage: true});
    await page5.screenshot({path: './joelee.png', fullPage: true});
    await page4.screenshot({path: './yt-short.png', fullPage: true});
    await page3.screenshot({path: './youtube.png', fullPage: true});
    await page2.screenshot({path: './screenshot1.png', fullPage: true});
    await page.screenshot({path: './screenshot.png', fullPage: true});

    writeFileSync("./output.txt", await page6.content());
    await browser.close();
    }, 10000)
}

browser();
