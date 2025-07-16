function Button({ children, className, onClick, onMouseDown }) {
  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={"border border-amber-500 py-1 rounded-xl px-3 " + className}
    >
      {children}
    </button>
  );
}

export default Button;
