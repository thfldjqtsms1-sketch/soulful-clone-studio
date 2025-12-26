import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

const reasons = [
  {
    number: "1",
    title: "품격 있게 소통합니다.",
    description: "상담사들은 전문적인 교육을 통해 품격 있는 소통 방법을 배웁니다.",
  },
  {
    number: "2",
    title: "소울님의 마음을 읽습니다.",
    description: "타로카드를 통해 당신의 내면 깊은 곳의 이야기를 들려드립니다.",
  },
  {
    number: "3",
    title: "소울님의 감정에 공감합니다.",
    description: "당신의 아픔과 기쁨에 진심으로 공감하며 함께합니다.",
  },
  {
    number: "4",
    title: "긍정 에너지를 전합니다.",
    description: "상담을 통해 긍정적인 에너지와 희망을 전달합니다.",
  },
  {
    number: "5",
    title: "잘될 운명의 솔루션을 제안합니다.",
    description: "단순한 예언이 아닌, 실질적인 해결책을 제시합니다.",
  },
];

export function ReasonsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeReason, setActiveReason] = useState(0);

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground mb-2">마음통 상담이 다른</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            5가지 이유
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveReason(index)}
              className={`flex items-start gap-4 p-6 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${
                activeReason === index
                  ? "bg-secondary border-l-4 border-primary"
                  : "hover:bg-secondary/50"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                activeReason === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {activeReason === index ? <Check className="w-4 h-4" /> : reason.number}
              </div>
              <div>
                <h3 className={`font-semibold mb-1 transition-colors ${
                  activeReason === index ? "text-primary" : "text-foreground"
                }`}>
                  {reason.title}
                </h3>
                {activeReason === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-muted-foreground text-sm"
                  >
                    {reason.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            남다른 고품격 상담 시작하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
