let browser = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];

// browser.pop();
// console.log(browser);

browser.shift("Firefox");
console.log(browser);
for (let i = 0; i < browser.length; i++) {
  console.log(browser[i]);
  if (browser[i] === "Opera") {
    console.log("Opera is the best browser");
  } 
}   