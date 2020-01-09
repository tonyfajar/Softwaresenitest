import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component{
	constructor(props) {
        super(props);
		this.state = {
			reposdataa: []
		}
        this._handleSubmit = this._handleSubmit.bind(this);
    }
	
	_handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs.userInput.value);
		axios.get(`https://api.github.com/users/${this.refs.userInput.value}/repos`).then(resp => {
			this.setState({
				reposdata : resp.data
			});
		})
    }

   render(){
	   const {onChangeForm, onSubmit} = this.props;
      return (
		<form>
		  <input
			type="text"
			placeholder="GitHub username"
			required
			ref="userInput" 
			className="search-page__input"
			name="user"
			onChange={onChangeForm}
		  />
		  <button onClick={onSubmit}>Add card</button>
		</form>
	  )
   }
}
export default Form;