function Evento({numero}){

    function meuEvento(){
        console.log(`Opa! fui ativado ${numero}.`);

    }

    return (
        <>
            <p>Click para disparar o Evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento;