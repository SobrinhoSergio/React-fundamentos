import styles from './Frase.module.css';

function Frase(){

    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Ninguém é como nosso Deus!</h1>
        </div>

    )

}

export default Frase;