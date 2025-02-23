interface Iprops {
  value: number;
}

const Message = (props: Iprops) => {
  return <h5>{props.value}</h5>;
};

export default Message;
