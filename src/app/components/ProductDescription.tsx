'use client';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="w-full mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-1">Descripción</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default ProductDescription;