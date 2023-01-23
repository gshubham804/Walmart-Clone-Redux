const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
    user: null, // null if not logged in, otherwise an object with user data
  }
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload;
      },
      logout: state => {
        state.user = null;
      },
    },
  });
  
  export const { loginSuccess, logout } = authSlice.actions;
  export default authSlice.reducer;
  