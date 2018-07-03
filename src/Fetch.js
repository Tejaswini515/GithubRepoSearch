import React, { Component } from 'react';
import axios from 'axios';

class Fetch extends Component {

    state = {
        userName: '',
        list: null
    }

    diffUser = async(e) => {
        e.preventDefault();
        await this.setState({
            userName: e.target.value,
        });
        this.handleFetch();
    }

    handleFetch = () => {
        axios.get(`https://api.github.com/users/${this.state.userName}/repos`)
        .then(res => {
            if(res.status === 404) {
                console.log('No such user')
            }
            else {
                if(res.data.length === 0){
                    this.setState({list: `${this.state.userName} does not have any repos`})
                }
                else {
                    const list = res.data.map(repo => {
                        return <li style={{listStyle : "none"}} key={repo["id"]}>
                                    <strong>{repo["name"]}</strong>   
                                    <a style={{float:"right"}} href={repo["html_url"]}>{repo["html_url"]}</a>
                                </li>
                    })
                    this.setState({list: list});
                }

            }
        }).catch(err => {
                        console.log('Username does not exists')
                        this.setState({list: 'No Such User'});
            });
    } 

    render(){
        
        return(
            <div>
                <input style={{width: "100%",height:"25px",borderTop:"2px"}} 
                       type="text" 
                       onChange={this.diffUser}
                       placeholder="Please enter username"/>
                <ul style={{padding:'0px'}}> {this.state.list} </ul>
            </div>
        );
    }
}

export default Fetch;