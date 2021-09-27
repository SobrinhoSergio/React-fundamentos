import { useState } from 'react'

function Form() {
    
    function cadastrarUsuario(e) {
      e.preventDefault()
      console.log(`O usuário ${name} foi cadastrado com a senha ${senha}`)
    }

    const [name, setName ] = useState()
    const [senha, setSenha ] = useState()
  
    return (
      <div>
        
        <h1>Meu cadastro:</h1>
        
        <form onSubmit={cadastrarUsuario}>
          
          <div>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={(e)=> setName(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="senha">Senha:</label>
            <input 
                type="password" 
                id="senha" 
                name="senha" 
                placeholder="Digite sua senha" 
                onChange={(e)=> setSenha(e.target.value)}
            />
          </div>
          
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        
        </form>
      
      </div>
    );
}
  
export default Form