import React from "react"
const SourceTruth = () => {

  return (
    <>
      <div className="mx-auto container xl:w-[699px] lg:w-[546px] md:w-[552px] w-[343px] flex flex-col justify-center  md:mt-32 mt-[72px]">
        <h1 className="montserrat-medium font-semibold xl:text-[36px] xl:leading-[36px]  md:text-3xl md:leading-[30px] text-2xl leading-6 tracking-tight text-center text-white">
          A Single Source of Truth
        </h1>
        <p className="md:mt-4 mt-3 avenir font-[350] xl:leading-[25.6px]  md:text-base text-sm leading-[21px] text-center text-neutral-400">
          Wove aggregates information scattered across all of your tools into once central source of truth. Save hours switching between apps, and never forget to follow up again.
        </p>
      </div>

      <div className="mx-auto container flex xl:justify-between justify-center items-center xl:mt-14 md:mt-[48px] mt-[35px] xl:px-6 lg:px-3 md:px-0 px-[4px] overflow-hidden">

        <div className="xl:mt-0 md:-mt-28 -mt-24" role="img" aria-label="google drive logo"><img src="./images/Group 5482.svg" className="xl:w-[187.6px] xl:h-[360.53px] w-[82.96px] h-[188.98px]" alt="" /></div>

        <div className="xl:w-[624px] lg:w-[571px] md:w-[533.27px] w-full relative">
          <div className="flex items-center justify-between relative z-20">
            <div role="img" aria-label="Figma logo" className="bg-neutral-900 flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full">
              <img src="./images/figma.svg" alt="" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
            </div>
            <div role="img" aria-label="Notion logo" className="bg-neutral-900 flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full">
              <img src="./images/notion.svg" alt="notion" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
            </div>
          </div>
          <div className="flex items-center justify-between lg:mt-[188px] md:mt-[160.84px] mt-[95px] relative z-20">
            <div role="img" aria-label="sheets logo" className="bg-neutral-900 flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full">
              <img src="./images/Sheets.svg" alt="" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
            </div>
            <div role="img" aria-label="github logo" className="bg-neutral-900 flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full">
              <img src="./images/github.svg" alt="" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 relative z-20">
            <div role="img" aria-label="muralco logo" className="bg-neutral-900 flex flex-col items-center justify-center xl:w-[107.55px] xl:h-[107.55px] lg:w-[98.41px] lg:h-[98.41px] md:w-[91.91px] md:h-[91.91px] w-[44.28px] h-[44.28px] rounded-full">
              <img src="./images/GroupCard.svg" alt="muralco" className="xl:w-[44.81px] xl:h-[44.81px] lg:w-[41.01px] lg:h-[41.01px] md:w-[38.3px] md:h-[38.3px] w-[18.45px] h-[18.45px]" />
            </div>
          </div>

          <img className={`absolute  transition-all duration-1000 ease-in-out z-0 w-full inset-0 lg:-mt-10 md:mt-3 -mt-6`} src="./images/backgroundImage.png" alt="background" />

          <div className="absolute  inset-0 lg:px-[120px] md:px-[70px] px-[60px] flex flex-col items-center justify-center lg:-mt-12 md:-mt-8 -mt-10">
            <div role="img" aria-label="Two arrows coming from figma and notion logos and pointing towards center wove logo" className="flex items-center justify-between w-full ">
              <svg className="bounce-digonal md:w-auto w-[43.27px]" width={92} height={60} viewBox="0 0 92 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M90.707 56.5051C91.0078 56.4328 91.193 56.1304 91.1207 55.8296L89.9428 50.9279C89.8705 50.6271 89.5681 50.4418 89.2673 50.5141C88.9665 50.5864 88.7812 50.8888 88.8535 51.1896L89.9006 55.5467L85.5435 56.5938C85.2427 56.6661 85.0574 56.9685 85.1297 57.2693C85.202 57.5701 85.5045 57.7553 85.8053 57.6831L90.707 56.5051ZM0.660555 1.54407L11.7251 8.32112L12.3103 7.36579L1.24569 0.588741L0.660555 1.54407ZM19.4703 13.0651L41.5994 26.6191L42.1846 25.6638L20.0555 12.1097L19.4703 13.0651ZM49.3446 31.3631L71.4738 44.9172L72.0589 43.9618L49.9298 30.4078L49.3446 31.3631ZM79.219 49.6611L90.2835 56.4382L90.8687 55.4828L79.8041 48.7058L79.219 49.6611ZM90.8379 57.0498C91.4395 56.9052 91.81 56.3003 91.6654 55.6987L89.3095 45.8952C89.1649 45.2936 88.5601 44.9232 87.9585 45.0677C87.3569 45.2123 86.9864 45.8172 87.131 46.4188L89.2251 55.133L80.5109 57.2271C79.9093 57.3717 79.5388 57.9765 79.6833 58.5781C79.8279 59.1797 80.4328 59.5502 81.0344 59.4056L90.8379 57.0498ZM0.367985 2.02174L11.4326 8.79878L12.6028 6.88812L1.53826 0.111076L0.367985 2.02174ZM19.1777 13.5427L41.3069 27.0968L42.4772 25.1861L20.348 11.6321L19.1777 13.5427ZM49.0521 31.8407L71.1812 45.3948L72.3515 43.4842L50.2224 29.9301L49.0521 31.8407ZM78.9264 50.1388L89.991 56.9158L91.1612 55.0052L80.0967 48.2281L78.9264 50.1388Z" fill="#E5E5E5" />
              </svg>
              <svg className="bounce-digonal-left md:w-auto w-[43.27px]" width={96} height={60} viewBox="0 0 96 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.641289 55.8179C0.562559 56.1171 0.741264 56.4234 1.04044 56.5022L5.91574 57.7852C6.21491 57.8639 6.52127 57.6852 6.6 57.386C6.67873 57.0868 6.50002 56.7805 6.20085 56.7018L1.86724 55.5613L3.00767 51.2277C3.0864 50.9286 2.90769 50.6222 2.60852 50.5435C2.30935 50.4647 2.00299 50.6434 1.92426 50.9426L0.641289 55.8179ZM95.0049 0.582566L86.2915 5.66535L86.856 6.63303L95.5693 1.55025L95.0049 0.582566ZM80.1922 9.2233L62.7655 19.3889L63.33 20.3565L80.7567 10.191L80.1922 9.2233ZM56.6662 22.9468L39.2395 33.1124L39.8039 34.0801L57.2306 23.9145L56.6662 22.9468ZM33.1401 36.6703L15.7134 46.8359L16.2779 47.8036L33.7046 37.638L33.1401 36.6703ZM9.6141 50.3938L0.900749 55.4766L1.46523 56.4443L10.1786 51.3615L9.6141 50.3938ZM0.0995898 55.6754C-0.0578702 56.2737 0.299539 56.8864 0.897885 57.0439L10.6485 59.6098C11.2468 59.7673 11.8595 59.4099 12.017 58.8115C12.1745 58.2132 11.817 57.6005 11.2187 57.443L2.5515 55.1622L4.83234 46.495C4.9898 45.8966 4.63239 45.2839 4.03404 45.1265C3.4357 44.969 2.823 45.3264 2.66554 45.9248L0.0995898 55.6754ZM94.7226 0.0987258L86.0093 5.18151L87.1382 7.11687L95.8516 2.03409L94.7226 0.0987258ZM79.9099 8.73946L62.4833 18.905L63.6122 20.8404L81.0389 10.6748L79.9099 8.73946ZM56.3839 22.463L38.9572 32.6285L40.0862 34.5639L57.5129 24.3983L56.3839 22.463ZM32.8579 36.1865L15.4312 46.3521L16.5602 48.2874L33.9868 38.1219L32.8579 36.1865ZM9.33186 49.91L0.618509 54.9928L1.74747 56.9282L10.4608 51.8454L9.33186 49.91Z" fill="#E5E5E5" />
              </svg>
            </div>
            <div className="absolute lg:-mt-14 md:-mt-16 -mt-6">
              <div className="xl:w-[177px] xl:h-[177px] lg:w-[162px] lg:h-[162px] md:w-[151px] md:h-[151px] w-[73px] h-[73px] rounded-full border-[3.36086px] border-neutral-900 flex flex-col items-center justify-center md:p-3.5 p-1">
                <div role="img" aria-label="Wove logo" className="w-full h-full rounded-full flex flex-col items-center justify-center bg-neutral-900">
                  <img className="xl:w-[58.23px] lg:w-[53.28px] md:w-[49.76px] w-[23.98px]" alt="logo" src="./images/wove.svg" />
                </div>
              </div>
            </div>
            <div role="img" aria-label="Two arrows coming from excel sheet and github logos and pointing towards center wove logo" className="flex items-center justify-between w-full lg:mt-[130px] md:mt-[101.48px] mt-[36.89px]">
              <svg className="bounce-digonal-bottom md:w-auto w-[43.27px]" width={93} height={39} viewBox="0 0 93 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M92.08 5.956C92.2153 5.67779 92.0994 5.34259 91.8212 5.20731L87.2875 3.00283C87.0093 2.86755 86.674 2.98342 86.5388 3.26163C86.4035 3.53985 86.5194 3.87505 86.7976 4.01033L90.8276 5.96987L88.868 9.99987C88.7328 10.2781 88.8486 10.6133 89.1268 10.7486C89.4051 10.8838 89.7403 10.768 89.8755 10.4898L92.08 5.956ZM1.01601 37.6085L12.2189 33.7359L11.8529 32.6771L0.650003 36.5497L1.01601 37.6085ZM20.0609 31.0251L42.4666 23.2799L42.1006 22.2211L19.6949 29.9663L20.0609 31.0251ZM50.3086 20.5691L72.7144 12.8239L72.3484 11.7651L49.9426 19.5103L50.3086 20.5691ZM80.5564 10.1131L91.7593 6.24047L91.3933 5.18165L80.1904 9.05425L80.5564 10.1131ZM92.5838 6.20095C92.8543 5.64452 92.6226 4.97412 92.0662 4.70356L82.9987 0.294594C82.4422 0.0240376 81.7718 0.255782 81.5013 0.812206C81.2307 1.36863 81.4625 2.03904 82.0189 2.30959L90.0789 6.22867L86.1598 14.2887C85.8892 14.8451 86.121 15.5155 86.6774 15.7861C87.2338 16.0566 87.9042 15.8249 88.1748 15.2684L92.5838 6.20095ZM1.19902 38.1379L12.4019 34.2653L11.6699 32.1477L0.466999 36.0203L1.19902 38.1379ZM20.2439 31.5545L42.6496 23.8093L41.9176 21.6917L19.5119 29.4369L20.2439 31.5545ZM50.4917 21.0985L72.8974 13.3533L72.1654 11.2357L49.7596 18.9809L50.4917 21.0985ZM80.7394 10.6425L91.9423 6.76987L91.2103 4.65225L80.0074 8.52485L80.7394 10.6425Z" fill="#E5E5E5" />
              </svg>
              <svg className="bounce-digonal-bottom-left md:w-auto w-[43.27px]" width={91} height={39} viewBox="0 0 91 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.941849 5.20542C0.662589 5.33852 0.544108 5.67281 0.677213 5.95207L2.84628 10.5029C2.97939 10.7821 3.31368 10.9006 3.59294 10.7675C3.8722 10.6344 3.99068 10.3001 3.85757 10.0208L1.92951 5.97569L5.97466 4.04763C6.25392 3.91453 6.3724 3.58024 6.2393 3.30098C6.10619 3.02172 5.7719 2.90324 5.49264 3.03634L0.941849 5.20542ZM89.8727 36.5511L78.9464 32.6785L78.5722 33.7345L89.4984 37.6071L89.8727 36.5511ZM71.298 29.9677L49.4455 22.2225L49.0713 23.2785L70.9238 31.0236L71.298 29.9677ZM41.7971 19.5117L19.9446 11.7665L19.5704 12.8224L41.4229 20.5676L41.7971 19.5117ZM12.2962 9.05569L1.36998 5.1831L0.99573 6.23902L11.922 10.1116L12.2962 9.05569ZM0.700843 4.69977C0.142323 4.96598 -0.0946405 5.63456 0.17157 6.19308L4.50971 15.2947C4.77592 15.8532 5.4445 16.0902 6.00301 15.8239C6.56153 15.5577 6.79849 14.8892 6.53228 14.3306L2.67616 6.24033L10.7665 2.3842C11.325 2.11799 11.5619 1.44942 11.2957 0.890899C11.0295 0.332382 10.361 0.0954179 9.80244 0.361628L0.700843 4.69977ZM90.0598 36.0232L79.1335 32.1506L78.385 34.2624L89.3113 38.135L90.0598 36.0232ZM71.4852 29.4398L49.6326 21.6946L48.8841 23.8064L70.7367 31.5516L71.4852 29.4398ZM41.9843 18.9837L20.1317 11.2386L19.3832 13.3504L41.2358 21.0956L41.9843 18.9837ZM12.4834 8.52773L1.55711 4.65513L0.808604 6.76698L11.7349 10.6396L12.4834 8.52773Z" fill="#E5E5E5" />
              </svg>
            </div>
            <div role="img" aria-label="arrow coming from muralco logo and pointing towards center wove logo" className="flex items-center justify-center">
              <svg className="bounce-digonal-bottom-left md:h-auto h-[43.27px]" width={17} height={84} viewBox="0 0 17 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.95663 0.968451C8.73788 0.749701 8.38322 0.749701 8.16447 0.968451L4.59973 4.53318C4.38098 4.75193 4.38098 5.1066 4.59973 5.32535C4.81848 5.5441 5.17315 5.5441 5.3919 5.32535L8.56055 2.1567L11.7292 5.32535C11.9479 5.5441 12.3026 5.5441 12.5214 5.32535C12.7401 5.1066 12.7401 4.75193 12.5214 4.53318L8.95663 0.968451ZM9.12069 83.1455V73.0491H8.0004V83.1455H9.12069ZM9.12069 65.9816V45.7888H8.0004V65.9816H9.12069ZM9.12069 38.7213V18.5284H8.0004V38.7213H9.12069ZM9.12069 11.461L9.12069 1.36453H8.0004L8.0004 11.461H9.12069ZM9.35271 0.57237C8.91521 0.13487 8.20588 0.13487 7.76838 0.57237L0.63892 7.70183C0.201421 8.13933 0.201421 8.84866 0.63892 9.28616C1.07642 9.72366 1.78575 9.72366 2.22325 9.28616L8.56055 2.94886L14.8978 9.28616C15.3353 9.72366 16.0447 9.72366 16.4822 9.28616C16.9197 8.84866 16.9197 8.13933 16.4822 7.70183L9.35271 0.57237ZM9.68083 83.1455V73.0491H7.44026L7.44026 83.1455H9.68083ZM9.68083 65.9816V45.7888H7.44026L7.44026 65.9816H9.68083ZM9.68083 38.7213V18.5284H7.44026L7.44026 38.7213H9.68083ZM9.68083 11.461L9.68083 1.36453H7.44026L7.44026 11.461H9.68083Z" fill="#E5E5E5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="xl:mt-0 md:-mt-28 -mt-24" role="img" aria-label="Hubspot,kayako and trello logos"><img src="./images/Group 5483.svg" className="xl:w-[187.6px] xl:h-[360.53px] w-[82.96px] h-[188.98px]" alt="discord" /></div>
      </div>
    </>
  )
}
export default SourceTruth