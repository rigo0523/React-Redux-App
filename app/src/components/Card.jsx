import React, { useEffect } from "react";
import { getCharacter } from "../actions";
import { connect } from "react-redux";
// console.log(getCharacter, "getcharacter here");

const Card = (props) => {
  // console.log(props, "props inside CARD");
  useEffect(() => {
    console.log("reached USE EFFECT");
    setTimeout(() => {
      props.getCharacter();
    }, 3000);
  }, []);

  console.log("card props", props.character);

  return (
    <div className="contentContainer">
      {props.isFetching ? (
        <h1>LOADING ...</h1>
      ) : (
        <>
          {props.character.map((obj) => (
            <div className="card" key={obj.id}>
              <img src={obj.image} alt="rick and morty cards" />
              <h1>Name:{obj.name}</h1>
              <h2>Status:{obj.status}</h2>
              <h2>
                Planet Origin:
                {obj.origin ? obj.origin.name : "not specified"}
              </h2>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "STATE INSIDE MAP STATE TO PROPS");
  return {
    character: state.character,
    isFetching: state.isFetching,
    errors: state.errors,
  };
};
export default connect(mapStateToProps, { getCharacter })(Card);
