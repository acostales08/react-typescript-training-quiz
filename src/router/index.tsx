import { RouterConfig } from "./config";
import { Switch, Route} from 'react-router-dom'
import { ProductList, DiscountedProduct, NonDiscountedProduct } from "../pages";

type Props = {
    component: any
    exact: boolean,
    path: string
}

const DynamicRouter = ({component: Component, ...rest}: Props) => {
    return(
        <Route
            {...rest}
            render={(props) => (
                <Component {...props}/> 
            )}
        />
    )
}

export default () => (
    <Switch>
        <DynamicRouter exact path={RouterConfig.productlist.path} component={ProductList}/> 
        <DynamicRouter exact path={RouterConfig.discountedProduct.path} component={DiscountedProduct}/> 
        <DynamicRouter exact path={RouterConfig.nondiscountedProduct.path} component={NonDiscountedProduct}/> 
    </Switch>
)