//login Button
const login = document.getElementById("login");
login.addEventListener("click", function(){
    var fullLogInSection = document.getElementById("loginSection");
    var transactionArea = document.getElementById("transaction-area");
    var name = document.getElementById("name").value;
    document.getElementById("userName").innerHTML ="Hi " + name;
    fullLogInSection.style.display= "none";
    transactionArea.style.display= "block";
})

// Diposit Button

const diposit= document.getElementById("dipositButton").addEventListener("click" , function(){
    const diposirAmount = document.getElementById("dipositAmmount").value;
    const dipositNumber = parseFloat(diposirAmount);
    const dipositView = document.getElementById("dipositView").innerText;
    const dipositMoney = parseFloat(dipositView);
    const totaldipositMoney = dipositMoney + dipositNumber;

    document.getElementById("dipositView").innerHTML = totaldipositMoney;

    const balanceView = document.getElementById("balanceView").innerText;
    const balanceNumber = parseFloat(balanceView);
    const totalbalanceMoney = dipositNumber + balanceNumber;
    document.getElementById("balanceView").innerHTML = totalbalanceMoney;
})

//withdraw-button

const withdraw =document.getElementById("withdraw-button").addEventListener("click" , function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    const Withdrawview = document.getElementById("Withdrawview").innerText;
    const WithdrawMoney = parseFloat(Withdrawview);
    const totalWithdrawMoney = withdrawNumber + WithdrawMoney;

    document.getElementById("Withdrawview").innerHTML = totalWithdrawMoney;

    var balanceView = document.getElementById("balanceView").innerText;
    var balanceNumber = parseFloat(balanceView);
    var totalbalance = balanceNumber - withdrawNumber;
    
    document.getElementById("balanceView").innerHTML = totalbalance;

})