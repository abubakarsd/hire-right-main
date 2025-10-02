import Button from "../common/Button";
import Image from "next/image";
import { ServiceItem } from "../../data/services";

interface ServiceCardProps extends ServiceItem {
  features?: string[];
}

export default function ServiceCard({ title, description, href, features }: ServiceCardProps) {
  return (
    <div className="h-full min-h-[270px]  md:h-[300px] rounded-[15px] bg-[#06060608] p-5 shadow-xl ring-1 ring-blue-100/50 transition-shadow hover:shadow-md flex flex-col justify-between">
      {/* Title (blue, medium size) */}
      <h3 className="text-blue-800 font-semibold text-[20px] leading-6 font-space-grotesk">
        {title}
      </h3>

      {/* Description (smaller, comfy line-height) */}
      <p className="text-[16px] leading-6 text-gray-700 mt-[15px] font-manrope">
        {description}
      </p>

      {/* Features list with star icon */}
      {features && (
        <ul className="mt-3 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700 text-[16px]">
              <Image
                src="/service/star.png"
                alt="star"
                width={16}
                height={16}
                className="mr-2"
              />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Centered CTA using the shared Button; a bit smaller than default */}
      <div className="pt-2 flex justify-center">
        <Button variant="primary" href={href} className="px-6 py-2 text-sm " arrow>
          <span className="inline-flex items-center gap-2">
            Learn more
       
          </span>
        </Button>
      </div>
    </div>
  );
}