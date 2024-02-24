import { createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from "../../pages/Layouts/Layout";
import ErrorElement from "./error/ErrorElement";
import Shop from "../../pages/Shop/Shop";
import ShopCategory from "../../pages/ShopCategories/ShopCategory";
import Product from "../../pages/product/Product";
import NotFound from "../../pages/404/NotFound";
import Cart from "../../pages/cart/Cart";
import LoginSignUp from "../../pages/auth/LoginSignUp";
import { kids_banner, men_banner, women_banner } from "../assets/images";

type ProductID = {
    productId: string | number
};

const ProductRoute: React.FC<{ params: ProductID }> = ({ params }) => {
    const navigate = useNavigate();

    // Check if productId is present
    if (!params || !params.productId) {
        navigate("/"); // Navigate back to homepage
        return null;
    }

    return <Product />;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Shop />,
                errorElement: <ErrorElement />
            },
            {
                path: 'mens',
                element: <ShopCategory banner={men_banner} category={'men'} />,
                errorElement: <ErrorElement />
            },
            {
                path: 'womens',
                element: <ShopCategory banner={women_banner} category={'women'}/>,
                errorElement: <ErrorElement />
            },
            {
                path: 'kids',
                element: <ShopCategory banner={kids_banner} category={'kid'}/>,
                errorElement: <ErrorElement />
            },
            {
                path: 'product',
                errorElement: <ErrorElement />,
                children: [
                    {
                        path: ':productId',
                        element: <ProductRoute params={{productId: ':productId'}} />,
                    },
                ]
            },            
            {
                path: 'cart',
                element: <Cart />,
                errorElement: <ErrorElement />
            },
            {
                path: 'login',
                element: <LoginSignUp />,
                errorElement: <ErrorElement />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
