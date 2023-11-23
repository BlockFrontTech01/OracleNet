import { useCallback, useEffect } from "react";

const Menu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onDeveloperClick = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div className="flex flex-row items-start justify-center max-w-full max-h-full overflow-auto">
      <div
        className="relative rounded-3xs [background:linear-gradient(140.75deg,_#0a0055,_#fd0099)] w-[296px] h-[303px] overflow-hidden shrink-0 max-w-full max-h-full [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_fade-in] md:opacity-[0]"
        data-animate-on-scroll
      >
        <div
          className="absolute top-[18px] left-[255px] w-[26.2px] h-[23.1px] cursor-pointer"
          onClick={onClose}
        >
          <div className="absolute top-[19.3px] left-[0px] rounded-3xs bg-whitesmoke w-[30px] h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0] mix-blend-normal" />
          <div className="absolute top-[0px] left-[3.2px] rounded-3xs bg-whitesmoke w-[30px] h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0] mix-blend-normal" />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[108px] left-[72px] text-xl font-bold font-kadwa text-white text-center inline-block w-[120px] h-[29px]">
          Community
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[183px] left-[72px] text-xl font-bold font-kadwa text-white text-center inline-block w-[120px] h-[29px]"
          onClick={onDeveloperClick}
        >
          Developer
        </button>
      </div>
    </div>
  );
};

export default Menu;
