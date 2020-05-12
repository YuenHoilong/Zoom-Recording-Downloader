// ==UserScript==
// @name         ZRD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download Zoom recordings from Canvas!
// @author       yuankailong@gmail.com
// @match        https://hkust.zoom.us/rec/play/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkTagLoaded = setInterval(function() {
        var wrappers = document.getElementsByClassName('player-view-wrapper');
        var videos = document.getElementsByTagName('video');

        if (wrappers.length > 0 && videos.length > 0) {
            clearInterval(checkTagLoaded);

            var wrapper = wrappers[0];
            var video = videos[0];

            var downloadButton = document.createElement('A');
            downloadButton.innerHTML = 'Download';
            downloadButton.href = video.src;
            wrapper.appendChild(downloadButton);
        }
    }, 1000);
})();