import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { GraduationCap, BookOpen, Award, Users, Clock, Star } from "lucide-react";

const courses = [
  {
    title: "타로 기초반",
    level: "입문",
    duration: "4주",
    price: "290,000원",
    originalPrice: "350,000원",
    features: ["78장 카드 해석법", "스프레드 기초", "실전 리딩 연습", "수료증 발급"],
    tag: "인기",
  },
  {
    title: "타로 심화반",
    level: "중급",
    duration: "8주",
    price: "490,000원",
    originalPrice: "600,000원",
    features: ["고급 스프레드", "심리 상담 기법", "케이스 스터디", "자격증 취득"],
    tag: "추천",
  },
  {
    title: "타로 마스터반",
    level: "고급",
    duration: "12주",
    price: "890,000원",
    originalPrice: "1,100,000원",
    features: ["1:1 멘토링", "상담사 데뷔 지원", "평생 커뮤니티 이용", "마스터 인증"],
    tag: "프리미엄",
  },
];

const instructors = [
  { name: "김태희 마스터", specialty: "러브 타로", students: "3,200명", rating: 4.9 },
  { name: "이준혁 마스터", specialty: "커리어 타로", students: "2,800명", rating: 4.8 },
  { name: "박소연 마스터", specialty: "힐링 타로", students: "2,100명", rating: 4.9 },
];

const Learn = () => {
  return (
    <Layout>
      {/* Hero */}
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
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              마음 <span className="text-gradient-gold">클래스</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              타로 일타강사와 함께 취미에서 초고수까지!
            </p>
            <p className="text-primary font-medium">
              회원 가입 시 5천원 쿠폰 발급 | 평생교육바우처 사용기관
            </p>
          </motion.div>

          {/* Courses */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl gradient-card border ${
                  course.tag === "추천" ? "border-primary" : "border-border/50"
                }`}
              >
                {course.tag && (
                  <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold ${
                    course.tag === "추천" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-foreground border border-border"
                  }`}>
                    {course.tag}
                  </span>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {course.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {course.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <span className="text-muted-foreground text-sm line-through ml-2">{course.originalPrice}</span>
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  course.tag === "추천"
                    ? "gradient-button text-primary-foreground shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] hover:scale-105"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}>
                  수강 신청
                </button>
              </motion.div>
            ))}
          </div>

          {/* Instructors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              검증된 <span className="text-primary">강사진</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl gradient-card border border-border/50 text-center"
              >
                <div className="w-20 h-20 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{instructor.name}</h3>
                <p className="text-primary text-sm mb-2">{instructor.specialty}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {instructor.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" /> {instructor.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              사주, 관상, 주역, 손금, 점성학 등 다양한 운명학 강의와 명상, 심리, 자기계발
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-button text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-[0_0_50px_hsl(40_90%_55%_/_0.5)] transition-all hover:scale-105">
                마음클래스 바로가기
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                한국마음타로협회 가입
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
