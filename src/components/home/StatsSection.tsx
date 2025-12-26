import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ target, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground mb-2">10명 중 6명이 한 달내로 다시 찾는</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            압도적인 상담 퀄리티
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 rounded-2xl gradient-card"
          >
            <p className="text-muted-foreground mb-2">누적 상담</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              <Counter target={522000} suffix="" />
              <span className="text-foreground ml-2">건</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 rounded-2xl gradient-card"
          >
            <p className="text-muted-foreground mb-2">누적 만족도</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              <Counter target={4.9} decimals={1} />
              <span className="text-muted-foreground text-2xl">/5</span>
              <span className="text-foreground ml-2">점</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            클래스가 다른 상담 경험 시작하기
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["# 정확해요", "# 친절해요", "# 전문적이에요", "# 공감해줘요", "# 따뜻해요", "# 도움됐어요"].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
