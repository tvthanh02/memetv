export type propsGameItem = {
  gameName: string;
  imageSrc: string;
  living: number;
};

const GameItem = ({ gameName, imageSrc, living }: propsGameItem) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-center gap-4 bg-white rounded-[0.8rem] shadow-md hover:cursor-pointer">
      <div
        className={`w-[8rem] h-[8rem] rounded-[0.8rem] ${
          !imageSrc && "bg-gray"
        }`}
      >
        {imageSrc && (
          <img className="w-full h-full object-cover" src={imageSrc} alt="" />
        )}
      </div>
      <p className="text-[1.2rem] text-gray font-bold">{gameName}</p>
      <p className="text-[1.2rem] font-normal text-primary">
        {living !== 0 ? living + " lives" : ""}
      </p>
    </article>
  );
};

export default GameItem;
