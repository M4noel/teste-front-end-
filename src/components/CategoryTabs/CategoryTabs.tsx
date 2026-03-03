import { useMemo, useState } from 'react'
import { ProductCarousel } from '../ProductCarousel/ProductCarousel'
import type { Product } from '../../types/Product'
import './CategoryTabs.scss'

type CategoryTabsProps = {
  products: Product[]
  onProductClick?: (product: Product) => void
}

const categories = ['CELULAR', 'ACESSORIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

export function CategoryTabs({ products, onProductClick }: CategoryTabsProps) {
  const [active, setActive] = useState('CELULAR')

  const visibleProducts = useMemo(() => {
    if (active === 'VER TODOS') {
      return products
    }

    return products
  }, [active, products])

  return (
    <section className="related-products">
      <header className="related-products__header">
        <div className="related-products__title-wrapper">
          <span className="related-products__line" />
          <h2>Produtos relacionados</h2>
          <span className="related-products__line" />
        </div>

        <div className="related-products__tabs">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={active === item ? 'active' : ''}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <ProductCarousel products={visibleProducts} onProductClick={onProductClick} />
    </section>
  )
}
