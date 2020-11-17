# Day 01: Javascript Necessary Knowledge Base

Ngày đầu tiền, mình xin giới thiệu đến các bạn một vài lý thuyết Javascript nền tảng được sử dụng rất nhiều khi làm việc với Reactjs.  
Series này tập trung vào React nên mình xin đi lướt qua nha, các bạn có thể tìm hiểu chi tiết hơn trên docs cũng như Google nhiều lắm. Hì Hì

## 1. **Var**, **Let** and **Const**

### 1.1 Var

#### Scope: globally scoped or function/locally scoped

`var` là câu lệnh dùng để khai báo biến có phạm vi là **function scoped** hoặc **globally scoped**.  
Scope của biến là Global khi chúng ta khai báo biến bên ngoài function block. Tương tự, scope của biến là function scoped khi biến được khai báo bên trong block của function.

```javascript
var name = 'thaibm'; // globally scoped

function newFunction() {
  var age = '25'; // function scoped
}

console.log(name); // output: thaibm
console.log(age); // Uncaught ReferenceError: age is not defined
```

#### Var variables: re-declared and updated

Biến được khai báo bởi `var` có thể được tái khai báo và update.

```javascript
var name = 'thaibm';
var name = 'quytm'; // re-declared
```

và

```javascript
var name = 'thaibm';
name = 'quytm'; // update
```

Scope và Re-declared là một trong những điểm yếu của `var`, nó sẽ nảy sinh vấn đề nếu như chúng ta ko biết hoặc ko nhớ biến đó đã từng được khai báo trước đó.

```javascript
if (true) {
  var name = 'minhnt';
}

console.log(name); // output: minhnt
```

hoặc

```javascript
var name = 'thaibm';
/*
 * vô vàn code và logic khác ở đây
 */
if (true) {
  var name = 'minhnt';
}

console.log(name); // output: minhnt
```

Vấn đề trên sẽ khiến code của chúng ta rất khó có thể debug và bảo trì. Bởi vậy thật là may mắn khi chúng ta có `let` và `const`.

### 1.2 Let

#### Scope: block scoped

Biến được khai báo bởi `let` có phạm vi trong block. Block là một đoạn code đc giới hạn bởi hai dấu ngoặc nhọn `{}` (curly braces).

```javascript
if (true) {
  let name = 'tutv';
  console.log(name); // output: tutv
}

console.log(name); // Uncaught ReferenceError: name is not defined
```

#### Let can be updated but not re-declared

Biến khai báo bới let có thể được update nhưng không thể được khái báo lại.

```javascript
let name = 'tutv';
name = 'thanhnv';
```

```javascript
let name = 'tutv';
let name = 'thanhnv'; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

### 1.3 Const

`const` giống `let` về scope tuy nhiên, biến được khai báo bởi `const` thì không thể được update, gán giá trị khác.

```javascript
const name = 'thaibm';
name = 'thanhnv'; // Uncaught TypeError: Assignment to constant variable.
```

_Một số lưu ý_  
Đối với biến có type là object hoặc array, chúng ta không thể gán lại giá trị cho biến nhưng có thể thay đổi giá trị của properties trong object hoặc thay đổi giá trị của phần tử trong mảng:

```javascript
const person = {
  name: 'thaibm',
  age: 25,
};

person.name = 'quytm'; // Thay đổi đc luôn, chẳng có lỗi gì cả =))
person = { name: 'minhnt', age: 25 }; // Uncaught TypeError: Assignment to constant variable.
```

```javascript
const array = ['thaibm', 'quytm'];

array[0] = 'thanhnv'; // ok, cũng chả lỗi luôn :v
array = ['minhnt', 'tutv']; // Uncaught TypeError: Assignment to constant variable.
```

## 2. Arrow function

Arrow function cho phép chúng ta khai báo function ngắn gọn hơn so với cách truyền thống:

```javascript
const hello = () => {
  return 'Hello';
};
// the same as
const helloShort = () => 'Hello';
```

Arrow function có params

```javascript
const hello = (name) => 'Hello ' + name;
// the same as
const helloShort = (name) => 'Hello ' + name;
```

Arrow function return an object

```javascript
const person = () => ({ name: 'thaibm', age: 17 }); // return an object
```

### `this` trong arrow function

`this` trong javascript là một cái gì đó khá lằng nhằng, lúc thế này lúc thế kia, trở mặt nhanh hơn tốc độ của người yêu cũ. Mình xin nhắc lại một vài ví dụ về `this` trong function truyền thống (ES5).

Nếu `this` nằm bên trong object's method:

```javascript
var person = {
  name: 'thaibm',
  showName: function () {
    console.log(this.name);
  },
};

person.showName(); // thaibm
```

Function `showName` thuộc object person, lúc này this sẽ refer đến object person. Ok mọi thứ vẫn bình thường, chưa có ny cũ nào trở mặt ở đây cả.

Bây giờ, giả sử `this` nằm bên trong function của method hoặc là callback. (Method là function của object)

```javascript
window.name = "window's name";

var person = {
  name: 'thaibm',
  tasks: ['eat', 'sleep', 'code'],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(this.name + ' wants to ' + task);
    });
  },
};

person.showTasks();
```

Và kết quả

```
window's name wants to eat
window's name wants to sleep
window's name wants to code
```

What the hợi??? Thực ra, `this` sẽ refer đến **_the owner of the function it is in_**, tuy nhiên trong trường hợp này function của chúng ta lại thuộc về window/global object.  
Khi chúng ta call `this` bên trong function không thuộc object nào cả hoặc function bên trong một method, khi này this sẽ thuộc vền window/global object.

```javascript
var standAloneFunc = function () {
  console.log(this);
};

