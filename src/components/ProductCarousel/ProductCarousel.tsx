import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import type { Product } from '../../types/Product'
import './ProductCarousel.scss'

type Props = {
  products: Product[]
  onProductClick?: (product: Product) => void
}

export function ProductCarousel({ products, onProductClick }: Props) {
  const [slidesToShow, setSlidesToShow] = useState(4)

  useEffect(() => {
    function updateSlides() {
      const width = window.innerWidth

      if (width <= 700) {
        setSlidesToShow(1)
        return
      }

      if (width <= 960) {
        setSlidesToShow(2)
        return
      }

      if (width <= 1200) {
        setSlidesToShow(3)
        return
      }

      setSlidesToShow(4)
    }

    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  const settings = {
    dots: false,
    slidesToShow,
    slidesToScroll: 1,
    speed: 450,
    adaptiveHeight: false,
    infinite: products.length > slidesToShow,
  }

  return (
    <section className="product-carousel">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={`${product.productName}-${index}`}>
            <ProductCard
              product={product}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}
