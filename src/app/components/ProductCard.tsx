import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
      <div className="relative w-full h-96 md:h-64">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          priority
          className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{product.brand}</p>
        <h2 className="text-md font-semibold text-gray-800 truncate-2-lines">{product.name}</h2>
        <p className="text-lg text-gray-800 font-bold mt-2 text-right">
          S/ {new Intl.NumberFormat('es-PE', { style: 'decimal', minimumFractionDigits: 2 }).format(product.price)}
        </p>
        <Link href={`/products/${product.sku}`}>
          <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500">
            Ver Detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;