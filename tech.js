import puppeteer from 'puppeteer';
//const url = "https://economictimes.indiatimes.com/tech/web-stories"
export const tts = async ()=>{
    const browser = await puppeteer.launch()
   
    const page = await browser.newPage()
    await page.goto("https://economictimes.indiatimes.com/tech/startups", {waitUntil: 'load', timeout: 0});
    const text = await page.evaluate(()=>
    Array.from(document.body.querySelectorAll("#pageContent .story-box.clearfix"),(e)=>({
        title: e.querySelector('.desc p').innerText,
        desc:  e.querySelector('.desc h4').innerText,
        link:  e.querySelector('.desc h4 a').href,
        imgLink: e.querySelector('.image a img').getAttribute('src'),
    })))
    

    const page2 = await browser.newPage()
    await page2.goto("https://indianexpress.com/section/technology/techook/", {waitUntil: 'load', timeout: 0});
    const text2 = await page2.evaluate(()=>
    Array.from(document.body.querySelectorAll(".nation .articles"),(e)=>({
        title: e.querySelector('.img-context .title').innerText,
        desc:e.querySelector('.img-context p').innerText,
        link:e.querySelector('.img-context .title a').href,
        imgLink:e.querySelector('.snaps a img').getAttribute('src'),

    })))
    
   

    const page3 = await browser.newPage()
    await page3.goto("https://www.businesstoday.in/tech-today/enterprise-tech", {waitUntil: 'load', timeout: 0});
    const text3 = await page3.evaluate(()=>
    Array.from(document.body.querySelectorAll(".section-listing-LHS .widget-listing .widget-listing-body"),(e)=>({
        desc: e.querySelector('.widget-listing-content-section p').innerText,
        title:e.querySelector('.widget-listing-content-section h2 a').getAttribute('title'),
        link:e.querySelector('.widget-listing-content-section h2 a').href,
        imgLink:e.querySelector('.widget-listing-thumb a img').getAttribute('src'),
    
    })))
    
    
    
    const finalTech = [...text,...text2,...text3]
    
    
  await browser.close()
  return finalTech
}
tts()
