import reducer from './reducer'

describe('reducer', () => {
   
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            list: null,
            message: '',
        }
      )
    })

    it('should return the state for USER_NOT_FOUND action', () => {
        expect(reducer([], {type: "USER_NOT_FOUND"})).toEqual(
            {list: [], message: 'No Such User'}
        )
    })

})