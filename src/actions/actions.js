// import axios from 'axios';
import store from '../stores';

// const userFound = (repos) => {
//     return {
//         type: "USER_FOUND",
//         data: repos,
//     }
// }

// const noRepos = (userName) => {
//     return {
//         type: "NO_REPOS",
//         userName: userName,
//     }
// }

const userNotFound = () => {
    return {
        type: "USER_NOT_FOUND",
    }
}

function searchUsers(userName){
    return (dispatch) => {
        return fetch(`https://api.github.com/users/${userName}/repos`)
               .then((res) => {
                console.log("Response: ",res);
                   console.log("Json: ",res.json);
                //    if(res.data.length === 0){
                //        console.log('No Repos')
                //         store.dispatch((noRepos(userName)))
                //    }
                //     else{
                //         store.dispatch((userFound(res.data)))
                //     }
                }   
               ).catch((err)=> {
                   console.log("Error ",err);
                    // console.log('User not found');
                    store.dispatch((userNotFound()));
               })
    }
}

export default searchUsers;