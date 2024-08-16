import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_FILTERS } from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    user: '',
    category: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
