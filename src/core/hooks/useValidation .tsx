import React, { useState } from 'react';

type ErrorMessages = {
  productId?: string;
  productName?: string;
  productDescription?: string;
  productCategory?: string;
  productDiscount?: string;
  productPrice?: string;
};

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ErrorMessages>({});

  const validateForm = (values: any, discounted: boolean) => {
    const newErrors: ErrorMessages = {}; 

    switch (discounted) {
          case true: 
                  if (!values.productId) {
                    newErrors.productId = 'Product ID is required';
                  }
                  if (!values.productName) {
                    newErrors.productName = 'Product Name is required';
                  }
                  if (!values.productDescription) {
                    newErrors.productDescription = 'Product description is required';
                  }
                  if (!values.productCategory) {
                    newErrors.productCategory = 'Product category is required';
                  }
                  if (!values.productDiscount) {
                    newErrors.productDiscount = 'Product discount is required';
                  }
                  if (!values.productPrice) {
                    newErrors.productPrice = 'Product price is required';
                  }
          break;
          case false: 
                  if (!values.productId) {
                    newErrors.productId = 'Product ID is required';
                  }
                  if (!values.productName) {
                    newErrors.productName = 'Product Name is required';
                  }
                  if (!values.productDescription) {
                    newErrors.productDescription = 'Product description is required';
                  }
                  if (!values.productCategory) {
                    newErrors.productCategory = 'Product category is required';
                  }
                  if (!values.productPrice) {
                    newErrors.productPrice = 'Product price is required';
                  }
            break;
          default:
            break;
    }

    setErrors(newErrors); 

    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm, setErrors};
};
