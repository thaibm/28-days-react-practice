# Day 01: Javascript Necessary Knowledge Base

Ngày đầu tiền, mình xin giới thiệu đến các bạn một vài lý thuyết Javascript nền tảng được sử dụng rất nhiều khi làm việc với Reactjs.

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
// tương đương
const helloShort = () => 'Hello';
```
Arrow function có params
```javascript
const hello = (name) => 'Hello ' + name;
// tương đương
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
  showName: function() {
    console.log(this.name);
  }
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
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    });
  }
};

person.showTasks();
```
Và kết quả 
```
window's name wants to eat
window's name wants to sleep
window's name wants to code
```
What the hợi??? Thực ra, `this` sẽ refer đến ***the owner of the function it is in***, tuy nhiên trong trường hợp này function của chúng ta lại thuộc về window/global object.  
Khi chúng ta call `this` bên trong function không thuộc object nào cả hoặc function bên trong một method, khi này this sẽ thuộc vền window/global object.
```javascript
var standAloneFunc = function(){
  console.log(this);
}

standAloneFunc(); // [object Window]
```

Để khắc phục vấn đề trên, với ES5 chúng ta có 2 cách:
1. Tạo một variable bên ngoài function để lưu lại `this`
```javascript
var person = {
  name: 'thaibm',
  tasks: ['eat', 'sleep', 'code'],
  showTasks: function() {
    var _this = this;
    this.tasks.forEach(function(task) {
      console.log(_this.name + " wants to " + task);
    });
  }
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
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    }.bind(this));
  }
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
  showTasks: function() {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
  }
};

person.showTasks();
// thaibm wants to eat
// thaibm wants to sleep
// thaibm wants to code
```

Trên [MDN web docs](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Functions/Arrow_functions) có định nghĩa `this` trong arrow function như sau:
> Arrow functions establish "this" based on the scope the Arrow function is defined within.  

Có thể hiểu nôm na là giá trị của `this` sẽ phụ thuộc vào scope ở nơi mà arrow function đó được định nghĩa.

