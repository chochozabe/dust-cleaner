import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = (props) => {
  const { currentDate } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [cleaners, setCleaners] = useState([]);
  const [name, setName] = useState("");
  const [week, setWeek] = useState([]);
  const [aloneWeek, setAloneWeek] = useState(0);
  const weekDay = 4;

  const handleInput = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleButton = () => {
    console.log("handleButton");
    const notEmptyName = name.trim();

    if (notEmptyName !== "") {
      setCleaners([...cleaners, notEmptyName]);
      setName("");
    } else {
      alert("아무도 없는데요 .... ?");
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();

    setAloneWeek(e.target.value);
  };

  const shuffle = () => {
    let tmpCleaners = cleaners.sort(() => Math.random() - 0.5);
    setCleaners([...tmpCleaners]);
  };

  const countWeek = () => {
    let numOfPerWeek = [...Array(weekDay)].map((n, idx) => {
      if (idx + 1 == aloneWeek) {
        return 1;
      } else {
        return 2;
      }
    });

    let tmpWeek = [];
    numOfPerWeek.map((num, idx) => {
      [...Array(num)].map((n) => {
        tmpWeek.push(idx + 1 + "주차");
      });
    });

    setWeek([...tmpWeek]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>혼자하게 될 주차를 골라주세용</h3>
        <select name="aloneWeek" id="aloneWeek" onChange={handleSelect}>
          <option value="X">N주차</option>
          {[...Array(weekDay)].map((n, idx) => {
            const week = idx + 1;
            return <option value={week}>{week}주차</option>;
          })}
        </select>
      </div>

      <div>
        <h3>청소당번 추가하기</h3>
        <input type={"text"} value={name} onChange={handleInput} />
        <button onClick={handleButton}>추가</button>
      </div>

      {cleaners.length > 0 ? (
        <>
          <div style={{ width: "50%", margin: "0 auto" }}>
            {cleaners.map((cleaner, idx) => {
              return (
                <Card
                  isFlipped={isFlipped}
                  name={cleaner}
                  week={week[idx]}
                  key={idx}
                />
              );
            })}
          </div>

          <div>
            <button
              onClick={() => {
                shuffle();
              }}
            >
              섞기
            </button>
            <button
              onClick={() => {
                countWeek();
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
