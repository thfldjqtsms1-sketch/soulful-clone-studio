import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Check, Star, Users, Shield, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "검증된 상담사",
      description: "엄격한 교육과 자격증 취득을 통과한 전문 상담사들만 활동합니다.",
    },
    {
      icon: Shield,
      title: "100% 익명 보장",
      description: "개인정보는 철저히 보호되며, 모든 상담은 익명으로 진행됩니다.",
    },
    {
      icon: Users,
      title: "24시간 상담 가능",
      description: "언제든지 필요할 때 채팅이나 통화로 상담받을 수 있습니다.",
    },
    {
      icon: Heart,
      title: "따뜻한 공감",
      description: "단순한 예언이 아닌, 진심 어린 공감과 위로를 전합니다.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              마음통 <span className="text-gradient-gold">소개</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              마음통은 국내 최고의 타로 상담 플랫폼입니다. 
              2만 명의 상담 경험과 1만 명의 제자를 배출한 전문가가 검증한 
              상담사들과 함께 여러분의 운명을 찾아드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "53만+", label: "구독자" },
              { number: "522,000+", label: "누적 상담 건수" },
              { number: "4.9/5", label: "고객 만족도" },
              { number: "2만+", label: "검증된 상담 경험" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-16"
          >
            마음통만의 <span className="text-primary">특별함</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl gradient-card border border-border/50 text-center"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-16"
          >
            상담 <span className="text-primary">프로세스</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {[
              { step: "1", title: "앱 다운로드", desc: "마음통 앱을 다운로드하고 회원가입을 완료하세요." },
              { step: "2", title: "상담사 선택", desc: "후기와 프로필을 확인하고 나에게 맞는 상담사를 선택하세요." },
              { step: "3", title: "카드 뽑기", desc: "직접 타로 카드를 뽑아보며 상담을 진행합니다." },
              { step: "4", title: "상담 시작", desc: "채팅 또는 통화로 실시간 상담을 받으세요." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-muted-foreground mb-8">
              첫 상담 특별 할인 혜택을 놓치지 마세요
            </p>
            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              마음통 앱 다운로드
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
