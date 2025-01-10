import Link from 'next/link';

const Logo = () => {
  return (
    <div
      className="relative flex items-start justify-center h-[9rem] w-[9rem] lg:h-[10.5rem] lg:w-[10.5rem]"
    >
      <Link href="/" aria-label="Vuelve al inicio/home">
        <img
          src="/assets/img/lacalchona.svg" // Ruta relativa desde /public
          alt="Logo calchona"
          className="object-contain h-full w-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
