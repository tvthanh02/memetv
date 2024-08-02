const Header = () => {
  return (
    <header className="w-full h-[6rem] bg-white shadow-header fixed z-10">
      <div className="container w-full h-full grid grid-cols-1/3/1.5 text-gray">
        <div className="w-full h-full text-[2.4rem] font-bold flex items-center justify-start text-primary">
          MEME TV
        </div>
        <nav className="w-full h-full text-[1.4rem] flex items-center gap-[4rem]">
          <p>Trang chủ</p>
          <p>Phát trực tiếp</p>
          <p>Memeshow</p>
          <p>Game</p>
        </nav>
        <div className="w-full h-full flex items-center justify-end gap-[4.5rem]">
          <div className="w-[13.1rem] h-[2.4rem] rounded-[1.5rem] flex items-center justify-center bg-background text-[1.3rem] font-light gap-2">
            <i className="fa-solid fa-magnifying-glass"></i>
            Thây giáo ba
          </div>
          <div className="">
            <i className="fa-brands fa-rocketchat"></i>
          </div>
          <div className="">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="w-[4.6rem] h-[4.6rem] rounded-full bg-background"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
