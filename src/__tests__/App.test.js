import React from 'react';
jest.mock('../getData.js');
import Main from '../components/Main.jsx';
import { shallow, mount } from 'enzyme'
import { jokes } from '../__mocks__/getData';

describe('Main', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = await mount(<Main />)
  })

  it('should be set state on componentDidMount', () => {

    expect(wrapper.length).toEqual(1)
    expect(wrapper.state().jokes).toEqual(jokes.value)
    expect(wrapper.state().jokes.length).toEqual(3)
  })

  it('should render jokes on the page', () => {
    wrapper.update()
    const JokeList = wrapper.find('JokeList')

    expect(JokeList.length).toEqual(1)

    const Jokes = JokeList.find('Joke')
    expect(Jokes.length).toEqual(3)
  })

  it('should update jokes when form is filled out', () => {
    
  })
})
