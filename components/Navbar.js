import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../Store/GlobalState'
import Cookie from 'js-cookie'

function Navbar() {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state
  const isActive = r => {
    if (r === router.pathname) {
      return " active"
    } else {
      return ""
    }
  }

  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: "Logout." } })
  }

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={auth.user.avatar} alt={auth.user.avatar}
            style={{
              borderRadius: '50%', width: "30px", height: '30px', transform: 'translateY(-3px)', marginRight: '3px'
            }}
          />
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Profile</a>
          <button className="dropdown-item" onClick={handleLogout}>Logout</button>
        </div>
      </li>
    )
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navColor">
      <Link href="/" >
        <a className="navbar-brand" style={{ fontFamily: 'Ruslan Display', fontSize: '40px', color: 'goldenrod' }}>
          next-js
        </a>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart" >
              <a className={"nav-link" + isActive('/cart')}><i className="fas fa-shopping-cart position-relative" aria-hidden="true" >
                <span className="position-absolute " style={{
                  padding: '3px 6px',
                  background: 'tomato',
                  borderRadius: '50%',
                  top: '-10px',
                  right: '-10px',
                  color: '#fff',
                  fontsize: '14px'
                }}>{cart.length}</span>
              </i>Cart</a>
            </Link>
          </li>
          {
            Object.keys(auth).length === 0 ?
              <li className="nav-item">
                <Link href="/signin" >
                  <a className={"nav-link" + isActive('/signin')}><i className="fas fa-user-tie" aria-hidden="true"></i>Sign In</a>
                </Link>
              </li>
              : loggedRouter()
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
