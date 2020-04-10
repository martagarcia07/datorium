// import * as React from 'react';
// import { NavMenu } from './NavMenu';

import * as Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<NavMenu />', () => {

    it('should write hello world!', () => {
        // const wrapper = shallow(<NavMenu />);
        setTimeout(() => {
            // expect(txt.text()).toEqual('Hello, world!');
        }, 200);
    });
});