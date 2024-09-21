function getInputFieldValueById(id) {
  const inputField = document.getElementById(id).value;
  const inputNumber = parseFloat(inputField);
  return inputNumber;
}
function amountBalance(id) {
  const balance = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(balance);
  return balanceNumber;
}
function showSectionById(id){
  document.getElementById('addMoney-Section').classList.add('hidden');
  document.getElementById('cashOut-Section').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}