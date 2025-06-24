export const Hamburger = ({ onClick }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
    </>
  );
};
