import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopoverItem from "./PopoverItem";
import { propsPopoverItem } from "./types";
import {
  faCoins,
  faEarthAmerica,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import vnflag from "@/assets/img/vietnam-flag.png";

const Popover = () => {
  const popoverItem: propsPopoverItem[] = [
    {
      name: "Quốc gia/Khu vực",
      icon: <FontAwesomeIcon icon={faEarthAmerica} />,
      other: (
        <div className="w-[3rem] h-[2rem]">
          {" "}
          <img className="w-full h-full" src={vnflag} alt="flag" />
        </div>
      ),
    },
    {
      name: "Sáng/Tối",
      icon: <FontAwesomeIcon icon={faMoon} />,
      other: <div className="text-[1rem]">Switch</div>,
    },
    {
      name: "Nạp Coin",
      icon: <FontAwesomeIcon icon={faCoins} />,
    },
  ];

  return (
    <div className=" w-full h-full bg-white py-4 px-4 rounded-sm shadow-md">
      {popoverItem.map((item, index) => {
        return (
          <PopoverItem
            key={index}
            icon={item.icon}
            name={item.name}
            other={item.other}
          />
        );
      })}
    </div>
  );
};

export default Popover;
