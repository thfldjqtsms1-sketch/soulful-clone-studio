import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Check, Users, Globe, TrendingUp, Award, Clock, Heart } from "lucide-react";

const benefits = [
  { icon: Users, title: "선한 영향력", desc: "많은 분들에게 위로와 희망을 전달하세요" },
  { icon: Globe, title: "장소 무관", desc: "전세계 어디서나 상담이 가능합니다" },
  { icon: TrendingUp, title: "수익 창출", desc: "당신의 재능으로 안정적인 수익을 만드세요" },
  { icon: Clock, title: "자유로운 시간", desc: "원하는 시간에 상담을 진행하세요" },
  { icon: Award, title: "전문성 인정", desc: "자격증 취득으로 전문성을 인정받으세요" },
  { icon: Heart, title: "보람", desc: "누군가의 인생에 도움을 주는 보람을 느끼세요" },
];

const steps = [
  { step: "1", title: "지원서 작성", desc: "간단한 지원서를 작성해주세요." },
  { step: "2", title: "서류 심사", desc: "지원서를 바탕으로 서류 심사를 진행합니다." },
  { step: "3", title: "교육 이수", desc: "마음통 공식 교육 과정을 이수하세요." },
  { step: "4", title: "자격증 취득", desc: "시험에 합격하면 2급 자격증이 발급됩니다." },
  { step: "5", title: "상담 시작", desc: "마음통에서 정식 상담사로 활동하세요!" },
];

const Join = () => {
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
              <span className="text-gradient-gold">마음통 상담사</span>에 도전하세요
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              소울이 있는 대화를 통해 선한 영향력을 발휘하고
              전세계 어디서나 수익을 창출할 수 있는 기회
            </p>
            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              지금 바로 지원하기
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-16"
          >
            상담사가 되면 <span className="text-primary">좋은 점</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl gradient-card border border-border/50 text-center"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-16"
          >
            상담사 되는 <span className="text-primary">과정</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {steps.map((item, index) => (
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
                <div className="flex-1 pb-8 border-b border-border last:border-0">
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-card">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-16"
          >
            지원 <span className="text-primary">자격</span>
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            {[
              "타로에 관심이 있고 배우고자 하는 열정이 있는 분",
              "타인의 이야기를 경청하고 공감할 수 있는 분",
              "책임감 있게 상담에 임할 수 있는 분",
              "온라인 커뮤니케이션에 능숙한 분",
              "주 10시간 이상 활동 가능한 분",
            ].map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 mb-4"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{req}</span>
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
              함께 성장하실 분을 찾습니다
            </h2>
            <p className="text-muted-foreground mb-8">
              지금 지원하고 마음통과 함께하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
                타로 상담사 지원하기
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                신점・사주 상담사 지원하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
