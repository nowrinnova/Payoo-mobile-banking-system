document.getElementById("addMoney-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const amountValue = getInputFieldValueById("amount-field");
  console.log(`amount ${amountValue}`);
  const pinNumber = getInputFieldValueById("addNumber-pin");
  if(pinNumber==1234){
  const accountBalance = amountBalance("account-balance");
  const updateAccountBalance=accountBalance+amountValue;
  document.getElementById('account-balance').innerText=updateAccountBalance;
  }
  else{
    alert('wrong input.please fill the valid input');
  }
  
});
