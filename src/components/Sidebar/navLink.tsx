import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinksProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link"
import ActiveLink from "../activeLink";

interface NavLinkProps extends ChakraLinksProps {
  icon: ElementType;
  children: string;
  href: string;
}

export default function NavLink({ icon, children,href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
    <ChakraLink display="flex" alignSelf="flex-start" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
    </ActiveLink>
  );
}
