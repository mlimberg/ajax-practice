import React from 'react';
jest.mock('../getData.js');
import Main from '../components/Main.jsx';
import { shallow } from 'enzyme'

describe('Main', () => {

  it('should be tested!', async () => {
    const wrapper = await shallow(<Main />)

    expect(wrapper.length).toEqual(1)
    console.log('state ', wrapper.state())
  })
})
