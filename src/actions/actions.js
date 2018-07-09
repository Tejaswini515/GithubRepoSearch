// import axios from 'axios';
import store from '../stores';

const userFound = (repos) => {
    return {
        type: "USER_FOUND",
        data: repos,
    }
}

const noRepos = (userName) => {
    return {
        type: "NO_REPOS",
        userName: userName,
    }
}

const userNotFound = () => {
    return {
        type: "USER_NOT_FOUND",
    }
}

const fetchError = (error) => {
    return {
        type: "FETCH_ERROR",
        err: error,
    }
}

function searchUsers(userName){
    return (dispatch) => {
        return fetch(`https://api.github.com/users/${userName}/repos`)
               .then(res => {
                   if(res.ok){
                       return res.json()
                   }
                   else {
                       throw Error(res.status);
                   }                 
                })
               .then(data => {
                   if(data.length === 0){
                       console.log('No Repos')
                        store.dispatch((noRepos(userName)))
                   }
                    else{
                        store.dispatch((userFound(data)))
                    }
                }).catch((err)=> {
                    console.log("Error", err);
                   if(err.message === '404') store.dispatch((userNotFound()));
                   else store.dispatch((fetchError(err)));
               })
    }
}

export default searchUsers;