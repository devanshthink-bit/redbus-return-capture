const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgArtCoverPerson = "assets/72967248-2e1c-400f-80ee-fe053281efb7.png";
const imgArtCoverHospital = "assets/23c4ba8d-644c-4bc3-aca4-7b8baa86db6a.png";
const imgArtCoverLuggage = "assets/3d6859c2-c952-47f7-bcc3-43c19169e86d.png";
const imgLogoAcko = "assets/df7717f2-98d0-479b-9f06-ff1a14a74588.png";
const imgIconWalletCard = "assets/b186c55c-0e97-4e28-a0d1-693c1fed4aa5.png";
const imgIconBank = "assets/078a1a5a-f93d-4d09-ae91-1a1fbaf0db7b.png";
const imgArtShieldTripGuarantee = "assets/5161d008-0c65-4d54-b9d7-a0217205f01e.png";
const imgIconHourglass = "assets/e138f8f0-40ec-4703-bdc6-eb2b6e0e7076.svg";
const imgArtShieldFreeCancellation = "assets/65478840-285f-4467-9ec1-59835f0e3be3.png";
const imgIconAddPassenger = "assets/f0619e74-5450-4cdb-87f0-cfb124707f41.png";
const imgLogoWhatsApp = "assets/18ed33f2-f102-4b20-a862-8d34f5eba577.png";
const imgIconPin = "assets/3777b767-7f58-4fa3-a838-08fbbf558faf.png";
const imgIconPhoneFilled = "assets/b7a189dc-cfdc-461b-8d25-8e90c4118b02.png";
const imgIconMail = "assets/44c449a8-5085-4dd3-8cd1-f726443b14a3.png";
const imgIconSeat = "assets/c57a0be4-5309-4ee6-8c4f-ba764ff18038.png";
const imgArtPrimoOnNavy = "assets/fa5d30e0-7fdf-4efa-a4d8-a3f163de5175.png";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgAvatar = "assets/88739341-fbd3-4bc2-bc34-65ecb2911285.svg";
const imgRadio = "assets/f410a566-6990-4296-9328-11bace6bed32.svg";

function IconSearch({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="13:15" data-name="Icon / Search">
      <div className="absolute left-0 size-[20px] top-0" data-node-id="13:16" data-name="glyph">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
      </div>
    </div>
  );
}

type ButtonPrimaryProps = {
  className?: string;
  label?: string;
  showIcon?: boolean;
};

function ButtonPrimary({ className, label = "Search buses", showIcon = true }: ButtonPrimaryProps) {
  return (
    <div className={className || "bg-[var(--surface\\/accent,#c54646)] content-stretch flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] w-[358px]"} data-node-id="18:54" data-name="Button / Primary">
      {showIcon && <IconSearch className="relative shrink-0 size-[20px]" />}
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="18:53">
        {label}
      </p>
    </div>
  );
}

function ArtCoverPerson({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[26px]"} data-node-id="715:4164" data-name="Art / Cover · Person">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverPerson} />
    </div>
  );
}

function ArtCoverHospital({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[26px]"} data-node-id="715:4163" data-name="Art / Cover · Hospital">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverHospital} />
    </div>
  );
}

function ArtCoverLuggage({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[26px]"} data-node-id="715:4162" data-name="Art / Cover · Luggage">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverLuggage} />
    </div>
  );
}

function LogoAcko({ className }: { className?: string }) {
  return (
    <div className={className || "h-[18px] overflow-clip relative w-[62px]"} data-node-id="715:4161" data-name="Logo / ACKO">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoAcko} />
    </div>
  );
}

function IconWalletCard({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] overflow-clip relative w-[22px]"} data-node-id="715:4167" data-name="Icon / Wallet card">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconWalletCard} />
    </div>
  );
}

function IconBank({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] overflow-clip relative w-[22px]"} data-node-id="715:4166" data-name="Icon / Bank">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconBank} />
    </div>
  );
}

function ArtShieldTripGuarantee({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[32px]"} data-node-id="715:4160" data-name="Art / Shield · Trip Guarantee">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldTripGuarantee} />
    </div>
  );
}

