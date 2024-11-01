import BannerCard from "@/components/shared/BannerCard";
import { CardData } from "@/constants/constants";

const CardBar = () => {
  return (
    <div className="flex items-center mt-2 justify-between border border-gray-200 rounded-lg flex-wrap">
      {CardData.map((item, index) => {
        return (
          <>
            <BannerCard
              amount={item.amount}
              text={item.text}
              value={item.value}
              key={index}
            />
          </>
        );
      })}
    </div>
  );
};

export default CardBar;
