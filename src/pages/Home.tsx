import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CounselorsSection } from "@/components/home/CounselorsSection";
import { ReasonsSection } from "@/components/home/ReasonsSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FreeContentSection } from "@/components/home/FreeContentSection";
import { CardsSection } from "@/components/home/CardsSection";
import { JoinSection } from "@/components/home/JoinSection";
import { ShopSection } from "@/components/home/ShopSection";
import { ClassSection } from "@/components/home/ClassSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <CounselorsSection />
      <ReasonsSection />
      <ReviewsSection />
      <FreeContentSection />
      <CardsSection />
      <JoinSection />
      <ShopSection />
      <ClassSection />
    </Layout>
  );
};

export default Home;
