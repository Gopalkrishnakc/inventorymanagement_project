import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataContext } from '../dataContext';
import { Link } from 'react-router-dom';
function NavBar1({onLogout}) {
  const drawerWidth = 240;
  const { isLoggedIn,setIsLoggedIn } = React.useContext(DataContext);
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open  &&  {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.light,
    ...((open && isLoggedIn)&& {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const theme = useTheme();
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "darkgreen" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            InventoryManagement
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItemIcon sx={{ color: theme.palette.text.primary }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.primary }}
          >
            Welcome admin
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <Link to={"/dashboard"} style={{textDecoration:"none"}}>
          <ListItem key='DashBoard' disablePadding sx={{ display: "block",textDecoration:"unundeline",color:"black" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText primary='DashBoard' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={"/adduser"} style={{textDecoration:"none"}}>
          <ListItem key='Add User' disablePadding sx={{ display: "block" ,color:"black",textDecoration:"none"}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText primary='Add User' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={"/addcategories"} style={{textDecoration:"none"}}>
          <ListItem key='Add categories' disablePadding sx={{ display: "block",color:"black" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText primary='PurchaseOrder Items' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={"/addproducts"} style={{textDecoration:"none"}}>
          <ListItem key='Add Products' disablePadding sx={{ display: "block" ,color:"black"}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText primary='AddProducts' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </Link>
          
          <Link to={"/logout"} style={{textDecoration:"none"}} onClick={onLogout}>
          <ListItem key='logout' disablePadding sx={{ display: "block",color:"black" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} style={{textDecoration:'none'}} />
            </ListItemButton>
          </ListItem>
          </Link>
          {/* {['Dashboard', 'Add Users', 'Add Categories', 'Add Products', 'Customers'].map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ),
        )} */}
        </List>
        <Divider />
        {/* <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" sx={{ justifyContent: "center" }}>
          Logout
        </Button> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

export default NavBar1