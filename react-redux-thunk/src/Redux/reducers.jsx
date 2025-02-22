const initialState = {
  data: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        data: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
 export default reducer
