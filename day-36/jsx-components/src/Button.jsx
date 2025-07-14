function Button(props) {
  return (
    <button
      onClick={props.clickMe}
      className={"main-button " + props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
