import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, TrendingUp } from "lucide-react";

export function JoinSection() {
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
          <p className="text-muted-foreground mb-4">
            소울이 있는 대화를 통해 선한 영향력을 발휘하고
          </p>
          <p className="text-lg text-foreground mb-6">
            전세계 어디서나 수익을 창출할 수 있는
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            마음통 타로 상담사에 도전하세요
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {[
            { icon: Users, title: "선한 영향력", desc: "많은 분들에게 위로와 희망을 전달하세요" },
            { icon: Globe, title: "장소 무관", desc: "전세계 어디서나 상담이 가능합니다" },
            { icon: TrendingUp, title: "수익 창출", desc: "당신의 재능으로 안정적인 수익을 만드세요" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl gradient-card border border-border/50"
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            마음통 타로 상담사 되는 방법 알아보기
          </button>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            신점·사주 상담사 되는 방법 알아보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