function IconHourglass({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:92" data-name="Icon / Hourglass">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHourglass} />
    </div>
  );
}

function ArtShieldFreeCancellation({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[32px]"} data-node-id="715:4159" data-name="Art / Shield · Free Cancellation">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
    </div>
  );
}

function IconAddPassenger({ className }: { className?: string }) {
  return (
    <div className={className || "h-[20px] overflow-clip relative w-[22px]"} data-node-id="715:4158" data-name="Icon / Add passenger">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconAddPassenger} />
    </div>
  );
}

function LogoWhatsApp({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="715:4157" data-name="Logo / WhatsApp">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoWhatsApp} />
    </div>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="715:4156" data-name="Icon / Pin">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconPin} />
    </div>
  );
}

function IconPhoneFilled({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="715:4155" data-name="Icon / Phone filled">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconPhoneFilled} />
    </div>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-node-id="715:4154" data-name="Icon / Mail">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconMail} />
    </div>
  );
}

function IconSeat({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[18px]"} data-node-id="715:4165" data-name="Icon / Seat">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconSeat} />
    </div>
  );
}

function ArtPrimoOnNavy({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.2px] relative w-[60px]"} data-node-id="224:1872" data-name="Art / Primo · on navy">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPrimoOnNavy} />
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

export default function Component08ReviewYourTrip() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="212:2026" data-name="08 · Review your trip">
      <div className="bg-[#f5f5fa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="212:2027" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="212:2028" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I212:2028;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I212:2028;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="212:2041" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I212:2041;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I212:2041;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I212:2041;34:91">
              Passenger Information
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I212:2041;34:92">
              Delhi → Nainital
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I212:2041;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="bg-[#1b3874] content-stretch flex gap-[12px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="212:2051" data-name="Primo banner">
        <ArtPrimoOnNavy className="h-[32.2px] relative shrink-0 w-[60px]" />
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-px items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="212:2053" data-name="Text">
          <p className="leading-[20px] relative shrink-0 text-[14px] text-white" data-node-id="212:2054">
            On Time · Friendly Staff · Top Rated
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#f0c24b] text-[13px]" data-node-id="212:2055">
            Rising Stars on redBus
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="212:2056">
          ✕
        </p>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="212:2057" data-name="Journey">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="212:2058" data-name="Operator">
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="212:2059" data-name="Rule" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="212:2061">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="212:2060" data-name="Rule" />
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="212:2062" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="212:2063">
            ONWARD
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="212:2064" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="212:2065" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="212:2066">
                Thu, 10 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="212:2067">
                ISBT Kashmiri Gate, Gate 4
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="212:2068" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="212:2069">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="212:2070" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="212:2071">
                Fri, 11 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="212:2072">
                Nainital Bus Stand
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="212:2073" data-name="Divider" />
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="212:2074" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="212:2075">
            RETURN
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="212:2076" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="212:2077" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="212:2078">
                Mon, 14 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="212:2079">
                Nainital Bus Stand
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="212:2080" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="212:2081">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="212:2082" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="212:2083">
                Tue, 15 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="212:2084">
                ISBT Kashmiri Gate
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[24px] items-start not-italic pt-[4px] relative shrink-0 text-[#1b1bd1] text-[14px] w-full whitespace-nowrap" data-node-id="221:1871" data-name="Return actions">
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="221:1872">
              <p className="leading-[18px]">Change seat</p>
            </a>
            <p className="leading-[18px] relative shrink-0" data-node-id="221:1873">
              Change points
            </p>
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="426:3103">
              <p className="leading-[18px]">Change bus</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="212:2085" data-name="Passengers">
          <div className="bg-[#ecebf2] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="212:2086" data-name="Chip">
            <IconSeat className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="212:2087">
              1 Passenger
            </p>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="212:2088" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1b1bd1] text-[14px] whitespace-nowrap" data-node-id="212:2089">
            View details
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="213:2065" data-name="Contact Details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="213:2045" data-name="Contact Details">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="213:2047" data-name="Title row">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="213:2048" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2049">
                Contact Details
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="213:2050" data-name="spacer" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2046">
              Edit
            </p>
          </div>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="213:2051" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="213:2052">
            Ticket details will be sent to
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="213:2053" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="213:2054" data-name="Row">
            <IconMail className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2056">
              devanshoffc@gmail.com
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="213:2057" data-name="Row">
            <IconPhoneFilled className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2059">
              +91 6396483499
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="213:2060" data-name="Row">
            <IconPin className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2062">
              Karnataka
            </p>
          </div>
          <div className="bg-[#dff3d8] content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="213:2063" data-name="Strip">
            <LogoWhatsApp className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="213:2064">
              WhatsApp communication enabled
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="213:2083" data-name="Passenger details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="213:2066" data-name="Passenger details">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="213:2067">
            Passenger details
          </p>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="213:2068" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="213:2069">
            0/1 selected
          </p>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="213:2070" data-name="gap" />
          <div className="bg-[#f5dcdc] content-stretch flex gap-[10px] items-center justify-center py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="213:2071" data-name="Add passenger">
            <IconAddPassenger className="h-[20px] relative shrink-0 w-[22px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2072">
              Add new passenger
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="213:2073" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="213:2074" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="213:2075" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="213:2076" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="213:2077" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="213:2078" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="213:2079">
                Devansh Somvanshi
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="213:2080">
                Male, 29 Years
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="213:2081" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="213:2082" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="213:2114" data-name="Free Cancellation wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="213:2084" data-name="Free Cancellation">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="213:2085" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="213:2086">
              Bought by 1,19,417+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="213:2087" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="213:2090" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="213:2091" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="213:2092">
                Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="213:2093">
                ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="213:2094" data-name="spacer" />
            <div className="bg-[#f7e6ea] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="213:2088" data-name="Icon">
              <ArtShieldFreeCancellation className="relative shrink-0 size-[32px]" />
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="213:2095" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="213:2096" data-name="Refund">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="213:2097">
              100% refund
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="213:2098">
              on cancellation
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="213:2099" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="213:2100">
            Cancel anytime up to 6 hours before bus departure time to get a full refund. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="213:2101" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="213:2102" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="213:2103" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="213:2104">
                Add Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="213:2105">
                Only for ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="213:2106" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="213:2107" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="213:2108" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="213:2109" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="213:2110" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="213:2111">{`Don't add Free Cancellation`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="213:2112" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="213:2113" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="516:3805" data-name="What declining gives you">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="516:3806">
              Without it, you still get a part refund
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="516:3807">
              How much depends on how early you cancel. With it, you get the full fare back.
            </p>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="516:3808" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="516:3809">
              The fee itself is not refunded
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="516:3810">
              You get the ticket price back, not the ₹60.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="214:2070" data-name="Free date change wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="214:2045" data-name="Free date change">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="214:2046" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="214:2047">
              Included on this bus · no fee
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2048" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="214:2051" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="214:2052" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2053">
                Free date change
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="214:2054">
                On your return only
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2055" data-name="spacer" />
            <div className="bg-[#ecebf6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="214:2049" data-name="Icon">
              <IconHourglass className="relative shrink-0 size-[22px]" />
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2056" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="214:2057" data-name="Promise">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="214:2058">
              One change
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="214:2059">
              on your return date
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2060" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="214:2061">
            Move your return to any date, earlier or later. You pay only the price difference. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2062" data-name="gap" />
          <div className="[word-break:break-word] bg-[#faf8f5] content-stretch flex flex-col gap-[12px] items-start leading-[18px] not-italic p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2063" data-name="Rules">
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="214:2064" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] w-full" data-node-id="214:2065">
                You cannot cancel it after that
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="214:2066">
                No refund on the return. Your onward trip is not affected
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="214:2067" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="214:2068">
                Change it up to 8 hours before
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="214:2069">
                After that the date is fixed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="214:2108" data-name="Trip Guarantee wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="214:2071" data-name="Trip Guarantee">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="214:2074" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="214:2075" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2076">
                Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="214:2077">
                ₹26 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2078" data-name="spacer" />
            <div className="bg-[#f7e6ea] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="214:2072" data-name="Icon">
              <ArtShieldTripGuarantee className="relative shrink-0 size-[32px]" />
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2079" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="214:2080">
            Get back full ticket price + ₹500 extra if your bus gets cancelled by the operator. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2081" data-name="gap" />
          <div className="bg-[#efeef6] content-stretch flex flex-col gap-[8px] items-start justify-center py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2082" data-name="Breakdown">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="214:2083">{`You'll get ₹3,419 refund if bus gets cancelled`}</p>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="214:2084" data-name="Row">
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="214:2085" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="715:4183" data-name="Amount">
                  <IconBank className="h-[20px] relative shrink-0 w-[22px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="214:2086">
                    ₹2,919
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="214:2087">
                  Full refund
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#3a57e8] text-[18px] whitespace-nowrap" data-node-id="214:2088">
                +
              </p>
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="214:2089" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="715:4185" data-name="Amount">
                  <IconWalletCard className="h-[20px] relative shrink-0 w-[22px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="214:2090">
                    ₹500
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="214:2091">
                  Cashback
                </p>
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2092" data-name="gap" />
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="214:2093" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="214:2094">
              Bought by 7,42,445+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2095" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2096" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="214:2097" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2098">
                Add Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="214:2099">
                ₹26 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2100" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="214:2101" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="214:2102" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2103" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="214:2104" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="214:2105">{`Don't add Trip Guarantee`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2106" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="214:2107" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="214:2154" data-name="Travel Insurance wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="214:2109" data-name="Travel Insurance">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="214:2111" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="214:2112" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2113">
                Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="214:2114">
                ₹15 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2115" data-name="spacer" />
            <LogoAcko className="h-[18px] relative shrink-0 w-[62px]" />
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2116" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="214:2117">
            Insure your travel by adding ₹15.0 per passenger. Powered by Acko General Insurance Ltd.
          </p>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2118" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="214:2119" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="214:2120" data-name="Icon">
              <ArtCoverLuggage className="relative shrink-0 size-[26px]" />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2122">
              In the event of loss of luggage
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="214:2124">
              Upto ₹5,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="214:2125" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="214:2126" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="214:2127" data-name="Icon">
              <ArtCoverHospital className="relative shrink-0 size-[26px]" />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2129">
              In the event of accidental hospitalisation
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="214:2131">
              Upto ₹75,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="214:2132" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="214:2133" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="214:2134" data-name="Icon">
              <ArtCoverPerson className="relative shrink-0 size-[26px]" />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2136">
              In case of death/PTD/PPD
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="214:2138">
              Upto ₹6 Lakh
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="214:2139" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] min-w-full not-italic relative shrink-0 text-[#1b1bd1] text-[14px] w-[min-content]" data-node-id="214:2140">
            View full coverage details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="214:2141" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2142" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="214:2143" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="214:2144">
                Add Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="214:2145">
                ₹15 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2146" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="214:2147" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="214:2148" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="214:2149" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="214:2150" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="214:2151">{`Don't add Travel Insurance`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2152" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="214:2153" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="214:2160" data-name="GST wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="214:2155" data-name="GST">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="214:2156" data-name="Row">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="214:2157">
              I have a GST number (optional)?
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="214:2158" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="214:2159" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center not-italic pb-[156px] pt-[26px] relative shrink-0 text-[14px] w-full" data-node-id="214:2161" data-name="Terms">
        <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="214:2162">
          By clicking ‘Pay now’, I accept
        </p>
        <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[40px] items-start justify-center leading-[18px] relative shrink-0 text-[#1b1bd1] w-full whitespace-nowrap" data-node-id="214:2163" data-name="Links">
          <p className="relative shrink-0" data-node-id="214:2164">{`Terms & Conditions`}</p>
          <p className="relative shrink-0" data-node-id="214:2165">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[#e6e6ec] border-solid border-t bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 pb-[26px] pt-[12px] px-[16px] right-0" data-node-id="215:2045" data-name="Pay bar">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="215:2046" data-name="Amount">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="215:2047">
            Amount
          </p>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="215:2048" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="215:2049">
            ₹2,919
          </p>
          <div className="border border-[#8a8a96] border-solid content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" data-node-id="215:2050" data-name="Expand">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="215:2051">
              +
            </p>
          </div>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Pay now" showIcon={false} />
      </div>
    </div>
  );
}