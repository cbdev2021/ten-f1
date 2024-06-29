// actions.js

export const selectCity = (city) => {
    return {
        type: 'SELECT_CITY',
        payload: city
    };
};

export const updateNotSelected = (cities) => {
    return {
        type: 'UPDATE_NOT_SELECTED',
        payload: cities
    };
};
