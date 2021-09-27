/*function Pessoa(props){

    return (
        <div>
            <img src={props.img} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    );

}

export default Pessoa;*/

function Pessoa({img, nome, idade, profissao}){

    return (
        <div>
            <img src={img} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );

}

export default Pessoa;