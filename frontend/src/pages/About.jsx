import React from "react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../utils/Animation";

const About = () => {
     return (
    <>
      <Navbar />

      {/* Counter Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <Counter />
      </section>

      {/* About Section */}
      <section className="mt-24 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
  About ChakriLagbe
  <span className="block h-1 w-28 bg-green-500 mx-auto mt-4 rounded-full"></span>
</h1>

        <div className="max-w-5xl text-center mx-auto space-y-8 text-gray-600">
          <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="leading-relaxed text-lg md:text-xl"
          >
            ChakriLagbe is a modern job portal designed to connect job seekers
            with recruiters seamlessly. Users can browse and apply for jobs
            across various industries in Bangladesh, ensuring a transparent
            and efficient hiring process for both candidates and employers.
          </motion.p>

          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="leading-relaxed text-lg md:text-xl"
          >
            With ChakriLagbe, job seekers can upload their resumes, apply
            instantly, and receive notifications for new opportunities. Our
            platform empowers recruiters to find the right talent quickly,
            bridging the gap between employers and potential employees while
            fostering career growth and economic development.
          </motion.p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 px-4 md:px-8">
        <Testimonials />
      </section>

      {/* How It Works Section */}
      <section className="mt-32 px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            How It Works?
          </h1>
          <p className="text-lg text-gray-500">
            Job for anyone, anywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <motion.div
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex">
                <img
                  src={assets.work_1}
                  alt="Resume Assessment"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Free Resume Assessments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Employers spend 31 seconds scanning resumes to identify potential matches.
              ChakriLagbe makes this process faster and more accurate.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex">
                <img
                  src={assets.work_2}
                  alt="Job Fit Scoring"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Job Fit Scoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our advanced algorithm scores your resume against job criteria to
              help you find the best match.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex">
                <img
                  src={assets.work_3}
                  alt="Help Every Step"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Help Every Step of the Way
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receive expert guidance throughout your job search journey with
              ChakriLagbe’s support.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
