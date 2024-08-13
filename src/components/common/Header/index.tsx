import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import { propsMenuItem } from "./types";
import Search from "./Search";
import { Avatar } from "@/components";
import Popover from "./Popover";
import { useState } from "react";
const Header = () => {
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const navigate = useNavigate();
  const islogin = false;

  const navs: propsMenuItem[] = [
    { link: "/", content: "Trang chủ" },
    { link: "/lives", content: "Phát trực tiếp" },
    { link: "/shows", content: "Memeshows" },
    { link: "/games", content: "Game" },
  ];

  return (
    <header className="w-full h-[6rem] bg-white shadow-header fixed z-10">
      <div className="container w-full h-full grid grid-cols-1/3/1.5 text-gray">
        <div
          className="w-full h-full text-[2.4rem] font-bold flex items-center justify-start text-primary hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          MEME TV
        </div>
        <nav className="w-full h-full text-[1.4rem] flex items-center gap-[4rem]">
          {navs.map((nav, index) => {
            return (
              <MenuItem key={index} link={nav.link} content={nav.content} />
            );
          })}
        </nav>
        <div className="w-full h-full flex items-center justify-end gap-[4.5rem]">
          <div className="w-[14rem] h-[2.6rem]">
            <Search />
          </div>

          <div
            className="h-full relative flex items-center hover:cursor-pointer"
            onClick={() => setOpenPopover((prev) => !prev)}
          >
            <i className="fa-solid fa-ellipsis"></i>
            <div className="absolute top-[100%] right-0 w-[22rem] h-auto overflow-hidden">
              {openPopover && <Popover />}
            </div>
          </div>
          {islogin ? (
            <div
              className="w-[4.6rem] h-[4.6rem]"
              onClick={() => navigate("/i/my-info")}
            >
              <Avatar src="" />
            </div>
          ) : (
            <div className="text-primary w-[8rem] h-[3.2rem] text-[1.2rem] flex items-center justify-center border border-solid border-primary rounded-md hover:cursor-pointer hover:bg-primary hover:text-white ">
              Đăng nhập
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
