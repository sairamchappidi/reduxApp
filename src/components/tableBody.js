import React from 'react';

const _renderBody = (team)=>{
	return (
			<tr key ={team.id}>
				<td>{team.name}</td>
				<td>{team.matches}</td>
				<td>{team.win}</td>
				<td>{team.loss}</td>
				<td>{team.nrr}</td>
				<td>{team.pts}</td>
			</tr>
		)
}
const TableBody = (props)=>{
	let teams = props.teams;

		return(
		 	<tbody key ={Date.now()}>
		       { teams.map((team) =>{
		          	
		            	 return (_renderBody(team))
		        	
		          	
		          	})
	      	}       
			</tbody>
		)
	
}
export default TableBody;