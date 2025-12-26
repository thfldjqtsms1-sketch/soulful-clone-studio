import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tarotCards from "@/assets/tarot-cards.webp";

export function CardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              오늘의 운세 뽑기
            </h2>
            <p className="text-lg text-foreground mb-6">
              7종의 타로카드와 오라클 카드로
              <br />
              오늘 하루를 예측해 보세요.
            </p>
            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              마음통에서 오늘의 카드 뽑아보기
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={tarotCards}
              alt="타로 카드"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
