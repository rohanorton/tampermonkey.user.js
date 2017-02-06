// ==UserScript==
// @name         YNAB - Dim Running Balance
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Dim the YNAB running balance to avoid confusion
// @author       Rohan Orton
// @match        https://app.youneedabudget.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const styles = `
        .ynab-grid-cell.user-data.ynab-toolkit-grid-cell-running-balance {
            opacity: 0.2;
        }`
    const $head = document.head
    const $style = document.createElement('style');

    $style.type = 'text/css';
    $style.appendChild(document.createTextNode(styles));
    $head.appendChild($style);
})();
