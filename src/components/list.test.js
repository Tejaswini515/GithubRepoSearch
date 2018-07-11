import React from 'react';
import renderer from 'react-test-renderer';
import List from './list';

describe('Render List Component ',()=> {
    const props = {
        list: []
    }
    it('List Snapshot', () => {
        const tree = renderer
          .create(<List {...props}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})
