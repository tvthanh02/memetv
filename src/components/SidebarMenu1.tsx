const SidebarMenu1 = () => (
  <div className="w-[26rem] h-auto flex flex-col gap-[3rem] py-[2rem] px-[1rem]">
    {/* // follower */}
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center gap-[1.5rem] px-3 py-2 hover:bg-background rounded-md">
        <i className="fa-regular fa-heart"></i>
        <p className="text-[1.6rem] font-medium">Theo dõi của tôi</p>
      </div>
      <div className="w-full h-auto py-4  bg-background rounded-md flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4">
          <article className="w-full h-[5rem] py-1 px-2">
            <div className="w-full h-[3.2rem] flex items-end justify-between">
              <div className="w-full h-full flex items-center gap-3">
                <div className="w-[3.2rem] h-full rounded-full bg-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://img.nimo.tv/t/1629518798199/202312081702052411502_1629518798199_avatar.png/w120_l0/img.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 text-[1.2rem]">
                  <p className="font-normal">Thầy giáo ba</p>
                  <p className="font-light">LMHT</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </article>
          <article className="w-full h-[5rem] py-1 px-2">
            <div className="w-full h-[3.2rem] flex items-end justify-between">
              <div className="w-full h-full flex items-center gap-3">
                <div className="w-[3.2rem] h-full rounded-full bg-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://img.nimo.tv/t/1629518798199/202312081702052411502_1629518798199_avatar.png/w120_l0/img.webp"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 text-[1.2rem]">
                  <p className="font-normal">Thầy giáo ba</p>
                  <p className="font-light">LMHT</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </article>
        </div>
        <div className="w-full h-[1.6rem] flex items-center justify-center text-[1.2rem] gap-4 text-second font-bold">
          Thêm
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    {/* // ranking */}
    <div className="w-full flex items-center gap-[1.5rem] px-3 py-2 hover:bg-background rounded-md">
      <i className="fa-solid fa-ranking-star"></i>
      <p className="text-[1.6rem] font-medium">Bảng Xếp Hạng</p>
    </div>
    {/* //game */}
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center gap-[1.5rem] px-3 py-2 hover:bg-background rounded-md">
        <i className="fa-solid fa-gamepad"></i>
        <p className="text-[1.6rem] font-medium">Game</p>
      </div>
      <div className="w-full h-auto py-4  bg-background rounded-md flex flex-col gap-6">
        <div className="w-full">
          <div className="w-full px-4 py-3">
            <p className="font-normal text-[1.2rem]">LMHT</p>
          </div>
          <div className="w-full px-4 py-3">
            <p className="font-normal text-[1.2rem]">Just Chatting</p>
          </div>
          <div className="w-full px-4 py-3">
            <p className="font-normal text-[1.2rem]">PUBG</p>
          </div>
        </div>
        <div className="w-full h-[1.6rem] flex items-center justify-center text-[1.2rem] gap-4 text-second font-bold">
          Thêm
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    {/* //Relax */}
    <div className="w-full flex flex-col gap-4">
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
    </div>
  </div>
);

export default SidebarMenu1;
