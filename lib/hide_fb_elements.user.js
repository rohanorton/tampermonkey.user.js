// ==UserScript==
// @name         Hide FB Elements
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Hides irritating elements on Facebook
// @author       Rohan Orton
// @match        https://*.facebook.com/
// @grant        none
// ==/UserScript==

// Why?
// ====
//
// A friend was complaining about the 'Trending' bar on Facebook, so I thought
// I'd have a crack at getting rid of it for them. From that I've attempted to make it more 
//
// How?
// ====
//
// I opted for setting CSS rules to hide elements over DOM manipulation. Feels
// a bit dirty to be writing CSS in JavaScript files, but wevs.
// 
// Bugs
// ====
//
// The box is momentarily on screen before it is removed. I'm guessing that
// this is because the script is run after the page has loaded.
//
// Otherwise, none that I'm aware of.

/*jslint browser:true */

(function () {
    'use strict';

    var ELEMENTS_TO_HIDE = [
        // USE CSS SELECTORS:
        '#pagelet_trending_tags_and_topics' 
    ];

    var i;

    function addCSSRule(sheet, selector, rules, index) {
        if (sheet.insertRule) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        } else if(sheet.addRule) {
            sheet.addRule(selector, rules, index);
        }
    }

    for (i = 0; i < ELEMENTS_TO_HIDE.length; i += 1) {
        addCSSRule(document.styleSheets[0], ELEMENTS_TO_HIDE[i], "display: none");
    }

}());
