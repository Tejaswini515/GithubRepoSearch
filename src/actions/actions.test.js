import { userFound, noRepos, userNotFound, fetchError } from './actions'

describe('Actions', () => {
  
    it('should create an action to request user found', () => {
    const expectedAction = {
      type: "USER_FOUND"
    }
    expect(userFound()).toEqual(expectedAction)
  })

  it('should create an action to request no repos', () => {
    const expectedAction = {
      type: "NO_REPOS"
    }
    expect(noRepos()).toEqual(expectedAction)
  })

  it('should create an action to request user not found', () => {
    const expectedAction = {
      type: "USER_NOT_FOUND"
    }
    expect(userNotFound()).toEqual(expectedAction)
  })

  it('should create an action to request fetch error', () => {
    const expectedAction = {
      type: "FETCH_ERROR"
    }
    expect(fetchError()).toEqual(expectedAction)
  })

})

