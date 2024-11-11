import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { SiAegisauthenticator } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { motion } from "framer-motion";
import Benefitgraph from "@/assets/Benefit.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <FaPeopleGroup className="h-6 w-6" />,
    title: "Signature Classes",
    description:
      "New and Unlimited Classes exclusive to Kinetiq. Designed for the individual. Powered by the collective.",
  },
  {
    icon: <IoPeople className="h-6 w-6" />,
    title: "Personal Training",
    description:
      "Precision-backed 1:1 Personal Training with EFTI-certified COACHES, dedicated to maximizing your potential. ",
  },
  {
    icon: <SiAegisauthenticator className="h-6 w-6" />,
    title: "Authentic Pilates",
    description:
      "Studio Pilates sessions with 1:1 instruction. Tone your core and activate your mind-body connection.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="mt-3 mb-7 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center  justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center  justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={Benefitgraph}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">

            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              One-on-One training at Kinetiq is backed by our Health Advisory Board, and the EQX OS. This proprietary operating system, built to advance full health optimization, decodes and unlocks the peak of your potential, redefining High-Performance Living on a whole new scale.
              This is more than training, it’s the first-of-its-kind, data-driven and expert led path to unlocking your absolute best and achieving extraordinary results.
              </p>

            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
