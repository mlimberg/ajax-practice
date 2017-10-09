const jokes = {
  value: [
    {
      joke: "Chuck Norris once ate four 30lb bowling balls without chewing.",
      id: 331,
    },
    {
      joke: "If you Google search &quot;Chuck Norris getting his ass kicked&quot; you will generate zero results. It just doesn't happen.",
      id: 332,
    },
    {
      joke: "Ghosts are actually caused by Chuck Norris killing people faster than Death can process them.",
      id: 333,
    }
  ]
}

const getData = url => {
  console.log('mocked!')
  return new Promise(res => res(jokes))
}

export default getData;
