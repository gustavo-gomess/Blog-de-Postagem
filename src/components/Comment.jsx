import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, ondeleteComment }) {
  function HandleDeleteComment() {
    
    ondeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <img src="http://github.com/gustavo-gomess.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Henrique</strong>
              <time title="11 de Maio ás 08:13h" dateTime='2022-12-29 09:14:30'>Cerca de 1hora atrás</time>
            </div>

            <button onClick={HandleDeleteComment} title='Deletar commentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}