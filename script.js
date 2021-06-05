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
		let str = ""
		if(bmiValue < 18.5){
			str = "underweight";
			output.innerHTML="Your BMI is "+ bmiValue +", so you are\xa0" + str.bold();
		}
		else if(bmiValue>= 18.5 && bmiValue<=24.9){
			str = "normal weight";
			output.innerHTML = "Your BMI is "+bmiValue +", so you have a\xa0" + str.bold();
		}
		else if(bmiValue>= 25 && bmiValue <=29.9){
			str = "overweight";
			output.innerHTML = "Your BMI is "+bmiValue +", so you are\xa0" + str.bold();
		}
		else if(bmiValue>= 30.0 && bmiValue <=34.9){
			str = "obese";
			output.innerHTML = "Your BMI is "+bmiValue +", so you are\xa0" + str.bold();
		}
		else{
			str = "extremely obese";
			output.innerHTML = "Your BMI is "+bmiValue +", so you are\xa0" + str.bold();
		}
		
	} catch (error) {
		window.alert(error);
		output.innerHTML="";
	}	
}