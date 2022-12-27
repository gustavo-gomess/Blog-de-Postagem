import { Article } from 'phosphor-react';
import styles from './Post.module.css';

export function Post() {
    return(
       <article className={styles.post}>
         <header>
           <div className={styles.author}></div>
         </header>
       </article>
    )
}