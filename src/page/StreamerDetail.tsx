import giftRing from "@/assets/img/gift-ring.png";
import giftEvent from "@/assets/img/gift-event.png";
import giftDuck from "@/assets/img/gift-duck.png";
import giftGirl from "@/assets/img/gift-girl.png";
import giftStart from "@/assets/img/gift-start.png";
import cash from "@/assets/img/cash.png";
import diamonIcon from "@/assets/img/diamon-icon.png";
import { SignInPage } from ".";
import { useState } from "react";

const StreamerDetail = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full pr-[33rem] flex flex-col gap-[3rem]">
          <div className="w-full h-auto rounded-md overflow-hidden">
            <section className="w-full h-[8rem] bg-white flex items-center px-[1rem] justify-between">
              <div className="flex h-[6rem] gap-8 items-center">
                <div className="w-[6rem] h-[6rem] rounded-md bg-background"></div>
                <div className="h-full flex flex-col gap-3">
                  <div className="flex items-center gap-[3rem]">
                    <p
                      className="max-w-[17.5rem] overflow-clip text-nowrap text-ellipsis text-[2.2rem] text-black font-bold"
                      title="Hello các con vợ"
                    >
                      Hello các con vợ
                    </p>
                    <div className="w-[14.6rem] h-[2.4rem] flex items-center justify-center bg-lightGreen text-[1rem] text-white rounded-xl">
                      BXH Streamer No.10
                    </div>
                  </div>
                  <div className="flex items-center gap-[3rem]">
                    <p className="text-[1.2rem] font-bold">SBTC Potm</p>
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-circle-play"></i>
                      <p className="text-[1.2rem] text-primary">LMHT</p>
                    </div>
                    <span className="flex items-center gap-2 text-[1.2rem] font-light">
                      <i className="fa-regular fa-user"></i>
                      2.5k
                    </span>
                    <span
                      className="flex items-center gap-2 text-[1.2rem] font-light"
                      onClick={() => setIsLogin((prev) => !prev)}
                    >
                      follower: 100.015
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[6rem] items-start">
                <div className="flex items-center gap-[1rem]">
                  {/* <div className="px-8 h-[3.2rem] flex items-center justify-center rounded-md bg-primary text-white text-[1.2rem]">
                  Theo dõi
                </div> */}
                  <div className="px-8 h-[3.2rem] flex items-center justify-center rounded-md bg-primary text-white text-[1.2rem]">
                    Đăng ký
                  </div>
                  <div className="px-8 h-[3.2rem] flex items-center justify-center rounded-md text-primary text-[1.2rem] border border-solid border-primary">
                    Chia sẻ
                  </div>
                  <div className="h-[3.2rem] w-[1rem] flex items-center justify-center  text-primary text-[1.4rem] ">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full h-[40rem] bg-second flex justify-center">
              <div className="w-full max-w-[100rem] h-full bg-primary"></div>
            </section>
            <section className="w-full h-[8rem] bg-white flex items-center px-[1rem] justify-between ">
              <div className="w-[3.2rem] h-[3.2rem] border border-solid border-background">
                <img
                  className="w-full h-full object-cover"
                  src={cash}
                  alt="CASH"
                />
              </div>
              <div className="w-auto h-auto flex items-center gap-8">
                <div className="w-[5.6rem] h-[5.6rem] border border-solid border-background flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={giftRing}
                    alt="GIFT"
                  />
                </div>
                <div className="w-[5.6rem] h-[5.6rem] border border-solid border-background flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={giftEvent}
                    alt="GIFT"
                  />
                </div>
                <div className="w-[5.6rem] h-[5.6rem] border border-solid border-background flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={giftDuck}
                    alt="GIFT"
                  />
                </div>
                <div className="w-[5.6rem] h-[5.6rem] border border-solid border-background flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={giftStart}
                    alt="GIFT"
                  />
                </div>
                <div className="w-[5.6rem] h-[5.6rem] border border-solid border-background flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={giftGirl}
                    alt="GIFT"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex flex-col bg-white rounded-md p-[3rem] gap-8">
            <div className="flex items-center gap-[2rem]">
              <div className="w-[9rem] h-[9rem] bg-background rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.nimo.tv/t/1629511905172/202111241637776500538_1629511905172_avatar.png/w180_l0/img.webp
