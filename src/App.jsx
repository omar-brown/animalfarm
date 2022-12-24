import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const {search, animals} = useAnimalSearch();

  return (
    <div className="App">
      <h1>Animal Farm</h1>
      <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)}></input>
      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}
        {animals.length === 0 && 'No animals found...'}
      </ul>
    </div>
  )
}
function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{animal.type}</strong> {animal.name} {animal.age}
    </li>
  )
}
function useAnimalSearch(){
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery)
  }, [])

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080' + new URLSearchParams({q})
    )
    const data = await response.json();
    setAnimals(data);
    localStorage.setItem('lastQuery', q);
  }
  return {search, animals}
}
export default App
