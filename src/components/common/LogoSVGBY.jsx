import Link from 'next/link';

import Logo from '../../../public/assets/img/routeg25by.svg';

const LogoSVG = ({ heightMobile , heightTablet, heightDesktop }) => {
    return (
        <div className="flex items-start justify-center w-100 h-100">
            <Link href="/" aria-label="Vuelve al inicio/home">
            <Logo className={`w-[50] h-[50]  max-h-[${heightMobile}] md:max-h-[${heightTablet}] lg:max-h-[${heightDesktop}]
               sm:max-h-[10rem] 
                 min-w-[90px] `} />
            </Link>

        </div>
    );
};

export default LogoSVG;
