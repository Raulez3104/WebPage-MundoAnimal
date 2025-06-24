import './Header.css'
import Menubar from './Menubar'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/pata.png" alt="Logo" />
        <h1>Mundo Animal</h1>
      </div>
      <Menubar />
    </header>
  )
}

export default Header