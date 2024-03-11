import React from 'react'
import useFectch from '../core/hooks/useFectch'
import { DiscountedList, NonDiscountedList } from '../components'

const ProductList:React.FC = () => {

  const { disProducts } = useFectch()
  console.log(disProducts)
  return (
    <div className='h-fit w-full px-10'>
        <DiscountedList/>
        <NonDiscountedList/>
    </div>
  )
}

export default ProductList