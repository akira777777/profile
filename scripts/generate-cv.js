/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("@playwright/test");
const path = require("path");

async function generate() {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const url = "http://127.0.0.1:3015/en/cv";
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "networkidle" });
  
  // Wait for HTML hydration
  await page.waitForSelector("html");
  
  // Hide scrollbar & custom visual elements before printing just to be safe
  await page.evaluate(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body { background: white !important; }
      header, footer, nav, button { display: none !important; }
    `;
    document.head.appendChild(style);
  });
  
  const destPath = path.join(__dirname, "..", "public", "cv.pdf");
  console.log(`Generating PDF to ${destPath}...`);
  
  await page.pdf({
    path: destPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "10mm",
      bottom: "10mm",
      left: "10mm",
      right: "10mm"
    }
  });
  
  console.log("PDF generated successfully.");
  await browser.close();
}

generate().catch((err) => {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
});
