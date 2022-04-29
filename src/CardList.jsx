import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cleaners, setCleaners] = useState([]);
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleButton = () => {
    const notEmptyName = name.trim();

    if (notEmptyName !== "") {
      setCleaners([...cleaners, notEmptyName]);
      setName("");
    } else {
      alert("아무도 없는데요 .... ?");
    }
  };

  useEffect(() => {
    console.log(cleaners);
  }, [cleaners]);

  return (
    <>
      <div>
        <h3>청소당번 추가하기</h3>
        <input type={"text"} value={name} onChange={handleInput} />
        <button onClick={handleButton}>추가</button>
      </div>

      {cleaners.length > 0 ? (
        <>
          <div>
            {cleaners.map((cleaner, idx) => {
              return <Card isFlipped={isFlipped} name={cleaner} />;
            })}
          </div>

          <div>
            <button>섞기</button>
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              결과 확인
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardList;
