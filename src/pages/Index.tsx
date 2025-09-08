import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import HeritageCallout from "@/components/HeritageCallout";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <BrandStory />
      <HeritageCallout />
      <ProductGrid />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
