export const ColoredMessage = (props/*{color,children} */) => {
  console.log(props);
  //const {color,children} = props;と分割代入できる

  const contentStyle = {
    color: props.color,
    fontSize:"20px"
  };
  return <p style={contentStyle}>{props.children}</p>;
}
