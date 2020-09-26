import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
} from "../actions";

console.log("naming check", FETCH_CHARACTER_START);

const initialState = {
  character: [],
  isFetching: false,
  errors: "",
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      console.log("start fetching");
      return {
        ...state,
        character: [],
        isFetching: true,
        errors: "",
      };
    case FETCH_CHARACTER_SUCCESS:
      console.log("fetched successfully");
      return {
        ...state,
        character: action.payload,
        isFetching: false,
        errors: "",
      };
    default:
      return state;
  }
};
