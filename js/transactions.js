document.getElementById('TransactionsBtn').addEventListener('click',()=>{
  const balance = document.getElementById('account-balance').innerText
  console.log(balance)
  document.getElementById('balance').innerText=balance;
  
})