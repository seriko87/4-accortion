import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showHide, setShowHide] = useState("none");
  const [isHide, setIsHide] = useState(true);

  const show = () => {
    setShowHide("block");
    setIsHide(false);
  };
  const hide = () => {
    setShowHide("none");
    setIsHide(true);
  };
  return (
    <>
      <div className='qtitle'>
        <section className='uquest'>
          <h3>{question.title}</h3>
          {isHide ? (
            <button onClick={() => show()}>
              <AiOutlinePlus />
            </button>
          ) : (
            <button onClick={() => hide()}>
              <AiOutlineMinus />
            </button>
          )}
        </section>

        <div className='info' style={{ display: showHide }}>
          {question.info}
        </div>
      </div>
    </>
  );
};

export default Question;
