const SidebarMenu2 = () => {
  return (
    <div className="w-[26rem] h-auto flex flex-col gap-[3rem] py-[2rem] px-[1rem]">
      {/* <p className="text-[1.8rem] font-normal text-black">Trung Tâm Cá Nhân</p> */}
      <ul className="w-full h-auto flex flex-col gap-4">
        <li className="w-full h-[4.6rem] text-[1.4rem] flex items-center gap-4 rounded-md text-white bg-primary px-3">
          <i className="fa-regular fa-user"></i>
          <p>Thông tin của tôi</p>
        </li>
        <li className="w-full h-[4.6rem] text-[1.4rem] flex items-center gap-4 rounded-md px-3 border border-transparent hover:bg-white hover:border hover:border-primary">
          <i className="fa-regular fa-heart"></i>
          <p>Theo dõi của tôi</p>
        </li>
        <li className="w-full h-[4.6rem] text-[1.4rem] flex items-center gap-4 rounded-md px-3 border border-transparent hover:bg-white hover:border hover:border-primary">
          <i className="fa-regular fa-heart"></i>
          <p>Chi tiết tài khoản</p>
        </li>
        <li className="w-full h-[4.6rem] text-[1.4rem] flex items-center gap-4 rounded-md px-3 border border-transparent hover:bg-white hover:border hover:border-primary">
          <i className="fa-regular fa-heart"></i>
          <p>Lịch sử dự đoán</p>
        </li>
        <li className="w-full h-[4.6rem] text-[1.4rem] flex items-center gap-4 rounded-md px-3 border border-transparent hover:bg-white hover:border hover:border-primary">
          <i className="fa-regular fa-heart"></i>
          <p>Family của tôi</p>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu2;
