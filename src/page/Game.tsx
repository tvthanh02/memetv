import { useParams, useNavigate } from "react-router-dom";
import { GameDetailPage } from "@/page";

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    return <GameDetailPage />;
  }

  return (
    <div className="w-full flex flex-col gap-[3rem]">
      <p className="text-[2.4rem] text-black font-bold">Tất cả trò chơi</p>
      <ul className="list-none w-full flex items-center justify-start gap-8">
        <li className="bg-primary py-3 px-6 shadow-md border border-solid border-primary text-white text-[1.4rem] rounded-md font-bold">
          Toàn bộ
        </li>

        <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
          Mobile Game
        </li>
        <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
          PC Game
        </li>
        <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
          Giải Đấu
        </li>
      </ul>
      <div className="w-full grid grid-cols-autoFillMin180 gap-8">
        <div
          className="w-full h-[33.6rem] flex flex-col p-3 pb-0 rounded-md hover:cursor-pointer hover:bg-primary hover:shadow-gameCard group"
          onClick={() => {
            console.log("click");
            navigate("/games/2");
          }}
        >
          <div className="w-full h-[28rem] bg-white rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="	https://img.nimo.tv/o/banner/4F5001B3D1DDBABB8F2C9E0567B4F6BF_GTA5.jpg/w500_l0/img.webp"
              alt=""
            />
          </div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
        <div className="w-full h-[33.6rem] flex flex-col p-3 pb-0  rounded-md hover:cursor-pointer hover:bg-primary hover:shadow-gameCard group">
          <div className="w-full h-[28rem] rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="	https://img.nimo.tv/o/banner/DD32D5B48663891CE87978F262E2FA41_LOL.jpg/w500_l0/img.webp"
              alt=""
            />
          </div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
        <div className="w-full h-[33.6rem] flex flex-col p-3 pb-0 rounded-md hover:cursor-pointer hover:bg-primary hover:shadow-gameCard group">
          <div className="w-full h-[28rem] bg-white rounded-md overflow-hidden"></div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
        <div className="w-full h-[33.6rem] flex flex-col p-3 pb-0 rounded-md hover:bg-primary hover:shadow-gameCard group">
          <div className="w-full h-[28rem] bg-white rounded-md overflow-hidden"></div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
        <div className="w-full h-[33.6rem] flex flex-col p-3 pb-0 rounded-md hover:bg-primary hover:shadow-gameCard group">
          <div className="w-full h-[28rem] bg-white rounded-md overflow-hidden"></div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
        <div className="w-full h-[33.6rem] flex flex-col p-3 pb-0 rounded-md hover:bg-primary hover:shadow-gameCard group">
          <div className="w-full h-[28rem] bg-white rounded-md overflow-hidden"></div>
          <div className="flex-1 w-full flex items-center justify-center text-[1.6rem] text-gray group-hover:text-white">
            GTA5
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
