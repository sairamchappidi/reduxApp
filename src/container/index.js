import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {fetchData,asyncFetch} from '../actions'
import TableHeader from '../components/tableHeader';
import TableBody from '../components/tableBody';

class PointsTable extends Component{
	_handleCLick = () =>{
		// this.props.fetchData();
		this.props.asyncFetch();
	}
	render(){
		let {teams, inProgress, error} = this.props
		if(inProgress){
			return(<div className="loader"></div>)
		}
		else if(teams && !inProgress){
			return(
			<div>
			  	<table className='highlight'>
			       <TableHeader />
			       <TableBody teams={teams} />
      			</table>
      			
      		</div>
			)
		}
		else if(!teams && !inProgress && error != null){
			return (<div>{error}</div>)
		}
		else{
			return(
				<button className="btn waves-effect waves-light" type="" name="action" onClick={this._handleCLick}>Fetch
  				</button>)
		}
	}
}
const mapStateToProps = (state)=>{
	let {PointsData}  = state;
	return {
		inProgress:PointsData.inProgress,
		teams:PointsData.data,
		error:PointsData.error
	}
	
};
const mapDispatchToProps = (dispatch)=>{

	return bindActionCreators({
		fetchData:fetchData,
		asyncFetch:asyncFetch
	},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PointsTable);