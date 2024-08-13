import { propsAvatar } from "./types";

const Avatar = ({ src }: propsAvatar) => {
  return (
    <div
      className={`w-full h-full rounded-full ${
        !src && "bg-background"
      } overflow-hidden hover:cursor-pointer`}
    >
      {src && (
        <img
          className="w-full h-full object-cover"
          src={src}
          alt="avatar-img"
        />
      )}
    </div>
  );
};

export default Avatar;
