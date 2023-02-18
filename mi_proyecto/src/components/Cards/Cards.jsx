import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters}) {

   return(
      <div className={styles.div}>
         {
            characters.map((character)=> {
               return <Card
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }
      </div>
   ) 
}

