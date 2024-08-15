import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuListItem from "./SidebarMenuListItem";
import { propsSidebarMenuList } from "./types";
import { useNavigate } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SidebarMenuList = <T,>({
  menuName,
  icon,
  values,
  navigationTo,
}: propsSidebarMenuList<T>) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <div
        className="group transition-all duration-200 hover:font-normal hover:cursor-pointer hover:bg-primary hover:text-white  w-full flex items-center gap-[1.5rem] px-3 py-2  rounded-md"
        onClick={() => navigate(navigationTo)}
      >
        {icon}
        <p className="group-hover:font-normal text-[1.6rem] font-medium">
          {menuName}
        </p>
      </div>
      {values && (
        <div className="w-full h-auto bg-white rounded-md flex flex-col shadow-md border border-solid border-[#f1f1f1]">
          <div className="w-full flex flex-col">
            {values &&
              values.map((item, index) => {
                return <SidebarMenuListItem<T> key={index} data={item} />;
              })}
          </div>
          <div
            className="hover:cursor-pointer py-3 w-full h-auto flex items-center justify-center text-[1.2rem] gap-4 text-gray transition-all duration-500 hover:text-primary font-bold"
            onClick={() => navigate(navigationTo)}
          >
            Thêm
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenuList;
