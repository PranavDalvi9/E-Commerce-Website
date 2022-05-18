import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SaleOffer.css"

export default function SaleOffer() {
  const navigate = useNavigate()
  return (
    <div className='SaleOffer'>
      <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span onClick={() => navigate("/category/men-jeans/products")}>Shop Now</span></p>
    </div>
  )
}
