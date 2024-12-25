// 1. Dars videosini korish, darsni chuqur takrorlash
// 2. Quyidagi masalalarni ishlash

// 1. Funksiya uchun xato tashlash
// Shart:
//  Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:
// "Faktorialni hisoblash uchun musbat son kerak!"
// Funksiya try...catch orqali chaqirilganda:
// Xato yuz bersa, konsolga "Xato yuz berdi: xato haqida xabar" yozilsin.
// Xato bo‘lmasa, natija qaytarilsin.
function factorial(n) {
  // Musbat son tekshiruvi
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Faktorialni hisoblash uchun musbat son kerak!");
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
try {
  console.log(factorial(5));
  console.log(factorial(-3));
} catch (error) {
  console.log("Xato yuz berdi:", error.message);
}

// 2. Array bilan ishlashda xatolarni boshqarish
// Shart:
//  Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:
// Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:
// Xato xabari: "Massiv uzatilmadi!".
// Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:
// Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".
// Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.
// Funksiya xato bo‘lmasa, massivdagi barcha sonlarning o‘rtacha qiymatini qaytarishi kerak.

function average(arr) {
  if (typeof arr != `object` || arr == undefined) {
    throw new TypeError(`Massiv no'to'g'ri berildi`);
  }
  let isExistNumber = arr.some((value) => {
    return typeof value == `number`;
  });
  if (!isExistNumber) {
    throw new Error(`Ichida kamida bitta son bo'lishi kerak`);
  }
  let sum = 0;
  let counter = 0;
  arr.forEach((value) => {
    if (typeof value == `number`) {
      sum += value;
      counter++;
    }
  });
  return sum / counter;
}
try {
  let arr = [1, 2, `salom`, true];
  console.log(average(arr));
} catch (error) {
  console.log(error);
}
// 3. O‘z xatolik funksiyasini yaratish
// Shart:
// Funksiya yozing, u ikki sonni bo‘lishni bajaradi.
// Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
// Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.
// Funksiyani try...catch orqali chaqiring:
// Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.
// Xato bo‘lmasa, natijani qaytaring.
function divide(a, b) {
  if (
    typeof a != `number` ||
    typeof b != `number` ||
    b == 0 ||
    a == NaN ||
    b == NaN
  ) {
    throw new Error(`Har ikkalasi ham sonn bo'lishi shart`);
  }
  return a / b;
}
try {
  console.log(4, 5);
} catch (error) {}

// Massivlarga oid masalalar
// Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.
function amountEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(amountEven(numbers));

// Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
function removeOdd(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOdd(numbers1));

// Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
function numOfUnieqe(arr) {
  return [...new Set(arr)].length;
}
const AlmostSameArrays = [1, 2, 3, 2, 4, 5, 3, 6, 4];

console.log(numOfUnieqe(AlmostSameArrays));

// Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.
function DifferenceBiggestAndSmallest(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let differ = max - min;
  return differ;
}
const arrayMayHaveDiffrence = [1, 2, 3, 2, 4, 5, 3, 6, 4];
console.log(DifferenceBiggestAndSmallest(arrayMayHaveDiffrence));

// Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.
function reverser(arr) {
  return [...arr].reverse();
}
const arrThatWantsReverseClone = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(reverser(arrThatWantsReverseClone));

// Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.
function givenElementAmounter(arr, value) {
  return arr.filter((item) => item == value).length;
}
const helperArr = [1, 2, 3, 2, 4, 5, 2, 6];
console.log(givenElementAmounter(helperArr, 2));

// Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.
function orderToLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
const words = ["apple", "banana", "kiwi", "grape", "strawberry"];
console.log(orderToLength(words));

// Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).
function dividerTwoPart(arr) {
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2));
  return [firstHalf, secondHalf];
}
const exampleArr = [1, 2, 3, 2, 4, 5, 2, 6];
console.log(dividerTwoPart(exampleArr));

// Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.
function positive(arr) {
  let positiveTeam = arr.filter((value) => {
    return value > 0;
  });
  return positiveTeam;
}
const Arr = [-1, 2, 3, -2, 4, -5, 2, -6, 8];
console.log(positive(Arr));

// Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.
function averageAmount(arr) {
  let sum = 0;
  let counter = 0;
  arr.forEach((value) => {
    sum += value;
    counter++;
  });
  return sum / counter;
}
const arr = [1, 2, 3, 2, 4, 5, 2, 6];
console.log(averageAmount(arr));

// Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.
function showDouble(arr) {
  const double = [];
  arr.forEach((value) => {
    double.push(value, value);
  });
  return double;
}
const arr1 = [1, 2, 3, 2, 4, 5, 2, 6];
console.log(showDouble(arr1));

// Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.
function capitalLetter(arrString) {
  return arrString.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
}
const letterWords = ["apple", "banana", "kiwi", "grape", "strawberry"];
console.log(capitalLetter(letterWords));

// Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).
// (tushinmadim)
// Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.
function longAndShort(arr) {
  let longest = arr[0];
  let shortest = arr[0];
  arr.forEach((value) => {
    if (value.length > longest.length) {
      longest = value;
    }
    if (value.length < shortest.length) {
      shortest = value;
    }
  });
  return [longest, shortest];
}
const lengthWords = ["apple", "banana", "kiwi", "grape", "strawberry"];
console.log(longAndShort(lengthWords));

// Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).
function changeToString(arr) {
  return arr.map((value) => String(value));
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(changeToString(nums));

// Stringlarga oid masalalar
// Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const sentence = "Salom, dunyo!";
console.log(countVowels(sentence));

// Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.
const phrase = "Great power comes with great responsibility";
function removeSpace(str, spc) {
  return str.replaceAll(spc, "");
}
console.log(removeSpace(phrase));

// Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.
function changeLoc(str) {
  let spc = " ";
  return str.split(spc).reverse().join(spc);
}
console.log(changeLoc(phrase));

// Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.
function orderToLengthStr(str) {
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(spc);
}
console.log(orderToLengthStr(phrase));

// Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.
function repeatedStr(str, word) {
  let counter = 0;
  str.split(" ").forEach((value) => {
    if (value.toLowerCase() == word.toLowerCase()) {
      counter++;
    }
  });
  return counter;
}
console.log(repeatedStr(phrase, "great"));

// Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.
function toLoverOrUpper(str) {
  return str.split(``).map((value) => {
    if (value == value.toUpperCase()) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  });
  join(``);
}
console.log(toLoverOrElse(phrase));

// Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.
function NumOfStr(str) {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== ` `) {
      sum += Number(char);
    }
  }
  return sum;
}
let example = ` men 11 yil maktabda o'qidim va 5yil universitetda`;
console.log(NumOfStr(example));

// Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.
function UniqueStr(str) {
  let uniqElement = [];
  for (char of str) {
    if (!uniqElement.includes(char)) {
      uniqElement.push(char);
    }
  }
  return uniqElement.join("");
}
console.log(UniqueStr(phrase));

// Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.
function reverseStr(str) {
  return str.split(``).reverse().join("");
}
console.log(reverseStr(phrase));

// Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.
function capLetter(str) {
  return str
    .split(` `)
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .join(" ");
}
console.log(capLetter(capLetter));

// Massiv va string metodlarini birgalikda ishlatadigan masalalar
// Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.
function strToArr(str) {
  return str.split(" ").sort().join(" ");
}
const alfavit = `nok olma banan gilos xurmo anor`;
console.log(strToArr(alfavit));

// Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.
function ArrToString(arr) {
  arr.join(` `);
}
arr = [`When`, `there`, `is`, "a", "will", "there", "is", "a", "way"];
console.log(ArrToString());

// Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.
function longestStr(arr) {
  let longest = arr[0];
  arr.forEach((value) => {
    if (value.length > longest.length) {
      longest = value;
    }
  });
  return longest;
}
let quote = `After every dark night, there is a bright morning.`;
console.log(longestStr(quote));

// Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.
function reverseArr(arr) {
  let newArr = [...arr];
  return newArr.reverse();
}
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArr(myArray)); // [5, 4, 3, 2, 1]

// Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan
function uniqueWords(str) {
  let words = str.split(" ");
  let uniqueWords = words.filter((word, index) => words.indexOf(word) == index);
  return uniqueWords;
}
const sentence1 = "apple banana apple grape orange banana apple";
console.log(uniqueWords(sentence1));
