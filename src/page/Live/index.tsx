import { LiveCard, Pagination } from "@/components";
import { propsLiveCard } from "@/components/common/LiveCard/types";
import { useCallback, useMemo, useState } from "react";

const LivePage = () => {
  const hots = useMemo(
    () => [
      {
        isLoading: false,
        tag: "LMHT",
        thumbnail: "",
        title: "Chào buổi sáng cả nhà",
        streamerName: "SBTC Clear",
        avatar:
          "https://img.nimo.tv/t/1599514158915/202405281716906856583_1599514158915_avatar.png/w120_l0/img.webp",
        view: 1200,
      },
      {
        isLoading: false,
        tag: "Hát",
        thumbnail: "",
        title: "Alo alo min nè",
        streamerName: "Min nè!",
        avatar: "",
        view: 120,
      },
      {
        isLoading: false,
        tag: "GTA",
        thumbnail: "",
        title: "Cướp ngân hàng",
        streamerName: "Jikey",
        avatar: "",
        view: 15000,
      },
      {
        isLoading: false,
        tag: "LMHT",
        thumbnail: "",
        title: "Chào buổi sáng cả nhà",
        streamerName: "SBTC Clear",
        avatar:
          "https://img.nimo.tv/t/1599514158915/202405281716906856583_1599514158915_avatar.png/w120_l0/img.webp",
        view: 1200,
      },
      {
        isLoading: false,
        tag: "Hát",
        thumbnail: "",
        title: "Alo alo min nè",
        streamerName: "Min nè!",
        avatar: "",
        view: 120,
      },
      {
        isLoading: false,
        tag: "GTA",
        thumbnail: "",
        title: "Cướp ngân hàng",
        streamerName: "Jikey",
        avatar: "",
        view: 15000,
      },
    ],
    []
  );

  const [data, setData] = useState<propsLiveCard[]>([]);

  const handleSetNewData = useCallback((items: propsLiveCard[]) => {
    setData(items);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-[2.4rem]">
      <p className="text-[2.4rem] text-black font-bold">Đang phát trực tiếp</p>
      <div className="w-full grid grid-cols-autoFillMin300 gap-8">
        {data.map((live, index) => {
          return (
            <article key={index} className="w-full h-[31.7rem]">
              <LiveCard
                isLoading={live.isLoading}
                title={live.title}
                tag={live.tag}
                thumbnail={live.thumbnail}
                streamerName={live.streamerName}
                avatar={live.avatar}
                view={live.view}
              />
            </article>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <Pagination<propsLiveCard>
          itemsPerPage={6}
          totalPages={hots.length}
          data={hots}
          onChangeData={handleSetNewData}
        />
      </div>
    </div>
  );
};

export default LivePage;
