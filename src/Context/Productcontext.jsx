import { createContext, useState } from "react";

export const productsContext = createContext(null)

export default function Products({ children }) {
    const [productDetails, setProductDetails] = useState({})
    return (
        <productsContext.Provider value={{ productDetails, setProductDetails }}>
            {children}
        </productsContext.Provider>
    )
}