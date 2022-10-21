// ==UserScript==
// @name         Resize Page Column
// @namespace    https://github.com/rohanorton/
// @version      0.2
// @description  Resizing a page column using <c-]> <c-[>
// @author       rohan orton
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

const DECREASE_KEY = "[";
const INCREASE_KEY = "]";
const RESET_KEY = "=";
const PERCENT_CHANGE = 10;

const getWidth = () => {
  const bodyStyles = window.getComputedStyle(document.body);
  return parseInt(bodyStyles.width, 10);
};

const setWidth = (width) => {
  document.body.style.width = width + "px";
  document.body.style.margin = "auto";
};

const incrementPercentage = (percent) => (percent / 100) * getWidth();

// Cache original value to allow reset.
const originalWidth = getWidth();

window.addEventListener("keyup", (e) => {
  if (e.ctrlKey && e.key === DECREASE_KEY) {
    setWidth(incrementPercentage(100 - PERCENT_CHANGE));
  } else if (e.ctrlKey && e.key === INCREASE_KEY) {
    setWidth(incrementPercentage(100 + PERCENT_CHANGE));
  } else if (e.ctrlKey && e.key === RESET_KEY) {
    setWidth(originalWidth);
  }
});
