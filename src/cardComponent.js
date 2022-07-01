import React, { useState } from "react";
import Modal from "./modalContainer";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal item={props.item} modalControl={setShowModal} />}
      <div className="card" onClick={() => setShowModal(true)}>
        <h3 className="card-name">{props.item.name}</h3>
        <span className="card-gender">Gender: {props.item.gender}</span>
        <span className="card-height">Height: {props.item.height}cm</span>
      </div>
    </>
  );
};

export default Card;
