import React from "react";
interface Props {
  navigation: string;
}
import './navlink.styles.css'
const NavLink: React.FC<Props> = ({ navigation }) => {
  return (
    <li
      className={`nav-link cursor-pointer capitalize`}
    >
        {navigation}
    </li>
  );
};

export default NavLink;
