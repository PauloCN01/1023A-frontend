interface ContainersProps{
    nome:string
}
function Container(props:ContainersProps) {
    let contador = 10
    function mudar(){
        contador = 20
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