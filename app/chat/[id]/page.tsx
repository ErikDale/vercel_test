"use client"
import { useParams } from "next/navigation";


function ProductDetail() {
    const params = useParams()    
    return <h1>Product details of product {params.id}</h1>
}

export default ProductDetail;