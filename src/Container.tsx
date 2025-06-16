import { useState } from "react"
interface ContainersProps{
    nome:string
}

function Container(props:ContainersProps) {
    const [texto, setTexto] = useState("Mude esse texto")
    
    function trataInput(event:React.ChangeEvent<HTMLInputElement>){
        setTexto(event.currentTarget.value)
        console.log(event.currentTarget.value)
    }
    return(
    <>
      <h1>{props.nome}</h1>
      <div>Texto:{texto}</div>
      <input type="text" placeholder="Mostrar Texto" onChange={trataInput}/>
    </>
    )
}
export default Container