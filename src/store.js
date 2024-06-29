// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import cityReducer from './reducers/cityReducer'; // Asegúrate de importar el reducer de ciudades

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cities: cityReducer, // Asegúrate de agregar el reducer de ciudades aquí
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

// // store.js

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import { apiSlice } from './slices/apiSlice';
// import cityReducer from './reducers/cityReducer'; // Importa el reducer de ciudades

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth: authReducer,
//     cities: cityReducer, // Agrega el reducer de ciudades aquí
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import { apiSlice } from './slices/apiSlice';

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

// export default store;
