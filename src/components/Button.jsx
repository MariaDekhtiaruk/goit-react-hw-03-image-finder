const Button = ({ onClickHandler, title, isLoadMoreVisible }) => {
  return isLoadMoreVisible ? (
    <button className="Button" onClick={onClickHandler}>
      {title}
    </button>
  ) : null;
};

export default Button;
