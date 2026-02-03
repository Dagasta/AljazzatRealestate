import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BannerSection from "@/components/home/BannerSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <BannerSection />
      <FeaturedProperties />
    </div>
  );
}

