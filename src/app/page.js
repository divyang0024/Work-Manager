import BannerSection from "@/components/homepage/HomeBanner";
import FeatureSection from "@/components/homepage/FeatureSection";
import ActionSection from "@/components/homepage/ActionSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactForm from "@/components/homepage/ContactForm";

export const metadata = {
  title: "Work Manager",
};

export default function Home() {
  return (
    <div>
      {/*home banner */}
      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  );
}
