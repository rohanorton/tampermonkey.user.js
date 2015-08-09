// ==UserScript==
// @name         Resize Page Column
// @namespace    https://github.com/rohanorton/
// @version      0.1
// @description  Resizing a page column using <c-]> <c-[>
// @author       rohan orton
// @grant        none
// ==/UserScript==

/*jslint browser:true*/
/*globals console*/

(function () {
    // get default column width etc
    var bodyStyles = window.getComputedStyle(document.body);
    var origColumnWidthStr = bodyStyles.width;
    var columnWidthNumber = parseInt(origColumnWidthStr, 10);

    function incrementPercentage(percent) {
        return (percent/100) * columnWidthNumber;
    }

    var PERCENT_CHANGE = 10;

    var DECREASE_KEY = 219; // [
    var INCREASE_KEY = 221; // ]
    var RESET_KEY = 187;    // =

    window.onkeyup = function (e) {
        if (e.ctrlKey && e.keyCode === DECREASE_KEY) {
            columnWidthNumber = incrementPercentage(100 - PERCENT_CHANGE);
        } else if (e.ctrlKey && e.keyCode === INCREASE_KEY) {
            columnWidthNumber = incrementPercentage(100 + PERCENT_CHANGE);
        } else if (e.ctrlKey && e.keyCode === RESET_KEY) {
           columnWidthNumber = parseInt(origColumnWidthStr, 10);
        }
        document.body.style.width = columnWidthNumber + "px";
        document.body.style.margin = 'auto';
    };
}());
