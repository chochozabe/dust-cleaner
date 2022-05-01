import React from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

const Card = (props) => {
  const { isFlipped, name, week } = props;

  const styles = {
    cardWrap: {
      border: "3px solid gray",
      borderRadius: "5px",
      display: "inline-block",
      width: "10vw",
      height: "15vh",
      margin: "10px",
    },
    cardText: {
      lineHeight: "15vh",
    },
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      containerStyle={styles.cardWrap}
    >
      <div style={styles.cardText}>{name}</div>

      <div style={styles.cardText}>{week}</div>
    </ReactCardFlip>
  );
};

export default Card;
