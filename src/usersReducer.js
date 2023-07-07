const initialState = {
    userList: [],
    loading: false,
    error: null,
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          userList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  