import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  MenuHandler,
  ListItem,
  MenuList,
  Collapse
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, SquaresPlusIcon,Bars4Icon, SunIcon, ChevronDownIcon,CakeIcon } from "@heroicons/react/24/outline";

export function Navbar({ routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navListMenuItems = [
    {
      title: "Categories",
      description: "Browse fundraisers by category",
      icon: SquaresPlusIcon,
    },
    {
      title: "Fundraising tips",
      description: "The ultimate fundraising tips guide",
      icon: CakeIcon,
    },
    {
      title: "Fundraising blogs",
      description: "Resources,tips and more",
      icon: Bars4Icon,
    },
    {
      title: "Supporter Space",
      description: "Inspiration, FAQs, and where to give",
      icon: SunIcon,
    },
  ];
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            My branding Logo
          </Typography>
        </Link>
        <div className="hidden lg:flex">{navList}
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            offset={{ mainAxis: 20 }}
            placement="bottom"
          >
            <MenuHandler>
              <Typography as="div" variant="small" className="font-medium -ml-10">
                <ListItem
                  className="flex  gap-2 py-2  pr-4 font-medium text-white"
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  Resources
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </ListItem>
              </Typography>
            </MenuHandler>
            <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
              <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                {renderItems}
              </ul>
            </MenuList>
          </Menu>
          <div className="block lg:hidden">
            <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
          </div>
        </div>

        <div className="hidden gap-2 lg:flex">
          <Link to="/sign-in">
            <Button variant="text" size="sm" color="white" fullWidth>
              sign in
            </Button>
          </Link>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <Link to="/sign-up">
            <Button variant="text" size="sm" fullWidth>
              Sign in
            </Button>
          </Link>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <Link to="/sign-up">
      <Button size="sm" fullWidth className="bg-yellow-900">
        get started
      </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
