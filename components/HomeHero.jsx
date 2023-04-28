import styles from '@/styles/Home.module.scss'

export default function HomeHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.right}>
                <h3>Find the best <span>talent</span></h3>
            </div>
            <div className={styles.left}>
                <div className={styles.liner}></div>
                <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                <div className={styles.img}></div>
            </div>
        </div>
      </div>
    </div>
  )
}
