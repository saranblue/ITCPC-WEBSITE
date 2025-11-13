import cardamomPremium from "../assets/cardamom_Premium.jpg";
import cardamomDeluxe from "../assets/caradom_deluxe.jpg";
import cardamomOrganic from "../assets/caradom_organic.png";

export default function FeatureProduct() {
  // All product data in the same file
  const products = [
    {
      id: "cardamom-1",
      name: "Cardamom - Premium",
      summary:
        "Aromatic green cardamom from Idukki hills, carefully processed.",
      grades: ["A", "B"],
      image: cardamomPremium,
    },
    {
      id: "cardamom-2",
      name: "Cardamom - Deluxe",
      summary:
        "Hand-picked cardamom pods offering a strong aroma and bold flavor, ideal for premium export.",
      grades: ["A+", "A"],
      image: cardamomDeluxe,
    },
    {
      id: "cardamom-3",
      name: "Cardamom - Organic",
      summary:
        "Cultivated using sustainable and chemical-free methods, preserving natural aroma and purity.",
      grades: ["Organic", "Premium"],
      image: cardamomOrganic,
    },
  ];

  // ProductCard component inside same file
  const ProductCard = ({ product }) => (
    <div className="rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.summary}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-800">
          Grades: {product.grades.join(", ")}
        </div>
        <button className="px-3 py-1 bg-green-700 text-white rounded text-sm hover:bg-green-800">
          Enquire
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Featured Products Section */}
      <section id="products" className="mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-3 text-center">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

