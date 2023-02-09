const container =document.querySelector(".container");
container.innerHTML=`<h1 style="background: green;">Усі зміни відбуваються через файл JS</h1>`
// !1
// !1

// !1

// !1

// !1

const box_1 =document.querySelector(".box_1");
function comparNum(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}
    box_1.innerHTML = 
 ` 
 <mark>Завдання 1: Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
0 - якщо числа рівні.</mark>
<mark style=background:red;>Результат = ${comparNum(1,2)}</mark>`;

// *2
// *2
// *2
// *2
// *2
// *2
const box_2 =document.querySelector(".box_2");
function factorials(a){
    let i = 1;
    num = 1;
    while(i < a){
        num *= (i+1);
        i++;
    }
   return num;
}
box_2.innerHTML = 
 ` 
 <mark>Завдання 2: Напишіть функцію, яка вираховує факторіал переданого
їй числа.</mark>
<mark style=background:red;>Результат = ${factorials(5)}</mark>`;

// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
// ?3
const box_3 =document.querySelector(".box_3");
function sumNum(numOne,numTwo, numThree){
    let sum;
    sum = numOne*100 + numTwo*10 + numThree;
    return sum;
   
}
box_3.innerHTML = 
 ` 
 <mark>Завдання 3: Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.</mark>
<mark style=background:red;>Результат = ${sumNum(1,2,3)}</mark>`;
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
// todo4
const box_4 =document.querySelector(".box_4");
function calculateArea(length, width) {
  if (width === undefined) {
    return length * length;
  } else {
    return length * width;
  }
}
box_4.innerHTML = 
 ` 
 <mark>Завдання 4: Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали
1 параметр, вона вираховує площу квадрата.</mark>
<mark style=background:red;>Результат = ${calculateArea(5, 10)}</mark>`;
// *5
// *5
// *5
// *5
// *5
// *5
// *5
const box_5 =document.querySelector(".box_5");
function perfectNum(num){
    let i = 1;
    let sum = 0;
    while(i < num){
        if (num % i === 0) {
            sum += i;
    }
        i++;
    }
    return sum === num;
} 
box_5.innerHTML = 
 ` 
 <mark>Завдання 5: Напишіть функцію, яка перевіряє, чи є передане їй число
досконалим. Досконале число – це число, що дорівнює сумі
всіх своїх власних дільників.</mark>
<mark style=background:red;>Результат = ${perfectNum(6)}</mark>`;
// ?6
// ?6
// ?6
// ?6
// ?6
// ?6
// ?6
const box_6 = document.querySelector(".box_6");

function perfectNum(num){
    let i = 1;
    let sum = 0;
    while(i < num){
        if (num % i === 0) {
            sum += i;
        }
        i++;
    }
    return sum === num;
} 


function checkPerfect(min, max){
    let result = "";
    let i = min;
    while(i <= max){
        if(perfectNum(i)){
            result += `<mark style="background:red;">Результат : ${i}</mark> `;
        }
        i++;
    }
    box_6.innerHTML =`<mark>Завдання 6: Напишіть функцію, яка приймає мінімальне і максимальне
значення для діапазону і виводить ті числа з діапазону, які
є досконалими. Використовуйте написану раніше функцію,
щоб перевірити число на досконалість.</mark>`+result ;
}
checkPerfect(1,10000);
// !7
// !7
// !7
const box_7 = document.querySelector(".box_7");

function timeOutput(hours, minutes = 0, seconds = 0) {
  let timeHours = hours;
  let timeMinutes = minutes;
  let timeSeconds = seconds;
  
  if(hours < 24 && minutes < 60 && seconds < 60){
    if (hours < 10) {
      timeHours = '0' + hours;
    }

    if (minutes < 10) {
      timeMinutes = '0' + minutes;
    }

    if (seconds < 10) {
      timeSeconds = '0' + seconds;
    }
    box_7.innerHTML = `
    <mark>Завдання 7: Напишіть функцію, яка приймає час (години, хвилини,
секунди) і виводить його на екран у форматі «година:
2 хвилини:секунди». Якщо при виклику функції хвилини
та/або секунди не були передані, виводити їх як 00.
</mark>
    <mark style="background:red;">Результат: ${timeHours}:${timeMinutes}:${timeSeconds}</mark>`;
  } else {
    box_7.innerHTML = `<mark style='background:red;'>Некоректно введений час!</mark>`;
  }
}

