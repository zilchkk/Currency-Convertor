BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

for (let select of dropdowns){
    for(currCode in countryList){
     let newOption = document.createElement("option");
     newOption.innerText = currCode;
     newOption.value = currCode;
     if (select.name === "from" && currCode === "USD"){
     newOption.selected = true;
     }else if(
        select.name === "to" && currCode === "INR"){
            newOption.selected = true;
     }
    
     select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}


const updateFlag = (element) => {
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/32.png`;
let image = element.parentElement.querySelector("img");
image.src = newSrc; 
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal =1; 
        amount.value = amtVal;
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;

    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
   

});