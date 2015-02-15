// ==UserScript==
// @name         Order isohunt search by seeders
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Order isohunt search by seeders
// @author       Rohan
// @match        http://isohunters.net/*
// @grant        none
// ==/UserScript==

// Why?
// ====
//
// Searching isohunt for a torrent always comes back in a random order. I wrote
// this script in order to search by most seeded by default. 
//
// It's currently set to match isohunters.net, though this is easily change to
// any other of the isohunt mirrors out there and should work.


/*jslint browser:true */
/*globals $*/
$('form[name="ihSearch"]').on('submit', function (e) {
    "use strict";
    e.preventDefault();

    var query = $('input[name="ihq"]').val();
    if (query) {
        query = encodeURI(query.split(' ').join('+'));
        window.location = "/torrents/?ihq=" + query + "&Torrent_sort=seeders.desc";
    }
});
