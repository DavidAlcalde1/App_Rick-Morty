import { Rick } from "../../data";
import styles from "./Card.module.css";

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={styles.div}>
         <button className={styles.button} onClick={onClose}>X</button>
         <img className={styles.img} src={image} alt={name} />
         <h2 className={styles.name}>{name}</h2>
         <div className={styles.divSpecGen}>
            <h2 >{species}</h2>
            <h2>{gender}</h2> 
         </div>
                 
      </div>
   );
}
