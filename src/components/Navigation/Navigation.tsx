import React, { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

interface INavigationList {
  title: string;
  href: string;
  description: string;
}

// Library list
const libraryList: INavigationList[] = [
  {
    title: "topic1",
    href: "/library/topic1",
    description: "",
  },
  {
    title: "topic2",
    href: "/library/topic2",
    description: "",
  },
  {
    title: "topic3",
    href: "/library/topic3",
    description: "",
  },
  {
    title: "topic4",
    href: "/library/topic4",
    description: "",
  },
  {
    title: "topic5",
    href: "/library/topic5",
    description: "",
  },
  {
    title: "topic6",
    href: "/library/topic6",
    description: "",
  },
];

const Navigation = () => {
  // 로그인 여부 (jwt 사용?)
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="-webkit-backdrop-blur-[20px] fixed top-0 z-50 flex h-[80px] w-full items-center justify-between bg-transparent px-4 backdrop-blur-[20px] transition-all duration-300 ease-in-out">
      <div className="flex h-full items-center">
        {/* Logo */}
        <div
          className="mr-2 h-[80%] w-[120px]"
          style={{
            backgroundImage: `url("/logo.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <NavigationMenu>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Library */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/library">
                  <NavigationMenuLink>Library</NavigationMenuLink>
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                  {libraryList.map((el) => (
                    <a
                      href={el.href}
                      className="font-500 flex w-max items-center justify-center rounded-md px-4 py-2 hover:bg-accent"
                    >
                      {el.title}
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Trend */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/trend">
                  <NavigationMenuLink>Trend</NavigationMenuLink>
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                  {libraryList.map((el) => (
                    <a
                      href={el.href}
                      className="font-500 flex w-max items-center justify-center rounded-md px-4 py-2 hover:bg-accent"
                    >
                      {el.title}
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Market */}
            <NavigationMenuItem>
              <Link to="/market">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Market
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Community */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/community/lounge">
                  <NavigationMenuLink>Community</NavigationMenuLink>
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                  <a
                    href="/community/lounge"
                    className="font-500 flex w-max items-center justify-center rounded-md px-4 py-2 hover:bg-accent"
                  >
                    lounge
                  </a>
                  <a
                    href="/community/expert"
                    className="font-500 flex w-max items-center justify-center rounded-md px-4 py-2 hover:bg-accent"
                  >
                    expert
                  </a>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        {/* login / signup */}
        {isLogin ? (
          <HoverCard>
            <HoverCardTrigger>
              <Link to="/mypage">
                <Avatar>
                  <AvatarImage src="/user_default.png" />
                </Avatar>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>user 정보</HoverCardContent>
          </HoverCard>
        ) : (
          <>
            <Button variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="destructive">
              <Link to="/signup">Signup</Link>
            </Button>
          </>
        )}

        {/* theme */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
