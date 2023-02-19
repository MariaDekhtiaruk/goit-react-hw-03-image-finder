const Button = ({ onClickHandler, title }) => {
  return (
    <button className="Button" onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;
