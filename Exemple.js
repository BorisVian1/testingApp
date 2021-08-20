const _show = (show) => {     // TESTINg COmmit!!!!!!!!!!
    console.log(show);
};
                    // String 
function reverseStr(str) {                   
    return str.split('').reverse().join(''); // реверс 
};

function isPalindrome(line) {
    return ('' + line) === ('' + line).split('').reverse().join(''); // Палиндром
};

var isAnagram = function(test, original) {                          //Анаграм
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    return test === original;
};               // String 

                 // Number                                           
function opposite(number) {     // Вернуть противоположное число
    return (-number);
};

function even_or_odd(number) { // Возвращает четное для четных и не четное для нечетных
    if(number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
};

function century(year) {
  return Math.floor(year / 100) + (year % 100 ? 1 : 0); // Столетие 1705, 1900, 2000
};

function mygcd(a, b){
    while(b !== 0) b = a % (a = b); // Алгоритм Евклида — это алгоритм нахождения наибольшего общего делителя (НОД) пары целых чисел.
    return a;
  };
  
  function factorial(n)              // Факториал
  {
    if(n === 0) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  }
  function factorial(n)
  { if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
  return n > 1 ? n * factorial(n-1) : 1;
  }
             // Number  


