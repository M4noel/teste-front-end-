import './Banner.scss'
import bannerImg from '../../assets/images/banner-1.png'

export function Banner() {
  return (
    <section className="banner">
      <img src={bannerImg} alt="Promoções" />

      <div className="banner__content">
        <h2>
          Venha conhecer nossas <br /> promoções
        </h2>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <button>Ver produto</button>
      </div>
    </section>
  )
}