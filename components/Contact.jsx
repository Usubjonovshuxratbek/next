import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.inner}>
            <h3>Ready to get started?</h3>
            <Link href='/Contact'>contact us</Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
