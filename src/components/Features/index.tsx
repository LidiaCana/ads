import { ComponentProps } from "@/types/common";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import getServices from "./featuresData";
import { getDictionary } from "../../app/dictionaries";
import { Dictionary } from "@/types/dictionary";

const Features = async ({ lang }: ComponentProps) => {
  const dict = (await getDictionary(lang)) as Dictionary;
  const featuresData = await getServices(lang);
  return (
    <>
      <section
        id="services"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Achieve anything you want."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
