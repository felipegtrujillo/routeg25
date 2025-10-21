import Link from 'next/link';

import Logo from '../../../public/assets/img/g25.svg';

const LogoSVG = ({ heightMobile , heightTablet, heightDesktop }) => {
    return (
        <div className="flex items-start justify-center ">
            <Link href="/" aria-label="Vuelve al inicio/home">
            <Logo className={`w-[50] h-[50]  sm:max-h-[${heightMobile}] md:max-h-[${heightTablet}] xl:max-h-[${heightDesktop}]
               sm:max-h-[10rem] 
                 min-w-[90px] `} />
            </Link>

        </div>
    );
};

export default LogoSVG;
