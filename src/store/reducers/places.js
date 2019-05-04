import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                      uri: 'https://i.pinimg.com/originals/30/37/d4/3037d403a1fa2150134917436a3266b8.png'
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                  })
            };
        default: 
            return state;
    }
};

export default reducers;
