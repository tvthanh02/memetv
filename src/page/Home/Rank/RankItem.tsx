import { propsRankItem } from "./types";

const RankItem = ({ streamerName, value, rank }: propsRankItem) => {
  return (
    <div className="w-full h-full] p-[1rem] flex items-center justify-start gap-[1.5rem] border-b border-solid border-[#f1f1f1] last:border-b-0">
      <div
        className={`w-[4rem] h-[4rem] flex items-center justify-center ${
          rank === 0
            ? "bg-lightGreen shadow-rankIcon text-white"
            : "bg-background text-gray shadow-md"
        } rounded-full `}
      >
        {++rank}
      </div>
      <div className="flex flex-col gap-2 text-[1.4rem]">
        <p className="font-bold">{streamerName}</p>
        <p className="text-[1.2rem]">{value}h</p>
      </div>
    </div>
  );
};

export default RankItem;
