import SkeletonLoad from "../SkeletonLoad";

const LiveCardSkeletonLoad = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[74%] relative group">
        <SkeletonLoad className="w-full h-full overflow-hidden" />
      </div>
      <div className="flex-1 w-full flex items-center">
        <div className="w-full h-[80%] px-[1rem] flex items-center justify-between">
          <div className="h-full flex items-center gap-[1.5rem]">
            <div className="w-[5.4rem] h-[5.4rem]">
              {/* <Avatar src={avatar} /> */}
            </div>
            <div className="flex flex-col gap-2 text-[1.4rem]">
              <SkeletonLoad className="min-w-[20rem] h-[1.4rem]" />
              <SkeletonLoad className="min-w-[15rem] h-[1.2rem]" />
            </div>
          </div>
          <div className="h-full flex items-end text-[1.2rem]">
            <SkeletonLoad className="w-[2.2rem] h-[1.2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCardSkeletonLoad;
