import React, { createContext, useContext, PropsWithChildren, useState } from 'react';
import { DiscountedProductType, NonDiscountedProductType } from '../types/ProductTypes';
import { HttpRequest } from '../api/api';

type ContextType = {
  insertData: (props: DiscountedProductType | NonDiscountedProductType) => Promise<void>;
  discounted: boolean;
  setDiscounted: any
};

const Context = createContext<ContextType | undefined>(undefined);

const ProductContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [discounted, setDiscounted] = useState<boolean>(true);

    console.log(discounted)
    const insertData = async (props: DiscountedProductType | NonDiscountedProductType): Promise<void> => {
      try {
        switch (discounted) {
          case true:
            await new HttpRequest().addDiscountedProduct(props as DiscountedProductType);
            break;
          case false:
            await new HttpRequest().addNonDiscountedProduct(props as NonDiscountedProductType);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    };
    

  const value: ContextType = {
    insertData,
    discounted,
    setDiscounted
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useProductContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useProductContext must be used inside provider');
  }
  return context;
};

export { ProductContextProvider, useProductContext };
