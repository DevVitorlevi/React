
const Challenger = () => {
    // Declarando duas variáveis constantes com valores numéricos
    const a = 10; 
    const b = 12; 

    // Função que será chamada ao clicar no botão
    const click = () => {
        alert(a + b); // Exibe um alerta com a soma de 'a' e 'b'
    };

    // Retorno do JSX que define a interface do componente
    return (
        <>
            <h1>Challenger</h1>
            
            {/* Parágrafo exibindo os valores de 'a' e 'b' */}
            <p>{a} e {b}</p>
            
            {/* Botão que chama a função 'click' ao ser clicado */}
            <button onClick={click}>Clique para Ver a Soma</button>
        </>
    );
};

// Exportando o componente para que possa ser utilizado em outros arquivos
export default Challenger;
