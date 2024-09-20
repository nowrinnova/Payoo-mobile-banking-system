document.getElementById("addMoney-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const amountValue = getInputFieldValueById("amount-field");
  document.getElementById('amount-field').value="";
  console.log(`amount ${amountValue}`);
  const pinNumber = getInputFieldValueById("addNumber-pin");
  if(pinNumber==1234){
  const accountBalance = amountBalance("account-balance");
  const updateAccountBalance=accountBalance+amountValue;
  document.getElementById('account-balance').innerText=updateAccountBalance;
  document.getElementById('addNumber-pin').value="";
  }
  else{
    alert('wrong input.please fill the valid input');
  }
  
});
