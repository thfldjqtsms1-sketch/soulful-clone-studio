import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ShoppingCart, BookOpen, Package } from "lucide-react";

const products = [
  {
    category: "타로 카드",
    items: [
      { name: "소울 타로 정품 덱", price: "45,000원", originalPrice: "55,000원", tag: "베스트" },
      { name: "러브 오라클 카드", price: "32,000원", tag: "인기" },
      { name: "골든 타로 스페셜 에디션", price: "68,000원", tag: "한정판" },
      { name: "유니버셜 웨이트 타로", price: "28,000원" },
    ],
  },
  {
    category: "도서",
    items: [
      { name: "타로 완전 정복", price: "25,000원", originalPrice: "30,000원", tag: "베스트" },
      { name: "타로 리딩 실전 가이드", price: "22,000원" },
      { name: "오라클 카드 해석법", price: "18,000원" },
      { name: "타로 심리학", price: "20,000원", tag: "신상" },
    ],
  },
  {
    category: "굿즈",
    items: [
      { name: "타로 매트 (벨벳)", price: "35,000원", tag: "인기" },
      { name: "카드 보관 파우치", price: "15,000원" },
      { name: "크리스탈 세트", price: "42,000원" },
      { name: "향초 & 인센스 세트", price: "28,000원" },
    ],
  },
];

const Buy = () => {
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                <ShoppingCart className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              마음 <span className="text-gradient-gold">소사이어티</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              직접 디자인한 유니크한 타로카드와 한글 오라클 카드 등 다양한 제품을 만나보세요
            </p>
          </motion.div>

          {products.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                {category.category === "타로 카드" && <Package className="w-6 h-6 text-primary" />}
                {category.category === "도서" && <BookOpen className="w-6 h-6 text-primary" />}
                {category.category === "굿즈" && <ShoppingCart className="w-6 h-6 text-primary" />}
                {category.category}
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
                  >
                    <div className="relative w-full aspect-square rounded-xl bg-secondary mb-4 flex items-center justify-center overflow-hidden">
                      {category.category === "타로 카드" && <span className="text-4xl group-hover:scale-110 transition-transform">🃏</span>}
                      {category.category === "도서" && <span className="text-4xl group-hover:scale-110 transition-transform">📚</span>}
                      {category.category === "굿즈" && <span className="text-4xl group-hover:scale-110 transition-transform">✨</span>}
                      
                      {item.tag && (
                        <span className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-muted-foreground text-sm line-through">{item.originalPrice}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              마음 소사이어티 쇼핑몰 가기
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Buy;
