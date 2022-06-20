import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Dalle Vault {new Date().getFullYear()}
      </footer>
    </>
  )
}
