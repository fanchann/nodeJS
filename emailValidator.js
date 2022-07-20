// const validEmail = require('email-validator');
// const color = require('colors-cli/toxic');
// const loading = require('loading-cli');



// // console.log(validEmail.validate('testemail@gmail.com'))


// const checkEmail = (email)=>{
//     const valid = validEmail.validate(email);
//     const load = loading('Checking...'.yellow).start();
//     // //stop
//     setTimeout(function(){
//         if(valid== true){
//             return`valid`
//         }else{
//             return`not`
//         }
//         load.stop();
//       },3000)
//     }

// const check = checkEmail('fannyarif@gmail.com');


// console.log(check)


const validEmail = require('email-validator');
const color = require('colors-cli/toxic');
const loading = require('loading-cli');

// const checkEmail = (email) => {
//         const valid = validEmail.validate(email);
//         const load = loading('Checking...'.yellow).start();
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         load.stop();
//                         resolve(valid);
//                 }, 1000);
//         })
// }

// checkEmail('fannyarif@gmail.com').then((valid) => {
//         if (valid) {
//                 return console.log(`valid `);
//         }
//         console.log('Invalid');
// });


async function checkEmail(email) {
    const valid = validEmail.validate(email);
    //     const load = loading(`Checking`.yellow).start();
    return new Promise((succes, reject) => {
        if (valid == true) {
            succes `Valid Email => ${email}`
        } else {
            reject `Not valid => ${email}`
        }
    })


}

const hasil = await checkEmail('fannyarif@gmail.com');

console.log(hasil);