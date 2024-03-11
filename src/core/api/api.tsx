import { Api } from "../http";
import { DiscountedProductType } from "../types/ProductTypes";

export class HttpRequest {
    public addDiscountedProduct(props: DiscountedProductType){
        return new Api().connect().post('/discounted', props)
    }
    public addNonDiscountedProduct(props: DiscountedProductType){
        return new Api().connect().post('/nondiscounted', props)
    }

    public fetchDiscProd() {
        return new Api().connect().get('/discounted')
    }
    public fetchNonDiscProd() {
        return new Api().connect().get('/nondiscounted')
    }
    public editProduct() {
        return new Api().connect().put('/discounted')
    }
}