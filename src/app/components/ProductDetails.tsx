'use client';

interface ProductDetailsProps {
  brand: string;
  sku: string;
  name: string;
  price: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  brand,
  sku,
  name,
  price,
}) => {
  return (
    <div className="w-full">
      <p className="text-sm text-gray-500 mt-2">
        <span className="font-bold">{brand}</span> | SKU: {sku}
      </p>
      <h1 className="text-2xl font-bold text-gray-800 mt-2">{name}</h1>
      <p className="text-xl font-bold text-gray-800 mt-4">
        S/ {new Intl.NumberFormat('es-PE', { style: 'decimal', minimumFractionDigits: 2 }).format(price)}
      </p>
    </div>
  );
};

export default ProductDetails;