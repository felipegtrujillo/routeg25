import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <a
        href="https://www.instagram.com/lacalchona.cl/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="text-2xl text-white hover:text-gray-800 transition-colors"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100090006671910&mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="text-2xl text-white hover:text-gray-800 transition-colors"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@lacalchona.cl"
        target="_blank"
        rel="noopener noreferrer"
        title="TikTok"
        className="text-2xl text-white hover:text-gray-800 transition-colors"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialIcons;
