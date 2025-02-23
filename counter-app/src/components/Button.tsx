import "./css/Button.css";

interface IProps {
  text: string;
  fn: () => void;
}

const Button = (props: IProps) => {
  return (
    <button className="btn" onClick={props.fn}>
      {props.text}
    </button>
  );
};

export default Button;
