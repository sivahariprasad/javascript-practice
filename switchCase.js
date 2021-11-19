let result;

const num1 =parseInt(prompt('enter first number: '));
const num2 =parseInt(prompt('enter second number: '));

const operator=prompt('enter operator: ');

switch(operator) {
    case '+': 
       result=num1+num2; 
       console.log("addition is "+result);
       document.write(`addition of ${num1} + ${num2} :` +result);
       break;
       
    case '-': 
       result=num1-num2; 
       console.log("subtraction  is "+result);
       document.write(`subtraction of ${num1} - ${num2} :` +result);
       break;

    case '*': 
       result=num1*num2; 
       console.log("multiplicaton is "+result);
       document.write(`multiplicaton of ${num1} * ${num2} :` +result);
       break;
       
    case '/': 
       result=num1/num2; 
       console.log("division  is "+result);
       document.write(`division of ${num1} / ${num2} :` +result);
       break;
    
    case '%': 
       result=num1%num2; 
       console.log("modulo  is "+result);
       document.write(`modulo of ${num1} % ${num2} :` +result);
       break;

    case '**': 
       result=num1**num2; 
       console.log("exponentiation  is "+result);
       document.write(`exponentiation of ${num1} ** ${num2} :` +result);
       break;   


}