import React from "react";

const ModalContainer = (props) => {
  return (
    <div className="modalContainer" id={props.index}>
      <div className="modal">
        <div className="modal-header">
          <img src="" alt="" />
          <h3 id="card-name">{props.item.name}</h3>
          <button id="x-button" onClick={() => props.modalControl(false)}>
            X
          </button>
        </div>

        <div className="modal-information">
          <p>Birth Year: {props.item.birth_year}</p>
          <p>Eye Color: {props.item.eye_color}</p>
          <p>Gender: {props.item.gender}</p>
          <p>Hair Color: {props.item.hair_color}</p>
          <p>Height: {props.item.height}cm</p>
          <p>Mass: {props.item.mass}kg</p>
          <p>Skin Color: {props.item.skin_color}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
