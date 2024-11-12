import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 bg-gradient-to-bl from-zinc-400/20 via-slate-200/50 to-zinc-400/20 border-zinc-200/20 px-5 py-8 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-zinc-200/20 bg-slate-200/50 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-black/90">{title}</h4>
      <p className="my-3 text-zinc-600">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-black/80  hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p className='text-black/30'>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
