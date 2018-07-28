
export const userFound = (repos) => {
    return {
        type: "USER_FOUND",
        data: repos,
    }
}

export const noRepos = (userName) => {
    return {
        type: "NO_REPOS",
        userName: userName,
    }
}

export const userNotFound = () => {
    return {
        type: "USER_NOT_FOUND",
    }
}

export const fetchError = (error) => {
    return {
        type: "FETCH_ERROR",
        err: error,
    }
}

export function searchUsers(userName){
    console.log(userName);
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
                        dispatch((noRepos(userName)))
                   }
                    else{
                        dispatch((userFound(data)))
                    }
                }).catch((err)=> {
                    console.log("Error", err);
                   if(err.message === '404') dispatch((userNotFound()));
                   else dispatch((fetchError(err)));
               })
    }
}
