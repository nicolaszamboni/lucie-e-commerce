import { FaSearch, FaHeart, FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <div className="bg-[#7a2d1b] flex gap-4 items-center h-24 justify-around text-white">
      <div className="w-14 text-center">
        <p>Lucie Cherie</p>
      </div>
      <div className="flex gap-5 justify-center">
        <p>Jewelry</p>
        <p>Coleções</p>
        <p>Promoções</p>
        <p>Sobre nós</p>
      </div>
      <div className="flex gap-8 justify-center">
        <FaSearch size={20}/>
        <FaHeart size={20}/>
        <FaUserCircle size={20}/>
      </div>
    </div>
  );
}
