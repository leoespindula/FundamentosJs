// Anonimous function
(function(a, b, c){
    console.log(`Result: ${a + b + c}`) 
 })(1,2,3);

 (function (a , b, c){
    let x = 300
    console.log(`Result: ${a + b + c}`)
    console.log(x)
 })(1,2,3);

 (() => {
    console.log('arrow #01')
 })();
 (() =>console.log('arrow #02'))();