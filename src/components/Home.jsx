import LeftPanel from './left side/leftSide';
import Filter from './filter/filter';
import InnerBox from './innerBox/innerBox';
import styles from './Home.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPanel from './left side/main/mainPanel';

function Home() {


  return (
    <Router>
      <div className={styles.container}>

        <LeftPanel />

        <div className={styles.main}>
          <div className={styles.line2}></div>
          <div className={styles.outerBox}>
            <Filter />


            <Routes>
              <Route path="/mainPanel" element={<MainPanel />} />
            </Routes>

            <img className={styles.contactList} id="users" src="public/contact-list.png" />

            <label htmlFor="users">
              <h1 className={styles.listText}>Список користувачів</h1>
            </label>
            <InnerBox />
          </div>
        </div>
      </div >
    </Router>
  )
}

export default Home
