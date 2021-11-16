let Option1 = document.getElementById('paymth');
let Option2 = document.getElementById('paypal');
let DateForm = document.querySelector('.right-side__pay-method-info');
let Control = document.getElementById('paypall-active');
let btcPay = document.getElementById('btc-active');
let bitcoin = document.getElementById('bitcoin');

Option1.addEventListener("click", toggle);
Option2.addEventListener("click", toggle);
bitcoin.addEventListener("click", toggle);

function toggle() {
  if (Option1.checked) {
    DateForm.style.display = "block";
    Control.style.display = "none";
    btcPay.style.display = "none";
  } else if(Option2.checked) {
    DateForm.style.display = "none";
    Control.style.display = "block";
    btcPay.style.display = "none";
  } else if(bitcoin.checked) {
   DateForm.style.display = "none";
   Control.style.display = "none";
   btcPay.style.display = "block";
  }
}
