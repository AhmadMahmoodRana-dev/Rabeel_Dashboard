import { createContext, useEffect, useState } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const ContextProvider = (props) => {
  const [onMobile, setOnMobile] = useState(true);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const OverViewTable = [
    { title: "Home", icon: MdOutlineSpeed, url: "/" },
    { title: "App", icon: MdOutlineSpeed, url: "/testing" },
    { title: "Ecommerce", icon: MdOutlineSpeed, url: "/Ecommerce" },
    { title: "Analytics", icon: MdOutlineSpeed, url: "/Analytics" },
    { title: "Banking", icon: MdOutlineSpeed, url: "/Banking" },
    { title: "Booking", icon: MdOutlineSpeed, url: "/Booking" },
  ];

  // const menuItems = [
  //   { label: "Profile", url: "/profile" },
  //   { label: "Cards", url: "/cards" },
  //   { label: "List", url: "/list" },
  //   { label: "Create", url: "/create" },
  //   { label: "Edit", url: "/edit" },
  //   { label: "Account", url: "/account" },
  // ];

  const menuItems = [
    {
      label: "Level 1a",
      url: "#",
      subItems: [
        {
          label: "Level 2a",
          url: "#",
        },
        {
          label: "Level 2b",
          url: "#",
          subItems: [
            {
              label: "Level 3a",
              url: "#",
            },
            {
              label: "Level 3b",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      label: "Level 1b",
      url: "#",
    },
  ];

  // ######################################################################################################################################

  const contextValue = {
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
    mobileMenuOpen,
    setMobileMenuOpen,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
