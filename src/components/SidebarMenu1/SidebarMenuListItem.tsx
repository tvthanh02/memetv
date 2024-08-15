import { propsGameItem } from "@/page/Home/GameItem";
import { propsLiveCard } from "../common/LiveCard/types";
import { propsSidebarMenuListItem } from "./types";

const SidebarMenuListItem = <T,>({ data }: propsSidebarMenuListItem<T>) => {
  const handleView = (view: number): string => {
    if (view <= 1000) {
      return view.toString();
    }
    return view / 1000 + "k";
  };

  if (typeof data === "object" && data !== null && "avatar" in data) {
    const item = data as unknown as propsLiveCard;
    return (
      <article className="w-full h-auto py-5 px-4 hover:cursor-pointer [&:hover]:bg-[#eee]">
        <div className="w-full h-[3.2rem] flex items-end justify-between">
          <div className="w-full h-full flex items-center gap-4">
            <div className="w-[3.2rem] h-full rounded-full bg-white overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.avatar}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 text-[1.2rem]">
              <p className="font-normal">{item.streamerName}</p>
              <p className="font-light text-[1rem] text-second">{item.tag}</p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-[1.2rem] font-light text-gray">
            <i className="fa-regular fa-user"></i>
            {item.view && handleView(item.view)}
          </span>
        </div>
      </article>
    );
  }
  if (typeof data === "object" && data !== null && "rank" in data) {
    return <></>;
  }
  if (typeof data === "object" && data !== null && "gameName" in data) {
    const item = data as unknown as propsGameItem;
    return (
      <article className="w-full h-auto py-1 px-4 hover:cursor-pointer [&:hover]:bg-[#eee]">
        <div className="w-full px-4 py-3">
          <p className="font-normal text-[1.2rem]">{item.gameName}</p>
        </div>
      </article>
    );
  }
};

export default SidebarMenuListItem;
