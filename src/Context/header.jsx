import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
  // use context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>toggle</button>
      {theme ? 'light' : 'dark'}
    </div>
  )
}

export default Header
