"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

function calculateTax(income) {
    var tax = 0;
    if (income >= 0 && income <= 9275) {
        tax = parseFloat(((income - 0) * 10 / 100 + 0)).toFixed(2);
    } else if (income > 9275 && income <= 37650) {
        tax = parseFloat(((income - 9275) * 15 / 100 + 927.5)).toFixed(2);
    } else if (income > 37650 && income <= 91150) {
        tax = parseFloat(((income - 37650) * 25 / 100 + 5183.75)).toFixed(2);
    } else if (income > 91150 && income <= 190150) {
        tax = parseFloat(((income - 91150) * 28 / 100 + 18558.75)).toFixed(2);
    } else if (income > 190150 && income <= 413350) {
        tax = parseFloat(((income - 190150) * 33 / 100 + 46278.75)).toFixed(2);
    } else if (income > 413350 && income <= 415050) {
        tax = parseFloat(((income - 413350) * 35 / 100 + 119934.75)).toFixed(2);
    } else {
        tax = parseFloat(((income - 415050) * 39.6 / 100 + 120529.75)).toFixed(2);
    }

    $("tax").value = tax;
    return;
}

var processEntry = function processEntry() {
    var income = $("income").value;

    if (income != '' || income != "") income = parseInt(income);

    if (income < 0) {
        alert("Make sure it is a valid number greater than zero");
        $("income").value = '';
        $("income").focus();
    } else {
        calculateTax(income);
    }
}

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("income").focus();
};