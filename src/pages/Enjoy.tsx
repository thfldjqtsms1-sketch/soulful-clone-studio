import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Sparkles, Stars, Bot, Users, Calendar, Gamepad2 } from "lucide-react";

const contents = [
  {
    icon: Calendar,
    title: "오늘의 운세",
    description: "7종의 타로카드와 오라클 카드로 오늘 하루를 예측해 보세요.",
    color: "from-primary to-gold-light",
    free: true,
  },
  {
    icon: Users,
    title: "소울 테스트",
    description: "나의 성향을 알아보는 다양한 심리 테스트를 무료로 즐기세요.",
    color: "from-teal to-teal-light",
    free: true,
  },
  {
    icon: Stars,
    title: "별자리 운세",
    description: "오늘의 별자리 운세를 확인하고 하루를 준비하세요.",
    color: "from-purple-500 to-pink-500",
    free: true,
  },
  {
    icon: Bot,
    title: "AI 타로 상담",
    description: "24시간 언제든 AI 상담사와 대화하며 고민을 나눠보세요.",
    color: "from-blue-500 to-cyan-500",
    free: true,
  },
  {
    icon: Sparkles,
    title: "마음통 MBTI",
    description: "나에게 맞는 상담사를 찾아주는 MBTI 궁합 테스트입니다.",
    color: "from-rose-500 to-orange-500",
    free: true,
  },
  {
    icon: Gamepad2,
    title: "미니 게임",
    description: "재미있는 미니 게임으로 오늘의 운을 테스트해보세요.",
    color: "from-green-500 to-emerald-500",
    free: true,
  },
];

const Enjoy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              무료 <span className="text-gradient-gold">콘텐츠</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              나를 이해하고 운의 흐름을 예측할 수 있는 다양한 무료 콘텐츠를 즐기세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contents.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="h-80 rounded-2xl overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 gradient-card group-hover:bg-secondary/70 transition-colors" />
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <content.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{content.title}</h3>
                    <p className="text-muted-foreground text-sm">{content.description}</p>
                    
                    {content.free && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                        무료
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              앱에서 모든 콘텐츠 즐기기
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Enjoy;
