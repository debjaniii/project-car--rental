import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/contants/motion";
import styles from "@/contants/styles";
// import styles from "@/styles/about.css";
const Feedback = () => {
  return (
    <section className="xs:p-8 my-6 sm:my-2 px-[10%]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
      >
        {/* <motion.div variants={fadeIn("right", "tween", 0.2, 1)}> */}
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-5xl text-[26px] mt-4 mb-3 text-[#f9a826]">
              Why choose us?
            </h4>
            
          </div>
          <h2 className="mt-2.5 sm:mt-5 font-normal sm:text-lg text-md leading-6 text-slate-400">
          WheelQuest is a local car rental provider with more than 25 years of experience in the car rental industry. </h2>

<ul>
       <li>- book directly through a supplier, and not through a broker</li>

       <li>- vehicle make and model guaranteed, not “similar” to those selected;</li>

       <li>- car parking in the heart of Sunny Beach;</li>

       <li>- same day rental;</li>

       <li>-  hotel and airport delivery/collection;</li>

       <li>- flexible terms and payment options for long term rental</li>
  
       <li>- 24/7 telephone contact;</li>

 </ul>

<p>We offer a varied fleet of cars, ranging from the compact Toyota Yaris to 7-seaters, and SUVs. All our vehicles have air conditioning,  power steering, electric windows. All our vehicles are bought and maintained at official dealerships only. Automatic transmission cars are available in every booking class.
</p>
 
<br />
We pride ourselves on personalized service, great cars and excellent rates"
            
        {/* </motion.div> */}
        <motion.div variants={fadeIn("left", "tween", 0.2, 1.5)}>
          <img
            src="/aboutus.png"
            className="px-4 lg:px-5 xl:px-14 w-[60%] h-auto object-cover rounded-3xl"
            alt=""
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Feedback;
