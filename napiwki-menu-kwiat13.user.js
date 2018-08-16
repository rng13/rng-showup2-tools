// ==UserScript==
// @name        napiwki Kwiat13
// @namespace   rng13.master@gmail.com
// @author      rng
// @description delikatne dostosowanie guzików napiwków do menu Kwiat13
// @include     https://showup.tv/kwiat13
// @include     https://showup.tv/group/*
// @version     0.0.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function () {
    let zmiany = [
        {co: 20, naco: 100, opis: "100"},
        {co: 35, naco: 25, opis: "klapsy"},
        {co: 50, naco: 30, opis: "cycki"},
        {co: 75, naco: 50, opis: "hiszpan"},
        {co: 100, naco: 70, opis: "lubię"}
    ];
    let elementy = [];
    zmiany.forEach(function ({co, naco, opis}) {
        let elem = document.querySelector('#tip-form button[data-coin="' + co + '"]');
        if (elem) {
            elementy.push({
                elem: elem,
                naco: naco,
                opis: opis
            });
        }
    });
    elementy.forEach(function ({elem, naco, opis}) {
        elem.innerHTML = opis;
        elem.dataset.coin = naco;
    });
})();
