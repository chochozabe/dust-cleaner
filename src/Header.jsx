import React from "react";

const Header = (props) => {
  const { month } = props;

  return (
    <>
      <h1>{"먼지를 치워봅시다 쓱싹쓱싹 🧹🧹"}</h1>
      <h2>~ {month}월 청소당번 정하기 ~</h2>
    </>
  );
};

export default Header;
