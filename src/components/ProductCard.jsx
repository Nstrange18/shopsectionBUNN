import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="w-full h-80 flex flex-col gap-1">
      <div className="w-full h-{90%} bg-cherry-pink flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          title={title}
          aria-labelledby={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="font-Satoshi font-semibold text-sm">{title}</h3>
      <span className="flex items-center gap-2">
        <span className="flex items-center gap-0.5">
          <Icon icon="openmoji:star" width={15} height={15} />
          <Icon icon="openmoji:star" width={15} height={15} />
          <Icon icon="openmoji:star" width={15} height={15} />
          <Icon icon="openmoji:star" width={15} height={15} />
          <Icon icon="openmoji:star" width={15} height={15} />
        </span>
        <p className="text-xs">5/5</p>
      </span>

      <h3 className="font-Satoshi text-sm">${price}</h3>
    </div>
  );
}
