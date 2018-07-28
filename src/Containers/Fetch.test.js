import React from 'react';
import Enzyme,{ render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Fetch } from './Fetch';

Enzyme.configure({ adapter: new Adapter() });

describe('Render Fetch Component', () => {

  let wrapper;

  beforeEach(()=> {
     wrapper = render(<Fetch />);
  })

  it('render snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('render input element', () => {
    expect(wrapper.find('input').prop('placeholder')).toEqual('Please enter username');
  })

});