standAloneFunc(); // [object Window]
```

Để khắc phục vấn đề trên, với ES5 chúng ta có 2 cách:

1. Tạo một variable bên ngoài function để lưu lại `this`

```javascript
var person = {
  name: 'thaibm',
  tasks: ['eat', 'sleep', 'code'],
  showTasks: function () {
    var _this = this;
    this.tasks.forEach(function (task) {
      console.log(_this.name + ' wants to ' + task);
    });
  },
};

person.showTasks();
// thaibm wants to eat
// thaibm wants to sleep
// thaibm wants to code
```

2. Sử dụng bind()

```javascript
var person = {
  name: 'thaibm',
  tasks: ['eat', 'sleep', 'code'],
  showTasks: function () {
    this.tasks.forEach(
      function (task) {
        console.log(this.name + ' wants to ' + task);
      }.bind(this)
    );
  },
};

person.showTasks();
// thaibm wants to eat
// thaibm wants to sleep
// thaibm wants to code
```

Tuy nhiên, với ES6 Arrow function, vấn đề trên sẽ bay màu luôn và ngay:

```javascript
var person = {
  name: 'thaibm',
  tasks: ['eat', 'sleep', 'code'],
  showTasks: function () {
    this.tasks.forEach((task) => {
      console.log(this.name + ' wants to ' + task);
    });
  },
};

person.showTasks();
// thaibm wants to eat
// thaibm wants to sleep
// thaibm wants to code
```

Trên [MDN web docs](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Functions/Arrow_functions) có định nghĩa `this` trong arrow function như sau:

> Arrow functions establish "this" based on the scope the Arrow function is defined within.

Có thể hiểu nôm na là giá trị của `this` sẽ phụ thuộc vào scope ở nơi mà arrow function đó được định nghĩa.

## 3. Import and Export

Javascript code của chúng ta có thể được chia thành nhiều file, với `export` và `import` chúng ta có thể khai báo những variables, function hoặc class rồi truy cập và sử dụng ở những file khác nhau.

Có 2 loại `export`:

1. Named Exports (Zero or more exports per module)
2. Default Exports (One per module)

### Named exports:

```javascript
// utility.js
// export individual features (can export var, let, const, function, class)
export const myVariable = Math.sqrt(2);
export function myFunction() { ... };
```

Sau đó chúng ta có thể import ở một nơi nào đó:

```javascript
import { myVariable } from './utility.js';
import { myFunction } from './utility.js';
// or import with alias
import { myVariable as variable } from './utility.js';
// or import the whole file
import * as util from './utility.js';
// Usage
util.myFunction();
```

### Default exports:

```javascript
// person.js
// export individual features (can export var, let, const, function, class)
const person = { name: 'thaibm' };
export default person;
```

```javascript
// myFunction.js
export default function () {}
```

```javascript
// myClass.js
export default class {}
```

Đối với default export chúng ta sẽ import như sau:

```javascript
import person from './person.js';
// or we can rename like this
import prs from './person.js';
```

```javascript
import myFunction from './myFunction.js';
```

```javascript
import MyClass from './myClass.js';
```

_Note_ Mình sẽ đi nhanh qua các khái niệm này cơ bản nhất có thể. Các bạn có thể xem và tham khảo thêm các cú pháp trên [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) nha!

## 4. Classes, properties and Methods

Khai báo và sử dụng `class` (ES6)

```javascript
class Person {
  constructor() {
    // declare a Property
    this.name = 'thaibm';
  }

  // declare a Method
  call() {
    console.log(this.name);
  }
}

// Usage
const person = new Person();
person.call(); // thaibm
console.log(person.name); // thaibm
```

Kế thừa (inheritance)

```javascript
class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // Nhớ call super nha
    this.name = 'thaibm';
  }

  call() {
    console.log(this.name);
  }
}

// Usage
const person = new Person();
person.call(); // thaibm
person.printGender(); // male
```

Với ES7 trở đi chúng ta có thể khai báo class như sau:

```javascript
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}
```

Và đây cũng là cách sử dụng bạn sẽ gặp nhiều khi làm việc với React.

## 5. Spread operators and Rest parameters

### Spread operators

Spread operators có cú pháp là `...` được sử dụng để split up array elements hoặc object properties. (Có thể dịch nôm na cho dễ hiểu là cắt nhỏ, chuyển đổi array thành nhiều phần tử, object thành nhiều properties)  
Ví dụ với array:

```javascript
const array1 = [1, 2, 3];
// Concatenate array
const array2 = [...array1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

// Copy array
const array3 = [...array1]; // [1, 2, 3]
```

Đối với object

```javascript
const obj1 = { name: 'thaibm', age: 17 };
// Copy object
const obj2 = { ...obj1 }; // {name: "thaibm", age: 17}

// Merge object
const obj3 = { ...obj1, gender: 'male' }; // {name: "thaibm", age: 17, gender: "male"}

// Or you can merege object like this:
const obj4 = { gender: 'male' };
const obj = { ...obj1, ...obj4 };
```

### Rest parameters

Rest parameters là khi chúng ta sử dụng `...` để biểu diễn một số lượng vô hạn arguments dưới dạng một mảng.  
Ví dụ khi ta viết function tính tổng nhiều số

```javascript
const sum = (...args) => {
  // args is an array here
  return args.reduce((previous, current) => {
    return previous + current;
  });
};

console.log(sum(1, 2, 3, 4)); // output: 10

// or
const numbers = [1, 2, 3, 4];
console.log(sum(...numbers)); // output: 10
```

Bạn có thể tìm hiểu thêm về `reduce()` ở [đây](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

## 6. Destructuring
