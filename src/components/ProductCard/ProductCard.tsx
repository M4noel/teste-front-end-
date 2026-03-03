import type { KeyboardEvent } from 'react'
import type { Product } from '../../types/Product'
import './ProductCard.scss'

type ProductCardProps = {
  product: Product
  onClick?: () => void
  className?: string
}

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function ProductCard({ product, onClick, className = '' }: ProductCardProps) {
  const oldPrice = product.price * 1.1

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!onClick) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <article
      className={`product-card ${onClick ? 'is-clickable' : ''} ${className}`.trim()}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="product-card__media">
        <img className="product-card__image" src={product.photo} alt={product.productName} />
      </div>

      <div className="product-card__content">
        <p className="product-card__description">{product.descriptionShort}</p>
        <p className="product-card__old-price">{formatPrice(oldPrice)}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__installments">Ou 2x de {formatPrice(product.price / 2)} sem juros</p>
        <p className="product-card__shipping">Frete gratis</p>
      </div>

      <button
        type="button"
        className="product-card__buy-button"
        onClick={(event) => {
          event.stopPropagation()
          onClick?.()
        }}
      >
        COMPRAR
      </button>
    </article>
  )
}
