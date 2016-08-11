var add = function(num1, num2){
  return num1 + num2;
}

var subtract = function(num1, num2){
	return num1-num2;
}

var multiply = function(num1, num2){
  return num1 * num2;
}

var divide = function(num1, num2){
	return num1/num2;
}

var remainder = function(num1, num2){
	return num1%num2;
}

$(document).ready(function() {
  $("form#calculator").submit(function(event) {

   var number1 = parseInt($("#input1").val());
   var number2 = parseInt($("#input2").val());
   var operator = $("input:radio[name=operator]:checked").val();
   var result;
   if (operator === "add") {
     result = add(number1, number2);
   } else if (operator === "subtract") {
     result = subtract(number1, number2);
   } else if (operator === "multiply") {
     result = multiply(number1, number2);
   } else if (operator === "divide") {
     result = divide(number1, number2);
   }
   $("#output").text(result).val();
   event.preventDefault();
 });
});
