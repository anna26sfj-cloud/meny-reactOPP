import styles from './Dish.module.css'

function Dish({ rett }) {
  return (
    <div className={styles.kort}>
      <span className={styles.kategori}>{rett.kategori}</span>
      <h2 className={styles.tittel}>{rett.tittel}</h2>
      <p className={styles.ingredienser}>{rett.ingredienser}</p>
      <p className={styles.pris}>{rett.pris}</p>
    </div>
  )
}

export default Dish