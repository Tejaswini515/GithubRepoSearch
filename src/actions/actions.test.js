import searchUsers, { userFound, noRepos, userNotFound, fetchError } from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  
    it('should create an action to request user found', () => {
    const result = {
      type: "USER_FOUND"
    }
    expect(userFound()).toEqual(result)
  })

  it('should create an action to request no repos', () => {
    const result = {
      type: "NO_REPOS"
    }
    expect(noRepos()).toEqual(result)
  })

  it('should create an action to request user not found', () => {
    const result = {
      type: "USER_NOT_FOUND"
    }
    expect(userNotFound()).toEqual(result)
  })

  it('should create an action to request fetch error', () => {
    const result = {
      type: "FETCH_ERROR"
    }
    expect(fetchError()).toEqual(result)
  })

})


// describe('Async Actions', () => {
//     describe('Dispatch No Repos action', () => {
//         it('No Repos ', () => {
//             const expectedActions = [
//                 { type: "NO_REPOS" , data: []}
//             ]
//             const store = mockStore({ list : null })
    
//             return store.dispatch(searchUsers('something')).then(() => { 
//                 // expect(store.getActions()).toEqual(expectedActions)
//                 console.log('Store: ', store.getState());
//                 console.log('Actions: ', store.getActions());                
//             })
//         })
//     })
//   })