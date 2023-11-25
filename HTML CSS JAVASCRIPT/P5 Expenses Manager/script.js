"use strict";
const yourname = prompt(" Create your ID ");
const eyesclose = document.querySelector("#eye");
const eyesopen = document.querySelector("#eyeopen");
const app = document.querySelector(".sab-kuch");
const application = document.querySelector(".movements");
const loginSection = document.querySelector(".upper");
const password = document.querySelector("#password");
const user = document.querySelector("#use");
const greetmessage = document.querySelector(".greet");
const login = document.querySelector(".login2");
const loginalert = document.querySelector(".login");
const currentBalance = document.querySelector(".balance");
const containerMovements = document.querySelector(".movements");
const expenseInput = document.querySelector("#kharch1");
const expenseTYpeInput = document.querySelector("#kaisa");
const incomeTYpeInput = document.querySelector("#kaisaincome");
const InputInput = document.querySelector("#kharch2");
const expenseTick = document.querySelector("#tick1");
const expenseTypeTick = document.querySelector("#tick2");
const incomeTypeTick = document.querySelector("#tick4");
const incomeTick = document.querySelector("#tick3");
const checkTheBalance = document.querySelector("#balance_button");
const totalexpenses = document.querySelector(".t-expenses-amount");
const totalincome = document.querySelector(".t-income-amount");
const sampleincome = document.querySelector("#m-1");
const sampleexpense = document.querySelector("#m-2");
const yourpassword = [];

for (let i = 1; i < 5; i++) {
  let x = Math.floor(Math.random() * 5 + 1);
  yourpassword.push(x);
}
alert(`YOUR PASSWORD IS ${yourpassword.join("")}`);
const account1 = {
  movements: [],
  types: [],
  types2: [],
  income: [],
  pin: 1234,
  interestrate: 1.2,
};

console.log(eyesclose);
eyesclose.addEventListener("click", function () {
  eyesclose.style.display = "none";
  eyesopen.style.display = "flex";
  password.type = "text";
});
console.log(eyesopen);
eyesopen.addEventListener("click", function () {
  eyesclose.style.display = "flex";
  eyesopen.style.display = "none";
  eyesopen.style.margin = "-19.5px";
  password.type = "password";
});


expenseTick.addEventListener("click", function () {
  let expenseValue = expenseInput.value;
  if(expenseValue != ""){
  account1.movements.push(Number(expenseValue));
  expenseInput.placeholder = `Enter Expense type below`;
  expenseInput.value = "";
  } else {
    alert( "Please Enter the required value first")
  }
  console.log(account1.movements);
});

incomeTick.addEventListener("click", function () {
  let incomeValue = InputInput.value;
  if(incomeValue != ""){
  account1.income.push(Number(incomeValue));
  console.log(account1.income);
  InputInput.value = "";
  InputInput.placeholder = `Enter Income Type below`;
  } else{
    alert( "Please Enter the required value first")
  }
});


expenseTypeTick.addEventListener("click", function () {
  sampleexpense.style.display = "none";
  sampleincome.style.display = "none";
  let expenseTypeValue = expenseTYpeInput.value.toUpperCase();

  if(expenseTYpeInput.value != ""){
  account1.types.push(expenseTypeValue);
  expenseTYpeInput.value = "";
  console.log(account1.types);
  expenseTYpeInput.placeholder = `Enter Expense Type ${
    account1.types.length + 1
  }`;
  expenseInput.placeholder = `Enter Expense  ${account1.movements.length + 1}`;

  account1.movements.forEach(function (mov, i) {
    if (i === account1.movements.length - 1) {
      const type = "EXPENSES";
      const html = `
      <div class="movements-section">
      <div class="movements-type-date"> </div>
      <div class="movement-type-${type}"> ${i + 1}. ${account1.types[i]}  ${type}</div>
      <div class="amount"> ${mov} &#8377 </div>
      </div>`;
      containerMovements.insertAdjacentHTML(`beforeend`, html);
    }
  });
} else {
  alert( "Please Enter the required value first")
}
});

incomeTypeTick.addEventListener("click", function () {
  sampleexpense.style.display = "none";
  sampleincome.style.display = "none";
  let incomeTypeValue = incomeTYpeInput.value.toUpperCase();

  if(incomeTypeTick.value != ""){
  account1.types2.push(incomeTypeValue);
  InputInput.placeholder = `Enter Income ${account1.income.length + 1}`;
  incomeTYpeInput.placeholder = `Enter Income type ${account1.income.length+1}`;
  incomeTYpeInput.value = "";

  console.log(account1.types2);
  account1.income.forEach(function (incty, i) {
    if (i === account1.income.length - 1) {
      const type = "INCOME";
      const html = `
<div class="movements-section">
<div class="movements-type-date"> </div>
<div class="movement-type-${type}"> ${i + 1}. ${
        account1.types2[i]
      }  ${type}</div>
<div class="amount"> ${incty} &#8377 </div>
</div>`;
      containerMovements.insertAdjacentHTML(`beforeend`, html);
    }
  });
} else{
  alert( "Please Enter the required value first")
}
});



checkTheBalance.addEventListener("click", function () {
  let sum1 = 0;
  for (let i = 0; i < account1.movements.length; i++) {
    sum1 = sum1 + account1.movements[i];
    console.log(sum1);
  }

  let sum2 = 0;
  for (let i = 0; i < account1.income.length; i++) {
    sum2 = sum2 + account1.income[i];
    console.log(sum2);
  }
  totalincome.textContent = sum2;
  totalexpenses.textContent = sum1;
  const totalsum = sum2 - sum1;
  const html2 = `
  <p class="balance">${totalsum}  &#8377</p>`;
  currentBalance.insertAdjacentHTML(`beforeend`, html2);
});

login.addEventListener("click", function () {
  let uservalue = user.value;
  console.log(uservalue);
  let passwordvalue = password.value;
  console.log(passwordvalue);
  if (uservalue === yourname && passwordvalue == yourpassword.join("")) {
    loginSection.style.display = "none";
    app.style.display = "block";
    greetmessage.textContent = `Heyy !! ${yourname} 🙋‍♂️ `;
  } else {
    if (user.value === "" && password.value === "") {
      alert("Please Enter Username and Password");
    } else if (user.value === "") {
      alert("Username Can't be Empty");
    } else if (password.value === "") {
      alert("Password Can't be Empty");
    } else if (user.value !== yourname || password.value !== account1.pin) {
      alert("Wrong Username or Password  !!");
    }
  }
});

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let uservalue = user.value;
    console.log(uservalue);
    let passwordvalue = password.value;
    console.log(passwordvalue);
    if (uservalue === yourname && passwordvalue == yourpassword.join("")) {
      loginSection.style.display = "none";
      app.style.display = "block";
      greetmessage.textContent = `Heyy !! ${yourname}`;
    } else {
      if (user.value === "" && password.value === "") {
        alert("Please Enter Username and Password");
      } else if (user.value === "") {
        alert("Username Can't be Empty");
      } else if (password.value === "") {
        alert("Password Can't be Empty");
      } else if (user.value !== yourname || password.value !== account1.pin) {
        alert("Wrong Username or Password  !!");
      }
    }
  }
});
let a = document.querySelector(".date");
let b = new Date();
console.log(b);

setInterval(function () {
  a.textContent = `${b.getDate()}/${b.getMonth() + 1}/${b.getFullYear()}`;
}, 1000);
