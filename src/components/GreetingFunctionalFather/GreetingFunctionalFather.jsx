import { useEffect, useState } from "react";

const GreetingFunctionalFather = (props) => {
  const [name, setName] = useState(props.person.name);

useEffect(()=>{
  setTimeout(() => {
    setName('Alfonsina')
  }, 1000);
},[])

  return (
    <p>Hola {name}</p>
    
  )
}

export default GreetingFunctionalFather
