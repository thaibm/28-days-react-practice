# Day 02: React Base Features & Syntax

Table of contents

1. [Preparation](#1-preparation)
2. [JSX](#2-jsx)
3. [Component Basics](#3-Component-Basics)
4. [Props](#4-props)
5. [Children Property](#5-children-property)
6. [State](#6-state)

---

## 1. Preparation

Đầu tiên để bắt đầu chúng ta phải khởi tạo project và chạy trên localhost phải không nào! (Nếu các bạn chưa có Nodejs thì cài [Nodejs](https://nodejs.org/en/) trước nha.)  
Chúng ta khởi tạo và run react project với [create-react-app](https://create-react-app.dev/docs/getting-started/) như sau:

```
npx create-react-app react-sample-app
cd react-sample-app
npm start
```

Cấu trúc thư mục:

```
react-sample-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

## 2. JSX

React giới thiệu JSX, đây là một cú pháp mở rộng cho javascript. Thành phần cơ bản nhất trong jsx là Element.

```JSX
// fileName.jsx
const name = 'thaibm';
const element = <h1 className="title">Hello, {name}</h1>;
```

Babel biên dịch JSX thành những câu gọi hàm `React.createElement()`. Do vậy đoạn code trên cũng tương đương với:

```JSX
const name = 'thaibm';
const element = React.createElement(
    'h1',
    {className: 'title'},
    `Hello, ${name}!`
);
```

Kết quả sau khi render: `<h1 class="title">Hello, thaibm!</h1>`.  

**_Một số lưu ý:_**

```JSX
const element = (
    <div className="app">
        <h1 className="title">Hello, thaibm!</h1>
    </div>
)
```

Trong ví dụ trên các bạn để ý `<div className="app"></div>` là parentElement còn `<h1 className="title">Hello, thaibm!</h1>` là childElemnt.

Ngoài ra các bạn thấy ta có `className` chứ không phải `class` như khi code HTML nha. Trông thì khá giống HTML, nhưng đó lại ko phải HTML. `className` là một trong những HTMLAttributes, các bạn có thể xem thêm trong

```ts
// /node_modules/@types/react/index.d.ts
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // Standard HTML Attributes
  className?: string;
  hidden?: boolean;
  id?: string;
  placeholder?: string;
  style?: CSSProperties;
  ...
}
```

## 3. Component Basics
React cung cấp cho chúng ta hai cách để khai báo một component:

### Classed-base component
```JSX 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Sample App</h1>
      </div>
    );
  }
}
```

### Functional component
```JSX 
function App() {
  return (
    <div className="App">
      <h1>React Sample App</h1>
    </div>
  );
}
```

### Reusing component
Chúng ta khởi tạo một component là Person:
```JSX
// components/person/Person.js
const Person = () => {
    return <p>I am Iron man!</p>;
}

export default Person;
```
Sau đó import ở nơi cần sử dụng và dùng thôi hiha. Cú pháp khá giống như việc gọi component trong Angular hoặc Vue nha.
```JSX
import Person from './components/person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Sample App</h1>
        <Person />
        {/* or */}
        <Person></Person>
        {/* or call many times as you want */}
        <Person />
        <Person />
      </div>
    );
  }
}
```
> Note: Always start component names with a capital letter.  

Chú ý là luôn bắt đầu component với chữ cái in hoa nha vì React coi những thẻ bắt đầu với chữ thường là DOM tags.

## 4. Props
Component cho phép truyền vào input, nhìn khá giống với HTML attributes và chúng thì được gọi là Props. Cách sử dụng prop như sau:
```JSX
// components/person/Person.js
const Person = (props) => {
  return <p>I am {props.name}!</p>;
};
```
```JSX
// App.js
<Person name="Iron man"/>
```
> Note: Props are Read-Only

Chúng ta ko được thay đổi giá trị của props.

## 5. Children Property
Chúng ta có thể truyền content vào giữa opening và closing tags, đó là children prop:
```JSX
// components/person/Person.js
const Person = (props) => {
  return (
    <div>
      <p>I am {props.name}!</p>
      <p>{props.children}</p>
    </div>
  );
};
```
```JSX
// App.js
<Person name="Iron man">Love you 3000!</Person>
```

## 6. State
