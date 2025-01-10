import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neutral-100">
          ROSSO STORE
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-neutral-100 hover:underline hover:underline-offset-1">
            Productos
          </Link>
          <Link href="/" className="text-neutral-100 hover:underline hover:underline-offset-1">
            Ofertas
          </Link>
          <Link href="/" className="text-neutral-100 hover:underline hover:underline-offset-1">
            Contacto
          </Link>
        </nav>

        <div className="flex space-x-4">
          <Link href="/" className="text-neutral-100 hover:underline hover:underline-offset-1">
            Mis pedidos
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;