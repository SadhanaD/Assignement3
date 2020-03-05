var $ = function(id) {
    return document.getElementById(id);
};

function makeChange(cents) {
    var quarters = parseInt(cents / 25);
    $("quarters").value = quarters;

    var dimes = parseInt((cents - (quarters* 25)) / 10);
    $("dimes").value = dimes;

    var nickels = parseInt((cents - (quarters * 25) - (dimes * 10)) / 5);
    $("nickels").value = nickels;

    var pennies = parseInt(cents - (quarters * 25) - (dimes * 10) - (nickels * 5));
    $("pennies").value = pennies;
	return;
}

var processEntry = function processEntry() {
    var cents = $("cents").value;
    if (cents != null || cents != '') cents = parseInt(cents);

    if (cents < 0 || cents > 99) {
        alert("Amount should be between 0 to 99 cents");

        $("cents").value = '';
        $("quarters").value = '';
        $("dimes").value = '';
        $("nickels").value = '';
        $("pennies").value = '';
    } else {
        makeChange(cents);
    }
}

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("cents").focus();
}