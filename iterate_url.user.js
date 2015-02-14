// ==UserScript==
// @name        Iterate URL
// @namespace   https://github.com/rohanorton
// @description Iterates up or down numerical URL using <C-a> and <C-x> (à la Vim)
// @version     0.1
// @grant       none
// ==/UserScript==

// Why?
// ====
//
// In Vimperator / Pentadactyl it is possible to iterate up and down URLs using
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

/*jslint browser:true */

(function () {
    'use strict';

    var CURRENT_URL = document.URL;
    var A = 65; // keycode for 'a'
    var X = 88; // keycode for 'x'

    var newUrl;

    // num = a number
    // width = width of desired string
    // padding = string to use for padding
    function pad(num, width, padding) {
        padding = padding || '0';
        num = String(num);
        while (num.length < width) {
            num = padding + num;
        }
        return num;
    }

    // str = string
    // iterator = number (i.e. 1 or -1)
    function iterateString(str, iterator) {
        var lastNumRegEx = /(\d+)(?!.*\d)/; // finds last number in a string
        var num = str.match(lastNumRegEx);
        num = num.pop();
        var numLn = num.length;
        num = Number(num) + iterator;
        num = pad(num, numLn);
        str = str.replace(lastNumRegEx, num);
        return str;
    }

    window.onkeyup = function (e) {
        if (e.ctrlKey && e.keyCode === A) {
            newUrl = iterateString(CURRENT_URL, 1);
            window.location = newUrl;
        } else if (e.ctrlKey && e.keyCode === X) {
            newUrl = iterateString(CURRENT_URL, -1);
            window.location = newUrl;
        }
    };
} ());

