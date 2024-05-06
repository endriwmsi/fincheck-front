import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({
  isBeginning,
  isEnd,
}: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="text-white py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/5 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="text-white py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/5 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
