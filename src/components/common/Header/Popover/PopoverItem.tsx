import { propsPopoverItem } from "./types";

const PopoverItem = (props: propsPopoverItem) => {
  const { icon, name, other } = props;
  console.log(other);
  return (
    <div className="px-2 text-[1.2rem] text-gray w-full h-[4rem] flex items-center justify-between hover:bg-primary hover:text-white rounded-md font-light">
      <div className="h-full flex items-center gap-3">
        <div>{icon}</div>
        <p>{name}</p>
      </div>
      {other}
    </div>
  );
};

export default PopoverItem;
