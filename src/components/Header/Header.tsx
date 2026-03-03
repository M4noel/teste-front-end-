import { useState } from 'react'
import './Header.scss'
import logo from '../../assets/images/Logo.png'
import shieldIcon from '../../assets/images/icons/CreditCard.png'
import truckIcon from '../../assets/images/icons/Truck.png'
import cardIcon from '../../assets/images/icons/ShieldCheck.png'
import Heart from '../../assets/images/icons/Heart.png'
import ShoppingCart from '../../assets/images/icons/ShoppingCart.png'
import UserCircle from '../../assets/images/icons/UserCircle.png'
import Group from '../../assets/images/icons/Group.png'
import MagnifyingGlass from '../../assets/images/icons/MagnifyingGlass.png'
import CrownSimple from '../../assets/images/icons/CrownSimple.png'

const categories = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lancamentos',
  'Ofertas do dia',
  'Assinatura',
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Ofertas do dia')

  return (
    <header className={`header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="header__top">
        <div className="header__top-item">
          <img src={shieldIcon} alt="Compra segura" />
          <p>
            Compra <strong>100% segura</strong>
          </p>
        </div>

        <div className="header__top-item">
          <img src={truckIcon} alt="Frete gratis" />
          <p>
            <strong>Frete gratis</strong> acima de R$ 200
          </p>
        </div>

        <div className="header__top-item">
          <img src={cardIcon} alt="Parcelamento" />
          <p>
            <strong>Parcele</strong> suas compras
          </p>
        </div>
      </div>

      <div className="header__main">
        <a href="/" className="header__logo" aria-label="Pagina inicial">
          <img src={logo} alt="Econverse" />
        </a>

        <form className="header__search" role="search">
          <input type="search" placeholder="O que voce esta buscando?" aria-label="Buscar produtos" />
          <button type="submit" aria-label="Buscar">
            <img src={MagnifyingGlass} alt="Buscar" />
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Pedidos">
            <img src={Group} alt="Pedidos" />
          </button>

          <button type="button" aria-label="Favoritos">
            <img src={Heart} alt="Favoritos" />
          </button>

          <button type="button" aria-label="Minha conta">
            <img src={UserCircle} alt="Minha conta" />
          </button>

          <button type="button" aria-label="Carrinho">
            <img src={ShoppingCart} alt="Carrinho" />
          </button>
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        {categories.map((category) => {
          const isActive = category === activeCategory
          const isSubscription = category === 'Assinatura'

          return (
            <a
              key={category}
              href="/"
              onClick={(e) => {
                e.preventDefault()
                setActiveCategory(category)
              }}
              className={`header__link ${isActive ? 'header__link--active' : ''}`}
            >
              {isSubscription && <img src={CrownSimple} alt="Assinatura" className="header__crown" />}
              {category}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
