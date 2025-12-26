import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const classes = [
  { icon: BookOpen, title: "타로 기초반" },
  { icon: GraduationCap, title: "타로 심화반" },
  { icon: Award, title: "타로 마스터반" },
  { icon: Users, title: "1:1 코칭" },
];

export function ClassSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">마음클래스</span>
          </div>
        </motion.div>

        {/* Class cards scroll */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-marquee">
            {[...classes, ...classes, ...classes].map((classItem, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-64 mx-3 rounded-2xl gradient-card border border-border/50 flex flex-col items-center justify-center text-center p-4 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <classItem.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{classItem.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-foreground font-semibold mb-2">
            타로 일타강사와 함께 취미에서 초고수까지!
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            사주, 관상, 주역, 손금, 점성학 등 다양한 운명학 강의와 명상, 심리, 자기계발
          </p>
          <p className="text-primary text-sm">
            회원 가입 시 5천원 쿠폰 발급 | 평생교육바우처 사용기관
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            운명학 강의 플랫폼 마음클래스
          </button>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            타로 자격증 및 커뮤니티 한국마음타로협회
          </button>
        </motion.div>
      </div>
    </section>
  );
}
