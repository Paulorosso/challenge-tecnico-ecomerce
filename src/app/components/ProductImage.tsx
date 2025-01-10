'use client';

import Image from 'next/image';

interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, name }) => {
  return (
    <div className="w-full md:w-1/2">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        priority
        className="object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ProductImage;