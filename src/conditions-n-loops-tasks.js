/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    }
    return c;
  }
  if (b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }
  if (queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= a || c + b <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let final = '';
  if (num === 10) {
    final = 'X';
  } else if (num === 20) {
    final = 'XX';
  } else if (num === 30) {
    final = 'XXX';
  } else {
    let f = '';
    let s = '';
    if (num > 11) {
      f = Math.trunc(num / 10);
      s = num % 10;
    } else {
      s = num;
    }
    switch (f) {
      case 1:
        f = 'X';
        break;
      case 2:
        f = 'XX';
        break;
      case 3:
        f = 'XXX';
        break;
      default:
        f = '';
        break;
    }
    switch (s) {
      case 1:
        s = 'I';
        break;
      case 2:
        s = 'II';
        break;
      case 3:
        s = 'III';
        break;
      case 4:
        s = 'IV';
        break;
      case 5:
        s = 'V';
        break;
      case 6:
        s = 'VI';
        break;
      case 7:
        s = 'VII';
        break;
      case 8:
        s = 'VIII';
        break;
      default:
        s = 'IX';
    }
    final = f + s;
  }
  return final;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let finalStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        finalStr += 'minus';
        break;
      case '0':
        finalStr += 'zero';
        break;
      case '1':
        finalStr += 'one';
        break;
      case '2':
        finalStr += 'two';
        break;
      case '3':
        finalStr += 'three';
        break;
      case '4':
        finalStr += 'four';
        break;
      case '5':
        finalStr += 'five';
        break;
      case '6':
        finalStr += 'six';
        break;
      case '7':
        finalStr += 'seven';
        break;
      case '8':
        finalStr += 'eight';
        break;
      case '9':
        finalStr += 'nine';
        break;
      default:
        finalStr += 'point';
        break;
    }
    if (i !== numberStr.length - 1) {
      finalStr += ' ';
    }
  }
  return finalStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let num2 = num;
  while (num2 >= 10) {
    if (num2 % 10 === digit) {
      return true;
    }
    num2 = Math.trunc(num2 / 10);
  }
  if (num2 === digit) {
    return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }
  let sumLeft = arr[0];
  let sumRight = arr[arr.length - 1];
  for (let i = 1; i < arr.length - 1; i += 1) {
    for (let x = 1; x < i; x += 1) {
      sumLeft += arr[x];
    }
    for (let y = i + 1; y < arr.length - 1; y += 1) {
      sumRight += arr[y];
    }
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft = 0 + arr[0];
    sumRight = 0 + arr[arr.length - 1];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const startValue = JSON.parse(JSON.stringify(matrix));
  const matrixResult = matrix;
  for (let i = 0; i < matrixResult.length; i += 1) {
    for (let j = 0; j < matrixResult[i].length; j += 1) {
      matrixResult[j][matrixResult.length - 1 - i] = startValue[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const number1 = arr;
  let i = 0;
  let a = 0;
  let j = 0;
  for (j = 0; j < number1.length - 1; j += 1) {
    for (i = 0; i < number1.length - 1; i += 1) {
      if (number1[i] > number1[i + 1]) {
        a = number1[i];
        number1[i] = number1[i + 1];
        number1[i + 1] = a;
      }
    }
  }
  return number1;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = [...str];
  let iterationToStart = iterations;
  for (let i = 0; i < iterationToStart; i += 1) {
    const odd = [];
    let oddI = 0;
    const even = [];
    let evenI = 0;
    for (let element = 0; element < str.length; element += 2) {
      even[evenI] = result[element];
      odd[oddI] = result[element + 1];
      evenI += 1;
      oddI += 1;
    }
    result = [...even, ...odd];
    if (String(result).replace(/[\s.,%]/g, '') === str) {
      iterationToStart = iterations % (i + 1);
      i = -1;
    }
  }
  return String(result).replace(/[\s.,%]/g, '');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = str[i];
  }
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (+arr[i] !== 0) {
      if (+arr[i - 1] < +arr[i]) {
        let min = +arr[i];
        for (let j = i; j < arr.length; j += 1) {
          if (+arr[j] < min && +arr[j] > +arr[i - 1]) min = +arr[j];
        }
        let swapItemIndex;
        for (let k = 0; k < arr.length; k += 1) {
          if (arr[k] === `${min}`) swapItemIndex = k;
        }
        const temp = arr[swapItemIndex];
        arr[swapItemIndex] = arr[i - 1];
        arr[i - 1] = temp;
        const right = arr.splice(i).sort().join('');
        const left = arr.join('');
        return Number(left + right);
      }
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
