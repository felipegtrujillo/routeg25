import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <a
        href="https://www.instagram.com/routeg25.cl/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="text-2xl text-white hover:text-custom-red transition-colors"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/share/1C5Y9qhCQg/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="text-2xl text-white hover:text-custom-red transition-colors"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@routeg25?_t=ZM-90jeDIO6kGZ&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        title="TikTok"
        className="text-2xl text-white hover:text-custom-red transition-colors"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialIcons;
