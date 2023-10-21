import "./SwipeHint.css";

import swipe from "../../images/swipe-right.gif";

function SwipeHint() {
  return (
    <section className="swipe-hint">
      <img src={swipe} alt="swipe" className="swipe-hint__gif"></img>
    </section>
  );
}

export default SwipeHint;
