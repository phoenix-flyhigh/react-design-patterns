import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
        <li><Link to='/render'>Render Props</Link></li>
        <li><Link to='/hoc'>HOC</Link></li>
        <li><Link to='/optimistic'>Optimistic UI</Link></li>
        <li><Link to='/controlled'>Controlled component</Link></li>
        <li><Link to='/compound'>Compound component</Link></li>
    </ul>
  )
}   

export default NavBar