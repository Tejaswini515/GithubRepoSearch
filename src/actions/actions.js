import axios from 'axios';
import store from '../stores';

const userFound = (repos) => {
    return {
        type: "USER_FOUND",
        data: repos,
    }
}

const noRepos = () => {
    return {
        type: "NO_REPOS",
    }
}

const userNotFound = () => {
    return {
        type: "USER_NOT_FOUND",
    }
}

function searchUsers(userName){
    return (dispatch) => {
        return axios.get(`https://api.github.com/users/${userName}/repos`)
               .then((res) => {
                   if(res.data.length === 0){
                       console.log('No Repos')
                        store.dispatch((noRepos()))
                   }
                    else{
                        store.dispatch((userFound(res.data)))
                    }
                }   
               ).catch((err)=> {
                    console.log('User not found');
                    store.dispatch((userNotFound()));
               })
    }
}

export default searchUsers;