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
    let trzeba_podmienic = false;
    if (window.location.pathname === '/kwiat13') {
        trzeba_podmienic = true;
    } else {
        // jestesmy w grupowej wiec trzeba sprawdzic czy u kwiatka
        let lll = document.querySelectorAll('.mod-username');
        trzeba_podmienic = lll[0].text === 'kwiat13';
    }
    if (trzeba_podmienic) {
        let zmiany = [
            {co: 20, naco: 100, opis: "100"},
            {co: 35, naco: 11, opis: "11"},
            {co: 50, naco: 25, opis: "klpsy"},
            {co: 75, naco: 30, opis: "cycki"},
            {co: 100, naco: 50, opis: "hiszp"}
        ];
        let dodatkowe = [
            {naco: 69, opis: "cipka"},
            {naco: 70, opis: "lubię"},
            {naco: 111, opis: "tańcz"}
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
        let refElement = elementy[elementy.length - 1].elem;
        dodatkowe.forEach(function ({naco, opis}) {
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.className = 'btn btn--coin';
            btn.dataset.coin = naco;
            btn.innerHTML = opis;
            refElement.parentNode.insertBefore(btn, refElement.nextSibling);
            refElement = btn;
            // <button type="button" class="btn btn--coin" data-coin="15">15</button>
        });
    }
})();
