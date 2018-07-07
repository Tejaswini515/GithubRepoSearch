import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/list';
import  searchUsers from './actions/actions';
import store from './stores';

class Fetch extends Component {

    state = {
        userName: '',
        list: []
    }

    diffUser = async(e) => {
        e.preventDefault();
        const user = e.target.value;
        await this.setState({
            userName: user,
        });
        store.dispatch(searchUsers(user))
    }

    render(){

        const message = store.getState().message;
        console.log("Printing Message", message);
        console.log("Printing List", store.getState().list);

        return(
            <div>
                <input style={{width: "100%",height:"25px",borderTop:"2px"}} 
                       type="text" 
                       onChange={this.diffUser}
                       placeholder="Please enter username"/>
                {(store.getState().list !== null) ? <List list={store.getState().list} /> : null}               
                <h3> {store.getState().message} </h3> 
            </div>
        );
    }
}

function mapStateToProps(state){
	return {
		list : state.list
	}
}

export default connect(mapStateToProps)(Fetch);
