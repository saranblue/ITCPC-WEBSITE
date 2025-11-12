import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'


export default function Products(){
return (
<div className="bg-white">
<h1 className="text-2xl font-bold">Products</h1>
<p className="text-gray-600 mt-2">Explore our spice portfolio and request product details or samples.</p>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
{products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
)
}