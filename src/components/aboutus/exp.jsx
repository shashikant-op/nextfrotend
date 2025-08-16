import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Exp=()=>{
    const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // 20% visible
  });

  const stats = [
    { end: 50, suffix: " Year", label: "Material Warranty" },
    { end: 500, suffix: "+", label: "Homes Completed" },
    { end: 100, suffix: "+", label: "Interior Designer" },
    { end: 45, suffix: " Days", label: "Project Delivery" },
  ];

  return (
    <section ref={ref} className="bg-gray-100 text-center py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold">
              {inView && (
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              )}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
    )
}
export default Exp;