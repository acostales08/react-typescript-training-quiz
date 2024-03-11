import React, {useState, useEffect} from 'react'
import { HttpRequest } from '../api/api'
import { AxiosResponse } from 'axios'
import { DiscountedProductType, NonDiscountedProductType } from '../types/ProductTypes'

const useFectch = () => {
    const [disProducts, setDisProducts] = useState<DiscountedProductType[]>([])
    const [disNonProducts, setNonDisProducts] = useState<NonDiscountedProductType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetchDisProd()
        fetchNonDisProd()
    }, [])

    const  fetchDisProd = async() => {
        await new HttpRequest().fetchDiscProd().then((response: AxiosResponse) => {
            setDisProducts(response.data)
            setLoading(false)
        })
    }
    const  fetchNonDisProd = async() => {
        await new HttpRequest().fetchNonDiscProd().then((response: AxiosResponse) => {
            setNonDisProducts(response.data)
            setLoading(false)
        })
    }
  return {
    disProducts, disNonProducts, loading, setLoading
  }
}

export default useFectch