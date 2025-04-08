import HomeIcon from '@mui/icons-material/Home';
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { SearchBar } from './Searchbar';
import { UserMenu } from './UserMenu';
import { SelectCategory } from './SelectCategory';

export async function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <Image
          src={"/logo.png"}
          width={147.66}
          height={63.66}
          alt="Logo"
          priority
        />
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", ml: 1 }}
        >
          <SearchBar />
        </Box>
        <IconButton LinkComponent={Link} size="large" href="/my-cart">
          <ShoppingCardIcon />
        </IconButton>
        <UserMenu user={null} />
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          alignContent: "center",
          p: 1,
        }}
      >
        <SelectCategory categories={[]} />

        <Box
        component={Link}
        href={"/products"}
        sx={{ textDecoration: "none", display: "flex", ml: 3 }}
        >
          <HomeIcon sx={{ color: "text.primary" }} />
          <Typography color="text.primary" sx={{ fontWeight: 500, display: "flex" }}>
            Home
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
