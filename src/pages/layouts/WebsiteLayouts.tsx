import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';



type Props = {}

const WebsiteLayouts = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>

      <header>
        <AppBar position='static' sx={{ background: "#282B2E" }}>
          <Toolbar>
            <Typography variant='h5' sx={{ fontWeight: "fontWeightBold", flexGrow: 1 }} align="left" >
              MKB Shop
            </Typography>
            <SearchIcon onClick={() => { navigate("admin/products") }} sx={{ mr: 2 }} />
            <ShoppingBagIcon onClick={() => { navigate("admin/products") }} sx={{ mr: 2 }} />
            <Button color="inherit" sx={{ fontWeight: "fontWeightBold" }}>Login</Button>
            <Button color="warning" variant='contained' sx={{ fontWeight: "fontWeightBold", ml: 2 }}>Sign up</Button>
          </Toolbar>
        </AppBar>
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