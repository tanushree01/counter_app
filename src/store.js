    // store/store.js
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './redux/countSlice'; // Example

    const store = configureStore({
      reducer: {
        counter: counterReducer
      },
    });
     export default store;