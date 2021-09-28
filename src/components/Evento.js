import Button from './evento/Button';

function Evento(){

    function meuEvento(){
        console.log(`Ativando o Primeiro Evento!`);
    }

    function meuEventoDois(){
        console.log(`Ativando o Segundo Evento!`);
    }

    return (
        <>
            <p>Click para disparar o Evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={meuEventoDois} text="Segundo Evento"/>
        </>
    );
}

export default Evento;