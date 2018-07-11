import React from 'react';
import Enzyme,{ render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Fetch } from './Fetch';

Enzyme.configure({ adapter: new Adapter() });

describe('Render Fetch Component', () => {

  it('render snapshot', () => {

    const wrapper = render(<Fetch />);
    expect(wrapper).toMatchSnapshot();
  });
  
});


