import React, { Component,Fragment } from 'react';
import Form from './Form';
import axios from 'axios';
import RepoList from './RepoList';

class App extends Component{
	constructor(props) {
        super(props);
		this.state = {
			reposdata: [],
			dataIsLoad:false
		}
    }
	onSubmit(e){
		e.preventDefault();
		axios.get(`https://api.github.com/users/${this.state.user}/repos`).then(resp => {
			this.setState({
				reposdata : resp.data,
				dataIsLoad: true
			});
		})
	}
	
	onChangeForm(e){
		this.setState({
			[e.target.name] : e.target.value
		});
	}


	render(){
		return(
			<Fragment>
				<Form onSubmit={this.onSubmit.bind(this)} onChangeForm={this.onChangeForm.bind(this)}/>
				{this.state.dataIsLoad && <RepoList data={this.state.reposdata}/> }
			</Fragment>
		);
	}
}
export default App;