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
        $('#toggle-collection-only').val(getBtnText(isShown));
    }

    $('body').prepend('<input type="button" id="toggle-collection-only" class="button" value="' + getBtnText(isShown)+ '" />');

    $('#toggle-collection-only').css({
        'box-sizing': 'border-box',
        'height': '44px',
        'padding': '14px 28px',
        'vertical-align': 'middle',
        'font-weight': '500',
        'line-height':'1',
        'text-decoration': 'none',
        'text-align': 'center',
        'white-space': 'nowrap',
        'cursor': 'pointer',
		'font-family': 'Ubuntu',
		'font-size': '14px',
		'background-color': 'rgb(250, 0, 41)',
		'border': 'none',
		'color': '#fff',
		'-moz-border-radius': '2px',
		'-webkit-border-radius': '2px',
		'-o-border-radius': '2px',
		'-ms-border-radius': '2px',
		'border-radius': '2px',
		'-webkit-user-select': 'none',
		'-moz-user-select': 'none',
		'user-select': 'none',
		'-webkit-appearance': 'none',
        'bottom': '20px',
        'display': 'inline-block',
        'position': 'fixed',
        'right': '20px',
        'width': 'auto',
        'z-index': "90000"
    });

    $("#toggle-collection-only").click(function () {
        var $els = $(".c-restaurant__collection").parent().parent().parent().parent();

        if (isShown) {
            $els.hide();
        } else {
            $els.show();
        }

        isShown = !isShown;
        updateBtn(isShown);
    });
});
