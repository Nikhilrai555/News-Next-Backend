import puppeteer from 'puppeteer';
export const invs = async ()=>{
     const browser = await puppeteer.launch()

     const page = await browser.newPage()
    await page.goto("https://indianexpress.com/section/business/", {waitUntil: 'load', timeout: 0});
    const text = await page.evaluate(()=>
    Array.from(document.body.querySelectorAll(".nation .articles"),(e)=>({
        title: e.querySelector('.img-context .title').innerText,
       desc:e.querySelector('.img-context p').innerText,
       link:e.querySelector('.img-context .title a').href,
        imgLink:e.querySelector('.snaps a img').getAttribute('src'),
    })))
  
     const page2 = await browser.newPage()
    await page2.goto("https://www.businesstoday.in/personal-finance/investment", {waitUntil: 'load', timeout: 0});
    const text2 = await page2.evaluate(()=>
    Array.from(document.body.querySelectorAll(".section-listing-LHS .widget-listing .widget-listing-body"),(e)=>({
      title:e.querySelector('.widget-listing-content-section h2 a').getAttribute('title'),
      desc: e.querySelector('.widget-listing-content-section p').innerText,
      link:e.querySelector('.widget-listing-content-section h2 a').href,
      imgLink:e.querySelector('.widget-listing-thumb a img').getAttribute('src'),
    })))
    
   
    
    const page3 = await browser.newPage()
    await page3.goto("https://economictimes.indiatimes.com/industry/banking-/-finance/banking", {waitUntil: 'load', timeout: 0});
    await page3.waitForTimeout(17000)
    const text3 = await page3.evaluate(()=>
    Array.from(document.body.querySelectorAll(".tabdata .eachStory"),(e)=>({
        title: e.querySelector('h3').innerText,
        desc: e.querySelector('p').innerText,
        link: e.querySelector('h3 a').href,
        imgLink: e.querySelector('span .imgContainer img').getAttribute('src'),
    })))
    
    
 
   const finalInvest = [...text,...text2,...text3]
  

  await browser.close()
 return finalInvest
}
invs()
