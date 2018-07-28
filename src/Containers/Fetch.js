import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../Components/list';
import { searchUsers } from '../stores/actions';

export class Fetch extends Component {

    state = {
        userName: '',
    }

    diffUser = async(e) => {
        e.preventDefault();
        const user = e.target.value;
        await this.setState({
            userName: user,
        });

        this.props.searchUsers(this.state.userName);
    }

    render(){

        return(
            <div>
                <input style={{width: "100%",height:"25px",borderTop:"2px"}} 
                       type="text" 
                       onChange={this.diffUser}
                       placeholder="Please enter username"/>
                {(this.props.list) ? <List list={this.props.list} /> : null}               
                <p> {this.props.message} </p> 
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
        list : state.list,
        message: state.message
	}
}

const mapDispatchToProps = dispatch => {
    return {
        searchUsers: (userName) => {
        dispatch(searchUsers(userName))
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Fetch);
