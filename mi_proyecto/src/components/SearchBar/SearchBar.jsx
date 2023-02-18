import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;
  

      return (
      <div className={styles.div}>
         <input type='search' />
      <button className= {styles.btn} onClick={()=>onSearch()}>Agregar</button>
      </div>
   );
}

