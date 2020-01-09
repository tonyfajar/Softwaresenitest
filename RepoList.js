import React, { Component } from 'react';
import axios from 'axios';

class RepoList extends Component{
	constructor(props) {
        super(props);

    }
	
	render(){
		const {data} = this.props;
		console.log(data);
		return (
			<table>
				<thead>
					<tr>
						<th scope="col">No</th>
						<th scope="col">Repository Name</th>
						<th scope="col">URL</th>
					</tr>
				</thead>
				<tbody >		
						{	
							data.map((item, index) => {
								const {id, name,git_url} = item;
								return (
									<tr key={id} data-item={id} onClick={()=> this.props.onClickDetails(id)} >
									<td>{index+1}</td>
									<td>{name}</td>
									<td>{git_url}</td>
									</tr>
								);
							})
						}
				</tbody>
			</table>
		)
	}
}
export default RepoList;