// ==UserScript==
// @name         megabox-cleanbooking
// @namespace    https://github.com/tark1998/megabox-cleanbooking
// @version      2024-03-07
// @description  clean the movie list in megabox booking
// @author       You
// @match        *://megabox.co.kr/*/simpleBookingPage.do*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`li:has(> button.disabled){
        display:none;
    }`)
})();
