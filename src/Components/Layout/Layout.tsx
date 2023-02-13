import React, { useState } from "react";
import {
  Box,
  Stack,
  Toolbar,
  styled,
  AppBar,
  IconButton,
  Badge,
  Hidden,
  Dialog,
  Slide,
} from "@mui/material";

import { NavLink as NavLinkReact, Outlet, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import LoginSection from "./LoginSection";
import { TiThMenu } from "react-icons/ti";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  }
);

const NavLink = styled(NavLinkReact)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.info.main,
  paddingBottom: "4px",
  transition: "color 0.3s ease-in-out",
  "&.active": {
    color: theme.palette.secondary.main,
    borderColor: "theme.palette.secondary.main",
    borderBottom: "solid",
    borderWidth: "1px",
  },
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  const openHandler = () => {
    setOpenMenu(!openMenu);
  };
  const closeHandler = () => {
    setOpenMenu(false);
  };

  const route = useNavigate();
  const handleGotoCart = () => {
    route("/cart");
  };

  return (
    <Box display={"flex"} gap={0} flexDirection={"column"}>
      <AppBar
        sx={{
          backgroundColor: "common.white",
          flexDirection: "row",
          fontSize: {
            xs: 10,
            lg: 12,
            zIndex: 99999999,
          },
          justifyContent: "center",
        }}
      >
        <Toolbar style={{ width: "100%" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: 1, sm: 2, md: 4, lg: 6 }}
            width={{ xs: "100%" }}
          >
            <Hidden smUp>
              <IconButton
                sx={{ color: "secondary", backgroundColor: "transparent" }}
                onClick={openHandler}
              >
                <TiThMenu style={{ width: "1.2rem", height: "1.2rem" }} />
              </IconButton>
              <Dialog
                onClose={closeHandler}
                open={openMenu}
                style={{ width: 300 }}
                fullScreen
                onBackdropClick={closeHandler}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ backgroundColor: "common.white" }}>
                  <Toolbar>
                    <Stack alignItems={"center"} width={"100%"}>
                      <Box>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 119.978 64.198"
                          role="img"
                          width={70}
                        >
                          <path
                            data-name="Path 140"
                            d="M32.478 17.478v39.664H21.142c-.325 0-.431.081-.429.425.017 2.087.009 4.175.009 6.262 0 .118-.01.236-.016.371h-4.005v-6.989c-1.018-.173-1.983-.3-2.931-.506a16.674 16.674 0 0 1-5.647-2.4A17.846 17.846 0 0 1 0 39.415a17.2 17.2 0 0 1 1.724-7.784 17.642 17.642 0 0 1 9.027-8.7 17.4 17.4 0 0 1 4.2-1.244 23.01 23.01 0 0 1 4.606-.239c.371.014.743 0 1.16 0V54.205c0 .753-.119.67.67.67h7.627c.008-.17.019-.3.019-.426q0-18.3-.019-36.594v-.376c1.841-1 17.361-.025 17.238-.025v34.867l.085.038a2.291 2.291 0 0 0 .18-.258q1.945-3.846 3.884-7.693 3.97-7.836 7.947-15.67c.43-.848.851-1.7 1.294-2.542a.525.525 0 0 1 .355-.265c1.363-.017 2.727-.008 4.09-.005a.875.875 0 0 1 .14.029c-.329.668-.65 1.323-.974 1.976-.733 1.476-1.473 2.948-2.195 4.429a1.55 1.55 0 0 0-.147.656q-.013 9.411-.007 18.822a3.361 3.361 0 0 0 .054.431l.109.021c.07-.114.148-.224.208-.344q2.06-4.073 4.116-8.146 3.143-6.206 6.293-12.409 1.313-2.591 2.617-5.185a.444.444 0 0 1 .465-.291c1.362.014 2.725.007 4.143.007-.064.145-.106.252-.156.355q-1.54 3.1-3.077 6.2a.968.968 0 0 0-.085.416v19.329a.349.349 0 0 0 .085.252c.23-.439.466-.874.69-1.315q1.587-3.137 3.17-6.277 2.831-5.6 5.665-11.19c1.226-2.424 2.457-4.846 3.664-7.279a.765.765 0 0 1 .817-.5c1.278.031 2.556.012 3.916.012-.164.345-.3.642-.446.935-.948 1.9-1.9 3.8-2.842 5.711a1.126 1.126 0 0 0-.1.486q-.009 9.465-.006 18.931a.664.664 0 0 0 .1.375 3.185 3.185 0 0 0 .2-.3q2.207-4.358 4.411-8.72l4-7.885c1.511-2.983 3.032-5.962 4.521-8.957a.87.87 0 0 1 .936-.591c1.253.041 2.508.014 3.829.014-.177.368-.332.7-.5 1.024q-2.086 4.138-4.176 8.274-2.415 4.762-4.841 9.52-2.783 5.487-5.555 10.979c-.2.4-.41.788-.6 1.191a.4.4 0 0 1-.424.25 192.538 192.538 0 0 0-3.8 0c-.316 0-.409-.088-.408-.407q.013-8.976.007-17.953v-1.2l-.117-.026c-.049.083-.1.163-.146.248l-5.858 11.51q-1.933 3.793-3.868 7.584a.366.366 0 0 1-.374.252c-1.315-.013-2.63-.011-3.945-.015-.081 0-.162-.009-.3-.019V37.454l-.109-.031c-.059.092-.126.18-.175.277q-2.554 5.015-5.1 10.033c-.853 1.681-1.7 3.367-2.551 5.048-.7 1.372-1.419 2.731-2.1 4.112-.192.39-.528.275-.775.28-1.2.026-2.408-.009-3.612-.023-.059 0-.119-.012-.225-.024V37.394l-.1-.033c-.109.184-.229.363-.326.553q-2.239 4.407-4.473 8.817-2.594 5.1-5.208 10.186a.481.481 0 0 1-.345.229c-1.75.011-3.5 0-5.248 0a.916.916 0 0 1-.141-.028V17.479Zm-15.8 6.232c-5.505.6-9.782 3.147-12.424 7.968a15.639 15.639 0 0 0 12.424 23.235Z"
                            fill="#0236d7"
                          ></path>
                          <path
                            data-name="Path 141"
                            d="M119.978 17.455v39.662h-3.257V17.455Z"
                            fill="#0236d7"
                          ></path>
                          <path
                            data-name="Path 142"
                            d="M107.573 48.871a2.949 2.949 0 0 1-3.09-3.024 2.991 2.991 0 0 1 3.305-2.919 3.04 3.04 0 0 1 2.664 2.786 2.934 2.934 0 0 1-2.879 3.157Z"
                            fill="#ffaf04"
                          ></path>
                          <path
                            data-name="Path 143"
                            d="M107.503 57.123a2.934 2.934 0 0 1-3.019-2.885 2.994 2.994 0 1 1 5.986.011 2.934 2.934 0 0 1-2.967 2.874Z"
                            fill="#ffaf04"
                          ></path>
                          <path
                            data-name="Path 144"
                            d="M46.18 17.45H29.018L60.986.002l7.4 17.45Z"
                            fill="#ffaf04"
                          ></path>
                        </svg>
                      </Box>
                    </Stack>
                  </Toolbar>
                </AppBar>
                <Stack
                  spacing={3}
                  marginTop={20}
                  paddingRight={3}
                  sx={{ zIndex: 1200 }}
                >
                  <NavLink to={"/"}>صفحه اصلی</NavLink>
                  <NavLink to={"/customerguide"}>راهنمای مشتریان</NavLink>
                  <NavLink to={"/services"}>خدمات ما</NavLink>
                  <NavLink to={"/carparts"}>قطعات</NavLink>
                  <NavLink to={"/dealership"}>نمایندگی‌ها</NavLink>
                  <NavLink to={"/shops"}>فروشگاه‌ها</NavLink>
                  <NavLink to={"/suppliers"}>تأمین‌کننده‌ها</NavLink>
                  <NavLink to={"/media"}>رسانه</NavLink>
                  <NavLink to={"/aboutus"}>درباره ما</NavLink>
                  <NavLink to={"/تماس با ما"}>تماس با ما</NavLink>
                </Stack>
              </Dialog>
            </Hidden>

            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 119.978 64.198"
                role="img"
                width={70}
              >
                <path
                  data-name="Path 140"
                  d="M32.478 17.478v39.664H21.142c-.325 0-.431.081-.429.425.017 2.087.009 4.175.009 6.262 0 .118-.01.236-.016.371h-4.005v-6.989c-1.018-.173-1.983-.3-2.931-.506a16.674 16.674 0 0 1-5.647-2.4A17.846 17.846 0 0 1 0 39.415a17.2 17.2 0 0 1 1.724-7.784 17.642 17.642 0 0 1 9.027-8.7 17.4 17.4 0 0 1 4.2-1.244 23.01 23.01 0 0 1 4.606-.239c.371.014.743 0 1.16 0V54.205c0 .753-.119.67.67.67h7.627c.008-.17.019-.3.019-.426q0-18.3-.019-36.594v-.376c1.841-1 17.361-.025 17.238-.025v34.867l.085.038a2.291 2.291 0 0 0 .18-.258q1.945-3.846 3.884-7.693 3.97-7.836 7.947-15.67c.43-.848.851-1.7 1.294-2.542a.525.525 0 0 1 .355-.265c1.363-.017 2.727-.008 4.09-.005a.875.875 0 0 1 .14.029c-.329.668-.65 1.323-.974 1.976-.733 1.476-1.473 2.948-2.195 4.429a1.55 1.55 0 0 0-.147.656q-.013 9.411-.007 18.822a3.361 3.361 0 0 0 .054.431l.109.021c.07-.114.148-.224.208-.344q2.06-4.073 4.116-8.146 3.143-6.206 6.293-12.409 1.313-2.591 2.617-5.185a.444.444 0 0 1 .465-.291c1.362.014 2.725.007 4.143.007-.064.145-.106.252-.156.355q-1.54 3.1-3.077 6.2a.968.968 0 0 0-.085.416v19.329a.349.349 0 0 0 .085.252c.23-.439.466-.874.69-1.315q1.587-3.137 3.17-6.277 2.831-5.6 5.665-11.19c1.226-2.424 2.457-4.846 3.664-7.279a.765.765 0 0 1 .817-.5c1.278.031 2.556.012 3.916.012-.164.345-.3.642-.446.935-.948 1.9-1.9 3.8-2.842 5.711a1.126 1.126 0 0 0-.1.486q-.009 9.465-.006 18.931a.664.664 0 0 0 .1.375 3.185 3.185 0 0 0 .2-.3q2.207-4.358 4.411-8.72l4-7.885c1.511-2.983 3.032-5.962 4.521-8.957a.87.87 0 0 1 .936-.591c1.253.041 2.508.014 3.829.014-.177.368-.332.7-.5 1.024q-2.086 4.138-4.176 8.274-2.415 4.762-4.841 9.52-2.783 5.487-5.555 10.979c-.2.4-.41.788-.6 1.191a.4.4 0 0 1-.424.25 192.538 192.538 0 0 0-3.8 0c-.316 0-.409-.088-.408-.407q.013-8.976.007-17.953v-1.2l-.117-.026c-.049.083-.1.163-.146.248l-5.858 11.51q-1.933 3.793-3.868 7.584a.366.366 0 0 1-.374.252c-1.315-.013-2.63-.011-3.945-.015-.081 0-.162-.009-.3-.019V37.454l-.109-.031c-.059.092-.126.18-.175.277q-2.554 5.015-5.1 10.033c-.853 1.681-1.7 3.367-2.551 5.048-.7 1.372-1.419 2.731-2.1 4.112-.192.39-.528.275-.775.28-1.2.026-2.408-.009-3.612-.023-.059 0-.119-.012-.225-.024V37.394l-.1-.033c-.109.184-.229.363-.326.553q-2.239 4.407-4.473 8.817-2.594 5.1-5.208 10.186a.481.481 0 0 1-.345.229c-1.75.011-3.5 0-5.248 0a.916.916 0 0 1-.141-.028V17.479Zm-15.8 6.232c-5.505.6-9.782 3.147-12.424 7.968a15.639 15.639 0 0 0 12.424 23.235Z"
                  fill="#0236d7"
                ></path>
                <path
                  data-name="Path 141"
                  d="M119.978 17.455v39.662h-3.257V17.455Z"
                  fill="#0236d7"
                ></path>
                <path
                  data-name="Path 142"
                  d="M107.573 48.871a2.949 2.949 0 0 1-3.09-3.024 2.991 2.991 0 0 1 3.305-2.919 3.04 3.04 0 0 1 2.664 2.786 2.934 2.934 0 0 1-2.879 3.157Z"
                  fill="#ffaf04"
                ></path>
                <path
                  data-name="Path 143"
                  d="M107.503 57.123a2.934 2.934 0 0 1-3.019-2.885 2.994 2.994 0 1 1 5.986.011 2.934 2.934 0 0 1-2.967 2.874Z"
                  fill="#ffaf04"
                ></path>
                <path
                  data-name="Path 144"
                  d="M46.18 17.45H29.018L60.986.002l7.4 17.45Z"
                  fill="#ffaf04"
                ></path>
              </svg>
            </Box>
            <Hidden smDown>
              <Stack
                gap={{ sm: 0.5, xs: 0, md: 4, lg: 4 }}
                direction={"row"}
                alignItems="center"
              >
                <NavLink to={"/"}>صفحه اصلی</NavLink>
                <NavLink to={"/customerguide"}>راهنمای مشتریان</NavLink>
                <NavLink to={"/services"}>خدمات ما</NavLink>
                <NavLink to={"/carparts"}>قطعات</NavLink>
                <NavLink to={"/dealership"}>نمایندگی‌ها</NavLink>
                <NavLink to={"/shops"}>فروشگاه‌ها</NavLink>
                <NavLink to={"/suppliers"}>تأمین‌کننده‌ها</NavLink>
                <NavLink to={"/media"}>رسانه</NavLink>
                <NavLink to={"/aboutus"}>درباره ما</NavLink>
                <NavLink to={"/تماس با ما"}>تماس با ما</NavLink>
              </Stack>
            </Hidden>

            <Stack direction="row" spacing={2} alignItems="center">
              <Box display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
                <LoginSection />
              </Box>
              <IconButton
                sx={{ color: "common.black" }}
                onClick={handleGotoCart}
              >
                <Badge color="secondary">
                  <FaCartArrowDown style={{ fontSize: "1.4rem" }} />
                </Badge>
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
