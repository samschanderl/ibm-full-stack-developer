

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function computeInterest()
{   var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    if (parseInt(principal) <= 0 || principal == ""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false
    };
    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + "\<\/mark\>, \<br\>at an interest rate of \<mark\>" + parseFloat(rate) + "%\<\/mark\>\<br\>You will receive an amount of \<mark\>" + interest + "\<\/mark\>,\<br\>in the year \<mark\>" + parseInt(year) + "\<\/mark\>\<br\>"
    
}

function validate(value) {

} 