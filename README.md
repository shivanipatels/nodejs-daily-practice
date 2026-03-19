# NodeJS Daily Practice 🚀

This repository contains my daily Node.js practice code.

## Day 1
- Practiced fs.writeFile
- Learned about asynchronous file writing
- Implemented basic error handling

## Day 2
- Created HTTP server using http module
- Implemented basic routing
- Handled different URLs
- Returned HTML responses

## Day 3
- Created HTML form
- Handled POST request
- Saved data to file using fs.writeFileSync
- Implemented redirect using statusCode 302

### Day 4
* Created HTTP server for multiple pages
* Implemented routing for `/`, `/about`, and `/contact`
* Added navigation links using anchor tags to switch between pages
* Handled 404 Not Found error for undefined URLs
* Rendered HTML responses using `res.write()` and `res.end()`

### Day 5
* Implemented parsing of incoming request bodies using Streams and Buffers
* Used `req.on('data')` to collect chunks and `req.on('end')` to process full body
* Converted URL-encoded data into a JavaScript object using `URLSearchParams` and `Object.fromEntries()`
* Stored submitted user details into a local file `user-details.txt` using `fs.writeFileSync()`
* Handled HTTP POST method and practiced 302 redirection

### Day 6 - Modular Server & Practice
* **Learning Phase (`day-6/`):**
  * Learned to split code into multiple files using `module.exports` and `require`.
  * Created a clean `server.js` that uses an external `handler.js`.
* **Practice Phase (`day-6-cal-practise/`):**
  * Built a fully functional Modular Calculator.
  * Separated Routing (`handler.js`) and Calculation Logic (`sum.js`).
  * Handled numeric data conversion and 302 Redirection.

### How to Run
* node day1-writeFile.js
* node day2-http-routing.js
* node day3-form-post.js
* node day4-multi-page-routing.js
* node day5-parsing-request.js
* node day-6/app.js (Learning version)
* node day-6-cal-practise/app.js (Calculator Practice)

More updates coming daily 💪