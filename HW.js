var item1;
item1 = 5;
console.log('ITEM1 = ' + item1);
var item2;
item2 =3;
console.log('ITEM2 = ' + item2);
var item3;
item3 = item1 + item2;
console.log('ITEM1 + ITEM2 = ' + item3);
var item4;
item4 = 'Hello';
console.log(item4);
console.log(item3+item4);
console.log(item3*item4);
var item5;
item5 = item3;
var item6;
var item6_type;
item6 = 15;
item6_type = typeof(item6);
console.log('item6 == ' + item6 + ';', 'Type item6 == ' + item6_type + ';');
var item7 = String(item6);
var item7_type = typeof(item7);
console.log('item7 == ' + item7 + ';','Type item7 == ' + item7_type + ';');
var age1 = 10, age2 = 18, age3 = 60;
if(age1<age2){
    console.log('You don’t have access cause your age is ' + age1 + ' It`s less then ');
} else if(age1>=age2, age1<age3){
    console.log('Wellcome!');
} else if(age1>age3){
    console.log('Ceep calm and look Culture channel');
} else{
    console.log('Tecnical Work');
};
