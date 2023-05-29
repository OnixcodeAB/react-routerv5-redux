const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const ifExit = state.myList.find((item) => item.id === action.payload.id);
      if (ifExit) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: [...state.myList.filter((items) => items.id != action.payload)],
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REQUEST_VIDEO":
      return {
        ...state,
        playing:
          state.trends
            .concat(state.originals)
            .find((item) => item.id === Number(action.payload)) || {},
      };

    case "SEARCH_VIDEO":
      if(action.payload ==""){
        return{
          ...state,
          search:[]
        }
      }
      return {
        ...state,
        search: state.trends
          .concat(state.originals)
          .filter((item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
      };

    default:
      return state;
  }
};

export default reducer;
