import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShoppingCart, Download, Star, Clock, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart, user } = useStore();
  
  const product = products.find(p => p.id === id);
  const isPurchased = user?.purchasedProducts.includes(id || '') || false;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handlePurchase = () => {
    addToCart(product);
  };

  const features = [
    'Download selamanya',
    'Update gratis',
    'Support 24/7',
    'Garansi uang kembali'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Preview */}
            <div className="p-8">
              <div className="relative">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    product.category === 'ebook' ? 'bg-blue-600' : 'bg-purple-600'
                  }`}>
                    {product.category === 'ebook' ? 'E-book' : 'Template'}
                  </span>
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.8) • 127 reviews</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Yang Anda Dapatkan:</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </div>
                    {product.originalPrice && (
                      <div className="text-lg text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Download instan
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              {isPurchased ? (
                <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Sekarang
                </button>
              ) : (
                <button
                  onClick={handlePurchase}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Beli & Download
                </button>
              )}

              <p className="text-sm text-gray-500 text-center mt-4">
                *Akses selamanya setelah pembelian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;