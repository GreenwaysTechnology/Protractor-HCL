//let keyword

let firstName="Subramanian";
let lastName="Murugan";
//strings : "" , '' , ``(backtick)

//backtick : multi line, string concatnation
console.log(" Name " + firstName + lastName)
console.log(`Name ${firstName} ${lastName}`)
//multiline
let html="<html>"+
         "</html>"
let title = "Protractor App";
let htmlDoc =`
       <html>
          <title>${title}</title>
          <body>Test</body>
       </html>

`;
console.log(htmlDoc)

let age =18;
let isValid =true;
let empty;
//*********************************************************************************
let message = "Hello";
console.log(message);
//reinitalize the message
message="Welcome";
console.log(message);

//const ; cant be reinitalized
const PI = 3.14;
console.log(PI);
//PI =89.89;


