import { useEffect, useState } from 'react'
import type { Product } from '../../types/Product'
import './ProductModal.scss'

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setQuantity(1)
  }, [product])

  if (!product) {
    return null
  }

  return (
    <div className="product-modal__overlay" onClick={onClose}>
      <div className="product-modal" onClick={(event) => event.stopPropagation()}>
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar modal">
          ×
        </button>

        <div className="product-modal__layout">
          <div className="product-modal__media">
            <img className="product-modal__image" src={product.photo} alt={product.productName} />
          </div>

          <div className="product-modal__content">
            <h2>{product.productName.toUpperCase()}</h2>

            <p className="product-modal__price">{formatPrice(product.price)}</p>

            <p className="product-modal__description">{product.descriptionShort}</p>

            <a href="/" onClick={(event) => event.preventDefault()} className="product-modal__details-link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="product-modal__actions">
              <div className="product-modal__quantity">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <span>{String(quantity).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.min(99, prev + 1))}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button type="button" className="product-modal__buy-button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
