import MyComponent from "./MyComponent"
const TemplateExpression = ()=>{
    const Pessoa = {
        nome: 'Vitor Levi',
        idade: 16,
        cidade: 'Icapui-ce',
        profissao:'Programador'
    }
    return (
        <div>
            <p>Olá {Pessoa.nome}, Você Tem {Pessoa.idade} anos. Mora em {Pessoa.cidade} e sua Profissão é {Pessoa.profissao}</p>
            <MyComponent/>
        </div>
    )
}
export default TemplateExpression