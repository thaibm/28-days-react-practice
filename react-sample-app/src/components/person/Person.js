import styles from './Person.module.css';

const Person = (props) => {
  const clickHandle = () => {
    props.click();
  };

  return (
    <div className={styles.person}>
      <p onClick={clickHandle}>I am {props.name}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Person;
