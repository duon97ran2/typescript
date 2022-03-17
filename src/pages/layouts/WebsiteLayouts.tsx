import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

type Props = {}

const WebsiteLayouts = (props: Props) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Expand at xl</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample06">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/products">Product Page</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/about">About Page</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input className="form-control" type="text" placeholder="Search" />
            </form>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Web Footer</footer>
    </div>
  )
}

export default WebsiteLayouts