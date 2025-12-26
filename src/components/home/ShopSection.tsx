import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";

export function ShopSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">마음소사이어티</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              국내 타로카드 문화를 선도하는 마음소사이어티가 직접 디자인한
              유니크한 타로카드와 한글 오라클 카드 등 다양한 제품 및 도서를 만나보세요.
            </p>

            <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
              다양한 카드와 도서 구매하기
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl gradient-card border border-border/50 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
