import Link from 'next/link';

import Logo from '../../../public/assets/img/lacalchona.svg';

const LogoSVG = ({ heightMobile , heightTablet, heightDesktop }) => {
    return (
        <div className="flex items-start justify-center">
            <Link href="/" aria-label="Vuelve al inicio/home">
            <Logo className={`w-[100%]  max-h-[${heightMobile}] md:max-h-[${heightTablet}] lg:max-h-[${heightDesktop}]
               sm:max-h-[10rem] 
                 min-w-[90px] `} />
            </Link>

        </div>
    );
};

export default LogoSVG;
