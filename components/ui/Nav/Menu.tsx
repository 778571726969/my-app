"use client";
import Image from "next/image";
import Link from "next/link";
import Female from "../Femalee/Female";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../navigation-menu";

const Menu = () => {
  return (
    <main>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="space-x-8 font-bold text-slate-800">
            <NavigationMenuItem>
              <Link href="/female">Female</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              <Link href="/male">Male</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              <Link href="/kids">Kids</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              <Link href="/allProducts">All Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </main>
  );
};

export default Menu;
