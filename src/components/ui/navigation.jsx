
import * as React from "react";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Component details
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element.",
  },
];

// Main Navigation Component
function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Getting Started */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Getting started
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>

              <ListItem
                href="/docs/installation"
                title="Installation"
              >
                How to install dependencies and structure your app.
              </ListItem>

              <ListItem
                href="/docs/primitives/typography"
                title="Typography"
              >
                Styles for headings, paragraphs and lists.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Components */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>
            Components
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* With Icons */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            With Icon
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <a href="#" className="flex flex-row items-center gap-2">
                      <CircleAlertIcon />
                      Backlog
                    </a>
                  }
                />

                <NavigationMenuLink
                  render={
                    <a href="#" className="flex flex-row items-center gap-2">
                      <CircleDashedIcon />
                      To Do
                    </a>
                  }
                />

                <NavigationMenuLink
                  render={
                    <a href="#" className="flex flex-row items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </a>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Documentation */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<a href="/docs">Docs</a>}
          />
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

// List Item Component
function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <a href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">
                {title}
              </div>

              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </a>
        }
      />
    </li>
  );
}

export default Navigation;
