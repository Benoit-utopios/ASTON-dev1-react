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
  const [searchTerm, setSearchTerm] = useState('')

  // A - Fonction définie dans App
  const handleSearch = (event) => {
    // D - Recevoir la valeur de Search
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h1>Mes technologies</h1>
      {/* B - Passage de la fonction en props */}
      <Search onSearch={handleSearch} />
      <hr />
      <List filter={searchTerm} list={stories}/>
    </div>
  )
}

const Search = (props) => {
  return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} />
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
