import { useEffect, useState } from "react";

const GreetingFunctionalFather = (props) => {
  const [name, setName] = useState(props.name);

  const nameUser = () => {
    setName(props.name); //AQUÍ, CAMBIARLO COMO venga como “props” desde el componente padre
};
useEffect(()=>{
  setTimeout(() => {
    
    nameUser('Alfonsina')
  }, 1000);
},[])
  return (
    <p>{name}</p>
    
  )
}

export default GreetingFunctionalFather
