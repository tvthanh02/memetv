import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { propsLiveCard } from "./types";
import LiveCardSkeletonLoad from "./LiveCardSkeleton";

const LiveCard = (props: propsLiveCard) => {
  const { tag, thumbnail, title, streamerName, view, avatar, isLoading } =
    props;

  if (isLoading) {
    return <LiveCardSkeletonLoad />;
  }

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[74%] relative group">
        <div
          className={`w-full h-full overflow-hidden ${!thumbnail && "bg-gray"}`}
        >
          {thumbnail && (
            <img
              className="w-full h-full object-cover"
              src={thumbnail}
              alt=""
            />
          )}
        </div>
        <div className="min-w-[5.7rem] min-h-[2.4rem] absolute top-[0.5rem] right-[0.5rem] w-auto py-[0.5rem] px-[1rem] h-[2.4rem] flex items-center justify-center text-white bg-primary shadow-tag rounded-[1.5rem] text-[1.3rem]">
          {tag}
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent group-hover:bg-black/65 group-hover:cursor-pointer flex items-center justify-center">
          <FontAwesomeIcon
            className="hidden group-hover:block text-[3rem] text-lightGreen"
            icon={faPlay}
          />
        </div>
      </div>
      <div className="flex-1 w-full flex items-center">
        <div className="w-full h-[80%] px-[1rem] flex items-center justify-between">
          <div className="h-full flex items-center gap-[1.5rem]">
            <div className="w-[5.4rem] h-[5.4rem]">
              {avatar && <Avatar src={avatar} />}
            </div>
            <div className="flex flex-col gap-2 text-[1.4rem]">
              <p className="font-bold">{title}</p>
              <p className="text-[1.2rem]">{streamerName}</p>
            </div>
          </div>
          <div className="h-full flex items-end text-[1.2rem]">
            <div className="flex items-center gap-[0.6rem]">
              <span className="text-[1.2rem]">
                <i className="fa-regular fa-user"></i>
              </span>
              <span>{view && view >= 1000 ? view / 1000 + "k" : view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
