var fullName = 'Nitya Somani';
let email = "nitya@google.com";
const accountId = '1234';
accountState ='M.P'
let text ; 


/* prefer not to use var  
beacuse of issue in block scope and functional scope 
*/

console.log('Writing the variables ');
console.table([fullName,email,accountId,accountState,text]);
console.log(typeof(accountState));



