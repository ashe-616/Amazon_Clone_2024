import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import Carousel from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

function landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  )
}

export default landing
