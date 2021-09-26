const userinput = document. querySelector("#userinput"); 

const check = document. querySelector("#submit").style.backgroundColor="red"; 

const displayResult = document. querySelector("#displayResult");

function validNum() {
				//Get the value of the number inputted by a user
				const x = userinput.value;
			
				// If x is Not a Number or less than one or greater than 10000
if (isNaN(x) || x < 1 || x > 10000000) {
    displayResult.textContent = `${x} is not a valid number`; 
    displayResult.style.color = "red";
} 
else{
  			displayResult.textContent = `${x} is a valid number`; 
    displayResult.style.color = "green";	
}
 }

submit.addEventListener("click", validNum);
