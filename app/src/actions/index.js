import axios from "axios";
import React, { useEffect } from "react";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR";

export const getCharacter = () => (dispatch) => {
  dispatch({ type: FETCH_CHARACTER_START });

  // console.log("testing isndie getcharacter");

  return axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    console.log("server response", res.data.results);
    dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results });
  });
};
