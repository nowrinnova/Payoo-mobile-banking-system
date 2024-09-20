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
