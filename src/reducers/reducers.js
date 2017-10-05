import { combineReducers } from 'redux';

const titles = (state = '', action) => {
  switch (action.type) {
    case 'ideaPreprocessing':
      return [...state , action.title];
    default:
      return state
  }
}

const reducer = combineReducers({ titles });

export default reducer;