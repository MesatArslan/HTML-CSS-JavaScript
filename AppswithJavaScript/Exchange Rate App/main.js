//* Elementleri seçelim


const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();
runEventListeners();

function runEventListeners(e){
    amountInput.addEventListener("input",exchange);
}

function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstCurrencyOption = firstOption.options[firstOption.selectedIndex].textContent;
    const secondCurrencyOption = secondOption.options[secondOption.selectedIndex].textContent;


    currency.exchange(amount,firstCurrencyOption,secondCurrencyOption)
    .then((result) => {
    resultInput.value = result.toFixed(3)
  })
}