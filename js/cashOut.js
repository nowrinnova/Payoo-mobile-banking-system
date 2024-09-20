document.getElementById("cashOut-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const amountValue = getInputFieldValueById("cashOut-amount-field");
  document.getElementById('cashOut-amount-field').value="";
  console.log(`amount ${amountValue}`);
  const pinNumber = getInputFieldValueById("cashOut-pin");
  if(pinNumber==1234){
  const accountBalance = amountBalance("account-balance");
  const updateAccountBalance=accountBalance-amountValue;
  document.getElementById('account-balance').innerText=updateAccountBalance;
  document.getElementById('cashOut-pin').value="";
  }
  else{
    alert('wrong input.please fill the valid input');
  }
  
});