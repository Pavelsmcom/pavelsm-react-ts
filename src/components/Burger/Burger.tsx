import "./Burger.css";

interface BurgerProps {
  isBurgerOpen: boolean;
  click: () => void;
}

function Burger({ click, isBurgerOpen }: BurgerProps) {
  function handleClick() {
    click();
  }

  return (
    <>
      <button className="burger" onClick={handleClick} aria-label="burger button">
        <span
          className={
            isBurgerOpen ? "burger__line burger__line_position_1_open" : "burger__line burger__line_position_1"
          }
        ></span>
        <span
          className={
            isBurgerOpen ? "burger__line burger__line_position_2_open" : "burger__line burger__line_position_2"
          }
        ></span>
        <span
          className={
            isBurgerOpen ? "burger__line burger__line_position_3_open" : "burger__line burger__line_position_3"
          }
        ></span>
      </button>
    </>
  );
}

export default Burger;
