import { useNavigate } from "react-router-dom";

const MySubscribe = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-a flex flex-col gap-[5rem]">
      <div className="w-full grid grid-cols-autoFillMin382 gap-8">
        <article
          className="relative w-full h-[10.2rem] flex items-center px-4 border border-background rounded-md bg-white"
          onClick={() => navigate("/user/:id")}
        >
          <div className="w-full h-[9rem] flex justify-between">
            <div className="flex items-center gap-8">
              <div className="w-[9rem] h-[9rem] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.nimo.tv/t/1639517503200/202212101670660258800_1639517503200_avatar.png/w180_l0/img.webp"
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-between text-gray">
                <div className="flex flex-col gap-3 text-[1.4rem]">
                  <p>SBTC Anie</p>
                  <p>Hello cac tinh euuu</p>
                </div>
                <p className="text-[1.4rem]">
                  Live: <span className="text-primary">LMHT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[11.3rem] h-[2.4rem] rounded-md flex items-center justify-center text-[1.2rem] text-white bg-primary">
            Streaming
          </div>
        </article>
        <article className="relative w-full h-[10.2rem] flex items-center px-4 border border-background rounded-md bg-white">
          <div className="w-full h-[9rem] flex justify-between">
            <div className="flex items-center gap-8">
              <div className="w-[9rem] h-[9rem] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.nimo.tv/t/1639517503200/202212101670660258800_1639517503200_avatar.png/w180_l0/img.webp"
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-between text-gray">
                <div className="flex flex-col gap-3 text-[1.4rem]">
                  <p>SBTC Anie</p>
                  <p>Hello cac tinh euuu</p>
                </div>
                <p className="text-[1.4rem]">
                  Live: <span className="text-primary">LMHT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[11.3rem] h-[2.4rem] rounded-md flex items-center justify-center text-[1.2rem] text-white bg-primary">
            Streaming
          </div>
        </article>
        <article className="relative w-full h-[10.2rem] flex items-center px-4 border border-background rounded-md bg-white">
          <div className="w-full h-[9rem] flex justify-between">
            <div className="flex items-center gap-8">
              <div className="w-[9rem] h-[9rem] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.nimo.tv/t/1639517503200/202212101670660258800_1639517503200_avatar.png/w180_l0/img.webp"
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-between text-gray">
                <div className="flex flex-col gap-3 text-[1.4rem]">
                  <p>SBTC Anie</p>
                  <p>Hello cac tinh euuu</p>
                </div>
                <p className="text-[1.4rem]">
                  Live: <span className="text-primary">LMHT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[11.3rem] h-[2.4rem] rounded-md flex items-center justify-center text-[1.2rem] text-white bg-primary">
            Streaming
          </div>
        </article>
        <article className="relative w-full h-[10.2rem] flex items-center px-4 border border-background rounded-md bg-white">
          <div className="w-full h-[9rem] flex justify-between">
            <div className="flex items-center gap-8">
              <div className="w-[9rem] h-[9rem] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://img.nimo.tv/t/1639517503200/202212101670660258800_1639517503200_avatar.png/w180_l0/img.webp"
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-between text-gray">
                <div className="flex flex-col gap-3 text-[1.4rem]">
                  <p>SBTC Anie</p>
                  <p>Hello cac tinh euuu</p>
                </div>
                <p className="text-[1.4rem]">
                  Live: <span className="text-primary">LMHT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="flex items-center gap-2 text-[1.2rem] font-light">
                <i className="fa-regular fa-user"></i>
                2.5k
              </span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[11.3rem] h-[2.4rem] rounded-md flex items-center justify-center text-[1.2rem] text-white bg-primary">
            Streaming
          </div>
        </article>
      </div>
      <div className="w-full h-auto flex items-center justify-center">
        <ul className="flex items-center gap-8">
          <li className="w-[3.4rem] h-[3.4rem] flex items-center justify-center rounded-md border border-gray">
            <i className="fa-solid fa-angle-left"></i>
          </li>
          <li className="w-[3.4rem] h-[3.4rem] flex items-center justify-center rounded-md text-white bg-primary">
            1
          </li>
          <li className="w-[3.4rem] h-[3.4rem] flex items-center justify-center rounded-md border border-gray">
            2
          </li>
          <li className="w-[3.4rem] h-[3.4rem] flex items-center justify-center rounded-md border border-gray">
            3
          </li>
          <li className="w-[3.4rem] h-[3.4rem] flex items-center justify-center rounded-md border border-gray">
            <i className="fa-solid fa-angle-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySubscribe;
