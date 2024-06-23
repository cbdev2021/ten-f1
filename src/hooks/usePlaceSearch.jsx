import { useFindPlacesQuery } from '../slices/weatherApiSlice';

const usePlaceSearch = (inputValue) => {
    const { data, isLoading } = useFindPlacesQuery(inputValue);

    return {
        places: data || [],
        isLoading
    };
};

export default usePlaceSearch;
