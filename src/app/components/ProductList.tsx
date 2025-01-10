import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: { id: string; name: string };
  brand: string;
  price: number;
  stock: number;
}

interface ProductListProps {
  products: Product[];
  notFound: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, notFound }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {notFound ? (
        <p className="text-center text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Producto no encontrado</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;