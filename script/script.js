function calculateBMI(weight, height){
	return (weight/Math.pow(height,2)).toFixed(1);
}

function displayBMIResult(){

	let weight  = document.getElementById("weightinput").value;
	let height  = document.getElementById("heightinput").value;
	let displayElement = document.getElementById("bmivalue-holder");

	if(weight === "" && height === "" || isNaN(weight) && isNaN(height)
	   || weight==="" && isNaN(height) || isNaN(weight) && height===""){
		   window.alert("Weight is missing or invalid\nHeight is missing or invalid")
	   }
	   else if(isNaN(height) || height === ""){
		window.alert("Height is missing or invalid")
	   }
	   else if(weight ==="" || isNaN(weight)){
		window.alert("Height is missing or invalid")
	   }
	   else{
		   let bmiValue = calculateBMI(weight,height);
		   if(bmiValue<18.5){
			   displayElement.innerHTML="Your BMI is "+bmiValue+", so you are\xa0<strong>underweight</strong>"
		   }
		   else if(bmiValue>=18.5 && bmiValue<=24.9){
			 displayElement.innerHTML="Your BMI is "+bmiValue+", so you have a\xa0<strong>normal weight</strong>";
		   }
		   else if(bmiValue>=25 && bmiValue<=29.9){
			displayElement.innerHTML="Your BMI is "+bmiValue+", so you are\xa0<strong>overweight</strong>";
		  }
		  else if(bmiValue>=30 && bmiValue<=34.9){
			displayElement.innerHTML="Your BMI is "+bmiValue+", so you are\xa0<strong>obese</strong>";
		  }
		  else{
			displayElement.innerHTML="Your BMI is "+bmiValue+", so you are\xa0<strong>extremely obese</strong>";
		  }
	   }
}

document.getElementById("calculate-btn").addEventListener("click",displayBMIResult);