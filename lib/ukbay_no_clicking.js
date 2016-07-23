// ==UserScript==
// @name         UkBay without clicking
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Go straight to Piratebay mirror without having to click image
// @author       Rohan Orton
// @include      https://ukbay.*
// @grant        none
// ==/UserScript==

// Why?
// ====
// I couldn't be bothered clicking on the image, and having it open a pop up
// window. This all seemed unecessary.

/*jslint browser:true */
/*globals randomlinks */

(function (randomlinks) {
  "use strict";
  
  function random(n) {
    return Math.floor(Math.random() * n);  
  }
  
  function getLink() {
    var index = random(randomlinks.length));
    return randomlinks[index]
  }
  
  if (randomlinks) {
    window.location = getLink();
  }
} (randomlinks));
