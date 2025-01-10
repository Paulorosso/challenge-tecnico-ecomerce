import React from 'react';
import Image from 'next/image';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/loading.gif"
        alt="Cargando..."
        width={50}
        height={50}
        unoptimized
        style={{ width: '50px', height: 'auto' }}
      />
    </div>
  );
};

export default LoadingSpinner;