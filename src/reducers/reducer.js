const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, sction.payload],
      };
    default:
      return state;
  }
};

export default reducer;
