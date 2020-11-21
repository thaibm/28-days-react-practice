# Day 02: React Base Features & Syntax

Table of contents

1. [Preparation](1-preparation)
2. [JSX](2-jsx)
3. [Component Basics](3-Component-Basics)

---

## 1. Preparation

Đầu tiên để bắt đầu chúng ta phải khởi tạo project và chạy trên localhost phải không nào! (Nếu các bạn chưa có Nodejs thì cài [Nodejs](https://nodejs.org/en/) trước nha.)  
Trong series này mình sẽ giới thiệu react và sử dụng typescript. Chúng ta khởi tạo và run react project với [create-react-app](https://create-react-app.dev/docs/getting-started/) như sau:

```
npx create-react-app react-sample-app --template typescript
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
├── tsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.tsx
    ├── App.test.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    └── setupTests.ts
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
