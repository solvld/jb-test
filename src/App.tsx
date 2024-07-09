import { useState } from 'react'
import Header from './components/Header'
import BeansList from './components/Lists/BaensList'
import FactsList from './components/Lists/FactsList'
import RecipesList from './components/Lists/RecipesList'
import CombinationsList from './components/Lists/CombinationsList'
import MilestonesList from './components/Lists/MilestoneList'

export default function App() {
  const [listProp, setListProp] = useState('beans')
  const selectedList = (prop: string) => {
    switch (prop) {
      case 'Beans':
        return <BeansList />
      case 'Facts':
        return <FactsList />
      case 'Recipes':
        return <RecipesList />
      case 'Combinations':
        return <CombinationsList />
      case 'History':
        return <MilestonesList />
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
