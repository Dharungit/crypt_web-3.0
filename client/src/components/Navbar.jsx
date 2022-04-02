import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const NavItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="w-32 cursor-pointer text-white font-bold text-3xl tracking-widest">
          CRYPT
        </h1>
      </div>
      <div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
            return <NavItem key={item + index} title={item} />;
          })}
          <li>
            <button>
              <span>Login</span>
              <div className="liquid"></div>
            </button>
          </li>
        </ul>
      </div>
      <div>
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={27}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={27}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <>
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in space-y-5"
            >
              <li>
                <AiOutlineClose
                  fontSize={28}
                  className="text-white md:hidden cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => {
                  return (
                    <NavItem
                      key={item + index}
                      title={item}
                      classProps="my-2 text-lg"
                    />
                  );
                }
              )}
              <li>
                <button>
                  <span>Login</span>
                  <div className="liquid"></div>
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
