document.getElementById('login-btn').addEventListener('click',(event)=>{
  event.preventDefault();
  const mobile=document.getElementById('mobileField');
  const pin=document.getElementById('pin').value
  if(pin=='1234'){
    window.location.href = "/home.html";
  }
  else{
    alert('wrong input.please fill the valid input')
  }
  
})

