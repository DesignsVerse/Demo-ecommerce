'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouseChimney,
  faRing,
  faGem as faGemSolid,
  faLeaf,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavigationBar: FC = () => {
  return (
    <nav className="md:hidden flex justify-around items-center py-4 border-t border-[#800000] bg-[#FCF7F2] fixed bottom-0 left-0 right-0 w-full shadow-lg z-50">
      <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faHouseChimney} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Home</span>
      </Link>
      <Link href="/shop-filter/special-rudraksha" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faRing} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Bracelets</span>
      </Link>
      <Link href="/shop-filter/gemstones" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faGemSolid} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Gemstones</span>
      </Link>
      <Link href="/shop" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faLeaf} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Rudraksha</span>
      </Link>
      <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-[#800000] transition-colors duration-200">
        <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
        <span className="text-xs mt-1 font-medium">Cart</span>
      </Link>
    </nav>
  );
};

export default NavigationBar;