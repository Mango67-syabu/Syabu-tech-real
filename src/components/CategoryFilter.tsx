import React from 'react';
import { BookOpen, Code, Grid } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  const categories = [
    { id: 'all', name: 'Semua Produk', icon: Grid },
    { id: 'ebook', name: 'E-book', icon: BookOpen },
    { id: 'template', name: 'Template', icon: Code }
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === id
              ? 'bg-blue-600 text-white shadow-lg transform scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          }`}
        >
          <Icon className="h-4 w-4" />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;