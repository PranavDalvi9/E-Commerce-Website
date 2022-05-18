import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

import store from "../../Redux/Store"
import { addCart, addWishlist } from '../../Redux/Cart/Action'
import { logout } from '../../Redux/LoginUserData/Action';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/login")
  }

  const cart = useSelector((store) => store.cart.cart)
  const wishlist = useSelector((store) => store.cart.wishlist)

  const userLogData = useSelector((store) => store.loginUserData.userData)
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("home nav ", userLogData)
  // console.log("home nav ", userLogData[0].user.email)


  return (
    <div>
      <div className='NavBarMain'>
        <div onClick={() => navigate("/")}>Name</div>
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate("/category/men-jeans/products")}>Men</div>
        <div onClick={() => navigate("/category/women-kurtas-suits/products")}>Women</div>
        <div onClick={() => navigate("/category/baby-wears/products")}>Baby Wears</div>
        <div onClick={() => navigate("/blog")}>Blog</div>
        <div onClick={() => navigate("/contact_us")}>Contact</div>
        {/* <div onClick={() => navigate("/login")}><input type="text" placeholder='Search' /></div> */}

        {
          isAuth === true ? <div className='NavbarAvtar dropdown' >
            <div className='name'><p>{userLogData[0].user.email[0]}</p></div>
            <div className='dropdown-content'>
              <a href="#">Hello, {userLogData[0].user.email}</a>
              <a href="#" onClick={() => dispatch(logout())}>Logout</a>

            </div>
          </div> :
            <div>
              <div class="dropdown">
                <div className='name'><Avatar src="/broken-image.jpg" /></div>
                <div className='dropdown-content'>
                  <a href="#" onClick={handleLogin}>Login</a>
                </div>
              </div>
            </div>
        }



        <div onClick={() => navigate("/cart")}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

