import { apiSlice } from './apiSlice';

const LOCAL_BACKEND_URL = 'http://localhost:10000/api/weather';
// const LOCAL_BACKEND_URL = 'https://ten-b1.vercel.app/api/weather'; 

export const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findPlaces: builder.query({
      query: (text) => `${LOCAL_BACKEND_URL}/places?text=${text}`, // Usamos la URL local y omitimos la clave API ya que se maneja internamente en el backend
    }),
    getWeatherPoint: builder.query({
      query: ({ lat, lon }) => `${LOCAL_BACKEND_URL}/point?lat=${lat}&lon=${lon}`,
    }),
  }),
});

export const { useFindPlacesQuery, useGetWeatherPointQuery } = weatherApiSlice;