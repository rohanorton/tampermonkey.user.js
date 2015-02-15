// ==UserScript==
// @name         UkBay without clicking
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Go straight to Piratebay mirror without having to click image
// @author       Rohan Orton
// @match        https://ukbay.org/
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
    window.location = (randomlinks[Math.floor(Math.random()*randomlinks.length)]);
} (randomlinks));
