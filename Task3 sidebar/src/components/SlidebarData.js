import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {FiPhoneCall} from "react-icons/fi"

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About us",
    path: "/About",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Contact us",
    path: "/Contact",
    icon: <FiPhoneCall/>,
    cName: "nav-text"
  },
  {
    title: "Privacy policy",
    path: "/Privacy",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
];
