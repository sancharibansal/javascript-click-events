// Double Click Detection
let doubleClickCount = 0;
let lastDoubleClickTime = 0;
let singleClickTimeoutId = null;

document.getElementById('doubleClickButton').addEventListener('click', (e) => {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastDoubleClickTime;

  if (timeDiff <= 200) { // Adjusted thresholds
    doubleClickCount++;
    if (doubleClickCount === 2) {
      console.log('Double click detected!');
      doubleClickCount = 0;

      clearTimeout(singleClickTimeoutId);
    }
  } else {
    doubleClickCount = 1;
    singleClickTimeoutId = setTimeout(() => {
    console.log('Single click detected within 200ms');
}, 200);
  }

  lastDoubleClickTime = currentTime;
});

// Triple Click Detection
let tripleClickCount = 0;
let lastTripleClickTime = 0;
let singleOrDoubleClickTimeoutId = null;

document.getElementById('tripleClickButton').addEventListener('click', (e) => {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastTripleClickTime;

  if (timeDiff <= 400) { // Adjusted thresholds
    tripleClickCount++;
    if (tripleClickCount === 3) {
      console.log('Triple click detected!');
      tripleClickCount = 0;

      clearTimeout(singleOrDoubleClickTimeoutId);
    }
  } else {
    tripleClickCount = 1;
    singleOrDoubleClickTimeoutId = setTimeout(() => {
    console.log('Single or Double click detected within 400ms');
}, 400);
  }

  lastTripleClickTime = currentTime;
});

// Adjusted thresholds:
// - Double click threshold adjusted from 100 ms to 200 ms 
// - Triple click threshold adjusted from 150 ms to 400 ms 
// I've adjusted the thresholds due to practical purposes as it's difficult to double click within 100 ms and triple click within 150 ms