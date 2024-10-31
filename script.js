var selectedNumbers= [];
let operations = [];
let quantity = 12;

var oddBtn = document.getElementById("oddBtn");
var evenBtn = document.getElementById("evenBtn");
var primeBtn = document.getElementById("primeBtn");
var numberRange = document.getElementById("numberRange");

function generatePDF() {
    selectedNumbers = [];
    operations = [];

    quantity = document.getElementById('quantity').value;
    quantity = quantity == '' ? 12 : parseInt(quantity);

    $("div.checkboxDiv input[type=checkbox]").each(function () {
        if ($(this).is(":checked")) {
            selectedNumbers.push($(this).attr("data-value"));
        }
    });

    $("div.operationsDiv input[type=checkbox]").each(function () {
        if($(this).is(":checked")) {
            operations.push($(this).attr("data-value"));
        }
    });

    console.log(selectedNumbers);
    console.log(operations);
    console.log(quantity);

    let bag = generateQuestions(selectedNumbers, operations, quantity);
}

function generateQuestions(selectedNumbers, operations, quantity) {

}

// -------------------------------
// Event listeners for UI elements
// ===============================

function fillOddEven(isOdd) {
    $("div.checkboxDiv input[type=checkbox]").each(function () {
        if(parseInt($(this).attr("data-value")) % 2 != isOdd) { 
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }        
    });
}

oddBtn.addEventListener("click", function () {
    fillOddEven(1)
});

evenBtn.addEventListener("click", function () {
    fillOddEven(0)
});

primeBtn.addEventListener("click", function () {
    $("div.checkboxDiv input[type=checkbox]").each(function () {
        let v = parseInt($(this).attr("data-value"));
        if( v == 1 || v == 2 || v == 3 || v == 5 || v == 7) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }        
    });
});

numberRange.addEventListener("change", function () {
    let num = parseInt(numberRange.value);
    $("#numberRangeSpan").text(num);

    $("div.checkboxDiv input[type=checkbox]").each(function () {
        let v = parseInt($(this).attr("data-value"));
        if( v <= num ) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }        
    });
})