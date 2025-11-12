import React from 'react'

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function FeatureProduct() {
  return (
    <div>
      {/* Featured Products Section */}
      <section className="mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-3  text-center">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 sm:gap-8 mt-6">

          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
