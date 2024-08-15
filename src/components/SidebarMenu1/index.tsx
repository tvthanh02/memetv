import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { propsLiveCard } from "../common/LiveCard/types";
import SidebarMenuList from "./SidebarMenuList";
import { propsSidebarMenuList } from "./types";
import {
  faGamepad,
  faRankingStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { propsRankItem } from "@/page/Home/Rank/types";
import { propsGameItem } from "@/page/Home/GameItem";

const SidebarMenu1 = () => {
  const sections: propsSidebarMenuList<propsLiveCard>[] = [
    {
      menuName: "My Follow",
      navigationTo: "/i/my-subscribe",
      icon: <FontAwesomeIcon icon={faUser} />,
      values: [
        {
          isLoading: false,
          title: "hello",
          tag: "LMHT",
          thumbnail: "",
          streamerName: "Thầy giáo ba",
          avatar:
            "	https://img.nimo.tv/t/1629520731790/202312081702041939250_1629520731790_avatar.png/w120_l0/img.webp",
          view: 1200,
        },
        {
          isLoading: false,
          title: "hello",
          tag: "LMHT",
          thumbnail: "",
          streamerName: "SBTC Clear",
          avatar:
            "	https://img.nimo.tv/t/1629520731790/202312081702041939250_1629520731790_avatar.png/w120_l0/img.webp",
          view: 234,
        },
      ],
    },
  ];

  const ranks: propsSidebarMenuList<propsRankItem>[] = [
    {
      menuName: "Bảng Xếp Hạng",
      icon: <FontAwesomeIcon icon={faRankingStar} />,
      navigationTo: "rank-star",
    },
  ];

  const games: propsSidebarMenuList<propsGameItem>[] = [
    {
      menuName: "Game",
      icon: <FontAwesomeIcon icon={faGamepad} />,
      navigationTo: "/games",
      values: [
        {
          gameName: "LMHT",
          imageSrc: "",
          living: 12,
        },
        {
          gameName: "PUBG",
          imageSrc: "",
          living: 12,
        },
        {
          gameName: "AOV",
          imageSrc: "",
          living: 12,
        },
      ],
    },
  ];

  return (
    <div className="w-[26rem] h-auto flex flex-col gap-[3rem] py-[2rem] px-[1rem]">
      {/* // follower */}
      {sections.map((section, index) => {
        return (
          <section key={index} className="w-full h-auto">
            <SidebarMenuList
              navigationTo={section.navigationTo}
              menuName={section.menuName}
              icon={section.icon}
              values={section.values}
            />
          </section>
        );
      })}

      {/* // ranking */}
      {ranks.map((rank, index) => {
        return (
          <section key={index} className="w-full h-auto">
            <SidebarMenuList
              navigationTo={rank.navigationTo}
              menuName={rank.menuName}
              icon={rank.icon}
              values={rank.values}
            />
          </section>
        );
      })}
      {/* //game */}
      {games.map((game, index) => {
        return (
          <section key={index} className="w-full h-auto">
            <SidebarMenuList
              navigationTo={game.navigationTo}
              menuName={game.menuName}
              icon={game.icon}
              values={game.values}
            />
          </section>
        );
      })}
      {/* //Relax */}
      {/* <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center gap-[1.5rem] px-3 py-2 hover:bg-background rounded-md">
          <i className="fa-solid fa-music"></i>
          <p className="text-[1.6rem] font-medium">Giải Trí</p>
        </div>
        <div className="w-full h-auto py-4  bg-background rounded-md flex flex-col gap-6">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full px-4 py-3">
                <p className="font-normal text-[1.2rem]">Memeshows</p>
              </div>

              <div className="w-full px-4 py-3">
                <p className="font-normal text-[1.2rem]">Voice Room</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.6rem] flex items-center justify-center text-[1.2rem] gap-4 text-second font-bold">
            Thêm
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SidebarMenu1;
