import googleIcon from "@/assets/img/google-icon.png";

type props = {
  children: React.ReactNode;
};

const AuthModalLayout = ({ children }: props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/65 z-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[57.2rem] h-[38.3rem]flex flex-col rounded-md bg-white">
          <div className="h-[4.8rem] px-8 flex justify-between border-b border-background">
            <div className="flex items-center gap-[3rem]">
              <div className="h-full flex items-center text-primary uppercase font-bold">
                MEME TV
              </div>
              <div className="h-full flex items-center gap-[2.5rem] text-[1.2rem]">
                <div className="font-normal">Đăng ký</div>
                <div className="font-normal text-primary">Đăng nhập</div>
              </div>
            </div>
            <div className="h-full flex items-center">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="p-3 w-full h-b grid grid-cols-3/1 gap-4 ">
            <div className="w-full h-full p-3">{children}</div>
            <div className="p-3 text-[1.2rem] h-full flex flex-col justify-between text-gray font-light border-l border-background overflow-hidden">
              <div className="flex flex-col gap-8">
                <p className="font-normal">
                  Đăng nhập bằng ứng dụng của bên thứ 3
                </p>
                <ul className="w-full flex flex-col gap-5">
                  <li className="w-full h-[3.4rem] flex items-center justify-center gap-2 rounded-2xl border border-background">
                    <img
                      className="w-[2rem] h-[2rem]"
                      src={googleIcon}
                      alt=""
                    />
                    <p> Đăng nhập với google</p>
                  </li>
                </ul>
              </div>
              <p className="text-[1.2rem] font-semibold text-justify">
                Tôi đồng ý với{" "}
                <span className="text-primary">Thỏa thuận người dùng</span> và{" "}
                <span className="text-primary">Chính sách quyền riêng tư</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModalLayout;