timeOutput(2, 9, 4);
// todo8
// todo8
// todo8
// todo8
// todo8
const box_8 = document.querySelector('.box_8');

function timeSeconds(hour, minute = 0, second = 0) {
  let sumSec;
  if(hour < 24 && minute < 60 && second < 60){
        sumSec = hour * 3600 + minute * 60 + second;
        box_8.innerHTML = `<mark>Завдання 8: Напишіть функцію, яка приймає години, хвилини та секунди і повертає цей час у секунди.
</mark>
        <mark style="background:red;">Результат: ${sumSec}</mark>`;
  } else{
    box_8.innerHTML = `<mark style="background:red;">Некоректно введений час!</mark>`;
  }
}

timeSeconds(12, 59, 54);
// 9
// 9
// 9
// 9
// 9
const box_9 = document.querySelector(".box_9");

function convertSecondsToTime(totalSeconds) {
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

let paddedHours = hours;
let paddedMinutes = minutes;
let paddedSeconds = seconds;

if (hours < 10) {
paddedHours = '0' + hours;
}

if (minutes < 10) {
paddedMinutes = '0' + minutes;
}

if (seconds < 10) {
paddedSeconds = '0' + seconds;
}

box_9.innerHTML = `<mark>Завдання 9: Напищіть функцію, яка приймає кількість секунд, переводить їх у години, хвилини та секунди і повертає у вигляді
рядка «година:хвилини:секунди».

</mark>
<mark style="background:red;">Результат: ${paddedHours}:${paddedMinutes}:${paddedSeconds}</mark>`;
}

convertSecondsToTime(670);
// !10
// !10
// !10
// !10
// !10
const box_10 = document.querySelector(".box_10");
function twoTimes(h1,m1,s1,h2,m2,s2){
  function timeSeconds() {
let sumSec;
  if(h1 < 24 && m1 < 60 && s1 < 60){
        sumSec = h1 * 3600 + m1 * 60 + s1;
        console.log(sumSec)
        return sumSec;
  } else{console.log("Incorect time");}
  
}
  function timeSecond2() {
let sumSec2;
  if(h2 < 24 && m2 < 60 && s2 < 60){
        sumSec2 = h2 * 3600 + m2 * 60 + s2;
        console.log(sumSec2)
        return sumSec2;
  } else{console.log("Incorect time");}
  
}
let different = timeSeconds()-timeSecond2();
if (different<0){
  different= -different;
}
console.log(different)
// 
// 
 let hours = Math.floor(different / 3600);
  let minutes = Math.floor((different - (hours * 3600)) / 60);
  let seconds = different - (hours * 3600) - (minutes * 60);

  let paddedHours = hours;
  let paddedMinutes = minutes;
  let paddedSeconds = seconds;

  if (hours < 10) {
    paddedHours = '0' + hours;
  }

  if (minutes < 10) {
    paddedMinutes = '0' + minutes;
  }

  if (seconds < 10) {
    paddedSeconds = '0' + seconds;
  }

  return paddedHours + ':' + paddedMinutes + ':' + paddedSeconds;

}
box_10.innerHTML = `<mark>Завдання 10: Напишіть функцію, яка підраховує різницю між датами. Функція приймає 6 параметрів, що описують 2 дати,
і повертає результат у вигляді рядка «година:хвилини:
секунди». Під час виконання завдання використовуйте
функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди, дізнайтеся різницю в секундах, а потім
різницю переведіть назад у «година:хвилини:секунди»

</mark>
<mark style="background:red;">Результат: ${twoTimes(23,10,10,23,12,1)}</mark>`;
