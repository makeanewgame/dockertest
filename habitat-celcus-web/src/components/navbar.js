"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntl } from "react-intl";
import Button from "./button";
import MenuButton from "./menubutton";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const intl = useIntl();
  const { locale } = useRouter();

  const path = usePathname();

  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setNav(false);
  }, [path]);

  return (
    <div id="navbar">
      <div
        className={nav ? "mobile-menu-on" : "mobile-menu-off"}
        style={{
          zIndex: 1001,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
          backgroundColor: "#2B2B2B",
        }}
      >
        <div className="flex p-4 self-end justify-end">
          <button
            onClick={() => handleToggle()}
            className="justify-end"
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <Image
              src="/close.svg"
              alt="Close icon"
              width={26}
              height={24}
              priority
            />
          </button>
        </div>
        <Image
          className="mx-auto mt-2"
          src={"/habitat-logo-white.png"}
          alt="mobile menu logo"
          width={134}
          height={47}
          quality={90}
          style={{
            zIndex: 0,
          }}
        />

        <div className="mt-8 flex flex-col gap-4">
          <MenuButton href="/memberships" apperance={"light"}>
            {intl.formatMessage({ id: "nav.memberships" })}
          </MenuButton>

          <MenuButton href="/privileges" apperance={"light"}>
            {intl.formatMessage({ id: "nav.privileges" })}
          </MenuButton>

          <MenuButton href="/events" apperance={"light"}>
            {intl.formatMessage({ id: "nav.events" })}
          </MenuButton>

          <MenuButton href="/locations" apperance={"light"}>
            {intl.formatMessage({ id: "nav.locations" })}
          </MenuButton>

          <MenuButton href="/contact" apperance={"light"}>
            {intl.formatMessage({ id: "nav.contact" })}
          </MenuButton>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Link href={"#"} target="_blank">
            <Image
              src={"/facebook.svg"}
              alt="facebook icon"
              width={24}
              height={24}
            />
          </Link>

          <Link href={"#"} target="_blank">
            <Image
              src={"/instagram.svg"}
              alt="facebook icon"
              width={24}
              height={24}
            />
          </Link>

          <Link href={"#"} target="_blank">
            <Image
              src={"/linkedin.svg"}
              alt="facebook icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="relative gap-4 flex items-center mt-6 mb-6">
          <div className="flex flex-1"></div>
          <div className="flex flex-1 justify-center ">
            <Link href={"/"}>
              <Image
                src="/habitat-logo.png"
                alt="habitat logo"
                width={116}
                height={45}
                quality={100}
              />
            </Link>
          </div>
          <div className="flex justify-end flex-1 pr-5">
            <MenuButton
              apperance={"basic"}
              href={locale === "en" ? "/tr" : "/en"}
              className="hidden lg:block ml-2 self-center p-2"
            >
              {locale === "en" ? "TR | " : "EN | "}
            </MenuButton>
            <Button apperance={"default"} className="hidden lg:block">
              {intl.formatMessage({ id: "nav.signIn" })}
            </Button>

            <Button apperance={"primary"} className="hidden lg:block ml-2">
              {intl.formatMessage({ id: "nav.signUp" })}
            </Button>

            <button onClick={() => handleToggle()}>
              <Image
                src="/menu.svg"
                width={65}
                height={64}
                className="block self-center lg:hidden"
                alt="hamburger svg"
              />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Image src="/line.svg" width={120} height={1} alt="line" />
        </div>
        <nav className="hidden lg:flex basis-2/4 justify-center gap-8 mt-4 mb-4">
          <MenuButton href="/memberships">
            {intl.formatMessage({ id: "nav.memberships" })}
          </MenuButton>

          <MenuButton href="/privileges">
            {intl.formatMessage({ id: "nav.privileges" })}
          </MenuButton>

          <MenuButton href="/events">
            {intl.formatMessage({ id: "nav.events" })}
          </MenuButton>

          <MenuButton href="/locations">
            {intl.formatMessage({ id: "nav.locations" })}
          </MenuButton>

          <MenuButton href="/contact">
            {intl.formatMessage({ id: "nav.contact" })}
          </MenuButton>
        </nav>
        <div className="hidden lg:flex self-end">
          <Image src="/line.svg" width={120} height={1} alt="line" />
        </div>
      </div>
    </div>
  );
}
