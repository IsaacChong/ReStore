import { AddShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  switchTheme: () => void;
}

const midLinks = [
  {
    title: "Catalog",
    path: "/catalog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About",
    path: "/about",
  },
];

const rightLinks = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Register",
    path: "/register",
  },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textWrap: "nowrap",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

const navBox = { 
  display: "flex", 
  alignItems: "center"
 };

export default function Header({ switchTheme, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={navBox}>
          <Typography style={navStyles} component={NavLink} variant="h6" to="/">
            RE-Store
          </Typography>
          <Typography sx={{ ml: 4 }}>
            {darkMode ? "Light mode" : "Dark mode"}
          </Typography>
          <Switch onChange={switchTheme} color="warning" />
        </Box>
        <Box sx={navBox}>
          <List sx={{ display: "flex" }}>
            {midLinks.map((link) => {
              return (
                <ListItem
                  component={NavLink}
                  to={link.path}
                  key={link.path}
                  sx={navStyles}
                >
                  {link.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box sx={navBox}>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <Badge badgeContent={4} style={{ color: "inherit" }}>
              <AddShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map((link) => {
              return (
                <ListItem
                  component={NavLink}
                  to={link.path}
                  key={link.path}
                  sx={navStyles}
                >
                  {link.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
