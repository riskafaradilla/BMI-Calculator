let submit = document.getElementById("submitForm")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let bmi
let description = document.getElementById("description")

submit.addEventListener("submit", (event) => {
    event.preventDefault()

   bmi = weight.value / (height.value / 100)**2
   result = bmi.toFixed(1)

    if(result <= 18.5){
        description.innerText = "Your BMI is " + 
        result + " which means Your are " + "Underweight"
    }else if (result <= 24.9) {
        description.innerText = "Your BMI is " + 
        result + " which means Your are " + "Normal Weight"
    }else if(result <= 29.9){
        description.innerText = "Your BMI is " + 
        result + " which means Your are " + "Overweight"
     }else if(result >= 30){
        description.innerText = "Your BMI is " + 
        result + " which means Your are " + "Obesity"
     }  
})