import type { NextPage } from "next";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

export type NavBarLandingPageType = {
  className?: string;
};

const NavBarLandingPage: NextPage<NavBarLandingPageType> = ({
  className = "",
}) => {
  const [restaurantDropdownAnchorEl, setRestaurantDropdownAnchorEl] =
    useState<HTMLElement | null>(null);
  const restaurantDropdownOpen = Boolean(restaurantDropdownAnchorEl);
  const handleRestaurantDropdownClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setRestaurantDropdownAnchorEl(event.currentTarget);
  };
  const handleRestaurantDropdownClose = () => {
    setRestaurantDropdownAnchorEl(null);
  };
  return (
    <header
      className={`self-stretch bg-secondary-200 flex flex-row items-start justify-between py-2 px-16 box-border sticky top-[0] z-[99] max-w-full gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg.svg"
      />
      <img
        className="h-16 w-[110px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/plan-de-travail-1-copie-3-2@2x.png"
      />
      <div className="w-[526px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
          <div className="flex-1 z-[1]">
            <Button
              id="button-undefined"
              aria-controls="menu-undefined"
              aria-haspopup="true"
              aria-expanded={restaurantDropdownOpen ? "true" : undefined}
              onClick={handleRestaurantDropdownClick}
              color="error"
              sx={{ width: "173", height: "56", borderRadius: "8px" }}
            />
            <Menu
              anchorEl={restaurantDropdownAnchorEl}
              open={restaurantDropdownOpen}
              onClose={handleRestaurantDropdownClose}
            />
          </div>
          <div className="w-[158px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
            <div className="self-stretch rounded-lg flex flex-row items-start justify-start p-4 z-[1]">
              <FormControl
                className="flex-1 font-body font-medium text-xl text-gray-300"
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "118px",
                  height: "24px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[13.5px] px-[42px] bg-primary-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start gap-[8px] z-[1]">
            <div className="overflow-hidden hidden flex-col items-start justify-start p-[9px] box-border w-[px] h-[px]">
              <img
                className="w-[25.7px] h-[25.7px] relative"
                alt=""
                src="/vector.svg"
              />
            </div>
            <b className="relative text-5xl leading-[29px] inline-block font-body text-gray-100 text-left min-w-[63px] whitespace-nowrap">
              Login
            </b>
          </button>
        </div>
      </div>
      <img
        className="h-[611px] w-full absolute !m-[0] right-[0px] bottom-[-605px] left-[0px] max-w-full overflow-hidden object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/line-19.svg"
      />
      <img
        className="h-[604.7px] w-[1442.7px] absolute !m-[0] right-[-1.4px] bottom-[-601.9px] object-contain z-[2]"
        alt=""
        src="/line-20.svg"
      />
    </header>
  );
};

export default NavBarLandingPage;
