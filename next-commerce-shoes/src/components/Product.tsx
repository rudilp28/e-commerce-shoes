import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage"


type ProductProps = {
    product: ProductType
}

function Product({ product } : ProductProps ) {
    return (
        <div className="flex flex-col bg-red-800 rounded-md shadow-xl h-96 overflow-hidden p-5" >
            <div className="relative max-h-72 flex-1"><ProductImage product={product} fill/></div>
            <div className="flex justify-between font-bold my-3">
                <p className="w-60 truncate">{product.title}</p>
                <p className="text-md">${product.price}</p>
            </div>
            <button className="rounded-md bg-teal-600 text-white p-1.5 text-center">Adicionar ao Carrinho</button>
        </div>
    )
}

export default Product
