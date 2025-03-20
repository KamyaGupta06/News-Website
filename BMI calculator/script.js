let height=document.querySelector("#height");
let weight=document.querySelector("#weight");
let calculate=document.querySelector(".btn1")
calculate.addEventListener("click",function()
{
    event.preventDefault();
    let h = parseFloat(height.value)/100;
    let w = parseFloat(weight.value);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        document.querySelector(".res").innerHTML = "<h1 style='color: red; margin-left:50px'>Please enter valid height and weight.</h1>";
        return;
    }
    let bmi = (w / (h * h)).toFixed(2);
    let message;
    if (bmi < 18.6) {
        message = `Your BMI is ${bmi}. You are Underweight.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = `Your BMI is ${bmi}. You have a Normal weight.`;
    } else {
        message = `Your BMI is ${bmi}. You are Overweight.`;
    }
    document.querySelector(".res").innerHTML = `<h1 style='color: blue; font-size: 25px; margin-left:50px'>${message}</h1>`;

})

let reset = document.querySelector(".btn2");
reset.addEventListener("click", function () {
     document.querySelector(".res").innerHTML = ""; 
});
