// ==UserScript==
// @name        ostrzeżenie przed wyjściem z transmisji
// @namespace   rng13.master@gmail.com
// @author      rng
// @description przed opuszczeniem strony zawierającej transmisję wyświetli prośbę o potwierdzenie
// @include     https://showup.tv/*
// @version     0.0.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

window.addEventListener("beforeunload", function (event) {
    if (transmission && transmission.joinStatus) { // sprawdzam czy istnieje transmisja, niezależnie od statusu
        event.preventDefault();
        // poniższy tekst i tak się nigdzie nie pojawi ale muszę zwrócić wartość niepustą
        event.returnValue = "Czy na pewno opuścić transmisję?";
    }
});
