import RankItem from "./RankItem";
import { propsRank } from "./types";

const Rank = (props: propsRank) => {
  const { title, items } = props;

  return (
    <div className="w-full h-full bg-white rounded-md overflow-hidden shadow-md">
      <div className="uppercase font-medium w-full h-[8.4rem] p-4  flex items-center justify-start text-[1.4rem]  bg-primary text-white">
        {title}
      </div>
      <ul className="list-none w-full flex flex-col">
        <li className="w-full h-[7.2rem]">
          {items.length > 0 &&
            items.map((item, index) => {
              return (
                <RankItem
                  rank={index}
                  streamerName={item.streamerName}
                  value={item.value}
                />
              );
            })}
        </li>
      </ul>
    </div>
  );
};

export default Rank;
