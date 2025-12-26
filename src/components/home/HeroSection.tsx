import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";
import appMockup from "@/assets/app-mockup.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4"
            >
              국내 1위, 53만+ 구독자
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-primary mb-2"
            >
              타로 전문가가 검증한
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              1:1 타로 상담앱
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 inline-block"
            >
              <span className="text-5xl md:text-6xl lg:text-7xl font-black text-gradient-gold">
                마음통
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                마음통 앱 다운로드하기
              </Button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={appMockup}
              alt="마음통 앱"
              className="w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-float"
            />
          </motion.div>
        </div>
      </div>

      {/* Feature pills */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <span className="px-4 py-2 rounded-full bg-secondary/50 text-foreground">
              24시간 채팅 & 통화 가능한 실시간 고품격 상담
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary/50 text-foreground">
              100% 익명 상담으로 안전하게
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary/50 text-foreground">
              직접 뽑아보는 카드로 생생하게
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
