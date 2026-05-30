import Hero from "@/sections/home/Hero";
import Overview from "@/sections/home/Overview";
import Statistics from "@/sections/home/Statistics";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import Academics from "@/sections/home/Academics";
import Facilities from "@/sections/home/Facilities";
import Programs from "@/sections/home/Programs";
import NoticesEvents from "@/sections/home/NoticesEvents";
import Testimonials from "@/sections/home/Testimonials";
import CTA from "@/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Statistics />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Programs />
      <NoticesEvents />
      <Testimonials />
      <CTA />
    </>
  );
}
