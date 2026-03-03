import './Newslater.scss'

export function Newslater() {
  return (
    <section className="newslater">
      <div className="newslater__container">
        <div className="newslater__text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <form className="newslater__form" onSubmit={(event) => event.preventDefault()}>
          <div className="newslater__inputs">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">INSCREVER</button>
          </div>

          <label className="newslater__terms">
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  )
}
