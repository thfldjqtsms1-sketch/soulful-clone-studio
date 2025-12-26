import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import tarotCards from "@/assets/tarot-cards.webp";

const cardTypes = [
  { name: "라이더 웨이트 타로", count: "78장", description: "가장 전통적이고 대중적인 타로 카드 덱" },
  { name: "소울 타로", count: "78장", description: "마음통에서 직접 디자인한 독자적인 타로 덱" },
  { name: "러브 오라클", count: "44장", description: "연애와 관계에 특화된 오라클 카드" },
  { name: "유니버셜 웨이트", count: "78장", description: "부드러운 색감의 클래식 타로 카드" },
  { name: "골든 타로", count: "78장", description: "황금빛 클래식 아트워크의 타로 덱" },
  { name: "데일리 오라클", count: "52장", description: "매일의 메시지를 전달하는 오라클 카드" },
  { name: "문 오라클", count: "36장", description: "달의 에너지를 담은 신비로운 오라클" },
];

const Cards = () => {
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
              오늘의 <span className="text-gradient-gold">카드</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              7종의 타로카드와 오라클 카드로 오늘 하루를 예측해 보세요
            </p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img src={tarotCards} alt="타로 카드" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
                  지금 바로 카드 뽑아보기
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardTypes.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-gold-light/20 border border-primary/30 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-2xl">🃏</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{card.name}</h3>
                <p className="text-primary text-sm mb-2">{card.count}</p>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              카드 리딩 <span className="text-primary">방법</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { step: "1", title: "마음을 가다듬고", desc: "눈을 감고 질문을 마음속으로 떠올리세요." },
                { step: "2", title: "카드를 선택하고", desc: "직감이 이끄는 대로 카드를 선택하세요." },
                { step: "3", title: "메시지를 받으세요", desc: "카드가 전하는 우주의 메시지를 확인하세요." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Cards;
