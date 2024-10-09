import Logo from '../../../public/assets/img/lacalchona.svg';

const LogoSVG = ({ heightMobile , heightTablet, heightDesktop }) => {
    return (
        <div className="flex items-start justify-center">
            <Logo className={`w-[100%]  max-h-[${heightMobile}] md:max-h-[${heightTablet}] lg:max-h-[${heightDesktop}]`} />
        </div>
    );
};

export default LogoSVG;
