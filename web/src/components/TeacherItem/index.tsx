import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/20818843?s=460&u=12d121eda80ca715b23ff555e9b54f975d9f4040&v=4" alt="Gabriel Araujo" />
        <div>
          <strong>Gabriel Araujo</strong>
          <span>Química</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
        </p>
      </footer>
    </article>
  )
}

export default TeacherItem;