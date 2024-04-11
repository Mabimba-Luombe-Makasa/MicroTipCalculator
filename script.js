const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.getElementById("tip-percentage");
const calculateButton = document.getElementById("calculate-button");
const resetButton = document.getElementById("reset-button");
const billTotal = document.getElementById("bill-total");

function calculateBill() {
    const billValue = parseFloat(billAmount.value);
    const tipValue = parseFloat(tipPercentage.value);

    if (isNaN(billValue) || isNaN(tipValue)) {
        billTotal.classList.add('error');
        billTotal.innerHTML = 'Please enter valid numeric values for Bill Amount and Tip Percentage.';
        return;
    }

    const totalValue = billValue * (1 + tipValue / 100);
    const finalValue = totalValue.toFixed(2);
    
    billTotal.classList.remove('error');
    billTotal.innerHTML = `Your TOTAL BILL is K${finalValue}.`
}

function resetTotal() {
    billTotal.innerHTML = '';
    billAmount.value = '';
    tipPercentage.value = '';
}

calculateButton.addEventListener("click", calculateBill);
resetButton.addEventListener("click", resetTotal);