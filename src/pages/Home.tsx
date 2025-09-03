import React from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/PromoBanner';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import { BookOpen, Code, Star, Users, Download, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const { products } = useStore();
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50">
      <PromoBanner />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih kategori yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/products?category=ebook"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">E-book</h3>
                  <p className="text-blue-600 font-medium">Buku Digital Premium</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Koleksi e-book berkualitas tinggi dalam berbagai topik seperti bisnis, teknologi, dan pengembangan diri.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Lihat Koleksi E-book →
              </span>
            </Link>

            <Link 
              to="/products?category=template"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <Code className="h-12 w-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Template</h3>
                  <p className="text-purple-600 font-medium">Design Template Siap Pakai</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Template website, landing page, dan dashboard yang modern dan responsive untuk berbagai kebutuhan bisnis.
              </p>
              <span className="text-purple-600 font-semibold group-hover:underline">
                Lihat Koleksi Template →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Produk terpilih dengan kualitas terbaik dan paling diminati
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih DigiStore?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform digital store terpercaya dengan produk berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">
                Semua produk telah melalui kurasi ketat untuk menjamin kualitas terbaik
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Instan</h3>
              <p className="text-gray-600">
                Akses langsung setelah pembelian, tanpa menunggu pengiriman
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aman & Terpercaya</h3>
              <p className="text-gray-600">
                Pembayaran aman dengan enkripsi SSL dan garansi kepuasan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;