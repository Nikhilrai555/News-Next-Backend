import puppeteer from 'puppeteer';
 
export const jjbs = async ()=>{
     const browser = await puppeteer.launch()
    const page1 = await browser.newPage()
    await page1.goto("https://indianexpress.com/section/jobs/", {waitUntil: 'load', timeout: 0});
    const text1 = await page1.evaluate(()=>
    Array.from(document.body.querySelectorAll(".nation .articles"),(e)=>({
        title: e.querySelector('.img-context .title').innerText,
        desc:e.querySelector('.img-context p').innerText,
       link:e.querySelector('.img-context .title a').href,
       imgLink:e.querySelector('.snaps a img').getAttribute('src'),
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
    
    
   
    
   const finalJobs = [...text1,...text3]
   
   

  await browser.close()
  return finalJobs
}
jjbs()
