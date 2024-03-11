import React, {useState} from 'react'
import { BasicButton, BasicTextfield } from '../components'
import { DiscountedProductType } from '../core/types/ProductTypes'
import { MenuItem, TextField } from '@mui/material'
import { useProductContext } from '../core/context/productContext'
import {useFormValidation} from '../core/hooks/useValidation '
import useValidationBeforeAdd from '../core/hooks/useValidationBeforeAdd'


const  obj: DiscountedProductType = {
    productId: 0,
    productName: '',
    productDescription: '',
    productCategory: '',
    productDiscount: 0,
    productPrice: 0
}

const DiscountedProduct:React.FC = () => {
    const [ product, setProduct ] = useState<DiscountedProductType>(obj)
    const { insertData, discounted } = useProductContext()
    const { errors, validateForm} = useFormValidation()
    const {validateExist, exists} = useValidationBeforeAdd()

    const handleChange = (e: any) => {
        const value = e.currentTarget.value
        const name = e.target.name

        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const selecthandleChange = (event: any) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };
    const handleSubmit = async() => {
        const isValid = validateForm(product, discounted)
        const isExist = validateExist(product, discounted)
        if(isValid){
            if(isExist){
                insertData(product)
                alert("successfully inserted")
                setProduct(obj)                   
            }
        }else{
            console.log('Form validation failed');
        }
       

    }
    const menu = [
        { id: 1, name: "Nike"},
        { id: 2, name: "jordan"},
        { id: 3, name: "New Balance"},
        { id: 4, name: "Vans"},
        { id: 5, name: "Converse"},
    ]
  return (
    <div className="h-fit w-full flex justify-center items-center flex-col">
        <div className="border rounded-xl p-5 w-1/2 m-8">
            <h1 className="text-2xl mb-5">DiscountedProduct</h1>
            <div className="flex flex-col gap-5">
            <BasicTextfield
                label="Product id"
                type='number'
                variant='outlined'
                name='productId'
                value={product.productId}
                onChange={handleChange}
                size="small"
                error={!!errors.productId || !!exists.productId}
                helperText={errors.productId || exists.productId}
            />
            <BasicTextfield
                label="Product name"
                type='text'
                variant='outlined'
                name='productName'
                value={product.productName}
                onChange={handleChange}
                size="small"
                error={!!errors.productName || !!exists.productName}
                helperText={errors.productName || exists.productName}
            
            />
            <BasicTextfield
                label="Product description" 
                type='text'
                multiline
                rows={4}
                variant='outlined'
                name='productDescription'
                value={product.productDescription}
                onChange={handleChange}
                size="small"
                error={!!errors.productDescription}
                helperText={errors.productDescription}
            
            />
           <TextField
                label="Product category"
                select
                type="text"
                variant='outlined'
                name='productCategory'
                onChange={selecthandleChange}
                value={product.productCategory}
                error={!!errors.productCategory}
                helperText={errors.productCategory}
                size="small"
            >
                {menu.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                        {item.name}
                    </MenuItem>
                ))}
            </TextField>
            <BasicTextfield
                label="Product discount"
                type="number"
                variant='outlined'
                name='productDiscount'
                value={product.productDiscount}
                onChange={handleChange}
                size="small"
                error={!!errors.productDiscount}
                helperText={errors.productDiscount}
            
            />
            <BasicTextfield
                label="Product Price"
                type="number"
                variant='outlined'
                name='productPrice'
                value={product.productPrice}
                onChange={handleChange}
                size="small"
                error={!!errors.productPrice}
                helperText={errors.productPrice}
            
            />
            <BasicButton
                variant='contained'
                text='Submit'
                onClick={handleSubmit}
            />
            </div>
        </div>

    </div>
  )
}

export default DiscountedProduct