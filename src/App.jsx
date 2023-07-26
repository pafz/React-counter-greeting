
import './App.css'
import CounterFunctional from './components/CounterFunctional/CounterFunctional'
import GreetingFunctionalFather from './components/GreetingFunctionalFather/GreetingFunctionalFather'

const person = {
  name: 'Alfonso'
};

function App() {
  return (
    <>
<CounterFunctional initialValue={5} numDecre={3} numIncre={9}/>
<GreetingFunctionalFather person={person}/>

    </>
  )
}

export default App
