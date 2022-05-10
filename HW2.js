
// let number = 5;
// function square (number){
//     return number * number;
// };
// console.log(square(number));

// let string_validator = 1;

// function validation(string_validator){
//     if (typeof string_validator == "string"){
//         return true
//     } else {
//         console.log('Error! Field must be a string')
//         return false
//     }
//     if (string_validator.length >= 5 && string_validator.length <= 64){
//         return true
//     } else {
//         console.log('You must enter between 5 and 64 characters')
//         return false
//     }

// };
// console.log(validation(string_validator));

let field_v = 1;
function validator(field_v){
    if (field_v != '' && field_v != undefined){
        return true;
        if (typeof field_v == 'string'){
            return true;
            if (field_v.length >= 5 && field_v.length <=64){
                return true;
            }else{
                return false
                console.log('Error! The Field must contain from 5 to 64 characters!')
            }
        }else{
            return false
            console.log('Error!The Field must contain String');
        }
    }else{
        return false
        console.log('Error! The Field cannot be empty!');
    }
}
console.log(validator(field_v));