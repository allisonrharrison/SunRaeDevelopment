import React, { useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./LetterSlide.scss";

export default function LetterSlide() {
  const [state, setState] = React.useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => !state);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main">
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              {state ? (
                <h1>
                  <i className="fas fa-sun"></i>
                </h1>
              ) : (
                <h1 className="u">U</h1>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
