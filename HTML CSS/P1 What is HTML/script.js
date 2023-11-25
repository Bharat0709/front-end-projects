console.log(61 + 23 - 24);
// let firstname = "miranda";
console.log("jonas");
// console.log(firstname);
let currentJob = "DESIGNER";
let lastName = "pahwa";
console.log(lastName);
currentJob = "web Developer";
console.log(currentJob);
let javascriptIsFun = true;
// let age = 19;
console.log(typeof javascriptIsFun);
console.log(typeof lastName);
// console.log(typeof age);
let year;
console.log(typeof year);
year = 1991;
console.log(year);

// ABOVEW WE LEARN SEVERAL THINGS SUCH AS DECLARING A VARIABLE , KNOWING THE TYPE OF VARAIBLE , REASIGNING THE VARIABLE.

const birthdate = "19 / 06 / 03";
// birthdate = "15/06/03";
console.log(birthdate);
// const birthyear; CONST CANT BE EMPTY

const nowYear = 2037;
const ageBharat = nowYear - 2003;
const ageUdit = nowYear - 1998;
console.log(ageBharat, ageUdit);
console.log(ageBharat * 2, ageUdit, 2 ** 5);
// 2** 5 means 2 raise to power 5
let x = 15;
x += 5; // x+=5 is equal to x= x+5
console.log(x);
console.log(ageBharat < ageUdit);
console.log(ageUdit > 18);

// coding challenge 1 COMPARING BODY MASS INDEX FROM GIVEN DATA

// const mark_weight = 78;
// const john_weight = 92;
// const mark_height = 1.69;
// const john_height = 1.95;
// const Bmi_mark = mark_weight / mark_height ** 2;
// const Bmi_john = john_weight / john_height ** 2;
// john_weight = 85;
// console.log(Bmi_john, Bmi_mark);
// console.log(Bmi_mark > Bmi_john);

const firstname = "Bharat";
const job = "student";
const age = 19;

// IMPORTANT STUFF BELOW.

const jonas = "Hii !! I'm " + firstname + ", a " + age + " years old " + job;
console.log(jonas);
const jonas_new = `Hii !! I'm ${firstname} , a ${age} years old ${job}`;
console.log(jonas_new);
const bharatp = `hii there how are you`;
console.log(bharatp);

//  NOW WE' LL LEARN IF/ELSE STATEMENT

const drivingAge = 15;
if (drivingAge >= 18) {
  console.log(`sarah can drive+👍`);
} else {
  console.log(`years left ${18 - drivingAge}`);
}
const yearOfBirth = 2205;
let century;
if (yearOfBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// CODING CHALLENGE NO.2
const mark_weight = 95;
const john_weight = 85;
const mark_height = 1.95;
const john_height = 1.76;
const Bmi_mark = mark_weight / mark_height ** 2;
const Bmi_john = john_weight / john_height ** 2;
if (Bmi_john > Bmi_mark) {
  console.log(
    `body mass index of john (${Bmi_john}) is higher than mark (${Bmi_mark})`
  );
} else {
  console.log(`boody mass index of mark is reatr than john`);
}

// LEARNING 3 TYPE CONVERSION

const num = "1991";
console.log(Number(num), num);

const word = "hello";
console.log(Number(word)); // NaN (not a number)

console.log("23" + "24" + 12); // number to string

console.log("12" - 20 - "33"); // string to numbers
console.log("12" - 20 + "33");
//  string to numbers tahn number to str

// const favourite = Number(prompt("what's your favourite number?"));

// console.log(typeof favourite);
// if (favourite === 23) {
//   console.log(`cool! 23 is a nice number`);
// } else if (favourite == 9) {
//   console.log(`cool!! 9 is also a cool number `);
// } else {
//   console.log(`wh y not 23 or 9 ?`);
// }
// if (favourite !== 23) {
//   console.log(`why not 23?`);
// }

// const HasDrivingLicense = true;
// const HasGoodVision = true;

// console.log(HasDrivingLicense && HasGoodVision);
// console.log(HasDrivingLicense || HasGoodVision);

// Const DolfhinsScore = ((96 + 108 + 89) / 3);
// Const KoalasScore = ((88 + 91 + 110) / 3);
// console.log(averageDolfhinsScore);
// console.log(averageKoalasScore);

// IF ELSE ECLARATION TYPE 1
const score_1D = 97;
const score_2D = 112;
const score_3D = 120;
const average_scoreD = (score_1D + score_2D + score_3D) / 3;

const score_1k = 109;
const score_2k = 106;
const score_3k = 106;
const average_scoreK = (score_1k + score_2k + score_3k) / 3;

console.log(average_scoreD, average_scoreK);

if ((average_scoreD, average_scoreK) < 100) {
  console.log(`none of the teams meets the minimum requitrement of scoree 100`);
} else if (average_scoreK < 100) {
  console.log(`team koalas did not meet the minimum score requirement`);
} else if (average_scoreD < 100) {
  console.log(`team dolphins did not meet the minimum score requirement`);
} else if (average_scoreD > average_scoreK && average_scoreD > 100) {
  console.log(`team dolphins is the winner`);
} else if (average_scoreD < average_scoreK && average_scoreD > 100) {
  console.log(`team koalas is the winner`);
} else if (average_scoreD === average_scoreK && average_scoreD > 100) {
  console.log(`this match is draw`);
}
// SWICH AND BREAK STATEMENT
// TYPE 2
const day = "saturday";
switch (day) {
  case "monday":
    console.log("monday morning blues");
    break;
  case "tuesday":
    console.log("do coding from udemy");
    break;
  case "wednesday":
    console.log("use figma and design");
    break;
  case "thursday":
    console.log("do internship work");
    break;
  case "friday":
    console.log("review all your works");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend!!");
    break;
}
// TYPE 3
const numb = 21;
const isnumb = numb > 20 ? `you are not in teenage now` : `you are a teenager`;
console.log(isnumb);

const bill = 400;
const condition =
  bill >= 50 && bill <= 300
    ? `bill amount = ${bill} tip amount = ${0.15 * bill} total amount = ${
        bill + 0.15 * bill
      }`
    : `bill amount = ${bill} tip amount = ${0.2 * bill} total bill = ${
        bill + 0.2 * bill
      }`;

console.log(condition);

// const condition2 = bill<50  && bill >300 ;

// console.log(0.15 * bill + bill);
