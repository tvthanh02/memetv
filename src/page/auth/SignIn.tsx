import AuthModalLayout from "./AuthModalLayout";

const SignIn = () => {
  return (
    <AuthModalLayout>
      <div className="w-full flex flex-col gap-8">
        <p className="font-normal text-gray text-[1.4rem]">
          Đăng nhập với số điện thoại
        </p>
        <div className="w-full h-auto flex flex-col gap-6">
          <div className="w-full h-[4rem] flex items-center bg-background pl-[1.5rem] text-[1.2rem] text-gray ">
            Nhập SĐT
          </div>
          <div className="w-full h-[4rem] flex items-center bg-background pl-[1.5rem] text-[1.2rem] text-gray ">
            Nhập mật khẩu
          </div>
          <div className="w-full flex justify-end">
            <p className="text-[1.2rem] text-primary underline">
              Quên mật khẩu
            </p>
          </div>
        </div>
        <div className="w-full h-[4rem] bg-primary flex items-center justify-center text-white text-[1.2rem] rounded-md">
          Đăng nhập
        </div>
      </div>
    </AuthModalLayout>
  );
};

export default SignIn;
