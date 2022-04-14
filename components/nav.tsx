import Link from "next/link";
import { NavBox, NavUl, NavLi, NavA, NavLogo, NavWrap } from "../styles/styled";
import Logo from "../public/logo.png";
import Image from "next/image";
import DarkModeToggle from "./button";
const Nav = () => {
  return (
    <NavBox>
      <NavWrap>
        <NavLogo>
          <Link href="/" passHref>
            <NavA>
              <Image
                src={Logo}
                width={128}
                height={44}
                alt="east9_logo"
                layout="responsive"
              />
            </NavA>
          </Link>
        </NavLogo>

        <DarkModeToggle />
      </NavWrap>
    </NavBox>
  );
};

export default Nav;
