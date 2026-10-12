// ==UserScript==
// @name         OSM 查詢圖徵項目名稱複製按鈕
// @namespace    https://mnya.tw/
// @version      1.0
// @description  在 OpenStreetMap 查詢圖徵的每個列表右邊新增一顆按鈕，以一鍵複製圖徵項目名稱。
// @author       萌芽站長
// @match        *://www.openstreetmap.org/*
// @icon         https://www.openstreetmap.org/favicon.ico
// @grant        GM_setClipboard
// @copyright    萌芽系列網站 ‧ Mnya Series Website ‧ Mnya.tw (https://mnya.tw)
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function addCopyButtons() {
        const listItems = document.querySelectorAll('.query-results-list li.list-group-item:not(.has-copy-btn)');

        listItems.forEach(li => {
            li.classList.add('has-copy-btn');

            // 確保原本的 li 有相對定位，並預留右側空間避免文字被按鈕蓋住
            li.style.position = 'relative';
            li.style.paddingRight = '60px';

            // 只抓取 <a> 標籤（stretched-link）內的純文字，忽略前方的分類
            const link = li.querySelector('a.stretched-link');
            const textToCopy = link ? link.textContent.trim() : li.textContent.trim();

            const btn = document.createElement('button');
            btn.textContent = '複製';
            btn.className = 'btn btn-sm btn-outline-primary mnya-copy-btn';

            // 使用絕對定位固定在右側垂直置中，不干擾原本的排版
            btn.style.cssText = 'position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 2; padding: 2px 8px; font-size: 12px;';

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                GM_setClipboard(textToCopy, 'text');

                const originalText = btn.textContent;
                btn.textContent = '已複製';
                btn.classList.replace('btn-outline-primary', 'btn-success');

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.replace('btn-success', 'btn-outline-primary');
                }, 1500);
            });

            li.appendChild(btn);
        });
    }

    const observer = new MutationObserver((mutations) => {
        let shouldRun = false;
        for (let mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                shouldRun = true;
                break;
            }
        }
        if (shouldRun) {
            addCopyButtons();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    addCopyButtons();
})();