import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Precision Ride",
    description:
      "A performance-based cycling experience exclusive to Kinetiq. This class uses precision metrics to monitor your power and quantify your progress over time. Build endurance, increase aerobic capacity, and discover your reason to ride.",
    image: image1,
  },
  {
    name: "Sculpted Yoga",
    description:
      "Take Vinyasa up a notch with a challenging class that combines yoga with lightweight sculpting. Incorporating Bala Bangles and hand weights, this class merges Vinyasa flow with low-impact toning exercises to enhance strength, mobility, and balance.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Evolve your Pilates practice with our contemporary approach that sculpts your core, glutes, and full body. Start with classical Pilates movements, then intensify, build, and burn for a transformative Pilates experience.",
    image: image3,
  },
  {
    name: "One on One",
    description:
      "One-on-One training at Kinetiq is backed by our Health Advisory Board, and the EQX OS. This proprietary operating system, built to advance full health optimization, decodes and unlocks the peak of your potential, redefining High-Performance Living on a whole new scale.",
    image: image4,
  },
  {
    name: "EQ",
    description:
    "Equifit is the first step in understanding and maximizing your potential. Kinetiq certified Coaches use this assessment protocol to develop performance plans tailored to individual need, want, and goal. Equifit assessments can be done every six months to track improvement and tailor programs during the lifelong fitness journey. ",
    image: image5,
  },
  {
    name: "Coaching",
    description:
      "Trained, educated, and backed by our Health Advisory Board, Kinetiq Coaches are certified to develop programs for total body conditioning, specialized needs, and advanced health optimization.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-zinc-950 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" text-white md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 antialiased">
            This is more than training, it’s the first-of-its-kind, data-driven and expert led path to unlocking your absolute best and achieving extraordinary results.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
