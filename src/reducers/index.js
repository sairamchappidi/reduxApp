import { combineReducers } from 'redux';
import PointsTableReducer from './pointTableReducer';

const rootReducer = combineReducers({
    PointsData : PointsTableReducer
});

export default rootReducer;
