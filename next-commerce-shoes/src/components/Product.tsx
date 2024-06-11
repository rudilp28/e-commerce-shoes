import { ProductType } from "@/types/ProductType"

type ProductProps = {
    product: ProductType
}

function Product({ product } : ProductProps ) {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg h-96 overflow-hidden p-5" >
            <div className="relative max-h-72 flex-1">{product.image}</div>
            <div className="flex justify-between font-bold my-3">{product.title}</div>
            <div>${product.price}</div>
            <button className="rounded-md bg-teal-600 text-white p-1.5 text-center">Adicionar ao Carrinho</button>
        </div>
    )
}

export default Product
