import { useState } from 'react'
import Header from './components/Header'
import BeansList from './components/Lists/BaensList'
import FactsList from './components/Lists/FactsList'

export default function App() {
  const [listProp, setListProp] = useState('beans')
  const selectedList = (prop: string) => {
    switch (prop) {
      case 'Beans':
        return <BeansList />
      case 'Facts':
        return <FactsList />
      case 'Recipes':
      case 'Combinations':
      case 'History':
      default:
        return <BeansList />
    }
  }
  return (
    <main>
      <Header listProp={listProp} setListProp={setListProp} />
      {selectedList(listProp)}
    </main>
  )
}
