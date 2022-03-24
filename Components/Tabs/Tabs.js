import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>

      <div className=" mx-auto container md:flex justify-between items-center hidden  lg:mt-28 mb-20  space-x-12">
        <div className=" md:mx-0 lg:mx-10">
          <ul
            className="flex flex-row mb-5 xl:ml-56"
            role="tablist"
          >
            <li className=" flex-auto flex flex-col justify-center items-center ">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[#FFFFFF] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5 font-medium montserrat-medium"
                    : "text-[#A1A1AA] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5  font-normal montserrat-medium")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}

                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Your Hub for Work
                {openTab === 1
                  ? <div className="bg-[#C4C4C4]  h-[0.1px] md:w-[190px] xl:max-w-[187px] lg:max-w-[187px] mt-3">
                  </div>
                  : ""
                }
              </a>
            </li>

            <li className="flex-auto">
              <a
                className={
                  "text-xs font-bold uppercase  py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-[#FFFFFF] xl:max-w-[249px] lg:max-w-[249px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5 font-medium montserrat-medium"
                    : "text-[#A1A1AA] xl:max-w-[249px] lg:max-w-[249px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5  font-normal montserrat-medium")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Interactive Meeetings
                {openTab === 2
                  ? <div className="bg-[#C4C4C4]  h-[0.1px] md:w-[190px] xl:max-w-[249px] lg:max-w-[249px] mt-3">
                  </div>
                  : ""
                }
              </a>

            </li>

            <li className="flex-auto xl:-ml-48 lg:-ml-48">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-[#FFFFFF] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5 font-medium montserrat-medium"
                    : "text-[#A1A1AA] xl:max-w-[187px] lg:max-w-[187px] xl:text-base lg:text-base  md:text-base md:leading-4  lg:leading-5  font-normal montserrat-medium")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                The Meta-Layer
                {openTab === 3
                  ? <div className="bg-[#C4C4C4]  h-[0.1px] md:w-[190px] xl:max-w-[145px] lg:max-w-[145px] mt-3">
                  </div>
                  : ""
                }
              </a>
            </li>
          </ul>

          <div className="bg-bgtab w-full">
            <div className="mx-auto container relative flex flex-col break-words shadow-lg rounded">
              <div>
                <p className="text-[#FFFFFF] flex justify-center items-center text-base avenir font-normal leading-5 ">Visibility into all of your project&apos;s moving pieces. Minus the noise and distractions.</p>
              </div>

              <div className="flex justify-center">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="  box-border rounded-[16px]  ">
                      <img className="xl:mt-[38.48px] lg:mt-[-67.52px] md:mt-[-146.52px] h-[778px]" src="./images/Frame 174.svg" />
                    </div>
                  </div>

                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className=" box-border rounded-[16px]  ">
                      <img className="xl:mt-[38.48px] lg:mt-[-67.52px] md:mt-[-146.52px] h-[778px]" src="./images/Frame 174.svg" />
                    </div>
                  </div>

                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className=" box-border rounded-[16px] h-[778px] ">
                      <img className="xl:mt-[38.48px] lg:mt-[-67.52px] md:mt-[-146.52px]" src="./images/Frame 174.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Onnly Show */}
      <div className="  block md:hidden ">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className='text-[#FFFFFF] text-xl text-center font-semibold font-[montserrat-medium] not-italic  leading-6  max-w-[222px] mb-4'>
              Your Hub for Work
            </p>
          </div>
          <div >
            <p className='text-[#A3A3A3] text-sm text-center font-[350] font-[avenir] not-italic  leading-[18px]  max-w-[270px] '>Visibility into all of your project&apos;s moving pieces. No noise or distractions.</p>
          </div>
          <div>
            <img className=" w-[322px] h-[216px]" src="./images/Frame 174.svg" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <div>
            <p className='text-[#FFFFFF] text-xl text-center font-semibold font-[montserrat-medium] not-italic  leading-6  max-w-[222px] mb-4'>
              Interactive Meeetings
            </p>
          </div>
          <div >
            <p className='text-[#A3A3A3] text-sm text-center font-[350] font-[avenir] not-italic  leading-[18px]  max-w-[270px] '>Visibility into all of your project&apos;s moving pieces. No noise or distractions.</p>
          </div>
          <div>
            <img className="w-[322px] h-[216px]" src="./images/MeetingScreen.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;