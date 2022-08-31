const billAmount = document.querySelector("#input-billamount");
const cashGiven = document.querySelector("#input-cashgiven")
const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check")
const btnBack = document.querySelector("#btn-back")
const errorMessage = document.querySelector("#show-error-message")
const notesAvailable = document.querySelectorAll(".no-of-notes");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function checkBillAmount(){
    if(billAmount.value<=0){
        showErrorMessage("bill Amount has to be greater than 0")
    }
    else{
        btnNext.style.display="none";
        billAmount.disabled=true;
        document.querySelector("#container-cash").style.display="block";
    }
}

function backAction(){
    billAmount.disabled = false
    btnNext.style.display="block";
    document.querySelector("#container-cash").style.display ="none";
    document.querySelector("#container-table").style.display ="none";
}
function showErrorMessage(message){
    errorMessage.style.display="block";
    errorMessage.innerHTML= message
}

function calculateNotes(billAmountValue,cashGivenValue){
    errorMessage.style.display ="block";
    document.querySelector("#container-table").style.display= "block"
    var amountToBeReturned = cashGivenValue - billAmountValue;
    for(let i =0 ; i < notes.length; i++){
        var noOfNotes=Math.trunc(amountToBeReturned/notes[i]);
        notesAvailable[i].innerText = noOfNotes;
        amountToBeReturned = amountToBeReturned % notes[i]; 
    }
}

function checkCashGiven(){
     var cashGivenValue = Number(cashGiven.value)
     var billAmountValue = Number(billAmount.value)
     
     if(cashGivenValue <=0){
        showErrorMessage("Cash given should be greater than zero")
     }
     else if (cashGivenValue < billAmountValue){
        showErrorMessage("Cash Given should be atleast equal to Bill Amount")
     }
     else{
        calculateNotes(billAmountValue,cashGivenValue);
     }

}

btnNext.addEventListener("click",checkBillAmount);

btnBack.addEventListener("click",backAction)

btnCheck.addEventListener("click",checkCashGiven)