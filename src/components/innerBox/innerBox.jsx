import styles from './InnerBox.module.css'
function InnerBox() {
    return (
        <>
            <div className={styles.innerBox}>
                <div className={styles.icons}>
                    <p className={styles.iconsText}>№</p>
                    <p className={styles.iconsText}>Унікальне ім'я в системі</p>
                    <p className={styles.iconsText}>Повне ім'я</p>
                    <p className={styles.iconsText}>Посада</p>
                    <p className={styles.iconsText}>Доступ</p>
                    <p className={styles.iconsText}>Операції</p>
                </div>

                <div className={styles.userCard}>
                    <img src="img/1.jpg" alt="User Avatar" className={styles.userAvatar} />
                    <p>John Doe</p>
                </div>

                <div className={styles.userCard}>
                    <img src="img/1.jpg" alt="User Avatar" className={styles.userAvatar} />
                    <p>Jane Smith</p>
                </div>

                <div className={styles.userCard}>
                    <img src="img/1.jpg" alt="User Avatar" className={styles.userAvatar} />
                    <p>Alex Johnson</p>
                </div>

            </div>
        </>
    )
}
export default InnerBox