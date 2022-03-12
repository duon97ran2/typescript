import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

interface IProduct{
  id:number,
  name:string
}

const data =[
  {id:1, name: "product A"},
  {id:2, name: "product B"},
]

function App() {
  const [products, setProducts]= useState<IProduct[]>(data);
  return (
    <div className='app'>  
    </div>
  )
}

export default App