"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[2.4rem] text-black font-bold">
                  Thầy Giáo Ba
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[1.4rem] font-light">fan</span>
                  <span className="text-[1.6rem] text-black font-bold">
                    32.9k
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[1.6rem] font-light">
                ► Link mua Mì Gumi : https://s.lazada.vn/s.3UABb
              </p>
              <p className="text-[1.6rem] font-light">
                ► FB : https://www.facebook.com/ThayGiaoBaroibeo
              </p>
              <p className="text-[1.6rem] font-light">
                ► Fanpage : https://www.facebook.com/BaRoiBe0
              </p>
              <p className="text-[1.6rem] font-light">
                ► Group lớp : https://s.net.vn/rLWd
              </p>
              <p className="text-[1.6rem] font-light">
                ► Mọi người có thể order đồ ăn vặt trên Shopee luôn nha
              </p>
              <p className="text-[1.6rem] font-light">
                - Link order trên shopee : https://shp.ee/bteqaym
              </p>
              <p className="text-[1.6rem] font-light">- Zalo : 0939851568</p>
              <p className="text-[1.6rem] font-light">
                ► Gmail : baroibeokols1989@gmail.com để liên hệ quảng cáo, event
                sự kiệnv.v.....
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col gap-[3rem]">
            <p className="text-[1.8rem] text-black font-bold">Phát lại</p>
            <div className="w-full grid grid-cols-autoFillMin248 gap-[1rem]">
              <div className="w-full h-[24.8rem] flex flex-col bg-white">
                <div className="w-full h-[19rem] bg-second relative">
                  <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                    LMHT
                  </div>
                </div>
                <div className="flex-1 w-full flex items-center px-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="text-[1.2rem] font-normal">Thầy Giáo Ba</p>
                    </div>
                    <p className="text-[1.2rem] font-normal">31/07/2024</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[24.8rem] flex flex-col bg-white">
                <div className="w-full h-[19rem] bg-second relative">
                  <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                    LMHT
                  </div>
                </div>
                <div className="flex-1 w-full flex items-center px-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="text-[1.2rem] font-normal">Thầy Giáo Ba</p>
                    </div>
                    <p className="text-[1.2rem] font-normal">31/07/2024</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[24.8rem] flex flex-col bg-white">
                <div className="w-full h-[19rem] bg-second relative">
                  <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                    LMHT
                  </div>
                </div>
                <div className="flex-1 w-full flex items-center px-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="text-[1.2rem] font-normal">Thầy Giáo Ba</p>
                    </div>
                    <p className="text-[1.2rem] font-normal">31/07/2024</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[24.8rem] flex flex-col bg-white">
                <div className="w-full h-[19rem] bg-second relative">
                  <div className="absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary rounded-[1.5rem] text-[1.3rem]">
                    LMHT
                  </div>
                </div>
                <div className="flex-1 w-full flex items-center px-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="text-[1.2rem] font-normal">Thầy Giáo Ba</p>
                    </div>
                    <p className="text-[1.2rem] font-normal">31/07/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chat */}
        <div className="fixed top-0 right-0 bottom-0 w-[35rem] max-w-[35rem] bg-background rounded-md pt-[7rem]">
          <div className="w-full h-full flex flex-col gap-2 bg-white">
            <section className="w-full h-[3.4rem] grid grid-cols-4 text-[1.2rem] ">
              <div className="w-full h-full flex items-center justify-center text-primary font-bold">
                BXH Gift
              </div>
              <div className="w-full h-full flex items-center justify-center text-gray font-light">
                Vệ Thần
              </div>
              <div className="w-full h-full flex items-center justify-center text-gray font-light">
                Vị trí VIP (172)
              </div>
              <div className="w-full h-full flex items-center justify-center text-gray font-light">
                BXH fan
              </div>
            </section>
            <section className="w-full h-[13.4rem] py-2 px-4 ">
              <ul className="list-none w-full h-full flex flex-col justify-between">
                <li className="w-full h-[4rem] flex items-center justify-between">
                  <div className="w-auto flex items-center gap-8">
                    <div className="w-[1.6rem] h-[1.6rem] bg-lightGreen text-white rounded-full flex items-center justify-center text-[1.2rem]">
                      1
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                    <p className="font-medium text-[1.2rem]">Miêu Nhi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[1.2rem] text-primary">15999</p>
                    <img
                      className="w-[1.4rem] h-[1.4rem]"
                      src={diamonIcon}
                      alt="DIAMON_ICON"
                    />
                  </div>
                </li>
                <li className="w-full h-[4rem] flex items-center justify-between">
                  <div className="w-auto flex items-center gap-8">
                    <div className="w-[1.6rem] h-[1.6rem] bg-primary text-white rounded-full flex items-center justify-center text-[1.2rem]">
                      2
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                    <p className="font-medium text-[1.2rem]">SBTC Clear</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[1.2rem] text-primary">15999</p>
                    <img
                      className="w-[1.4rem] h-[1.4rem]"
                      src={diamonIcon}
                      alt="DIAMON_ICON"
                    />
                  </div>
                </li>
                <li className="w-full h-[4rem] flex items-center justify-between">
                  <div className="w-auto flex items-center gap-8">
                    <div className="w-[1.6rem] h-[1.6rem] bg-yellow-400 text-white rounded-full flex items-center justify-center text-[1.2rem]">
                      3
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                    <p className="font-medium text-[1.2rem]">SBTC Kitz</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[1.2rem] text-primary">15999</p>
                    <img
                      className="w-[1.4rem] h-[1.4rem]"
                      src={diamonIcon}
                      alt="DIAMON_ICON"
                    />
                  </div>
                </li>
              </ul>
            </section>
            <section className="flex-1 w-full max-h-full overflow-y-auto px-4 py-4 hidden-scrollbar">
              <ul className="list-none w-full h-auto flex flex-col gap-2 justify-end">
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">TVThanh</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    hello guys
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Bờm</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    Anh Trinh a lì ác
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Thụt lò</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    3 xấu thua 1 đẹp
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Ba gà</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">Mày xấu</p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Con lợn nhựa</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    Stream đấy mấy giờ vậy a trai ơi
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Petland</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    Hay quá vậy!
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Miêu Nhi</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    gì vậy mng
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Cớm đây</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    đ*t ngáo vl
                  </p>
                </li>
                <li className="w-full h-[4rem] flex items-center gap-6">
                  <div className="flex items-center">
                    <div className="w-auto flex items-center gap-4">
                      <div className="w-[2.4rem] h-[2.4rem] bg-background rounded-full"></div>
                      <p className="font-medium text-[1.2rem]">Faker human</p>
                    </div>
                    <span className="text-[1.2rem]">:</span>
                  </div>
                  <p className="text-[1.2rem] text-gray font-light">
                    mic check
                  </p>
                </li>
              </ul>
            </section>
            <section className="w-full h-[4rem] px-4">
              <div className="w-full h-full bg-background pl-[1.5rem] flex items-center text-[1.4rem] font-light text-gray">
                Nói chuyện chút nào!
              </div>
            </section>
            <section className="w-full h-[4rem] px-4">
              <div className="w-full h-full flex items-center justify-between">
                <div></div>
                <div className="w-[8rem] h-[3.2rem] flex items-center justify-center text-white bg-primary rounded-md text-[1.4rem]">
                  Gửi
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {isLogin && <SignInPage />}
    </>
  );
};

export default StreamerDetail;
