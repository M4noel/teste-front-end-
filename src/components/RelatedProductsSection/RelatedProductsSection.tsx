import { ProductCarousel } from '../ProductCarousel/ProductCarousel'
import type { Product } from '../../types/Product'
import './RelatedProductsSection.scss'

type RelatedProductsSectionProps = {
  products: Product[]
  onProductClick?: (product: Product) => void
}

export function RelatedProductsSection({
  products,
  onProductClick,
}: RelatedProductsSectionProps) {
  return (
    <section className="related-products-section">
      <div className="related-products-section__header">
        <span className="related-products-section__line" />
        <h2>Produtos relacionados</h2>
        <span className="related-products-section__line" />
      </div>

      <p className="related-products-section__view-all"><a href="#">Ver todos</a></p>

      <ProductCarousel products={products} onProductClick={onProductClick} />
    </section>
  )
}
