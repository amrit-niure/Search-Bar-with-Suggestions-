import './App.css';
import ResultsList from './ResultsList';
import SearchBar from './SearchBar';
import React from 'react'

function App() {

const [text,setText] = React.useState({
  searchText:""
}
)
function fetchData(value){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

  .then(json => {
    const results = json.filter(user =>{
      return value && user && user.name && user.name.includes(value)
    })
    setResults(results)
  })
  // && user.name.toLowerCase().includes(value)
}
function onChange(event){
  const {name,value} = event.target
 setText(prevState =>{
  return {
    ...prevState,
    [name]:value
  }
 })
 fetchData(value)
} 

const [results,setResults] = React.useState([])

  return (
    <div className="App">
      <div className="search-bar-container">
      <SearchBar  onChangeHandler={onChange} value={text.searchText}/>
       <ResultsList results = {results}/>
      </div>
    </div>
  );
}

export default App;
