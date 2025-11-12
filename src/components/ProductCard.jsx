import React from 'react'


export default function ProductCard({product}){
return (
<div className=" rounded-lg p-4 ">
<img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
<h3 className="mt-3 px-15font-semibold">{product.name}</h3>
<p className="text-sm text-gray-600">{product.summary}</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-sm text-gray-800">Grades: {product.grades.join(', ')}</div>
<button className="px-3 py-1 bg-green-700 text-white rounded text-sm">Enquire</button>
</div>
</div>
)
}