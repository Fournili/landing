import type { NextPage } from "next";
import { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useTranslation } from "react-i18next";

export type MobileAdBannerType = {
  className?: string;
};

const MobileAdBanner: NextPage<MobileAdBannerType> = ({ className = "" }) => {
  const [screenContentTwoValue, setScreenContentTwoValue] = useState(null);
  const { t,i18n} = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className={`mr-[-1px] self-stretch h-[476px] bg-gray-300 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[72px] pb-[76px] pr-[60px] pl-[59px] box-border relative gap-[20px] max-w-full text-left text-3xs text-white font-body mq750:pt-[31px] mq750:pb-8 mq750:pr-[30px] mq750:pl-[29px] mq750:box-border mq1025:pt-[47px] mq1025:pb-[49px] mq1025:box-border mq1025:hidden ${className}`}
        style={{
          fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
        }}
      >
        <img
          className="h-[1299.6px] w-[1200.7px] absolute !m-[0] top-[-520.6px] right-[-274.5px] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/frame-427319318@2x.png"
        />
        <div className="mt-[-192px] w-[483.1px] flex flex-row flex-wrap items-start justify-start gap-[54.9px] max-w-[calc(100%_-_477px)] shrink-0 mq750:gap-[27px] mq750:max-w-full mq1025:hidden">
          <div className="flex-1 flex flex-col items-start justify-start pt-[394.6px] px-0 pb-0 box-border min-w-[139px] mq1025:pt-64 mq1025:box-border mq450:pt-[166px] mq450:box-border">
            <div className="self-stretch h-[442px] rounded-[35.13px] bg-black overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="h-[18.1px] w-[61.9px] relative rounded-[16.56px] hidden">
                <div className="absolute top-[0px] left-[0px] rounded-[16.56px] bg-black w-full h-full overflow-hidden">
                  <img
                    className="absolute top-[4.7px] left-[45.2px] rounded-[310.35px] w-[8.7px] h-[8.7px]"
                    alt=""
                    src="/lens1.svg"
                  />
                  <img
                    className="absolute top-[3px] left-[3px] rounded-281xl-8 w-3 h-3 object-contain"
                    alt=""
                    src="/lens2@2x.png"
                  />
                </div>
              </div>
              <div className="relative leading-[120%] hidden min-w-[18px]">
                9:41
              </div>
              <div className="h-[5.5px] w-[8.9px] relative hidden opacity-[0.9]">
                <div className="absolute top-[3.5px] left-[0px] rounded-[0.17px] bg-white w-[1.7px] h-0.5" />
                <div className="absolute top-[2.5px] left-[2.3px] rounded-[0.17px] bg-white w-[1.7px] h-[3px]" />
                <div className="absolute top-[1.3px] left-[4.9px] rounded-[0.17px] bg-white w-[1.7px] h-[4.2px]" />
                <div className="absolute top-[0px] left-[7.2px] rounded-[0.17px] bg-white w-[1.7px] h-[5.5px]" />
              </div>
              <img
                className="h-[6.1px] w-[8.6px] relative hidden"
                alt=""
                src="/frame-427319316.svg"
              />
              <div className="h-[1.2px] w-[27.3px] relative rounded-[16.56px] bg-gray-400 hidden" />
              <div className="h-[1.5px] w-[0.7px] relative rounded-tl-none rounded-tr-[1.51px] rounded-br-[1.51px] rounded-bl-none bg-gray-400 hidden" />
              <div className="h-[4.9px] w-[10.7px] relative overflow-hidden shrink-0 hidden">
                <div className="absolute top-[-0.5px] left-[-0.5px] rounded-[0.84px] box-border w-full h-full opacity-[0.6] border-[0.5px] border-solid border-white" />
                <div className="absolute top-[0.3px] left-[0.3px] rounded-[0.67px] bg-gray-500 w-2.5 h-[4.2px]" />
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start z-[2] text-secondary-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 rounded-[35.13px] flex flex-row items-start justify-start pt-[0.8px] px-0 pb-[0.9px] border-[0.8px] border-solid border-gray-200">
                    <div className="self-stretch flex-1 rounded-[34.29px] flex flex-row items-start justify-start pt-[0.2px] px-0 pb-0 z-[1] border-[2.2px] border-solid border-dimgray-200">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start relative z-[2]">
                        <div className="h-[434.9px] w-[calc(100%_-_5.3px)] absolute !m-[0] top-[2.9px] right-[2.3px] left-[3px] [filter:blur(0.33px)] rounded-[31.28px] box-border opacity-[0.8] border-[0.3px] border-solid border-dimgray-100" />
                        <div className="self-stretch flex-1 [filter:blur(0.5px)] rounded-[34.46px] flex flex-row items-end justify-start pt-0 px-0 pb-0 opacity-[0.9] z-[1] border-[0.8px] border-solid border-slategray">
                          <div className="ml-[-0.8px] self-stretch flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 relative shrink-0 z-[3]">
                            <div className="w-[2.7px] h-[3px] absolute !m-[0] top-[0px] right-[40.9px] bg-gray-600 mix-blend-screen" />
                            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[6.6px]">
                              <div className="flex flex-col items-start justify-start pt-[35.7px] px-0 pb-0">
                                <div className="w-[3px] h-[2.7px] relative bg-gray-600 mix-blend-screen" />
                              </div>
                              <div className="self-stretch flex-1 rounded-8xl-6 bg-primary-300 overflow-hidden flex flex-col items-end justify-start pt-[115px] pb-16 pr-[38px] pl-[34px] gap-[73px] z-[4] mq450:pt-[75px] mq450:pb-[42px] mq450:box-border">
                                <img
                                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                                  loading="lazy"
                                  alt=""
                                  src="/plan-de-travail-12-copie-1@2x.png"
                                />
                                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18px] pl-[21px]">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                                    <div className="self-stretch h-6 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg bg-gray-300 flex flex-row items-start justify-start py-1.5 px-6 box-border whitespace-nowrap">
                                      <div className="self-stretch flex-1 relative leading-[120%] font-medium">
                                        Sign Up
                                      </div>
                                    </div>
                                    <button className="cursor-pointer [border:none] py-1.5 px-[29px] bg-secondary-200 self-stretch h-6 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start box-border hover:bg-wheat">
                                      <div className="self-stretch flex-1 relative text-3xs leading-[120%] font-medium font-body text-gray-300 text-left">
                                        Login
                                      </div>
                                    </button>
                                    <div className="self-stretch h-2.5 flex flex-row items-start justify-start py-0 px-[9px] box-border text-5xs text-secondary-100">
                                      <div className="self-stretch flex-1 relative leading-[120%] font-medium">
                                        Forgot Password?
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[35.7px] px-0 pb-0">
                                <div className="w-[3px] h-[2.7px] relative bg-gray-600 mix-blend-screen" />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mt-[-37.7px]">
                              <div className="h-[47.1px] w-[46.7px] relative">
                                <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[3px] h-[2.7px] mix-blend-screen" />
                                <div className="absolute top-[44.1px] left-[44px] bg-gray-600 w-[2.7px] h-[3px] mix-blend-screen" />
                              </div>
                              <div className="h-[2.7px] w-[3px] relative bg-gray-600 mix-blend-screen" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[442px] flex-1 relative rounded-[35.13px] bg-black overflow-hidden min-w-[139px] z-[1] text-5xs text-secondary-100">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-[0.8px] pb-[0.9px] pr-0.5 pl-0 box-border w-full h-full">
              <div className="w-[212.4px] rounded-[34.29px] box-border flex flex-row items-start justify-start pt-0 px-0 pb-0 border-[2.2px] border-solid border-dimgray-200">
                <div className="ml-[-0.8px] flex-1 rounded-[35.13px] flex flex-row items-start justify-start shrink-0 z-[1] border-[0.8px] border-solid border-gray-200">
                  <div className="flex-1 [filter:blur(0.5px)] rounded-[34.46px] flex flex-row items-end justify-start pt-0 px-0 pb-0 relative opacity-[0.9] z-[2] border-[0.8px] border-solid border-slategray">
                    <div className="h-[434.9px] w-[calc(100%_-_5.3px)] absolute !m-[0] top-[2.8px] right-[2.3px] left-[3px] [filter:blur(0.33px)] rounded-[31.28px] box-border opacity-[0.8] z-[3] border-[0.3px] border-solid border-dimgray-100" />
                    <div className="ml-[-0.8px] flex-1 flex flex-col items-start justify-start gap-[346.9px] shrink-0 z-[5]">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[41.7px] shrink-0">
                        <div className="flex flex-row items-start justify-end py-0 px-10">
                          <div className="h-[3px] w-[2.7px] relative bg-gray-600 mix-blend-screen" />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                          <div className="h-[2.7px] w-[3px] relative bg-gray-600 mix-blend-screen" />
                          <div className="h-[2.7px] w-[3px] relative bg-gray-600 mix-blend-screen" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px]">
                        <div className="h-[47.2px] w-[46.7px] relative">
                          <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[3px] h-[2.7px] mix-blend-screen" />
                          <div className="absolute top-[44.2px] left-[44px] bg-gray-600 w-[2.7px] h-[3px] mix-blend-screen" />
                        </div>
                        <div className="h-[2.7px] w-[3px] relative bg-gray-600 mix-blend-screen" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_19px)] w-[calc(100%_-_19.1px)] top-[9px] right-[10.1px] bottom-[10px] left-[9px] rounded-8xl-6 bg-primary-300 overflow-hidden flex flex-col items-start justify-start pt-[6.9px] pb-16 pr-[15px] pl-[23px] box-border gap-[89px] z-[4]">
              <div className="self-stretch h-[19.1px]">
                <DateTimePicker
                  value={screenContentTwoValue}
                  onChange={(newValue: any) => {
                    setScreenContentTwoValue(newValue);
                  }}
                  sx={{
                    fieldset: {
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
                    "& input::placeholder": { textColor: "#fff", fontSize: 10 },
                    input: {
                      color: "#fff",
                      fontSize: 10,
                      textAlign: "left",
                      fontWeight: "400",
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
                      color: "error",
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
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18px] pl-[21px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <button className="cursor-pointer [border:none] py-1.5 px-6 bg-gray-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
                        <div className="relative text-3xs leading-[120%] font-medium font-body text-secondary-200 text-left inline-block min-w-[36px]">
                          Sign Up
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] py-1.5 px-[29px] bg-secondary-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start hover:bg-wheat">
                        <div className="relative text-3xs leading-[120%] font-medium font-body text-gray-300 text-left inline-block min-w-[26px]">
                          Login
                        </div>
                      </button>
                      <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                        <div className="relative leading-[10px] font-medium inline-block min-w-[66px]">
                          Forgot Password?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[457px] flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_503px)] shrink-0 text-center text-29xl text-primary-300 mq750:hidden mq1025:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full z-[1] mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
             <p className="m-0">{t('MobileAdBanner.Run Your Business')}</p>
             <p className="m-0">{t('MobileAdBanner.On The Go')}</p>
            </h1>
         </div>
         <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-5xl text-gray-300 mq450:gap-[16px]">
          <div className="self-stretch relative leading-[120%] font-medium z-[1] mq450:text-lgi mq450:leading-[23px]">
           <p className="m-0">{t('MobileAdBanner.Try our app for free in')}</p>
           <p className="m-0">{t('MobileAdBanner.any app store')}</p>
         </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
         <h1 className="w-full relative text-[3rem] leading-[120%] inline-block font-lato text-center" style={{ color: '#373736' }}>
          {t('MobileAdBanner.Coming')}
         </h1>
       </div>

        </div>
      </section>
    </LocalizationProvider>
  );
};

export default MobileAdBanner;

{/* Download buttons replaced by coming soon  
<div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
<div className="w-[147px] flex flex-col items-start justify-start gap-[16px] z-[1]">
  <img
    className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
    loading="lazy"
    alt=""
    src="/apple-button-contents.svg"
  />
  <img
    className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
    loading="lazy"
    alt=""
    src="/google-button-contents.svg"
  />
</div>
</div>
*/}