import LiveCard from "@/components/common/LiveCard";
import { propsLiveCard } from "@/components/common/LiveCard/types";
import React from "react";
import Rank from "./Rank";

import { propsRank } from "./Rank/types";
import GameItem, { propsGameItem } from "./GameItem";

const HomePage = (): React.ReactNode => {
  // mock

  const hots: propsLiveCard[] = [
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
  ];

  const ranks: propsRank[] = [
    {
      title: "Bảng Xếp hạng giờ live",
      items: [
        { streamerName: "Thầy giáo ba", value: 120 },
        { streamerName: "ShinV", value: 30 },
        { streamerName: "Hằng Đàm", value: 20 },
      ],
    },
    {
      title: "Bảng Xếp hạng quà tặng",
      items: [
        { streamerName: "Thầy giáo ba", value: 1000 },
        { streamerName: "ShinV", value: 800 },
        { streamerName: "Hằng Đàm", value: 600 },
      ],
    },
  ];

  const topGames: propsGameItem[] = [
    {
      gameName: "LMHT",
      imageSrc: "src/assets/img/game/lol.png",
      living: 23,
    },
    {
      gameName: "GTAV",
      imageSrc: "src/assets/img/game/gta.png",
      living: 6,
    },
    {
      gameName: "Memeshow",
      imageSrc: "src/assets/img/game/memeshow.png",
      living: 4,
    },
    {
      gameName: "AOV",
      imageSrc: "src/assets/img/game/aov.png",
      living: 10,
    },
    {
      gameName: "PUBG",
      imageSrc: "src/assets/img/game/pubg.png",
      living: 2,
    },
    {
      gameName: "Freefire",
      imageSrc: "src/assets/img/game/freefire.png",
      living: 12,
    },
  ];

  return (
    <>
      <div className="relative w-full h-[36rem] bg-banner bg-left-top bg-cover overflow-hidden"></div>
      <div className="px-[1.5rem] md:container flex flex-col gap-8 py-[2.5rem]">
        <div className="flex items-center gap-8">
          <p className="text-[3rem] text-primary font-bold">Hot</p>
          <div className="text-gray flex items-center gap-4">
            <p className="text-[1.4rem]">Thêm</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        {/* <div className="w-full h-[20rem] bg-white flex items-center justify-center text-primary">
          Chưa có live nào! <p>Xem restream nổi bật nhé</p>
        </div> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-autoFillMin416 gap-8">
          {hots.map((card, index) => {
            return (
              <article key={index} className="w-full h-[31.7rem]">
                <LiveCard
                  isLoading={card.isLoading}
                  tag={card.tag}
                  thumbnail={card.thumbnail}
                  title={card.title}
                  streamerName={card.streamerName}
                  avatar={card.avatar}
                  view={card.view}
                />
              </article>
            );
          })}
        </div>
      </div>
      <div className="px-[1.5rem] md:container flex flex-col gap-8 py-[2.5rem]">
        <div className="flex items-center gap-8">
          <p className="text-[3rem] text-primary font-bold">Memeshow</p>
          <div className="text-gray flex items-center gap-4">
            <p className="text-[1.4rem]">Thêm</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-autoFillMin416 gap-8">
          {hots.map((card, index) => {
            return (
              <article key={index} className="w-full h-[31.7rem]">
                <LiveCard
                  isLoading={card.isLoading}
                  tag={card.tag}
                  thumbnail={card.thumbnail}
                  title={card.title}
                  streamerName={card.streamerName}
                  avatar={card.avatar}
                  view={card.view}
                />
              </article>
            );
          })}
        </div>
      </div>
      <div className="px-[1.5rem] md:container flex flex-col gap-8 py-[2.5rem]">
        <div className="flex items-center gap-8">
          <p className="text-[3rem] text-primary font-bold">Game</p>
          <div className="text-gray flex items-center gap-4">
            <p className="text-[1.4rem]">Thêm</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-autoFillMin416 gap-8">
          {hots.map((card, index) => {
            return (
              <article key={index} className="w-full h-[31.7rem]">
                <LiveCard
                  isLoading={card.isLoading}
                  tag={card.tag}
                  thumbnail={card.thumbnail}
                  title={card.title}
                  streamerName={card.streamerName}
                  avatar={card.avatar}
                  view={card.view}
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* rank  */}
      <div className="px-[1.5rem] md:container flex flex-col gap-8 py-[2.5rem]">
        <div className="flex items-center gap-8">
          <p className="text-[3rem] text-primary font-bold">Bảng Xếp Hạng</p>
          <div className="text-gray flex items-center gap-4">
            <p className="text-[1.4rem]">Thêm</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-8">
          {ranks.map((ramk, index) => {
            return (
              <article className="w-[45rem] h-[30rem]">
                <Rank key={index} title={ramk.title} items={ramk.items} />
              </article>
            );
          })}
        </div>
      </div>
      <div className="px-[1.5rem] md:container flex flex-col gap-8 py-[2.5rem]">
        <div className="flex items-center gap-8">
          <p className="text-[3rem] text-primary font-bold">
            Trò Chơi Hàng Đầu
          </p>
          <div className="text-gray flex items-center gap-4">
            <p className="text-[1.4rem]">Thêm</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="w-full flex items-center gap-[2.6rem] flex-wrap">
          {topGames.map((game, index) => {
            return (
              <article className="w-[14.4rem] h-[16rem]">
                <GameItem
                  key={index}
                  gameName={game.gameName}
                  imageSrc={game.imageSrc}
                  living={game.living}
                />
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
