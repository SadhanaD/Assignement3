var $ = function (id) {
    return document.getElementById(id); 
};


var processEntries = function processEntries() {
    var subTotal = $("subtotal").value;
    var taxRate = $("tax_rate").value;

    if (subTotal != null || subTotal != '') 
        subTotal = parseFloat(subTotal);
    

    if (taxRate != null || taxRate != '') 
        taxRate = parseFloat(taxRate);
   

    if ((isNaN(subTotal) || (subTotal < 0 || subTotal > 10000)) || (isNaN(taxRate) || (taxRate < 0 || taxRate > 12))) {
        alert("Subtotal must be > 0 and < 10000 \nTax Rate must be > 0 and < 12");
        return;
    } else {
        var salesTax = (subTotal * taxRate) / 100;
        $("sales_tax").value = parseFloat(salesTax).toFixed(2);

        var total = salesTax + subTotal;
        $("total").value = parseFloat(total).toFixed(2);
		return;
    }
}

var clear = function clear() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
}

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
    $("subtotal").focus();
}