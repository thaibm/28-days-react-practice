const Person = (props) => {
  return (
    <div>
      <p>I am {props.name}!</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
