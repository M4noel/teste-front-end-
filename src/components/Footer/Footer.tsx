import './Footer.scss'
import logo from '../../assets/images/Logo.png'
import instagram from '../../assets/images/icons/instagram.png'
import linkedin from '../../assets/images/icons/linkedin.png'
import facebook from '../../assets/images/icons/facebook.png'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <section className="footer__brand">
          <img src={logo} alt="eConverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer__social">
            <button type="button" aria-label="Instagram">
              <img src={instagram} alt="Instagram" />
            </button>

            <button type="button" aria-label="Facebook">
              <img src={facebook} alt="Facebook" />
            </button>

            <button type="button" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </button>
          </div>
        </section>

        <section className="footer__links">
          <div>
            <h4>Institucional</h4>
            <a href="/">Sobre Nós</a>
            <a href="/">Movimento</a>
            <a href="/">Trabalhe conosco</a>
          </div>

          <div>
            <h4>Ajuda</h4>
            <a href="/">Suporte</a>
            <a href="/">Fale Conosco</a>
            <a href="/">Perguntas Frequentes</a>
          </div>

          <div>
            <h4>Termos</h4>
            <a href="/">Termos e Condições</a>
            <a href="/">Política de Privacidade</a>
            <a href="/">Troca e Devolução</a>
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
} 