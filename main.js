window.onload = () =>{
    var button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
}
function calculateBMI(){
    var height = Number(document.querySelector("#height").value);
    var weight = Number(document.querySelector("#weight").value);
    var result = document.querySelector("#result");
    if(height==' ' || height<=0){
        result.innerHTML = "Enter a valid height";
    }else if(weight==' ' || weight<=0){
        result.innerHTML = "Enter a valid weight";
    }
    else{
         var bmi = (weight/((height * height)/10000)).toFixed(1); 
         if(bmi <= 18.4){
             result.innerHTML = "Under Weight : "+bmi;
         }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = "Normal : "+bmi;
         }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = "Over Weight : "+bmi;
         }else {
             result.innerHTML = "Obese : "+bmi;
         }
    }
}