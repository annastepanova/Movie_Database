import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>New</Link>
        </li>
        <li>
          <Link href='/upcoming'>Upcoming</Link>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
