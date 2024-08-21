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

// Library list (best topic 3)
const articleTopics: INavigationList[] = [
  {
    title: "blockchain",
    href: "/library/article/blockchain",
    description: "",
  },
  {
    title: "defi",
    href: "/library/article/defi",
    description: "",
  },
  {
    title: "wallet",
    href: "/library/article/wallet",
    description: "",
  },
];
const developTopics: INavigationList[] = [
  {
    title: "blockchain",
    href: "/library/develop/blockchain",
    description: "",
  },
  {
    title: "defi",
    href: "/library/develop/defi",
    description: "",
  },
  {
    title: "wallet",
    href: "/library/develop/wallet",
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
                <Link to="/library/article">Library</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:bg-muted focus:shadow-md"
                        href="/library/article"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Article
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          비개발
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {articleTopics.map((el, index) => (
                    <a
                      key={index}
                      href={el.href}
                      className="font-500 flex w-full items-center justify-start rounded-md px-4 py-2 hover:bg-muted"
                    >
                      {el.title}
                    </a>
                  ))}
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:bg-muted focus:shadow-md"
                        href="/library/develop"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Develop
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          개발
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {developTopics.map((el, index) => (
                    <a
                      key={index}
                      href={el.href}
                      className="font-500 flex w-full items-center justify-start rounded-md px-4 py-2 hover:bg-muted"
                    >
                      {el.title}
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Trend */}
            <NavigationMenuItem>
              <Link to="/trend">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Trend
                </NavigationMenuLink>
              </Link>
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
                <Link to="/community/lounge">Community</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:bg-muted focus:shadow-md"
                        href="/community/lounge"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Lounge
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          전체
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:bg-muted focus:shadow-md"
                        href="/community/expert"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Expert
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          전문가
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
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
