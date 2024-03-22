import { FEATURES } from "@/constants";
import Image from "next/image";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

function FeatureItem({ title, icon, description }: FeatureItem) {
  return (
    <li>
      <div>
        <Image src={icon} alt="feature icon" width={28} height={28} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function Features() {
  return (
    <section>
      <div>
        <div>
          <Image src="/phone.png" alt="phone" width={440} height={1000} />
        </div>

        <div>
          <div>
            <Image src="/camp.svg" alt="camp" width={50} height={50} />
            <h2>Our Features</h2>
          </div>
          <ul>
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
