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

*Một số lưu ý*  
Đối với biến có type là object hoặc array, chúng ta không thể gán lại giá trị cho biến nhưng có thể thay đổi giá trị của properties trong object hoặc thay đổi giá trị của phần tử trong mảng:
```javascript
const person = {
    name: 'thaibm',
    age: 25
};

person.name = 'quytm'; // Thay đổi đc luôn, chẳng có lỗi gì cả =))
person = {name: 'minhnt', age: 25}; // Uncaught TypeError: Assignment to constant variable.
```
```javascript
const array = ['thaibm', 'quytm'];

array[0] = 'thanhnv'; // ok, cũng chả lỗi luôn :v
array = ['minhnt', 'tutv']; // Uncaught TypeError: Assignment to constant variable.
```

