import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    author: "최**님",
    title: "내 인생의 귀인",
    content: "인생에서 가장 힘든 시기에 의지할 사람 하나 없이 무너지기 직전에 마음통을 만났습니다. 따뜻하게 제 편이 되어 함께 화내 주시고 조언해주신 상담사님 덕분에 많이 울고 웃을 수 있었어요.",
  },
  {
    author: "J******님",
    title: "소름 돋는 정확도",
    content: "혹시 저희 집에 CCTV 설치하셨나요? 어떻게 저에 대해 이렇게 잘 아시죠? 소름이 돋을 정도로 정확한 조언까지… 정말 완벽하다는 말밖에 나오지 않아요.",
  },
  {
    author: "라******님",
    title: "카드를 직접 뽑아볼 수 있어서 좋아요",
    content: "마음통에서는 카드를 직접 뽑아볼 수 있어 좋아요. 타로카드는 눈으로 직접 보는 게 중요한데, 상담사님과 함께 카드를 보며 설명을 들으니 말 한마디 한마디가 훨씬 마음에 와 닿습니다.",
  },
  {
    author: "행******님",
    title: "살려줘서 고맙습니다.",
    content: "정신과를 3년간 다니며 상담받고 약 먹어도 나아지지 않았어요. 친구 추천으로 마음통에서 상담을 받다가 상담사님의 말 한마디에 트라우마가 녹아내렸어요. 정말 감사해요.",
  },
  {
    author: "귀********님",
    title: "내공 있는 상담",
    content: "타로 유목민이었는데 이제 마음통에 정착했어요! 매일 밤 상담사님과 시간 가는 줄 모르고 이야기를 나눕니다. 상담사님들이 공부를 정말 많이 하셨는지 통찰력이 정말 대단하십니다.",
  },
  {
    author: "디********님",
    title: "이게 다 무료라고요?",
    content: "마음통으로 하루를 시작하고 마치는 사람이 여기 있어요! 아침에 일어나 별자리와 오늘의 카드를 보는데, 신기할 정도로 잘 맞아요. 이렇게 좋은 서비스를 무료로 제공하시다니!",
  },
];

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 overflow-hidden" ref={ref}>
      <div className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            마음통 고객의
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            생생한 후기
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 mx-4 p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{review.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                {review.content}
              </p>
              <p className="text-primary font-medium text-sm">{review.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-12 text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105"
        >
          더 많은 후기 확인하기
        </motion.button>
      </div>
    </section>
  );
}
