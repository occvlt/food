"use strict";

import tabs from "./modules/tabs";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".tabheader__item ", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal("[data-modal]", ".modal");
    timer(".timer", "2021-06-28");
    cards();
    calc();
    forms("form");
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });
});