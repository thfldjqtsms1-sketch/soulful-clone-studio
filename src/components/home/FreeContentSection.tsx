import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Stars, Bot, Users, Calendar } from "lucide-react";

const contents = [
  {
    icon: Calendar,
    title: "7종의 카드로 보는",
    subtitle: "오늘의 운세",
    color: "from-primary to-gold-light",
  },
  {
    icon: Users,
    title: "나의 성향을 알아보는",
    subtitle: "소울 테스트",
    color: "from-teal to-teal-light",
  },
  {
    icon: Stars,
    title: "오늘의",
    subtitle: "별자리 운세",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "척척도사 AI의",
    subtitle: "챗봇 타로 상담",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "마음통 MBTI로",
    subtitle: "상담 궁합을 확인해보세요!",
    color: "from-rose-500 to-orange-500",
  },
];

export function FreeContentSection() {
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            나를 이해하고 운의 흐름을 예측할 수 있는
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            다양한 무료 콘텐츠
          </h2>
        </motion.div>

        {/* Scrolling cards */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-slow">
            {[...contents, ...contents].map((content, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 mx-4"
              >
                <div className="h-80 rounded-2xl overflow-hidden relative group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/70 transition-colors" />
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <content.icon className="w-16 h-16 text-primary mb-6" />
                    <p className="text-muted-foreground text-sm mb-2">{content.title}</p>
                    <h3 className="text-xl font-bold text-foreground">{content.subtitle}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            0원으로 이 모든 콘텐츠 경험하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
