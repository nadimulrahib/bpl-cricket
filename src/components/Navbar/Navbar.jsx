import navLogo from "../../assets/logo.png";
import dollar from "../../assets/DoubleDollar.png";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto py-4 px-6 flex items-center">
      <div className="flex-none"></div>
      <div className="flex-1">
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="flex items-center gap-2">
        <p className=" font-medium">4416454</p>
        <p className=" font-medium">Coin</p>
        <img src={dollar} alt="Dollar Icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
