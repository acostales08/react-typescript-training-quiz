import React, {useState} from 'react';
import useFectch from './useFectch';
import { DiscountedProductType, NonDiscountedProductType } from '../types/ProductTypes';

type ErrorMessages = {
  productId?: string;
  productName?: string;
};

const useValidationBeforeAdd = () => {
    const [exists, setExits] = useState<ErrorMessages>({})
  const { disProducts, disNonProducts } = useFectch();

  const validateExist = (values: DiscountedProductType | NonDiscountedProductType, discounted: boolean) => {
    const newErrors: ErrorMessages = {};
    switch (discounted) {
            case true:
                const isProductIdExist = disProducts.some((item) => item.productId === values.productId);
                const isProductNameExist = disProducts.some((item) => item.productName === values.productName);

                if (isProductIdExist) {
                    newErrors.productId = "Product Id already exists";
                }
                if (isProductNameExist) {
                    newErrors.productName = "Product Name already exists";
                }
                break;
        
            case false:
                const isProdIdExist = disNonProducts.some((item) => item.productId === values.productId);
                const isProdNameExist = disNonProducts.some((item) => item.productName === values.productName);

                if (isProdIdExist) {
                        newErrors.productId = "Product Id already exists";
                }
                if (isProdNameExist) {
                        newErrors.productName = "Product Name already exists";
                }
                break;
            default:
                break;
    }

    setExits(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { validateExist, exists };
};

export default useValidationBeforeAdd;
