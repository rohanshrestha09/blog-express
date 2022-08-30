import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import {
  BiMessageSquareEdit,
  BiUserCircle,
  BiNotification,
} from "react-icons/bi";

const Nav: React.FC = () => {
  const router = useRouter();

  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const iconArr: JSX.Element[] = [
    <AiOutlineLogout key="logout" size={26} />,
    <BiNotification key="notification" size={26} />,
    <BiMessageSquareEdit key="create" size={26} />,
    <BiUserCircle key="profile" size={26} />,
    <AiOutlineHome key="feed" size={26} />,
  ];

  return (
    <div className="fixed lg:bottom-10 lg:left-auto left-5 bottom-5 flex flex-col">
      <div
        className={`flex flex-col justify-between h-0 transition-all duration-300 ${
          toggleNav && "h-[19rem]"
        }`}
      >
        {iconArr.map((el, index) => (
          <div
            key={index}
            className={`${toggleNav ? "btn opacity-100" : "opacity-0"} ${
              !toggleNav && "[&>*]:h-0 [&>*]:w-0"
            } btn-circle hover:w-40 relative transition-all duration-300 [&>*]:absolute [&>*]:left-[0.65rem] [&>*]:transition-all [&>*]:duration-100 [&>*]:hover:opacity-100`}
            onClick={() => router.push(el.key as string)}
          >
            {el}
            <span
              className={`absolute right-0 opacity-0 ${
                el.key === "notification" && "text-xs"
              }`}
            >
              {el.key}
            </span>
          </div>
        ))}
      </div>

      <label
        className={`${toggleNav && "mt-4"} btn btn-circle swap swap-rotate`}
      >
        <input type="checkbox" onClick={() => setToggleNav((prev) => !prev)} />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
};

export default Nav;
