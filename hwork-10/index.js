alert("Body Mass Index");
var x = prompt("Enter your weight in kg");
var y = prompt("Enter your height in cm");
var z = Number(y) / 100;
BMI = Number(x) / (Number(z) * Number(z));
alert(" Your BMI is " + BMI);
if (BMI < 16) {
    alert("You are severely underweight");
} else if (BMI < 18.5) {
    alert("You are underweight");
} else if (BMI < 25) {
    alert("You are normal")
} else if (BMI < 30) {
    alert("You are overweight");
} else {
    alert("You are obese");
}