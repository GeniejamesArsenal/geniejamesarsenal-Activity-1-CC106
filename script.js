 let fullName = "Genie James Arsenal";  
 let age = 21;  
 let course = "BSIT second year";  
 let school = "St Peter's College";  
 let isStudent = true;  

 let output = "All let variables:\n";  
 output += `fullName: ${fullName}\n`;  
 output += `age: ${age}\n`;  
 output += `course: ${course}\n`;  
 output += `school: ${school}\n`;  
 output += `isStudent: ${isStudent}\n`;  

 for (let i = 1; i <= 10; i++) {  
     output += i + "\n";  
 }  

 function addNumbers(a, b) {  
     return a + b;  
 }  
 output += `Sum of 5 and 10: ${addNumbers(5, 10)}\n`;  

 if (age >= 18) {  
     output += "Adult\n";  
 } else {  
     output += "Minor\n";  
 }  
 document.getElementById('console-output').innerText = output;  