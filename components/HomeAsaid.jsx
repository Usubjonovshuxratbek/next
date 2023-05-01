import styles from '@/styles/Home.module.scss'
import Image from 'next/image'

export default function HomeAsaid() {
    return (
        <section className={styles.asaid}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h2>Delivering real results for top <br /> companies. Some of our success stories.</h2>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.cardbg}></div>
                            <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                            <h4>Kady Baker</h4>
                            <h5>Product Manager at Bookmark</h5>
                            <Image src="/img/user.png" width={62} height={62} alt='user' />
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardbg}></div>
                            <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                            <h4>Kady Baker</h4>
                            <h5>Product Manager at Bookmark</h5>
                            <Image src="/img/user.png" width={62} height={62} alt='user' />
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardbg}></div>
                            <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                            <h4>Kady Baker</h4>
                            <h5>Product Manager at Bookmark</h5>
                            <Image src="/img/user.png" width={62} height={62} alt='user' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
