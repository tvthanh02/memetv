const MemeshowPage = () => {
  return (
    <div className="w-full flex flex-col gap-[4rem]">
      <section className="w-full h-[28rem] bg-second"></section>
      <section className="w-full flex flex-col gap-[3rem]">
        <p className="text-[2.4rem] font-bold text-black">Memeshow Đang Live</p>
        <ul className="list-none w-full flex items-center justify-start gap-8">
          <li className="bg-primary py-3 px-6 shadow-md border border-solid border-primary text-white text-[1.4rem] rounded-md font-bold">
            All
          </li>

          <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
            Hát
          </li>
          <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
            New Idol
          </li>
          <li className="bg-white py-3 px-6 border border-solid border-transparent  shadow-md text-gray text-[1.4rem] rounded-md hover:border hover:border-solid hover:border-primary hover:text-primary hover:cursor-pointer">
            Nhảy
          </li>
        </ul>
        <div className="w-full grid grid-cols-autoFillMin300 gap-8">
          <div className="w-full h-[31.7rem] flex flex-col bg-second/[.06]">
            <div className="w-full h-[23.4rem] relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/12bsUUK_YdA"
                title="SOLO Camping in a RAINY Bamboo Forest[ Relax Eat Sleep Repeat, ASMR ]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                LMHT
              </div>
            </div>
            <div className="flex-1 w-full flex items-center">
              <div className="w-full h-[80%] px-[1rem] flex items-center justify-between">
                <div className="h-full flex items-center gap-[1.5rem]">
                  <div className="w-[5.4rem] h-[5.4rem] rounded-full bg-gray"></div>
                  <div className="flex flex-col gap-2 text-[1.4rem]">
                    <p>Cứu pé KPI với các ck iu</p>
                    <p>[ORI] Kim Vy</p>
                  </div>
                </div>
                <div className="h-full flex items-end text-[1.2rem]">
                  <div className="flex items-center gap-[0.6rem]">
                    <span className="text-[1.2rem]">
                      <i className="fa-regular fa-user"></i>
                    </span>
                    <span>1.2k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[31.7rem] bg-white"></div>
          <div className="w-full h-[31.7rem] bg-white"></div>
          <div className="w-full h-[31.7rem] flex flex-col bg-second/[.06]">
            <div className="w-full h-[23.4rem] relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/12bsUUK_YdA"
                title="SOLO Camping in a RAINY Bamboo Forest[ Relax Eat Sleep Repeat, ASMR ]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                LMHT
              </div>
            </div>
            <div className="flex-1 w-full flex items-center">
              <div className="w-full h-[80%] px-[1rem] flex items-center justify-between">
                <div className="h-full flex items-center gap-[1.5rem]">
                  <div className="w-[5.4rem] h-[5.4rem] rounded-full bg-gray"></div>
                  <div className="flex flex-col gap-2 text-[1.4rem]">
                    <p>Cứu pé KPI với các ck iu</p>
                    <p>[ORI] Kim Vy</p>
                  </div>
                </div>
                <div className="h-full flex items-end text-[1.2rem]">
                  <div className="flex items-center gap-[0.6rem]">
                    <span className="text-[1.2rem]">
                      <i className="fa-regular fa-user"></i>
                    </span>
                    <span>1.2k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[31.7rem] bg-white"></div>
          <div className="w-full h-[31.7rem] bg-white"></div>
        </div>
      </section>
    </div>
  );
};

export default MemeshowPage;
