import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from "./sidebar.module.css"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
          <img className={styles.cover} src="https://images.unsplash.com/photo-1533418264835-9871c7c2dbf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80https://images.unsplash.com/photo-1537402792645-b6d9a3ac3fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          
          <div className={styles.profile}>
            <Avatar src="http://github.com/gustavo-gomess.png" />

            <strong>Gustavo Henrique</strong>
            <span>Web Developer</span>
          </div>

          <footer>
            <a href="#">
              <PencilLine />
              Editar seu perfil</a>
        </footer>
        </aside>
    );
}