import {Link} from 'react-router-dom'

import './index.css'

const HeaderRoute = () => {
  return (
    <div className="header-cont">
      <h1>
        <Link className="header-links" to="/">
          Home
        </Link>
      </h1>
      <h1>
        <Link className="header-links" to="/about">
          About
        </Link>
      </h1>
    </div>
  )
}
export default HeaderRoute
