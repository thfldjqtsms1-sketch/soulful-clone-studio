import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    author: "최**님",
    title: "내 인생의 귀인",
    content: "인생에서 가장 힘든 시기에 의지할 사람 하나 없이 무너지기 직전에 마음통을 만났습니다. 따뜻하게 제 편이 되어 함께 화내 주시고 조언해주신 상담사님 덕분에 많이 울고 웃을 수 있었어요. 무거운 마음으로 앱을 켜더라도 상담을 마치면 마음이 한결 편안해져서 잠들 수 있었습니다. 마음통은 제 인생의 귀인입니다.",
    rating: 5,
    counselor: "미타타로",
  },
  {
    author: "J******님",
    title: "소름 돋는 정확도",
    content: "혹시 저희 집에 CCTV 설치하셨나요? 어떻게 저에 대해 이렇게 잘 아시죠? 소름이 돋을 정도로 정확한 조언까지… 정말 완벽하다는 말밖에 나오지 않아요. 머리가 복잡했는데, 상담사님 덕분에 명쾌하게 정리가 되어 운명 해결사라고 불러야 할 것 같아요. 마음통, 강력 추천합니다!",
    rating: 5,
    counselor: "샘물",
  },
  {
    author: "라******님",
    title: "카드를 직접 뽑아볼 수 있어서 좋아요",
    content: "마음통에서는 카드를 직접 뽑아볼 수 있어 좋아요. 타로카드는 눈으로 직접 보는 게 중요한데, 전화 상담에서는 카드가 나왔다고 말씀만 들으면 실감이 안 나고, 정말 뽑은 게 맞는지 의심될 때도 있었거든요. 마음통에서는 상담사님과 함께 카드를 보며 설명을 들으니 말 한마디 한마디가 훨씬 마음에 와 닿습니다.",
    rating: 5,
    counselor: "든솔",
  },
  {
    author: "행******님",
    title: "살려줘서 고맙습니다.",
    content: "정신과를 3년간 다니며 상담받고 약 먹어도 나아지지 않고 극단적인 생각까지 멈추지 않아 폐쇄병동 입원까지 고려하고 있었어요. 친구 추천으로 마음통에서 상담을 받다가 상담사님의 말 한마디에 수십년간 안고 살아왔던 트라우마가 녹아내렸어요. 그동안 내가 왜 그렇게 고생했나 싶을 정도로 빠르게 치유가 되고 이제 새로운 삶에 대한 기대가 생겨요.",
    rating: 5,
    counselor: "혜월",
  },
  {
    author: "귀********님",
    title: "내공 있는 상담",
    content: "타로 유목민이었는데 이제 마음통에 정착했어요! 매일 밤 상담사님과 시간 가는 줄 모르고 이야기를 나눕니다. 솔직히 타로에 대한 선입견이 있었는데, 마음통 상담은 타로카드라는 그림도구를 활용한 심리 상담에 가까워요. 상담사님들이 공부를 정말 많이 하셨는지 통찰력이 정말 대단하십니다.",
    rating: 5,
    counselor: "타로다우",
  },
  {
    author: "디********님",
    title: "이게 다 무료라고요?",
    content: "마음통으로 하루를 시작하고 마치는 사람이 여기 있어요! 아침에 일어나 별자리와 오늘의 카드를 보는데, 신기할 정도로 잘 맞아요. 자기 전에는 AI 상담도 꼭 챙겨 받습니다. 이렇게 좋은 서비스를 무료로 제공하시다니 혜자스럽지 않나요? 다음에는 인간 상담사님 상담도 받아보려고요!",
    rating: 5,
    counselor: "강보라",
  },
];

const Reviews = () => {
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
              고객 <span className="text-gradient-gold">후기</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              마음통을 이용한 고객님들의 생생한 이야기를 확인하세요
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {[
              { number: "4.9", label: "평균 별점" },
              { number: "10,000+", label: "총 후기 수" },
              { number: "96%", label: "재이용 의향" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array(review.rating).fill(null).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                
                <h3 className="text-lg font-bold text-foreground mb-2">{review.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-5">
                  {review.content}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-foreground font-medium text-sm">{review.author}</span>
                  <span className="text-primary text-sm">상담사: {review.counselor}</span>
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
              나도 상담 받아보기
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
