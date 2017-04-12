import React from 'react';

const _renderHeader = ()=>{
	return (
			<tr>
	              <th>Team</th>
	              <th>M</th>
	              <th>W</th>
	              <th>L</th>
	              <th>NRR</th>
	              <th>Pts</th>
	          </tr>
		)
}
const TableHeader = (props)=>{
	return(
		 	<thead>
	          {_renderHeader()}       
			</thead>
		)
}
export default TableHeader;