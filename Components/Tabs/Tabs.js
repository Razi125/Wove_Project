import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className=" mx-auto container flex flex-wrap hidden md:block  lg:mt-28 mb-20 ">
        <div className="w-full md:mx-0 lg:mx-10">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[#FFFFFF] flex flex-col justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5 font-medium  font-[montserrat-medium]"
                    : "text-[#A1A1AA] flex justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5  font-normal font-[montserrat-medium]")
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
                  ? <div className="bg-[#C4C4C4]  h-[1.64px] md:w-[190px] lg:w-[230px] mt-5">
                  </div>
                  : ""
                }
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-[#FFFFFF] flex flex-col justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5 font-medium  font-[montserrat-medium]"
                    : "text-[#A1A1AA] flex justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5 font-normal  font-[montserrat-medium]")
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
                  ? <div className="bg-[#C4C4C4]  h-[1.64px] md:w-[190px] lg:w-[230px] mt-5">
                  </div>
                  : ""
                }
              </a>

            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-[#FFFFFF] flex flex-col justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5 font-medium font-[montserrat-medium]"
                    : "text-[#A1A1AA] flex justify-center items-center md:text-base md:leading-4 lg:text-xl lg:leading-5 font-normal  font-[montserrat-medium]")
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
                  ? <div className="bg-[#C4C4C4]  h-[1.64px] md:w-[190px] lg:w-[230px] mt-5">
                  </div>
                  : ""
                }
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col bg-bgtab min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div>
              <p className="text-[#FFFFFF] flex  justify-center items-center text-base font-[avenir] font-normal mt-10 leading-5 ">Visibility into all of your project's moving pieces. Minus the noise and distractions.</p>
            </div>
            <div className="px-4 py-2   mb-16 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" max-auto container w-full flex justify-center  items-center  box-border rounded-[16px]  ">
                    <img className="w-full h-[57rem]" src="./images/Frame 174.svg" />
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className=" max-auto container w-full flex justify-center  items-center  box-border rounded-[16px]  ">
                    <img className="w-full h-[57rem]" src="./images/Frame 174.svg" />
                  </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className=" max-auto container w-full flex justify-center  items-center  box-border rounded-[16px]  ">
                    <img className="w-full h-[57rem]" src="./images/Frame 174.svg" />
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
            <p className='text-[#A3A3A3] text-sm text-center font-[350] font-[avenir] not-italic  leading-[18px]  max-w-[270px] '>Visibility into all of your project's moving pieces. No noise or distractions.</p>
          </div>
          <div>
          <img className="w-[322px] h-[216px]" src="./images/Frame 174.svg" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <div>
            <p className='text-[#FFFFFF] text-xl text-center font-semibold font-[montserrat-medium] not-italic  leading-6  max-w-[222px] mb-4'>
            Interactive Meeetings
            </p>
          </div>
          <div >
            <p className='text-[#A3A3A3] text-sm text-center font-[350] font-[avenir] not-italic  leading-[18px]  max-w-[270px] '>Visibility into all of your project's moving pieces. No noise or distractions.</p>
          </div>
          <div>
          <img className="w-[322px] h-[216px]" src="./images/002MeetingScreen.svg" />
          </div>
        </div>


      </div>

    </>
  );
};

export default Tabs;