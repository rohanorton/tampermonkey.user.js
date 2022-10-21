// ==UserScript==
// @name        Increment URL
// @namespace   https://github.com/rohanorton
// @description Increment up or down numerical URL using <C-a> and <C-x> (à la Vim)
// @version     0.1
// @match       http://*/*
// @match       https://*/*
// @grant       none
// ==/UserScript==

// Why?
// ====
//
// In Vimperator / Pentadactyl it is possible to Increment up and down URLs using
// vim-style keybindings <C-a> and <C-x>, but this behaviour doesn't exist in
// any of the Chrome plugins that mimic vim keybindings. Hence, this script.
//
// Example usage
// =============
//
// I'm reading an online book and it has the following URL convention:
//
// http://www.example.com/awesome_book/chapter_01.html
//
// I can hit <C-a> and be immediately transported to the next chapter (i.e.
// .../chapter_02.html). If I want to quickly go back, I can hit <C-x>.
//
// Bugs
// ====
//
// Iterating downward does not always produce the desired padding for numbers
// i.e. Iterating from 10 down to 9, the URL might want the number to be
// padded, 09. The script currently has no way of knowing this, so will fail.

const INCREMENT_KEY = "a";
const DECREMENT_KEY = "x";

const LAST_DIGITS_PATTERN = /(\d+)(?!.*\d)/;

class UrlIncrementer {
  constructor(url, digits, padding) {
    this.url = url;
    this.digits = digits;
    this.padding = padding;
  }

  get paddedDigits() {
    return String(this.digits).padStart(this.padding, "0");
  }

  get updatedUrl() {
    return this.url.replace(LAST_DIGITS_PATTERN, this.paddedDigits);
  }

  increment() {
    this.digits += 1;
  }

  decrement() {
    this.digits -= 1;
  }

  navigate() {
    window.location = this.updatedUrl;
  }

  static createIncrementer(url) {
    const digits = url.match(LAST_DIGITS_PATTERN).pop();
    return digits.length
      ? new UrlIncrementer(url, Number(digits), digits.length)
      : new NullIncrementer();
  }
}

class NullIncrementer {
  increment() {}
  decrement() {}
  navigate() {}
}

const incrementer = UrlIncrementer.createIncrementer(document.URL);

window.addEventListener("keyup", (e) => {
  if (e.ctrlKey && e.key === INCREMENT_KEY) {
    incrementer.increment();
    incrementer.navigate();
  }
  if (e.ctrlKey && e.key === DECREMENT_KEY) {
    incrementer.decrement();
    incrementer.navigate();
  }
});
