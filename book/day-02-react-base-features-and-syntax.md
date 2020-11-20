# Day 02: React Base Features & Syntax

Table of contents  
1. [Preparation](1-preparation)
2. [JSX](2-jsx)
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
