import styles from './categories.module.scss'

import pc from '../../assets/images/icons/image.svg'
import supermercados from '../../assets/images/icons/supermercados 1.svg'
import whiskey from '../../assets/images/icons/whiskey.svg'
import ferramentas from '../../assets/images/icons/ferramentas 1.svg'
import cuidadosDeSaude from '../../assets/images/icons/cuidados-de-saude 1.svg'
import corrida from '../../assets/images/icons/corrida 1.svg'
import moda from '../../assets/images/icons/moda.svg'

const categories = [
  { icon: pc, name: 'Tecnologia', active: true },
  { icon: supermercados, name: 'Supermercado' },
  { icon: whiskey, name: 'Bebidas' },
  { icon: ferramentas, name: 'Ferramentas' },
  { icon: cuidadosDeSaude, name: 'Saude' },
  { icon: corrida, name: 'Esportes e Fitness' },
  { icon: moda, name: 'Moda' },
]

export function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.categories__container}>
        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            className={
              category.active
                ? `${styles.categories__item} ${styles['categories__item--active']}`
                : styles.categories__item
            }
          >
            <div className={styles.categories__card}>
              <img src={category.icon} alt={category.name} />
            </div>
            <span className={styles.categories__label}>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
