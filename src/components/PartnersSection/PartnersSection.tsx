import './PartnersSection.scss'

export type PartnerBanner = {
  id: string
  title: string
  description: string
  image: string
  buttonLabel?: string
}

type PartnersSectionProps = {
  items: PartnerBanner[]
}

export function PartnersSection({ items }: PartnersSectionProps) {
  return (
    <section className="partners-section">
      <div className="partners-section__grid">
        {items.map((item) => (
          <article
            key={item.id}
            className="partners-section__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="partners-section__overlay" />
            <div className="partners-section__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button type="button">{item.buttonLabel ?? 'CONFIRA'}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
