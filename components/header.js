import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  const openMenuPopup = useCallback(() => {
    setMenuPopupOpen(true);
  }, []);

  const closeMenuPopup = useCallback(() => {
    setMenuPopupOpen(false);
  }, []);

  const onDeveloperClick = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[1px] [background:linear-gradient(90deg,_rgba(11,_0,_85,_0.01),_rgba(255,_0,_153,_0.01))] w-[1732px] h-[60px] overflow-hidden shrink-0 z-[20]">
        <img
          className="absolute top-[6px] left-[0px] w-[86px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/frame-60@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17px] left-[386px] w-[30px] h-[27px] hidden md:flex sm:flex"
          onClick={openMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[30px] h-[5px] overflow-hidden" />
          <div className="absolute top-[11px] left-[0px] rounded-3xs bg-whitesmoke w-[30px] h-[5px] overflow-hidden" />
          <div className="absolute top-[22px] left-[0px] rounded-3xs bg-whitesmoke w-[30px] h-[5px] overflow-hidden" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[12px] left-[553px] text-xl font-bold font-kadwa text-white text-center inline-block w-[120px] h-[29px]">
          Community
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17px] left-[888px] text-xl font-bold font-kadwa text-white text-center inline-block w-[120px] h-[29px]"
          onClick={onDeveloperClick}
        >
          Developer
        </button>
      </div>
      {isMenuPopupOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeMenuPopup}>
          <Menu onClose={closeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
