import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "../types";
import { useStore } from "../context/StoreContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();

  const formatPrice = (price_cents: number) => {
    const priceInRupiah = price_cents;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(priceInRupiah);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-blue-600">
              {product.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price_cents)}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center flex items-center justify-center"
          >
            <Eye className="h-4 w-4 mr-2" />
            Detail
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
