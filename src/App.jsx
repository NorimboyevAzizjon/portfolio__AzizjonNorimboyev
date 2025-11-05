// src/App.jsx
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
    </div>
  )
}

export default App