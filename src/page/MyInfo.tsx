const MyInfo = () => {
  return (
    <div className="container flex flex-col gap-[4rem] min-h-a">
      <div className="w-[12rem] h-[12rem] bg-second rounded-full"></div>
      <div className="flex items-center gap-4">
        <p className="text-[1.4rem] text-gray">ID: </p>
        <p className="text-[1.4rem] text-black font-extralight">5992713</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[1.4rem] text-gray">Biệt hiệu: </p>
        <div className="flex items-center gap-3">
          <p className="text-[1.4rem] text-black font-extralight">Đớ</p>
          <i className="text-[1.4rem] fa-regular fa-pen-to-square"></i>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[1.4rem] text-gray">Giới tính: </p>
        <div className="flex items-center gap-3">
          <p className="text-[1.4rem] text-black font-extralight">Nam</p>
          <i className="text-[1.4rem] fa-regular fa-pen-to-square"></i>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[1.4rem] text-gray">Ngày sinh: </p>
        <div className="flex items-center gap-3">
          <p className="text-[1.4rem] text-black font-extralight">14/11/2002</p>
          <i className="text-[1.4rem] fa-regular fa-pen-to-square"></i>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[1.4rem] text-gray">Điện thoại di động: </p>
        <div className="flex items-center gap-3">
          <p className="text-[1.4rem] text-black font-extralight">
            Chưa liên kết
          </p>
          <i className="text-[1.4rem] fa-regular fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
