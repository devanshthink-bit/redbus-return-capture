const imgLogoGooglePay = "assets/a01a8bf4-3f5a-49d5-8bae-c08f1a7ff013.png";
const imgArtWallet = "assets/f78dbdd1-07f6-4431-aa6c-36db9c60a7f9.png";
const imgArtTrustRow = "assets/fea115d9-5c34-45eb-bbed-63381bff504a.png";
const imgIconChevronLeft = "assets/0d6c8dab-89f9-4b4a-8f9d-d5d21b5885e9.svg";
const imgLogo = "assets/1379ac68-350b-40d8-a546-6d01c8c37c49.png";
const imgLogo1 = "assets/6e249aae-3def-45a8-9c61-f3f3969248fa.png";
const imgLogo2 = "assets/3f70cf49-250e-4946-ad8e-eb0a81fac839.png";
const imgStatusIcons = "assets/1e03da95-976c-4ed3-9845-c82c42ecfb49.svg";

function LogoGooglePay({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="108:976" data-name="Logo / Google Pay">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGooglePay} />
    </div>
  );
}

function ArtWallet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[30px]"} data-node-id="108:974" data-name="Art / Wallet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtWallet} />
    </div>
  );
}

function ArtTrustRow({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48.67px] relative w-[371.67px]"} data-node-id="108:973" data-name="Art / Trust row">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtTrustRow} />
    </div>
  );
}

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function Component09Pay() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="109:973" data-name="09 · Pay">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="109:974" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="109:975" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I109:975;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I109:975;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="109:988" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I109:988;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-1/2 w-[246px]" data-node-id="I109:988;34:90" data-name="Titles">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="I109:988;34:91">
              Pay ₹2,919
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I109:988;56:226" data-name="Trailing slot">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col gap-[5px] items-center pb-[10px] pt-[8px] px-[14px] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I109:988;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] whitespace-nowrap" data-node-id="I109:988;53:196;108:981">
                07:55
              </p>
              <div className="bg-[var(--border\/divider,#e6e6e6)] h-[2.5px] relative rounded-[2px] shrink-0 w-[42px]" data-node-id="I109:988;53:196;108:982" data-name="Track">
                <div className="absolute bg-[var(--text\/warning,#a45729)] h-[2.5px] left-0 rounded-[2px] top-0 w-[4px]" data-node-id="I109:988;53:196;108:983" data-name="Elapsed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full" data-node-id="109:998" data-name="Review booking">
        <div className="[word-break:break-word] content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="109:999" data-name="Heading row">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="109:1000" data-name="Heading">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="109:1001">
              Review booking
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)]" data-node-id="109:1002">
              1 Passenger
            </p>
          </div>
          <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)]" data-node-id="109:1003">
            View details
          </p>
        </div>
        <div className="h-[16px] relative shrink-0 w-full" data-node-id="109:1004" data-name="gap" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="109:1005" data-name="Delhi → Nainital">
          <p className="font-['Inter:Regular'] font-normal relative shrink-0" data-node-id="109:1006">
            Delhi → Nainital
          </p>
          <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="109:1007">
            Thu, 10 Sep · 23:55
          </p>
        </div>
        <div className="h-[10px] relative shrink-0 w-full" data-node-id="109:1008" data-name="gap" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="109:1009" data-name="Nainital → Delhi">
          <p className="font-['Inter:Regular'] font-normal relative shrink-0" data-node-id="109:1010">
            Nainital → Delhi
          </p>
          <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="109:1011">
            Mon, 14 Sep · 23:55
          </p>
        </div>
        <div className="h-[14px] relative shrink-0 w-full" data-node-id="109:1012" data-name="gap" />
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="109:1013" data-name="Info chips">
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="109:1014" data-name="Chip / Trip info">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="109:1015">
              Trip info
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="109:1016" data-name="Chip / Cancellation policy">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="109:1017">
              Cancellation policy
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="109:1018" data-name="Chip / Passengers">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="109:1019">
              Passengers
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="109:1020" data-name="Payment">
        <ArtTrustRow className="h-[46.88px] relative shrink-0 w-[358px]" />
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="109:1022" data-name="redBus wallet">
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="109:1023" data-name="Row">
            <ArtWallet className="relative shrink-0 size-[30px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="109:1025" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="109:1026">
                redBus wallet
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] whitespace-pre" data-node-id="109:1027">
                <span className="leading-[22px]">{`Use ₹100.00  `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] text-[#0000e4] underline">Details</span>
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--border\/default,#b0b0b0)] border-solid relative rounded-[var(--radius\/full,999px)] shrink-0 size-[24px]" data-node-id="109:1028" data-name="Radio" />
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="109:1029" data-name="UPI">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="109:1030">
            UPI
          </p>
          <div className="h-[6px] relative shrink-0 w-full" data-node-id="109:1031" data-name="gap" />
          <a className="content-stretch cursor-pointer flex gap-[16px] items-center py-[14px] relative shrink-0 w-full" data-node-id="109:1032" data-name="Row / Payment method">
            <LogoGooglePay className="relative shrink-0 size-[32px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left" data-node-id="I109:1032;108:987">
              Google Pay
            </p>
            <div className="border-[1.5px] border-[var(--border\/default,#b0b0b0)] border-solid relative rounded-[var(--radius\/full,999px)] shrink-0 size-[24px]" data-node-id="I109:1032;108:988" data-name="Radio" />
          </a>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="109:1036" data-name="Divider" />
          <div className="content-stretch flex gap-[16px] items-center py-[14px] relative shrink-0 w-full" data-node-id="109:1037" data-name="Row / Payment method">
            <div className="relative shrink-0 size-[32px]" data-node-id="I109:1037;108:986" data-name="Logo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I109:1037;108:987">
              PhonePe
            </p>
            <div className="border-[1.5px] border-[var(--border\/default,#b0b0b0)] border-solid relative rounded-[var(--radius\/full,999px)] shrink-0 size-[24px]" data-node-id="I109:1037;108:988" data-name="Radio" />
          </div>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="109:1041" data-name="Divider" />
          <div className="content-stretch flex gap-[16px] items-center py-[14px] relative shrink-0 w-full" data-node-id="109:1042" data-name="Row / Payment method">
            <div className="relative shrink-0 size-[32px]" data-node-id="I109:1042;108:986" data-name="Logo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I109:1042;108:987">
              Paytm UPI
            </p>
            <div className="border-[1.5px] border-[var(--border\/default,#b0b0b0)] border-solid relative rounded-[var(--radius\/full,999px)] shrink-0 size-[24px]" data-node-id="I109:1042;108:988" data-name="Radio" />
          </div>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="109:1046" data-name="Divider" />
          <div className="content-stretch flex gap-[16px] items-center py-[14px] relative shrink-0 w-full" data-node-id="109:1047" data-name="Row / Payment method">
            <div className="relative shrink-0 size-[32px]" data-node-id="I109:1047;108:986" data-name="Logo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo2} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I109:1047;108:987">
              CRED UPI
            </p>
            <div className="border-[1.5px] border-[var(--border\/default,#b0b0b0)] border-solid relative rounded-[var(--radius\/full,999px)] shrink-0 size-[24px]" data-node-id="I109:1047;108:988" data-name="Radio" />
          </div>
        </div>
      </div>
    </div>
  );
}
