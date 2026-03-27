export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        © {new Date().getFullYear()} The Kodex ·{' '}
        <a
          href="https://github.com/thewhaledragon"
          className="site-footer__link"
        >
          TheWhaleDragon
        </a>
      </p>
    </footer>
  )
}
