import styles from './filter.module.css'
function Filter() {
    return (
        <>
            < label className={styles.filter} htmlFor="filter1">Виберіть один з фільтрів: </label >
            <select id="filter1" className={styles.filters1}>
                <option value="none">Фільтр відсутній</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
                <option value="strawberry">Strawberry</option>
            </select>
            <select id="filter2" className={styles.filters2}>
                <option value="none">Фільтр відсутній</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
                <option value="strawberry">Strawberry</option>
            </select>
        </>
    )
}
export default Filter 