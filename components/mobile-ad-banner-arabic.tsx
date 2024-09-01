import type { NextPage } from "next";
import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type MobileAdType = {
  className?: string;
};

const MobileAd: NextPage<MobileAdType> = ({ className = "" }) => {
  const [
    screenContentDateTimePickerValue,
    setScreenContentDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className={`bg-customBlack self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border max-w-full text-left text-3xs text-secondary-200 font-lato mq1025:hidden ${className}`}
        style={{ direction: "ltr" }}  
        
      >
        <div className="h-[476px] flex-1 bg-greys-500-text overflow-hidden flex flex-row items-start justify-end pt-[213px] px-[125px] pb-[154px] box-border relative gap-[31.9px] shrink-0 max-w-full mq750:gap-4 mq750:pl-[62px] mq750:pr-[62px] mq750:box-border mq450:pt-[90px] mq450:px-5 mq450:pb-[65px] mq450:box-border mq1050:pt-[138px] mq1050:pb-[100px] mq1050:box-border">
          <img
            className="h-[1299.6px] w-[1200.7px] absolute !m-[0] top-[-520.6px] left-[-319px] overflow-hidden shrink-0 object-contain"
            alt=""
            src="/ad-background@2x.png"
          />
          <div className="w-[214.1px] rounded-[35.13px] bg-black overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
            <div className="self-stretch flex flex-row items-start justify-start pt-px px-0 pb-[0.9px]">
              <div className="flex-1 [filter:blur(0.5px)] rounded-[34.46px] border-slategray border-[0.8px] border-solid flex flex-row items-end justify-start pt-0 px-0 pb-0 opacity-[0.9] z-[2]">
                <div className="h-[440.3px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[34.29px] border-dimgray-200 border-[2.2px] border-solid box-border w-full h-full">
                    <div className="absolute top-[-0.8px] left-[-0.8px] rounded-[35.13px] border-gray-100 border-[0.8px] border-solid box-border w-full h-full z-[1]">
                      <div className="absolute top-[44.7px] left-[211.1px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen z-[4]" />
                      <div className="absolute top-[44.7px] left-[0px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen z-[4]" />
                      <div className="absolute top-[0px] left-[170.5px] bg-gray-500 w-[2.7px] h-[3px] mix-blend-screen z-[4]" />
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_5.3px)] top-[3px] right-[2.3px] left-[3px] [filter:blur(0.33px)] rounded-[31.28px] border-dimgray-100 border-[0.3px] border-solid box-border h-[435px] opacity-[1] z-[3]">
                    <div className="absolute w-[calc(100%_-_11.5px)] top-[5.2px] right-[6.3px] left-[5.2px] rounded-8xl-6 bg-primary-300 h-[423px] overflow-hidden z-[4]">
                      <div className="absolute top-[285px] left-[55px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg bg-greys-500-text w-[84px] h-6 flex flex-row items-center justify-center py-2 px-4 box-border whitespace-nowrap">
                        <div className="bg-black h-3 w-[35px] relative leading-[120%] font-medium inline-block">
                          Sign Up
                        </div>
                      </div>
                      <div className="absolute top-[317px] left-[55px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg bg-secondary-200 w-[84px] h-6 flex flex-row items-center justify-center py-2 px-4 box-border text-greys-500-text">
                        <div className="h-3 w-6 relative leading-[120%] font-medium inline-block">
                          Login
                        </div>
                      </div>
                      <div className="absolute top-[349px] left-[65.5px] text-5xs leading-[120%] font-medium text-secondary-100">
                        Forgot Password?
                      </div>
                      <img
                        className="absolute top-[115px] left-[34px] w-[123px] h-[97px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/plan-de-travail-12-copie-1@2x.png"
                      />
                      <div className="absolute top-[14px] left-[23.8px] leading-[120%] font-black text-white flex items-center min-w-[21px] z-[5]">
                        9:41
                      </div>
                      <div className="absolute top-[15px] left-[142.8px] w-[8.9px] h-[5.5px] opacity-[0.9] z-[5]">
                        <div className="absolute top-[3.5px] left-[0px] rounded-[0.17px] bg-white w-[1.7px] h-0.5" />
                        <div className="absolute top-[2.5px] left-[2.3px] rounded-[0.17px] bg-white w-[1.7px] h-[3px]" />
                        <div className="absolute top-[1.3px] left-[4.9px] rounded-[0.17px] bg-white w-[1.7px] h-[4.2px]" />
                        <div className="absolute top-[0px] left-[7.2px] rounded-[0.17px] bg-white w-[1.7px] h-[5.5px]" />
                      </div>
                      <img
                        className="absolute top-[14.6px] left-[156.3px] w-[8.6px] h-[6.1px] z-[5]"
                        loading="lazy"
                        alt=""
                        src="/frame-4273193161.svg"
                      />
                      <div className="absolute top-[15.3px] left-[170.1px] w-[12.2px] h-[4.9px] z-[5]">
                        <div className="absolute top-[0px] left-[0px] w-[10.7px] h-[4.9px]">
                          <div className="absolute top-[0px] left-[0px] rounded-[0.84px] border-white border-[0.5px] border-solid box-border w-full h-full opacity-[0.6]" />
                          <div className="absolute top-[0.4px] left-[0.3px] rounded-[0.67px] bg-gray-400 w-2.5 h-[4.2px]" />
                        </div>
                        <div className="absolute top-[1.7px] left-[11.5px] rounded-tl-none rounded-tr-[1.51px] rounded-br-[1.51px] rounded-bl-none bg-gray-300 w-[0.7px] h-[1.5px]" />
                      </div>
                      <div className="absolute top-[24.2px] left-[147.3px] rounded-[16.56px] bg-gray-300 w-[27.3px] h-[1.2px] z-[5]" />
                      <div className="absolute top-[6.9px] left-[67.1px] rounded-[16.56px] w-[61.9px] h-[18.1px] z-[5]">
                        <div className="absolute top-[0px] left-[0px] rounded-[16.56px] bg-black w-full h-full overflow-hidden">
                          <img
                            className="absolute top-[4.7px] left-[45.2px] rounded-[310.35px] w-[8.7px] h-[8.7px]"
                            loading="lazy"
                            alt=""
                            src="/lens11.svg"
                          />
                          <img
                            className="absolute top-[3px] left-[3px] rounded-281xl-8 w-3 h-3 object-contain"
                            loading="lazy"
                            alt=""
                            src="/lens2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mt-[-47.7px]">
              <div className="h-[47.2px] w-[46.7px] relative">
                <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen" />
                <div className="absolute top-[44.2px] left-[44px] bg-gray-500 w-[2.7px] h-[3px] mix-blend-screen" />
              </div>
              <div className="h-[2.7px] w-[3px] relative bg-gray-500 mix-blend-screen z-[4]" />
            </div>
          </div>
          <div className="mt-[-333px] h-[442px] w-[214.1px] relative rounded-[35.13px] bg-black overflow-hidden shrink-0 text-5xs text-secondary-100">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-[0.8px] pb-[0.9px] pl-0 pr-0.5 box-border w-full h-full">
                <div className="w-[212.4px] rounded-[34.29px] border-dimgray-200 border-[2.2px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-0">
                  <div className="ml-[-0.8px] flex-1 rounded-[35.13px] border-gray-100 border-[0.8px] border-solid flex flex-row items-start justify-start shrink-0 z-[1]">
                    <div className="h-[440.9px] flex-1 relative [filter:blur(0.5px)] rounded-[34.46px] border-slategray border-[0.8px] border-solid box-border opacity-[0.9] z-[2]">
                      <div className="absolute w-[calc(100%_-_5.3px)] top-[2.8px] right-[2.3px] left-[3px] [filter:blur(0.33px)] rounded-[31.28px] border-dimgray-100 border-[0.3px] border-solid box-border h-[434.9px] opacity-[1] z-[3]" />
                      <div className="absolute top-[437.6px] left-[43.2px] bg-gray-500 w-[2.7px] h-[3px] mix-blend-screen z-[4]" />
                      <div className="absolute top-[393.3px] left-[-0.8px] w-[214.1px] h-[2.8px]">
                        <div className="absolute top-[0.1px] left-[0px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen z-[4]" />
                        <div className="absolute top-[0px] left-[211.1px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen z-[4]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[9px] left-[9px] rounded-8xl-6 bg-primary-300 w-[195px] h-[423px] overflow-hidden flex flex-col items-start justify-start pt-[6.9px] pb-16 pl-[23px] pr-3 box-border gap-[89px] z-[4]">
                <div className="self-stretch">
                  <DatePicker
                    value={screenContentDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setScreenContentDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        backgroundColor:"black",
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#fff",
                        fontSize: 10,
                      },
                      input: {
                        color: "#fff",
                        fontSize: 10,
                        textAlign: "left",
                        fontWeight: "900",
                      },
                      "& .MuiInputBase-root": {
                        height: 19.100000000000364,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "9:41",
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className="w-[143.2px] flex-1 flex flex-row items-start justify-start py-0 px-2.5 box-border">
                  <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[73px]">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/plan-de-travail-12-copie-1@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[21px] pr-[18px]">
                      <div className=" flex-1 flex flex-col items-start justify-start gap-2">
                        <button className="bg-black cursor-pointer [border:none] py-1.5 px-6 bg-greys-500-text shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
                          <div className=" relative text-3xs leading-[120%] font-medium font-lato text-secondary-200 text-left inline-block min-w-[35px]">
                            Sign Up
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-1.5 px-[30px] bg-secondary-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start hover:bg-wheat">
                          <div className="relative text-3xs leading-[120%] font-medium font-lato text-greys-500-text text-left inline-block min-w-[24px]">
                            Login
                          </div>
                        </button>
                        <div className="flex flex-row items-start justify-start py-0 px-2.5">
                          <div className="relative leading-[10px] font-medium inline-block min-w-[63px]">
                            Forgot Password?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[44.7px] left-[211.1px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen" />
              <div className="absolute top-[44.7px] left-[0px] bg-gray-500 w-[3px] h-[2.7px] mix-blend-screen z-[4]" />
            </div>
            <div className="absolute top-[0px] left-[170.5px] bg-gray-500 w-[2.7px] h-[3px] mix-blend-screen z-[4]" />
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default MobileAd;
