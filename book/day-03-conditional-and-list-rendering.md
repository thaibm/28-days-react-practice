# Day 03: Conditional and List Rendering

Table of contents

1. [Conditional Rendering](#1-conditional-rendering)
2. [List Rendering](#2-list-rendering)

---

## 1. Conditional Rendering

Khác với Angular hay VueJS cung cấp cho chúng ta các directive như \*ngIf hay v-if, React không có những directive như vậy và chúng ta sẽ sử dụng js conditional (if else).

> Everything is Javascript!

Preparation (Lưu ý mình lấy ví dụ với functional component nha, với classed-base component sẽ có một vài khác biêt các bạn thử thực hành cho quen tay nhé hihe):

```jsx
// App.js
// Add showPerson and togglePerson function
const [showPerson, setShowPerson] = useState(false);

const togglePerson = () => {
  setShowPerson(!showPerson);
};
```

Có cách để sử dụng như sau:

### 1. Sử dụng toán tử `&&`:

```jsx
// App.js
return (
  <div className="App">
    <h1>React Sample App</h1>
    <button onClick={togglePerson} style={btnStyle}>
      Toggle Person
    </button>
    {showPerson && (
      <Person name={person.name} click={changePerson} change={changeNameHandle}>
        {statement}
      </Person>
    )}
  </div>
);
```

Trong Javascript, khi thực thi condition đầu tiên nếu false thì sẽ không thực hiện condition tiếp theo.

### 2. Sử dụng Conditional (ternary) operator: `condition ? exprIfTrue : exprIfFalse`

```jsx
{
  showPerson ? (
    <Person name={person.name} click={changePerson} change={changeNameHandle}>
      {statement}
    </Person>
  ) : null;
}
```

### 3. Sử dụng `if - else` thông thường

```jsx
let personElement = null;

if (showPerson) {
  personElement = (
    <Person name={person.name} click={changePerson} change={changeNameHandle}>
      {statement}
    </Person>
  );
}

return (
  <div className="App">
    <h1>React Sample App</h1>
    <button onClick={togglePerson} style={btnStyle}>
      Toggle Person
    </button>
    {personElement}
  </div>
);
```

Hoặc

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

Với 3 cách trên, tùy vào từng ngữ cạnh cụ thể các bạn hãy chọn ra các thức phù hợp nha.

## 2. List Rendering
