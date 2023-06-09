import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean,
    switchTheme: () => void
}

export default function Header({ switchTheme, darkMode}: Props) {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">RE-Store</Typography>
        <Typography sx={{ ml: 4 }}>
          {darkMode ? "Light mode" : "Dark mode"}
        </Typography>
        <Switch onChange={switchTheme} color="warning" />
      </Toolbar>
    </AppBar>
  );
}
