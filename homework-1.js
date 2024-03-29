//Homework-1-Array Metods

//sort()

Array.prototype.mySort = function (func) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (func(this[j], this[j + 1]) > 0) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

let arr1 = [66, 5636, 5, 2, 356, 244, 2345, 45];

arr1.mySort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(arr1);

//every

Array.prototype.myEvery = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let arr2 = [33, 74, 9, 52, 5, 8222];

console.log(
  arr2.myEvery((el, ind, arr) => {
    return el > 555;
  })
);

//some

Array.prototype.mySome = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

let arr3 = [33, 74, 9, 52, 5, 8222];

console.log(
  arr3.mySome((el, ind, arr) => {
    return el > 5555555555;
  })
);

//reduce

Array.prototype.myReduce = function (func, sp) {
  let res = sp;
  for (let i = 0; i < this.length; ++i) {
    res = func(res, this[i], i, this);
    console.log(res);
  }
  return res;
};

let arr4 = ["a", "b", "g", "d", "e", "x"];

console.log(
  arr4.myReduce((sum, letter) => {
    return sum + letter;
  }, "33")
);

// filter

Array.prototype.myFilter = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

let arr5 = [44, 10, 6, 4, 8, 22, 6, 84, 34, 83322];

arr5.myFilter((el, ind, arr) => {
  return el > 10;
});

console.log(arr5);

//forEach

Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
  return this;
};

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

arr6.myForEach((el, ind, arr) => {
  sum += el;
  return sum;
});

console.log(sum);

//map

Array.prototype.myMap = function (func) {
  for (let i = 0; i < this.length; i++) {
    this[i] = func(this[i], i, this);
  }
  return this;
};

let arr7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr7.myMap((el, ind, arr) => {
  return el + 1;
});

console.log(arr7);

//find

Array.prototype.myFind = function (func) {
    for(let i = 0;i < this.length; i++){
        if(func(this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
}

let arr8 = [1,4,6,8,3,5,7,4,2,2,4,556,4,775];

console.log(arr8.myFind((el, ind, arr) => {return el > 444}));

//findIndex

Array.prototype.myFindIndex = function (func) {
    for(let i = 0;i < this.length; i++){
        if(func(this[i], i, this)){
            return i;
        }
    }
    return undefined;
}

let arr9 = [1,4,6,8,3,5,7,4,2,2,4,556,4,775];

console.log(arr8.myFindIndex((el, ind, arr) => {return el > 555555}));
