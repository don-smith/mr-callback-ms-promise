# Mr. Callback & Ms. Promise

This is just a simple example to illustrate the difference between using a library that exposes callbacks versus a library that exposes promises.

To get started, after cloning this repo, run `npm install` in your terminal.

The `wait-seconds` module represents the library code and `tests.js` are its tests. To run the tests, run `npm test` in your terminal.

The illustration is in `callback.js` and `promise.js`. I've tried to make these as similar as possible so you can see the difference.

If you want to see the console output, uncomment the appropriate line in `index.js` based on the output you want to see. Because these are async functions, you probably don't want to have more than one line uncommented at a time if you want the output to make sense. To see the console output, run `npm start` in your terminal.
