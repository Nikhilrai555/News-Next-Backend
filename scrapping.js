import puppeteer from 'puppeteer';
import fs from 'fs'
 const links = async ()=>{
    const browser = await puppeteer.launch()
   
    const page = await browser.newPage()
    await page.goto("https://leetcode.com/tag/breadth-first-search/", {waitUntil: 'load', timeout: 0});
    await page.waitForTimeout(9000)
    
    const btn = 'input[type="checkbox"]'
    await page.click(btn)
    await page.waitForTimeout(3000)
    const text = await page.evaluate(()=>
    Array.from(document.body.querySelectorAll(".reactable-data tr"),(e)=>({
        link: e.querySelector('td[label="#"]').innerText,
       
    })))
   
console.log(text)
  
   
  await browser.close()

}
links()
