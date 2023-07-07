const initialState = {
    // Initial state for users
    userList: [],
    loading: false,
    error: null,
  };
  
  const usersReducer = (state = initialState, action) => {
    // Reducer logic for users
    switch (action.type) {
      // Handle actions for fetching users, adding users, updating users, etc.
      default:
        return state;
    }
  };
  
  export default usersReducer;
  