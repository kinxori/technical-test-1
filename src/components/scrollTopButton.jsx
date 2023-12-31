import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [topButtonDisplay, setTopButtonDisplay] = useState(false);

  const handleScroll = () => {
    const scrollHeigth = window.scrollY;
    const screenHeigth = window.innerHeight;
    setTopButtonDisplay(scrollHeigth > screenHeigth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(topButtonDisplay);

  return (
    <>
      <div
        className={
          topButtonDisplay
            ? "opacity-100 transition-all ease-in-out duration-[.5s] fixed right-0 bottom-0 z-10"
            : "opacity-0 transition-all ease-in-out duration-[.5s] fixed right-0 bottom-0 z-10"
        }
      >
        <button
          className="
          flex 
          justify-center 
          items-center 
          p-0 
          m-5 
          w-[50px] 
          h-[50px] 
          text-black 
              rounded-[50%] 
          bg-white 
          text-[30px] 
          border-black 
          border-[2px] 
          transition-all 
          ease-in-out 
          duration-[.3s]
          hover:border-black 
          hover:rounded-[30%] 
          ts:w-[60px] 
          ts:h-[60px]   
          ts:text-[35px]
          ts:border-[3px]
          "
          onClick={handleClick}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}
