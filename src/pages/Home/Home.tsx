import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner/Banner'
import { Categories } from '../../components/Categories/categories'
import { CategoryTabs } from '../../components/CategoryTabs/CategoryTabs'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Newslater } from '../../components/Newslater/Newslater'
import { PartnersSection } from '../../components/PartnersSection/PartnersSection'
import { ProductModal } from '../../components/ProductModal/ProductModal'
import { RelatedProductsSection } from '../../components/RelatedProductsSection/RelatedProductsSection'
import banner2 from '../../assets/images/icons/banner-2.png'
import brandLogo from '../../assets/images/Logo.png'
import { getProducts } from '../../services/api'
import type { Product } from '../../types/Product'
import './Home.scss'
import './HomeBrands.scss'

export function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  
  const brands = [brandLogo, brandLogo, brandLogo, brandLogo, brandLogo]

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao carregar produtos', error)
        setProducts([])
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Categories />

      <main className="home">
        <h1 className="home__seo-title">Econverse - Vitrine de Produtos</h1>

        <CategoryTabs
          products={products}
          onProductClick={(product) => setSelectedProduct(product)}
        />

        <PartnersSection
          items={[
            {
              id: '1',
              title: 'Parceiros',
              description: 'Lorem ipsum dolor sit amet, consectetur',
              image: banner2,
            },
            {
              id: '2',
              title: 'Parceiros',
              description: 'Lorem ipsum dolor sit amet, consectetur',
              image: banner2,
            },
          ]}
        />

        <RelatedProductsSection
          products={products}
          onProductClick={(product) => setSelectedProduct(product)}
        />

        <PartnersSection
          items={[
            {
              id: '3',
              title: 'Parceiros',
              description: 'Lorem ipsum dolor sit amet, consectetur',
              image: banner2,
            },
            {
              id: '4',
              title: 'Parceiros',
              description: 'Lorem ipsum dolor sit amet, consectetur',
              image: banner2,
            },
          ]}
        />

     
        <section className="home-brands">
          <h2>Navegue por marcas</h2>

          <div className="home-brands__grid">
            {brands.map((logo, index) => (
              <div key={index} className="home-brands__item">
                <img src={logo} alt="Marca" />
              </div>
            ))}
          </div>
        </section>

        <RelatedProductsSection
          products={products}
          onProductClick={(product) => setSelectedProduct(product)}
        />
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Newslater />

      <Footer />
    </>
  )
}
