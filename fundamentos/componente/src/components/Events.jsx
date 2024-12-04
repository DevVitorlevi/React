const Events = () =>{
    const Clicou = ()=>{
        console.log('Botão Clicado')
        alert('Botão Clicado')
        
    }
    return(
        <div>
            <div>
                <button onClick={Clicou}>Clique</button>
            </div>
            <div>
                <button onClick={()=> alert('Botão Clicado')}>Clique Aqui Também</button>
            </div>
        </div>
    )
}
export default Events