import React from 'react'
import Card from './component.jsx/Card'

const App = () => {
  return (
    <div>
      <Card name="Rupak" roll={101} classname="B.Tech" />
      <br/>
      <Card name="Mohan" roll={102} classname="B.Sc"/>
      <br/>
      <Card name="Sita" roll={103} classname="M.A"/>
      <br/>
      <Card name="Gita" roll={104} classname="B.Com"/>

    </div>
  )
}

export default App
