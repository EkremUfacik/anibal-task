"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import logo from "public/assets/icons/logo.svg";
import down from "public/assets/icons/chevron-down.svg";
import coffeeCup from "public/assets/icons/coffee-cup.svg";
import coffeeCup2 from "public/assets/icons/coffee-cup2.svg";
import coffeeItem from "public/assets/icons/coffee-item.svg";
import Image from "next/image";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Products", "Customers", "About", "Help & Feedback"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-100 shadow-xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="logo" width={32} height={32} />
          <p className="font-bold text-inherit ml-2 mr-8">EUCOFFEE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-5 font-medium"
        justify="center"
      >
        <NavbarBrand>
          <Image src={logo} alt="logo" width={32} height={32} priority />
          <p className="font-bold text-inherit ml-2 mr-8">EUCOFFEE</p>
        </NavbarBrand>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-[16px]"
                radius="sm"
                variant="light"
              >
                Products
                <Image src={down} alt="down" width={22} height={22} />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              className="text-orange-700"
            >
              Filter Coffee
              <Image
                src={coffeeCup}
                alt="coffeeCup"
                width={22}
                height={22}
                className="inline ml-2 pb-1"
              />
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              className="text-orange-900"
            >
              Turkish Coffee
              <Image
                src={coffeeCup2}
                alt="coffeeCup2"
                width={22}
                height={22}
                className="inline ml-2 pb-2"
              />
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              className="text-orange-500"
            >
              Coffee Items
              <Image
                src={coffeeItem}
                alt="coffeeItem"
                width={22}
                height={22}
                className="inline ml-2 pb-1"
              />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="warning" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#">
            Help & Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="success">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            className="text-white"
            href="#"
            variant="shadow"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "secondary"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
