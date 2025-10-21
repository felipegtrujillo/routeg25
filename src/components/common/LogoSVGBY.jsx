import Link from 'next/link';
import Logo from '../../../public/assets/img/by2.svg';

const LogoSVG = ({ heightMobile = '6rem', heightTablet = '8rem', heightDesktop = '10rem' }) => {
  return (
    <div className="relative bottom-7 flex items-center justify-center">
      <Link href="/" aria-label="Vuelve al inicio/home">
        <Logo
          className={`
            h-[${heightMobile}]
            md:h-[${heightTablet}]
            xl:h-[${heightDesktop}]
            w-auto
            transition-all duration-300
          `}
        />
      </Link>
    </div>
  );
};

export default LogoSVG;
