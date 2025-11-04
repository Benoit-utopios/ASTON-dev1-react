import './App.css'
import { useState, useEffect } from 'react';

// function useStorageState(key, initialState) {
//   const [value, setValue] = useState(localStorage.getItem(key) || initialState)

//   useEffect(() => {localStorage.setItem(key, value)}, [key, value])

//   return [value, setValue]
// }

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

  // const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") ?? "React")

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]); // <- dépendance: l'effet rejoue quand searchTerm change

  const handleSearch = (e) => setSearchTerm(e.target.value)

  return (
    <main>
      <h1>Mes technologies</h1>
      <InputWithLabel
        id="search"
        label="Search"
        search={searchTerm} 
        onSearch={handleSearch} 
      />
      <InputWithLabel
        id="author"
        label="author"
        search={searchTerm} 
        onSearch={handleSearch} 
      />
      <InputWithLabel
        id="date"
        label="date"
        search={searchTerm} 
        onSearch={handleSearch} 
      />
      <InputWithLabel
        id="edition"
        label="edition"
        search={searchTerm} 
        onSearch={handleSearch} 
      />
      <hr />
      <List  list={searchedStories}/>
    </main>
  )
}

const InputWithLabel = ({id, label, search, onSearch}) => {
  return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" value={search} onChange={onSearch} />
        <p>Recherche: <strong>{search}</strong></p>
      </>
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
