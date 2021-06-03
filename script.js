function calculateBMI(){

	let weight = document.getElementById("weightinput").value;
	let height = document.getElementById("heightinput").value;
	//
	let output = document.getElementById("bmivalue-holder");
	
	//
	try {
		if((isNaN(weight) && isNaN(height)) || (weight==="" && isNaN(height)) ||
		(height==="" && isNaN(weight)) || (height==="" && weight==="")){
			throw 'Weight is missing or invalid \nHeight is missing or invalid'
		}
		if(weight==="" || isNaN(weight)){
			throw 'Weight is missing or invalid'
		}
		if(height==="" || isNaN(height)){
			throw 'Height is missing or invalid'
		}
		let bmiValue = (weight/Math.pow(height,2)).toFixed(1);

		if(bmiValue < 18.5){
			output.innerHTML="Your BMI is "+bmiValue +", so you are underweight."
		}
		else if(bmiValue>= 18.5 && bmiValue<=24.9){
			output.innerHTML = "Your BMI is "+bmiValue +", so you have a normal weight."
		}
		else if(bmiValue>= 25 && bmiValue <=29.9){
			output.innerHTML = "Your BMI is "+bmiValue +", so you are overweight."
		}
		else if(bmiValue>= 25 && bmiValue <=29.9){
			output.innerHTML = "Your BMI is "+bmiValue +", so you are obese."
		}
		else{
			output.innerHTML = "Your BMI is "+bmiValue +", so you are extremely obese."
		}
		
	} catch (error) {
		window.alert(error);
		output.innerHTML="";
	}	
}