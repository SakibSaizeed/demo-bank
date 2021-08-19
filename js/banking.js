//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function() {

    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountInputText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountInputText);
    const depositTotal = document.getElementById('deposit-total');

    const preiviousDepositInputAsText = depositTotal.innerText; //input shurute jeta dsi oita save korbe 
    const preiviousDepositAmount = parseFloat(preiviousDepositInputAsText);
    const newDepositTotal =
        parseFloat(preiviousDepositAmount + newDepositAmount); //new total amount 

    depositTotal.innerText = newDepositTotal;

    //update Account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preiviousBalanceTotal = parseFloat(balanceTotalText); //shathe sahthe jeta input e dbo oita add hobe first a ekhane
    const newBalanceTotal = preiviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field
    depositInput.value = '';
});

//handle withdraw event
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const preiviousWithdrawText = withdrawTotal.innerText;
    const preiviousWithdrawTotal = parseFloat(preiviousWithdrawText);

    const newWithdrawTotal = preiviousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clear
    withdrawInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const preiviousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(preiviousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
});