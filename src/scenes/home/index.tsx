import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRogue from "@/assets/SponsorRogue.png";
import SponsorUSAPL from "@/assets/SponsorUSAPL.png";
import SponsorIron from "@/assets/SponsorIron.png";
import SponsorAnimal from "@/assets/SponsorAnimal.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-zinc-950 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="flex text-center justify-center before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageGraphic} />

              </div>
              <motion.div
            className="mt-8 flex   gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
           <AnchorLink
              className="text-sm font-bold text-primary-500  hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p className='bg-zinc-900 text-white p-2 rounded border border-zinc-100/10'>
              Join Now</p>
            </AnchorLink>
            <AnchorLink
              className="text-sm font-bold text-primary-500  hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p className='bg-zinc-900 text-white p-2 rounded border border-zinc-100/10'>
              Learn More</p>
            </AnchorLink>
          </motion.div>
            </div>


          </motion.div>

          {/* ACTIONS */}

        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >


        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[100px] flex items-center w-full bg-zinc-800 py-10">
          <div className="mx-auto w-4/5">
            <div className="flex  items-center justify-between gap-8">
              <img alt="ironman-sponsor" src={SponsorIron} />
              <img alt="rogue-sponsor" src={SponsorRogue} />
              <img alt="usapl-sponsor" src={SponsorUSAPL} />
              <img alt="animal-sponsor" src={SponsorAnimal} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
