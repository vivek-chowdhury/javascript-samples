/**
 * Question 1: How do you find the missing number in a given integer array?
 * Question 2: How do you find the duplicate number on a given integer array?
 * Question 3: How do you find the largest and smallest number in an unsorted integer array?
 * Question 4: How do you find all pairs of an integer array whose sum is equal to a given number?
 * Question 5: How do you find the first Unique Character in given String?
 * Question 6: How can a given string be reversed using recursion?
 * Question 7: How do you check if two strings are anagrams of each other?
 */
class ArrayManipulation {
  constructor() {}
  /**
   * @description This method is responsible for finding missing number from given array.
   * Solving question 1
   * @param {*} numbers
   */
  findMissingValue(numbers) {
    let expectedNumber = (numbers.length * (numbers.length + 1)) / 2;
    let total = 0;
    for (let n in numbers) {
      total += numbers[n];
    }
    // console.log(expectedNumber, total);
    return total - expectedNumber;
  }

  /**
   * @description This method is responsible for removing duplicate value from the given list.
   * Solving question number 2
   * @param {*} numbers
   */
  removeDuplicateValue(numbers) {
    let uniqueList = numbers.filter((value, index) => {
      return numbers.indexOf(value) === index;
    });
    return uniqueList;
  }

  /**
   * @description This method is responsible for finding smallest and largest value in the given array.
   * Solving questin 3
   * @param {*} numbers
   */
  findLargestAndSmallestNumber(numbers) {
    // O(n)
    let largest = 0,
      smallest = 0;
    for (let n in numbers) {
      if (largest < numbers[n]) {
        largest = numbers[n];
      } else if (smallest > numbers[n]) {
        smallest = numbers[n];
      }
    }
    return { min: smallest, max: largest };
  }

  /**
   * @description This method is responsible for finding pair from array who's sum is equal
   * to given value. Solving question 4
   * @param {*} numbers
   * @param {*} sum
   */
  findPairofGivenSum(numbers, sum) {
    //O(n^2) because we have nested loop.
    for (let i = 0; i < numbers.length; i++) {
      let first = numbers[i];
      for (let z = i; z < numbers.length; z++) {
        let second = numbers[z];
        if (first + second === sum) {
          console.log(`(${first} + ${second})`);
        }
      }
    }
  }

  /**
   * @description This method is responsible for removing duplicate characters from the
   * given word. Solving question 5
   * @param {*} word
   */
  removeDuplicateCharacters(word) {
    // O(n)
    word = word.toLowerCase();
    let unique = [];
    for (let c in word) {
      let character = word[c];
      if (!unique.includes(character)) {
        unique.push(character);
      }
    }
    return unique.join("");
  }

  /**
   * @description This method is responsible for reversing string without library and using
   * recursion. Solving questin 6
   * @param {*} word
   */
  reverseStringUsingRecursion(word) {
    return this.recursiveReverse(word, word.length - 1);
  }

  recursiveReverse(word, index) {
    let character = word[index];
    if (index !== 0) {
      character += this.recursiveReverse(word, --index);
    }
    return character;
  }

  isAnagaram(sourceWord = "", targetWord = "") {
    if (!sourceWord || !targetWord) {
      return false;
    }
    sourceWord = sourceWord.trim();
    targetWord = targetWord.trim();
    if (sourceWord.length !== targetWord.length) {
      return false;
    }
    let source = sourceWord.split("").sort().join("");
    let target = targetWord.split("").sort().join("");
    return source === target;
  }
}

let arrayManipulation = new ArrayManipulation();
let missingNumberlist = [1, 2, 3, 4, 6, 7, 9, 8, 10];
let duplicateList = [1, 1, 2, 2, 3, 4, 5, -2, -1];
let minMaxList = [-20, 34, 21, -87, 92, 2147483647];
let pairList = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];

console.log(
  "Missing number : ",
  arrayManipulation.findMissingValue(missingNumberlist)
);
console.log(
  "Unique list: ",
  arrayManipulation.removeDuplicateValue(duplicateList)
);
let output = arrayManipulation.findLargestAndSmallestNumber(minMaxList);
console.log("Smallest number : ", output.min, " Largest number : ", output.max);
arrayManipulation.findPairofGivenSum(pairList, 7);
console.log(
  "After removing duplicated characters from string : ",
  arrayManipulation.removeDuplicateCharacters("baraban")
);
console.log(
  "Reverse String using recursion : ",
  arrayManipulation.reverseStringUsingRecursion("Vivek Chowdhury")
);

console.log("Is Anagram : ", arrayManipulation.isAnagaram("Vivek", "Vikev"));
