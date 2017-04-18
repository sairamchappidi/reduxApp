import {
	TEST_ACTION,
	FETCH_DATA,
	REQUESTED_DATA,
    REQUESTED_SUCCESS,
    REQUESTED_FAILED
} from '../constants';

const initialState = {inProgress:false,
						error:null};
const pointTableReducer = (state=initialState,action)=>{
	switch (action.type) {
		case FETCH_DATA:
			
			return Object.assign({},state,action.payLoad);
		case REQUESTED_DATA:
			
			return Object.assign({},state,{inProgress:true});
		case REQUESTED_SUCCESS:
		
			return Object.assign({},state,{inProgress:false,
											data:action.payLoad});
		case REQUESTED_FAILED:
			
			return Object.assign({},state,{inProgress:false,
											error:action.errorMsg});
		default:
		
			return state;
	}
}
export default pointTableReducer;