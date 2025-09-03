import React from 'react';
import { Percent } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <Percent className="h-8 w-8 mr-2" />
          <span className="text-3xl font-bold">DISKON BESAR!</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Diskon E-book 30%
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Minggu Ini Saja!
        </p>
        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
          Dapatkan akses ke koleksi e-book premium dan template berkualitas tinggi dengan harga spesial
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Lihat Promo
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
            Semua Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;