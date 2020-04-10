// import * as React from 'react';
// import { Layout } from './Layout';

import * as Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {

    it('should write hello world!', () => {
        // const wrapper = shallow(<Layout />);
        setTimeout(() => {
            // expect(txt.text()).toEqual('Hello, world!');
        }, 200);
    });
});