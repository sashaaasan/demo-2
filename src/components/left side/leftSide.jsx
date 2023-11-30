import { Link } from 'react-router-dom'
import styles from './leftSide.module.css'

export const LeftPanel = () => {

    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <img className={styles.photo} src="public/admins.png" alt="user photo" />
                <div className={styles.info}>
                    <h4>Nick</h4>
                    <p className={styles.admin}>Admin</p>
                </div>
            </div>


            <div className={styles.navigation}>
                <div className={styles.navItem}>
                    <img className={styles.navIcon} src="" />
                    <a className={styles.navText}
                        href='/mainPanel'>Головна</a>
                </div>

                <div className={styles.navItem}>
                    <img className={styles.navIcon} src="" />
                    <Link className={styles.navText}
                        to="/admins">Адміни</Link>
                </div>

                <div className={styles.navItem}
                >
                    <img className={styles.navIcon} src="public/contact-list.png" />
                    <a className={styles.navText}
                        href="/Home">Користувачі</a>
                </div>

                <div className={styles.navItem}>
                    <img className={styles.navIcon} src="public/defects.png" />
                    <a className={styles.navText}
                        href="#defects">Дефекти</a>
                </div>
                <div className={styles.navItem}>
                    <img className={styles.navIcon} src="public/orders.png" />
                    <a className={styles.navText}
                        href="#orders">Замовлення</a>
                </div>
            </div>
        </aside>
    )
}
export default LeftPanel