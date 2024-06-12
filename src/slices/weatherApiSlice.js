import { apiSlice } from './apiSlice';

const LOCAL_BACKEND_URL = 'http://localhost:10000/api/weather'; // URL base local

export const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findPlaces: builder.query({
      query: (text) => `${LOCAL_BACKEND_URL}/places?text=${text}`, // Usamos la URL local y omitimos la clave API ya que se maneja internamente en el backend
    }),
  }),
});

export const { useFindPlacesQuery } = weatherApiSlice;