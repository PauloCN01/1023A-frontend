import { useState } from "react"



interface ContainersProps{
    nome:string
}
function Container(props:ContainersProps) {
    const [contador,setContador] = useState(0)
    function mudar(){
        setContador(20)
        console.log(contador)
    }
    return(
    <>
      <h1>{props.nome}</h1>
      Valor Contador:{contador}
      <button onClick={mudar}>Mudar</button>
    </>
    )
}
export default Container