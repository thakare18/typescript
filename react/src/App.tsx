import React from 'react'
import {Card} from './components/Card'
import {Counter} from './components/Counter'

const App = () => {
  return (
    <>
    <div>
      <h2>Home</h2>
      <Card name="Headphone" price={3000} />
        <Card name="Iphone" price={88000} />
    </div>
    <div> 
      <Counter />
       </div>
       <div>
        <OrderForm
         OnSubmit={(order) => {
          console.log('Order received', order.name, order.cups)
         }
         }
        />
       </div>
    </>
  )
}

export default App
