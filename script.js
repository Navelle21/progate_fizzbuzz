let userTrig = document.getElementById('userTrig');
let userInput = document.getElementById('userInput');
let result = document.getElementById('result');

userTrig.addEventListener("click", hitungKelipatan);

function hitungKelipatan(){
        if(userInput.value%3 === 0 && userInput.value%5 !== 0){
            result.innerHTML="Fizz!";
            result.style.color="blue";
        }else if(userInput.value%5 == 0 && userInput.value%3 !== 0){
            result.innerHTML = "Buzz!";
            result.style.color = "blue";
        }else if(userInput.value%3 === 0 && userInput.value%5 === 0){
            result.innerHTML="FizzBuzz!";
            result.style.color = "blue";
        }else{
            result.innerHTML="Invalid input";
            result.style.color = "red";
        }
}