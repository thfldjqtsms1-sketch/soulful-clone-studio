import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MessageCircle, Phone } from "lucide-react";
import counselor1 from "@/assets/counselor-1.webp";
import counselor2 from "@/assets/counselor-2.webp";
import counselor3 from "@/assets/counselor-3.webp";

const counselors = [
  {
    name: "미타타로",
    rating: 5.0,
    reviews: 744,
    image: counselor1,
    status: "상담중",
    tier: "SOUL MASTER",
    description: "🌈 믿는다. 타로! 바다같은 마음으로 해결책을 찾겠습니다",
    price: "30초당 400원부터",
    chat: true,
    call: true,
  },
  {
    name: "샘물",
    rating: 5.0,
    reviews: 172,
    image: counselor2,
    status: "지금가능",
    tier: "SOUL MASTER",
    description: "공감 / 위로 / 마음치유 / 힐링 / 회복♡",
    price: "30초당 400원부터",
    chat: true,
    call: true,
  },
  {
    name: "든솔",
    rating: 5.0,
    reviews: 261,
    image: counselor3,
    status: "휴식중",
    tier: "SOUL MASTER",
    description: "💌꼭 필요한 그 말, 전해드립니다💌",
    price: "30초당 400원부터",
    chat: true,
    call: true,
  },
];

export function CounselorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            마음통은 타로에 진심이에요
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counselors.map((counselor, index) => (
            <motion.div
              key={counselor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Header with status */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  counselor.status === "지금가능" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : counselor.status === "상담중"
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-muted text-muted-foreground border border-border"
                }`}>
                  {counselor.status}
                </div>

                {/* Tier badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-gold-light text-primary-foreground">
                    {counselor.tier}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{counselor.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-foreground font-medium">{counselor.rating}</span>
                    <span className="text-muted-foreground text-sm">({counselor.reviews})</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {counselor.description}
                </p>

                <p className="text-primary font-semibold text-sm mb-4">{counselor.price}</p>

                <div className="flex gap-2">
                  {counselor.chat && (
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      채팅
                    </button>
                  )}
                  {counselor.call && (
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors">
                      <Phone className="w-4 h-4" />
                      전화
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-2">2만 명을 상담하고 1만 명의 제자를 배출한</p>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">전문가 직접 검증</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            엄격한 교육, 선발 과정을 거쳐 자격증을 취득한 검증된 상담사님들만 마음통에서 활동하고 있어요.
            운명을 다루는 일은 함부로 해서는 안 되기에.
          </p>

          <button className="mt-8 gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
            접속 중인 상담사 만나보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
