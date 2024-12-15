import { useContext, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Context } from "@/context/Context";
import MobileNavbar from "@/components/Dashboard/MobileNavbar";
import Navbar from "@/components/Dashboard/Navbar";
import { FaChevronRight } from "react-icons/fa";

export default function Layout({ children }) {
  const {
    onMobile,
    setOnMobile,
    location,
    OverViewTable,
    menuItems,
    isOpen,
    setIsOpen,
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    isOpen3,
    setIsOpen3,
  } = useContext(Context);
  const [menuState, setMenuState] = useState({});
  const toggleMenuState = (path) => {
    setMenuState((prev) => ({
      ...prev,
      [path]: !prev[path], // Toggle the state for the specific path
    }));
  };
  // USESTATE

  return (
    <main className="flex w-full">
      <MobileNavbar />
      <nav
        className={` ${
          onMobile ? "w-[340px]" : "w-[80px]"
        } min-h-screen  bg-white border-r md:block hidden`}
      >
        {/* Sidebar Header */}
        <div className="main-image-icon-container flex pl-5 pt-6 relative">
          <img src="https://minimals.cc/" alt="Logo" />
          <div
            className={`icon bg-white w-[22px] absolute ${
              onMobile ? "left-[96%]" : "left-[90%]"
            } h-[22px] rounded-full flex justify-center items-center border`}
          >
            <button onClick={() => setOnMobile(!onMobile)}>
              {onMobile ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
          </div>
        </div>
        <div
          className={`scrollable ${
            onMobile ? "overflow-y-auto" : null
          }  relative h-[90vh]`}
        >
          {/* Overview Section */}
          <div
            className={`flex flex-col gap-4 ${
              onMobile ? "px-4" : "px-1"
            } py-4 mt-3`}
          >
            {onMobile && (
              <h1 className="text-gray-500 text-[.8rem] font-semibold tracking-wide ml-2">
                OVERVIEW
              </h1>
            )}
            <ul className="flex flex-col gap-1">
              {OverViewTable.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    to={item.url}
                    key={index}
                    className={`flex-wrap list-none ${
                      isActive
                        ? "text-[#00a76f] bg-[#00a76f19] hover:bg-[#00a76f3b]"
                        : "text-gray-500 text-sm hover:bg-slate-100"
                    } py-2 px-2 rounded-md items-center gap-3 ${
                      onMobile
                        ? "flex justify-start"
                        : "flex flex-col justify-center leading-3"
                    }`}
                  >
                    <item.icon
                      className={`${onMobile ? "text-2xl" : "text-xl"} ${
                        isActive ? "text-[#00a76f]" : "text-gray-500"
                      }`}
                    />
                    <p
                      className={`${
                        onMobile ? "text-md" : "text-[12px]"
                      } font-semibold`}
                    >
                      {item.title}
                    </p>
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* Management */}

          {onMobile && (
            <h1 className="text-gray-500 text-[.8rem] font-semibold tracking-wide ml-2 px-4">
              Management
            </h1>
          )}

          {/* FIRST DROPDOWN */}
          <div
            className="px-4 relative"
            onClick={() => {
              if (onMobile) {
                setIsOpen1(!isOpen1);
              } else {
                setIsOpen1(!isOpen1);
              }
            }}
          >
            {/* DROPDOWN HEADER */}
            <div
              className={`flex mt-2 gap-11 items-center justify-between ${
                onMobile ? "px-4" : "px-2"
              } py-2 rounded-md cursor-pointer`}
            >
              <div className="flex items-center justify-center flex-wrap gap-3">
                <FaUser
                  className={`text-gray-500 ${
                    onMobile ? "text-xl" : "text-lg"
                  }`}
                />
                <span
                  className={`text-gray-500 font-medium ${
                    onMobile ? "text-md" : "text-[12px]"
                  }`}
                >
                  User
                </span>
              </div>
              {isOpen1 ? (
                <IoIosArrowDown className="ml-2 text-gray-500" />
              ) : (
                <IoIosArrowUp className="ml-2 text-gray-500" />
              )}
            </div>

            {/* DROPDOWN MENU */}
            {isOpen1 && (
              <div
                className={`top-full ${
                  onMobile
                    ? "left-10"
                    : "absolute left-[calc(100%+1px)] mt-[-150px]"
                } mt-2 w-40 rounded-md z-10`}
              >
                <ul
                  className={`${
                    onMobile
                      ? "border-l-2 ml-6 "
                      : "dropdown w-[200px] py-3 px-2  rounded-md"
                  } `}
                >
                  {menuItems.map((item, index) => (
                    <div className="flex items-center w-full">
                      <hr className="w-[10px]" />
                      <li key={index} className="w-full">
                        <Link
                          to={item.url}
                          className="block  py-2 text-sm text-gray-600 hover:bg-slate-200 rounded-md hover:text-gray-900 ml-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* LEVEL DROPDOWN */}

          <div className="px-4 relative">
            {/* DROPDOWN HEADER */}
            <div
              className={`flex mt-2 gap-11 items-center justify-between ${menuState["root"] ? "bg-[#919eab14]" : ""} ${
                onMobile ? "px-4" : "px-2"
              } py-2 rounded-md cursor-pointer`}
              onClick={() => toggleMenuState("root")}
            >
              <div className="flex items-center justify-center flex-wrap gap-3">
                <FaUser
                  className={`text-gray-500 ${
                    onMobile ? "text-xl" : "text-lg"
                  }`}
                />
                <span
                  className={`text-gray-500 font-medium ${
                    onMobile ? "text-md" : "text-[12px]"
                  }`}
                >
                  User
                </span>
              </div>
              {menuState["root"] ? (
                <IoIosArrowDown className="ml-2 text-gray-500" />
              ) : (
                <IoIosArrowUp className="ml-2 text-gray-500" />
              )}
            </div>

            {/* DROPDOWN MENU */}
            {menuState["root"] && (
              <div
                className={`absolute top-full left-0 mt-2 w-56 ${onMobile ? "" : "left-[48px] top-[-20%] bg-[#919eab14]"}  rounded-md ml-8  z-10`}
              >
                <ul className="ml-2 border-l-2 border-gray-300 ">
                  {menuItems.map((item, index) => {
                    const path = `root-${index}`; // Unique path for each menu item

                    return (
                      <li key={index} className="relative">
                        <div
                          className="flex items-center  cursor-pointer py-2"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent closing the parent dropdown
                            if (item.subItems) toggleMenuState(path);
                          }}
                        >
                        <hr className="w-[10px]"/>
                          <Link
                            to={item.url}
                            className={`text-sm pl-1 text-gray-600 ${menuState[path] ? "bg-[#919eab14]" : ""} hover:bg-[#919eab14] py-2 hover:text-gray-900 rounded-md w-[85%] flex justify-between pr-4 items-center`}
                          >
                            {item.label}
                          {item.subItems && (
                            <span className="ml-3">
                              {menuState[path] ? (
                                <IoIosArrowUp className="text-gray-500" />
                              ) : (
                                <IoIosArrowDown className="text-gray-500" />
                              )}
                            </span>
                          )}
                          </Link>
                        </div>
                        {/* Render Subitems */}
                        {menuState[path] && item.subItems && (
                          <ul className="ml-4 border-l-2 border-gray-300">
                            {item.subItems.map((subItem, subIndex) => {
                              const subPath = `${path}-${subIndex}`; // Unique path for each submenu item

                              return (
                                <li key={subIndex} className="relative">
                                  <div
                                    className="flex items-center cursor-pointer py-2 w-full"
                                    onClick={(e) => {
                                      e.stopPropagation(); // Prevent closing parent dropdown
                                      if (subItem.subItems)
                                        toggleMenuState(subPath);
                                    }}
                                  >
                                  <hr className="w-[10px]"/>
                                    <Link
                                      to={subItem.url}
                                      className={`text-sm w-full flex justify-between items-center pr-4 ${menuState[subPath] ? "bg-[#919eab14] px-2 py-2" : "py-2 pl-2" } text-gray-600 hover:bg-[#919eab14] hover:text-gray-900 rounded-md`}
                                    >
                                      {subItem.label}
                                    {subItem.subItems && (
                                      <span className="ml-2 ">
                                        {menuState[subPath] ? (
                                          <IoIosArrowUp className="text-gray-500" />
                                        ) : (
                                          <IoIosArrowDown className="text-gray-500" />
                                        )}
                                      </span>
                                    )}
                                    </Link>
                                  </div>
                                  {/* Render Nested Subitems */}
                                  {menuState[subPath] &&
                                    subItem.subItems &&
                                    subItem.subItems.map(
                                      (nestedItem, nestedIndex) => (
                                        <ul
                                          key={nestedIndex}
                                          className="ml-4 flex items-center border-l-2 border-gray-300 w-full"
                                        >
                                        <hr className="w-[10px]"/>
                                          <li className="w-[80%]">
                                            <Link
                                              to={nestedItem.url}
                                              className="block pl-2 w-full text-sm text-gray-600 hover:bg-[#919eab14] hover:text-gray-900 rounded-md py-2"
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          </li>
                                        </ul>
                                      )
                                    )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="outlets w-full min-h-screen h-auto bg-white">
        {" "}
        {/* OTHER PAGES */}
        <Navbar />
        <div className="w-full bg-white min-h-[84.5vh] h-auto ">{children}</div>
      </div>
    </main>
  );
}
