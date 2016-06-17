// ==UserScript==
// @name         JustEat - Show/Hide Collection Only
// @namespace    https://github.com/rohanorton
// @version      0.1
// @description  Toggles visibility of collection only restaurants on justeat.com
// @author       Rohan Orton
// @match        https://www.just-eat.co.uk/area/*
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';

    var isShown = true;

    function getBtnText(isShown) {
        var verb = isShown ? 'Hide' : 'Show';
        return verb + ' Collection Only';
    }

    function updateBtn(isShown) {
        $('.toggle-collection-only').text(getBtnText(isShown));
    }

    $('body').prepend('<a href="#" class="toggle-collection-only">' + getBtnText(isShown)+ '</a>');

    $('.toggle-collection-only').css({
        'background-color': '#ce0b10',
        'border-radius': '3px',
        'bottom': '20px',
        'color': 'white',
        'display': 'inline-block',
        'height': 'auto',
        'padding': '10px',
        'position': 'fixed',
        'right': '20px',
        'text-decoration': 'none',
        'width': 'auto',
        'z-index': "90000"
    });

    $(".toggle-collection-only").click(function () {
        var $els = $(".collectionOnly").parent().parent().parent().parent();

        if (isShown) {
            $els.hide();
        } else {
            $els.show();
        }

        isShown = !isShown;
        updateBtn(isShown);
    });
});
