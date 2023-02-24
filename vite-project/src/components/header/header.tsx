import { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaUserCircle,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#7a2c1b] flex lg:gap-4 items-center h-24 justify-around text-white border-b">
      <div
        className={`${
          open ? "bg-[#c75840] h-max " : "h-0 opacity-0"
        } fixed top-20 md:hidden flex flex-col text-lg gap-2 w-auto py-2 px-4 rounded-lg left-5 transition-all duration-500 z-50`}
      >
        <p>Jewelry</p>
        <p className="border-t pt-2">Coleções</p>
        <p className="border-t pt-2">Promoções</p>
        <p className="border-t pt-2">Sobre nós</p>
      </div>
      {!open ? (
        <FaBars
          onClick={() => setOpen(!open)}
          size={20}
          className="md:hidden"
        />
      ) : (
        <FaRegWindowClose
          onClick={() => setOpen(!open)}
          size={20}
          className="md:hidden"
        />
      )}
      <div className="md:w-14 text-center">
        <p>LUCIE CHERIE</p>
      </div>
      <div className="hidden md:flex gap-5 justify-center">
        <p>Jewelry</p>
        <p>Coleções</p>
        <p>Promoções</p>
        <p>Sobre nós</p>
      </div>
      <div className="flex gap-8 justify-center">
        <FaSearch size={20} />
        <FaHeart size={20} />
        <FaUserCircle size={20} />
      </div>
    </div>
  );
}
