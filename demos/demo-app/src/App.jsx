import './App.css'
import { useState } from 'react';

function App() {
  const stories = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

  // A - Fonction définie dans App
  const handleSearch = (event) => {
    // D - Recevoir la valeur de Search
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Mes technologies</h1>
      {/* B - Passage de la fonction en props */}
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories}/>
    </div>
  )
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // C - Execution callback transmis par l'app
    props.onSearch(event);

  }

  return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
        <p>Searching for <strong>{searchTerm}</strong></p>
      </div>
  )
}

const List = ({ list }) =>
(
  <ul>
    {list.map(function(item) {
      return (
        <Item key={item.objectID} item={item}/>
      )
    })}
  </ul>
)

const Item = ({ item }) =>
(
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> | {item.author}</span>
    <span> | {item.num_comments} comments</span>
    <span> | {item.points} points</span>
  </li>
)

export default App
