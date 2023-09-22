'Use'
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
  import Link from "next/link"
import { useCookies } from 'react-cookie';

export const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);

  return (
    <div>
    <NavigationMenu>
              <NavigationMenuList>
             <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/squizz.tsx" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Mes Squizz
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about.tsx" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              A propos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {cookies.auth && <span className={navigationMenuTriggerStyle()} onClick={(e) => removeCookie('auth')}>Se déconnecter</span> || 
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Se connecter
              </NavigationMenuLink>
            </Link>
          }
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  )
}