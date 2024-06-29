import { useFindPlacesQuery } from '../slices/weatherApiSlice';

const usePlaceSearch = (inputValue) => {
    const { data, isLoading } = useFindPlacesQuery(inputValue);

    return {
        places: data || [],
        isLoading
    };
};

export default usePlaceSearch;


// import { useState, useEffect } from 'react';
// // Simulación de los datos del JSON con un retardo de 10 ms
// const mockData = [
//     {
//         "name": "Santiago",
//         "place_id": "santiago",
//         "adm_area1": "Santiago Metropolitan",
//         "adm_area2": "Provincia de Santiago",
//         "country": "Republic of Chile",
//         "lat": "33.45694S",
//         "lon": "70.64827W",
//         "timezone": "America/Santiago",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago de los Caballeros",
//         "place_id": "santiago-de-los-caballeros",
//         "adm_area1": "Santiago",
//         "adm_area2": "Santiago de los Caballeros",
//         "country": "Dominican Republic",
//         "lat": "19.4517N",
//         "lon": "70.69703W",
//         "timezone": "America/Santo_Domingo",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago de Cuba",
//         "place_id": "santiago-de-cuba",
//         "adm_area1": "Santiago de Cuba",
//         "adm_area2": "Municipio de Santiago de Cuba",
//         "country": "Republic of Cuba",
//         "lat": "20.02083N",
//         "lon": "75.82667W",
//         "timezone": "America/Havana",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago",
//         "place_id": "santiago-1687801",
//         "adm_area1": "Cagayan Valley",
//         "adm_area2": "Province of Isabela",
//         "country": "Philippines",
//         "lat": "16.68808N",
//         "lon": "121.5487E",
//         "timezone": "Asia/Manila",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago de Compostela",
//         "place_id": "santiago-de-compostela",
//         "adm_area1": "Galicia",
//         "adm_area2": "A Coruña",
//         "country": "Spain",
//         "lat": "42.88052N",
//         "lon": "8.54569W",
//         "timezone": "Europe/Madrid",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago",
//         "place_id": "santiago-12157129",
//         "adm_area1": "Cusco",
//         "adm_area2": "Provincia de Cusco",
//         "country": "Republic of Peru",
//         "lat": "13.52728S",
//         "lon": "71.9843W",
//         "timezone": "America/Lima",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago",
//         "place_id": "santiago-3449741",
//         "adm_area1": "Rio Grande do Sul",
//         "adm_area2": "Santiago",
//         "country": "Brazil",
//         "lat": "29.19167S",
//         "lon": "54.86722W",
//         "timezone": "America/Sao_Paulo",
//         "type": "settlement"
//     },
//     {
//         "name": "Santiago Metropolitan",
//         "place_id": "region-metropolitana",
//         "adm_area1": "Santiago Metropolitan",
//         "adm_area2": null,
//         "country": "Republic of Chile",
//         "lat": "33.47269S",
//         "lon": "70.64724W",
//         "timezone": "America/Santiago",
//         "type": "administrative_area"
//     },
//     {
//         "name": "Provincia de Santiago",
//         "place_id": "provincia-de-santiago",
//         "adm_area1": "Santiago",
//         "adm_area2": null,
//         "country": "Dominican Republic",
//         "lat": "19.31667N",
//         "lon": "70.88333W",
//         "timezone": "America/Santo_Domingo",
//         "type": "administrative_area"
//     },
//     {
//         "name": "Santiago de Cali",
//         "place_id": "cali",
//         "adm_area1": "Valle del Cauca",
//         "adm_area2": "Cali",
//         "country": "Republic of Colombia",
//         "lat": "3.43722N",
//         "lon": "76.5225W",
//         "timezone": "America/Bogota",
//         "type": "settlement"
//     }
// ];

// const usePlaceSearch = (inputValue) => {
//     const [places, setPlaces] = useState([]);
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         let timeoutId;

//         const fetchData = () => {
//             setLoading(true);
//             // Simular una respuesta con retardo de 10 ms
//             timeoutId = setTimeout(() => {
//                 setPlaces(mockData); // Establecer los datos simulados
//                 setLoading(false);
//                  console.log(" retorna search")
//             }, 2000);
           

//             return () => clearTimeout(timeoutId); // Limpiar el timeout si el componente se desmonta antes de completarse
//         };

//         fetchData();

//         // Limpiar el timeout si el componente se desmonta
//         return () => clearTimeout(timeoutId);
//     }, [inputValue]);

//     return {
//         places,
//         isLoading
//     };
// };

// export default usePlaceSearch;
