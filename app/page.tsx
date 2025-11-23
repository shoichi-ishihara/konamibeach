import Hero from "@/components/Hero";
import BeachInfo from "@/components/BeachInfo";
import CampingInfo from "@/components/CampingInfo";
import Access from "@/components/Access";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <BeachInfo />
      <CampingInfo />
      <Access />
      <Weather />
    </div>
  );
}
