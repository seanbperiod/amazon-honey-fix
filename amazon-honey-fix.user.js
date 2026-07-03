// ==UserScript==
// @name         Fix Amazon Saved Cart Grid with Honey enabled
// @namespace    amazon-honey-fix-MBP14
// @version      0.2
// @description  Fixes saved cart grid on Amazon from going to 3 columns, 
// @match        http*://www.amazon.com/gp/cart/*
// @match        https://www.amazon.com/cart*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

const addStyle = (styleText) => {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styleText));
  document.head.appendChild(style);
};

addStyle(`
div#sc-saved-cart-items { width: 100%!important;}
`);
;
