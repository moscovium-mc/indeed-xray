// ==UserScript==
// @name         Indeed X-Ray
// @namespace    https://github.com/moscovium-mc
// @version      1.0
// @description  See through the blur - reveals hidden company reviews on Indeed
// @author       moscovium-mc
// @homepage     https://github.com/moscovium-mc/indeed-xray
// @supportURL   https://github.com/moscovium-mc/indeed-xray/issues
// @updateURL    https://github.com/moscovium-mc/indeed-xray/raw/main/indeed-xray.user.js
// @downloadURL  https://github.com/moscovium-mc/indeed-xray/raw/main/indeed-xray.user.js
// @match        https://www.indeed.com/cmp/*/reviews*
// @match        https://uk.indeed.com/cmp/*/reviews*
// @match        https://ca.indeed.com/cmp/*/reviews*
// @match        https://de.indeed.com/cmp/*/reviews*
// @match        https://fr.indeed.com/cmp/*/reviews*
// @match        https://au.indeed.com/cmp/*/reviews*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==
(function () {
  'use strict';
  const reviewCSS = `
    /* Reveal hidden review text */
    #reviewDescription [itemprop="reviewBody"] span,
    #reviewDescription [data-testid="review-text"] span,
    #reviewDescription .css-15r9gu1,
    #reviewDescription .css-1lzulyr {
      background: transparent !important;
      color: rgb(89, 89, 89) !important;
      opacity: 1 !important;
      filter: none !important;
      -webkit-filter: none !important;
      text-shadow: none !important;
      user-select: auto !important;
      pointer-events: auto !important;
    }
    /* Hide gating button */
    #reviewDescription + button[data-testid="cc-inline-review-promo-click"],
    #reviewDescription ~ button[data-testid="cc-inline-review-promo-click"] {
      display: none !important;
    }
    /* Ensure pros/cons are visible */
    [data-testid="pros-cons"] .css-15r9gu1 {
      opacity: 1 !important;
      color: inherit !important;
    }
  `;
  GM_addStyle(reviewCSS);
})();
