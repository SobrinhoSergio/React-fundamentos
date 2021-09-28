import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }
    
    function limparEmail() {
        setUserEmail('');
    }

    return(
        <>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Seu E-mail" 
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                
                <button 
                    type="submit" 
                    onClick={enviarEmail}
                >
                    Enviar E-mail
                </button>

                { userEmail && (

                    <div>
                        <p>O e-mail do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>

                )} 
            </form>
        </>
    );

}

export default Condicional;