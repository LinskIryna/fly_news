   // const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// // })


// let a = ""


// for (let i = 0; i<10; i++)
// {
//  a+="#"
//  console.log(a)
// }



// let basket =[{name:"salt", price:10}, {name:"bread", price:5}, {name:"sugar", price:15}] 
// let total = 0
// for (let i = 0; i<basket.length; i++) {
//   total += basket[i].price

// }
// console.log(total)





/*for (let i = 1; i<=100; i++)
{
  if(i%3==0&&i%5==0){
    console.log("FizzBuzz")
  } else if(i%3==0){
    console.log("Fizz")
  } else if(i%5==0){
    console.log("Buzz")
  } else {
    console.log(i)
  }

}*/



/*for (let i = 0; i<=8; i++){
  if(i%2!=0){
    let line = " "
    for (let j = 0; j<=7; j++){
      if(j%2==0) {   
        line+="#" 
      } else {
        line+=" "
      }    
    }
    console.log(line)
  }
  else {
    let line = "#"
    for (let j = 0; j<=6; j++){
      if(j%2==0) {   
        line+=" " 
      } else {
        line+="#"
      }    
    }
    console.log(line)
  }
}*/



// const min = function (param1, param2){
//   if(param1>=param2){ 
//     return param2
//   } else {
//     return param1
//   }
// }
// let result = min(0,-10)
// console.log(result)


// function range(start, end){
//   let numbers = []
//   for(let i = start; i<=end; i++){
//     numbers.push(i)
//   }
//   return numbers
// }
// console.log(range(3,6))


// function sum(numbers){
//   let result = 0
//   for(let i = 0; i<numbers.length; i++){
//     result+=numbers[i]
//   }
//   return result
// }
// console.log(sum(range(1, 10)));



//  functi     on range(start, end, step){
//     let numbers = []
//     if(!step){
//       step = 1
//     }
//     for(let i = start; i<=end; i+=step){
//       numbers.push(i)
//     }
//     if(step < 0){
//       start < end
//      }
//     for(let i = start; i>=end; i+=step){
//       numbers.push(i)
//     }
//     return numbers
// }
// console.log(range(1,10,2))
// console.log(range(5,2,-1))


// function range(start, end, step){
//   let numbers = []
//   if(step < 0){
//     start < end
//   }
//   for(let i = start; i>=end; i+=step){
//     numbers.push(i)
//   }
//   return numbers
// }
// console.log(range(5,2,-1))


// function isEven(number){
//   if(number == 0){
//     return true
//   } 
//   if(number == 1){ 
//     return false
//   }
//   if(number < 0){
//     return isEven(number+2)
//   }
//   return isEven(number-2)
// } 
// console.log(isEven(-1))
// console.log(isEven(50))
// console.log(isEven(75))

// function countBs(string,symbol){
//   let count = 0
//   for(let i = 0; i<=string.length-1; i++){
//     if(string.charAt(i) == symbol){
//       count++
//     } 
//   }
//   return count
// }
// console.log(countBs("hello BBBB", "h"))

// function reverseArray(array){
//   let newArray = []
//   for(let i = array.length-1; i>=0; i--){
//     newArray.push(array[i])
//   }
//   return newArray
// }
// console.log(reverseArray([1,3,5,7]))


// function reverseArrayInPlace(array){
//   let arrayValue = []
//   for(let i = array.length-1; i>= 0; i--){
//     arrayValue.push(array[i])
//   }
//     return arrayValue
// }
// let arrayValue = [1, 2, 3, 4, 5]
// console.log(reverseArrayInPlace(arrayValue))


// let arrayValue = [1, 2, 3, 4, 5]
// arrayValue.reverse()
// console.log(arrayValue)



/*let O1 = {name:"fff", price:10, avaliable:true, status:{name:"кен"}}
let O2 = {name:"fff", price:10, avaliable:true, status:{name:"кен"}}
function deepEqual(object1, object2){
  for(let key in object1){
    if(!object2[key]){
      return false
    }
    if(typeof object1[key] == "object"){
      return deepEqual(object1[key], object2[key])
    }
    if(object1[key] !== object2[key]){
      return false
    } 
  }
  if(Object.keys(object1).length != Object.keys(object2).length){
    return false
  }
  return true

}
console.log(deepEqual(O1, O2))
console.log(typeof O1)

// console.log(Object.keys(O1).length)*/






// let str = "string not starting with capital"  
 
// function cursive_letter(str) {

//   return str.charAt(0).toUpperCase() + str.slice(1)

// }

// document.writeln(cursive_letter(str)) // "String not starting with capital"









// дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros (num, len, sign) {
//   let len_zer = len - (num + '').length, // к-во нулей
//   num_zer = '';
//     for ( ; len_zer > 0; len_zer--) {
//       num_zer += 0;
//     }
      
//     return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
//   }
  
//   document.writeln(zeros(145, 5, '-')); // -00145
//   document.writeln(zeros(33, 4, '+'));  // +0033
//   document.writeln(zeros(33, 4));       // 0033









  // поиск подстроки str2 в строкеstr1 без учёта регистра символов

//   function insensitive_search(str1, str2) {
//     let search_str = new RegExp(str2, "ig");
//     var result = str1.search(search_str);

//     return (result > 0) ? "Соответствует" : "Не соответствует";  
// }

// document.writeln(insensitive_search('Изучаю JavaScript', 'javascript'));
// // Соответствует
// document.writeln(insensitive_search('Изучаю JavaScript', 'javascriptS'));
// // Не соответствует





// Ограничить длину строки
// function limitStr(str, n, symb) {
//   if (!n && !symb) return str;
//   symb = symb || '...';
//   return str.substr(0, n - symb.length) + symb;
// }

// document.writeln(limitStr('Каждый охотник желает знать.')); // Каждый охотник желает знать.
// document.writeln(limitStr('Каждый охотник желает знать.',17)); // Каждый охотник...
// document.writeln(limitStr('Каждый охотник желает знать.',22,'!')); // Каждый охотник желает!












