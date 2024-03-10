// 1

function reverseRecursive(num, i = 0, res = "") {
  let numstr = String(num);
  if (i === numstr.length - 1) {
    return (res += numstr[numstr.length - 1 - i]);
  }
  res += numstr[numstr.length - 1 - i];

  return reverseRecursive(num, i + 1, res);
}

console.log(reverseRecursive(31));

// 2

function findSecond(num, arr, j = 0, r = 0) {
  if (arr[j] === num) {
    r++;
  }
  if (r === 2) {
    return j;
  }

  return findSecond(num, arr, j + 1, r);
}

console.log(findSecond(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]));

// 3

let y = 0;
let re = 0;

function findHMT(letters, text, y = 0, re = 0) {
  if (y === text.length - letters.length - 1) {
    return re;
  }

  if (text.substr(y, letters.length) === letters) {
    re++;
  }
  return findHMT(letters, text, y + 1, re);
}

console.log(findHMT("ar", "Are var far shared?"));

// 4

let resalt;

function replacedPI(text, h = 0) {
  let pi = "3.14";
  if (h === text.length - 3) {
    return resalt;
  }
  if (text.substr(h, 2).toUpperCase() === "PI") {
    resalt = text.slice(0, h) + pi + text.slice(h + 2);
  }
  return replacedPI(resalt, h + 1);
}

console.log(replacedPI("picturespicturespictures"));

// 5
function flattenArray(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}
let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
let flattenedArray = flattenArray(nestedArray);

console.log("Nested Array:", nestedArray);
console.log("Flattened Array:", flattenedArray);

// 6

function sumRecursive(num) {
  let numarr = String(num).split("");
  let sum = numarr.reduce((sum, el) => {
    return sum + Number(el);
  }, 0);
  if (String(sum).length === 1) {
    return sum;
  }
  return sumRecursive(sum);
}

console.log(sumRecursive(39));
