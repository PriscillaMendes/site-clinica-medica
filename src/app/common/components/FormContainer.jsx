function FormContainer(props) {
  const { children, title, srcImg } = props;

  return (
    <div className="mt-4">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active underlineHover">{title}</h2>
          <div className="fadeIn first">
            <img className="user-logo-size" src={srcImg} id="icon" alt="User Icon" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
