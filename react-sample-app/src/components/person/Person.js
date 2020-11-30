const Person = (props) => {
  const clickHandle = () => {
    props.click();
  };

  return (
    <div>
      <p onClick={clickHandle}>I am {props.name}!</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
