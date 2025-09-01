
let input_amount = document.getElementById("original-currency-amount");
let from_currency = document.getElementById("from_currency");
let to_currency = document.getElementById("to_currency");
let exchange_rate = document.getElementById("exchange-rate");
let exchange = document.getElementById("exchange");
let output_amount = document.getElementById("output-text");
let output_from = document.getElementById("from");
let output_to = document.getElementById("to");


exchange.addEventListener("click",()=>{
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})

let to_amount = 0;
function calculate(){
    const from_currency_value = from_currency.value;
    const to_currency_value = to_currency.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency_value];
        exchange_rate.value = `${rate}`
        to_amount = (input_amount.value * rate).toFixed(3);
        output_from.innerText= `${input_amount.value} ${from_currency_value}`;
        output_to.innerText = `${to_amount} ${to_currency_value}`;
        output_amount.style.display="block";
    })
}


document.getElementById("exchange_button").addEventListener("click",()=>{
    calculate();
});