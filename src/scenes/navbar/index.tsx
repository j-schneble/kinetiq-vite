import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-zinc-700 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween}  bg-zinc-900 to-zinc-500/40 border-b border-zinc-800/20 fixed top-0 py-4 z-30 w-full `}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img className='' alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {/* {isAboveMediumScreens ? ( */}
              <div className={`${flexBetween} text-zinc-400 antialiased w-full`}>
                <div className={`${flexBetween} text-zinc-400 antialiased gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact "
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                 </ActionButton>
                </div> */}
              </div>
            {/* ) : ( */}
              {/* <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              > */}
                {/* <Bars3Icon className="h-6 w-6 text-white" /> */}
              {/* </button> */}
            {/* )} */}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
