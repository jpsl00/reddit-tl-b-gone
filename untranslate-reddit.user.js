// ==UserScript==
// @name         Untranslate Reddit
// @namespace    http://tampermonkey.net/
// @version      2024-12-28
// @description  Remove Reddit's new translation feature
// @author       João Pedro "jpsl00"
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;
    const cleanUrl = currentUrl.replace(/[?&]tl=[a-z\-]{2,5}(?=&|$)/g, (match) => {
        return match.startsWith('?') ? '?' : '';
    }).replace(/\?&/, '?')
      .replace(/\?$/, '')
      .replace(/&$/, '');

    console.log(currentUrl, cleanUrl);
    if (currentUrl !== cleanUrl) {
        window.location.href = cleanUrl;
        window.location.reload();
    }
})();