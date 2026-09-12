const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgLogoAcko = "assets/c87a29f5-ae81-49bc-9023-e19193aceb2b.png";
const imgIconWalletCard = "assets/83fcb996-8fa7-4cae-ad6a-78bf06a84787.png";
const imgIconBank = "assets/0fe17d5c-ab72-4cca-8410-fe46221f86b3.png";
const imgIconHourglass = "assets/e138f8f0-40ec-4703-bdc6-eb2b6e0e7076.svg";
const imgLogoWhatsApp = "assets/a5095ba5-5b6f-40fd-9abf-ba4fd955c35b.png";
const imgIconPin = "assets/14633a77-7518-49f8-a287-91e21d838a62.png";
const imgIconPhoneFilled = "assets/7dca6784-8680-47a6-9ce9-8bb31a177d60.png";
const imgIconMail = "assets/07f33865-5252-4fb2-81d8-b27809d4f68a.png";
const imgIconSeat = "assets/6e477112-565d-4b4d-8039-41a6059fc9f5.png";
const imgArtPrimoOnNavy = "assets/fa5d30e0-7fdf-4efa-a4d8-a3f163de5175.png";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgArtShieldFreeCancellation = "assets/311c7602-a5ed-4b8b-b6ed-c28529640dde.png";
const imgArtCoverLuggage = "assets/c2460135-a700-4aee-b7a8-5c2b442d2d00.png";
const imgArtCoverHospital = "assets/66f74197-06a7-48f5-8d45-010595c7b760.png";
const imgArtCoverPerson = "assets/e057725b-56bb-443e-bf26-2c0841f17961.png";
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

function LogoAcko({ className }: { className?: string }) {
  return (
    <div className={className || "h-[24px] overflow-clip relative w-[80px]"} data-node-id="715:4161" data-name="Logo / ACKO">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoAcko} />
    </div>
  );
}

function IconWalletCard({ className }: { className?: string }) {
  return (
    <div className={className || "h-[26px] overflow-clip relative w-[28px]"} data-node-id="715:4167" data-name="Icon / Wallet card">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconWalletCard} />
    </div>
  );
}

function IconBank({ className }: { className?: string }) {
  return (
    <div className={className || "h-[28px] overflow-clip relative w-[30px]"} data-node-id="715:4166" data-name="Icon / Bank">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconBank} />
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

function LogoWhatsApp({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[26px]"} data-node-id="715:4157" data-name="Logo / WhatsApp">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoWhatsApp} />
    </div>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[28px]"} data-node-id="715:4156" data-name="Icon / Pin">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconPin} />
    </div>
  );
}

function IconPhoneFilled({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[28px]"} data-node-id="715:4155" data-name="Icon / Phone filled">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconPhoneFilled} />
    </div>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[28px]"} data-node-id="715:4154" data-name="Icon / Mail">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconMail} />
    </div>
  );
}

function IconSeat({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="715:4165" data-name="Icon / Seat">
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

export default function S12ASixPassengersReviewYourTrip() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="810:5633" data-name="S12a · Six passengers · Review your trip">
      <div className="bg-[#f5f5fa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="810:5634" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="810:5635" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I810:5635;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I810:5635;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="810:5636" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I810:5636;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I810:5636;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I810:5636;34:91">
              Passenger Information
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I810:5636;34:92">
              Delhi → Nainital
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I810:5636;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="bg-[#1b3874] content-stretch flex gap-[12px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="810:5637" data-name="Primo banner">
        <ArtPrimoOnNavy className="h-[32.2px] relative shrink-0 w-[60px]" />
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-px items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5639" data-name="Text">
          <p className="leading-[20px] relative shrink-0 text-[14px] text-white" data-node-id="810:5640">
            On Time · Friendly Staff · Top Rated
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#f0c24b] text-[13px]" data-node-id="810:5641">
            Rising Stars on redBus
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="810:5642">
          ✕
        </p>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="810:5643" data-name="Journey">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="810:5644" data-name="Operator">
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5645" data-name="Rule" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5646">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5647" data-name="Rule" />
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="810:5648" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5649">
            ONWARD
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="810:5650" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5651" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5652">
                Thu, 10 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5653">
                ISBT Kashmiri Gate, Gate 4
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="810:5654" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5655">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="810:5656" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5657">
                Fri, 11 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5658">
                Nainital Bus Stand
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5659" data-name="Divider" />
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="810:5660" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5661">
            RETURN
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="810:5662" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5663" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5664">
                Mon, 14 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5665">
                Nainital Bus Stand
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="810:5666" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5667">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="810:5668" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5669">
                Tue, 15 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5670">
                ISBT Kashmiri Gate
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[24px] items-start not-italic pt-[4px] relative shrink-0 text-[#1b1bd1] text-[14px] w-full whitespace-nowrap" data-node-id="810:5671" data-name="Return actions">
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="810:5672">
              <p className="leading-[18px]">Change seat</p>
            </a>
            <p className="leading-[18px] relative shrink-0" data-node-id="810:5673">
              Change points
            </p>
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="810:5674">
              <p className="leading-[18px]">Change bus</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5675" data-name="Passengers">
          <div className="bg-[#ecebf2] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="810:5676" data-name="Chip">
            <IconSeat className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5678">
              6 Passengers
            </p>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5679" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1b1bd1] text-[14px] whitespace-nowrap" data-node-id="810:5680">
            View details
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5681" data-name="Contact Details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5682" data-name="Contact Details">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5683" data-name="Title row">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5684" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5685">
                Contact Details
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5686" data-name="spacer" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5687">
              Edit
            </p>
          </div>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5688" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5689">
            Ticket details will be sent to
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5690" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5691" data-name="Row">
            <IconMail className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5693">
              devanshoffc@gmail.com
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5694" data-name="Row">
            <IconPhoneFilled className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5696">
              +91 6396483499
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5697" data-name="Row">
            <IconPin className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5699">
              Karnataka
            </p>
          </div>
          <div className="bg-[#dff3d8] content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5700" data-name="Strip">
            <LogoWhatsApp className="relative shrink-0 size-[26px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5702">
              WhatsApp communication enabled
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5889" data-name="Passenger details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5890" data-name="Passenger details">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="810:5891">
            Passenger details
          </p>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5892" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5893">
            6/6 selected
          </p>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5894" data-name="gap" />
          <div className="bg-[#f5dcdc] content-stretch flex items-start justify-center py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="810:5895" data-name="Add passenger">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-pre" data-node-id="810:5896">{`＋  Add new passenger`}</p>
          </div>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5897" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5898" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5899" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5900" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5901" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5902" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5903">
                Devansh Somvanshi
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5904">{`Male, 29 Years  ·  Seat U4 / U4`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5905" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5906" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5907">
                ✓
              </p>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5908" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5909" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5910" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5911" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5912" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5913" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5914">
                Priyanka Ramachandran-Iyer
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5915">{`Female, 27 Years  ·  Seat L2 / L3`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5916" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5917" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5918">
                ✓
              </p>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5919" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5920" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5921" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5922" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5923" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5924" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5925">
                Sai Srinivas Buddi
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5926">{`Male, 31 Years  ·  Seat U6 / U8`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5927" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5928" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5929">
                ✓
              </p>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5930" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5931" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5932" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5933" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5934" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5935" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5936">
                Harshraj Vamanjoor
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5937">{`Male, 26 Years  ·  Seat L1 / L1`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5938" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5939" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5940">
                ✓
              </p>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5941" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5942" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5943" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5944" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5945" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5946" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5947">
                Soumya Mishra
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5948">{`Female, 24 Years  ·  Seat U2 / U2`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5949" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5950" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5951">
                ✓
              </p>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5952" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5953" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5954" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5955" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5956" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0" data-node-id="810:5957" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5958">
                Jaimin Gagiya
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-pre" data-node-id="810:5959">{`Male, 33 Years  ·  Seat L5 / L6`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5960" data-name="spacer" />
            <div className="bg-[#d3192d] border-[#d3192d] border-[1.5px] border-solid overflow-clip relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5961" data-name="Checkbox">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[3.5px] not-italic text-[13px] text-white top-[1.5px] whitespace-nowrap" data-node-id="810:5962">
                ✓
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5722" data-name="Free Cancellation wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5723" data-name="Free Cancellation">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5724" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5725">
              Bought by 1,19,417+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5726" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5727" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5728" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5729">
                Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5730">
                ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5731" data-name="spacer" />
            <div className="bg-[#f7e6ea] content-stretch flex items-start p-[6px] relative rounded-[999px] shrink-0" data-node-id="810:5732" data-name="Icon">
              <div className="h-[31px] relative shrink-0 w-[26px]" data-node-id="810:5733" data-name="Art / Shield · Free Cancellation">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5734" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="810:5735" data-name="Refund">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="810:5736">
              100% refund
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5737">
              on cancellation
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5738" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:5739">
            Cancel anytime up to 6 hours before bus departure time to get a full refund. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5740" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5741" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5742" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5743">
                Add Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5744">
                Only for ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5745" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5746" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5747" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5748" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5749" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5750">{`Don't add Free Cancellation`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5751" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5752" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="810:5753" data-name="What declining gives you">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5754">
              Without it, you still get a part refund
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5755">
              How much depends on how early you cancel. With it, you get the full fare back.
            </p>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="810:5756" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5757">
              The fee itself is not refunded
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5758">
              You get the ticket price back, not the ₹60.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5759" data-name="Free date change wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5760" data-name="Free date change">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5761" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5762">
              Included on this bus · no fee
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5763" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5764" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5765" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5766">
                Free date change
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5767">
                On your return only
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5768" data-name="spacer" />
            <div className="bg-[#ecebf6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="810:5769" data-name="Icon">
              <IconHourglass className="relative shrink-0 size-[22px]" />
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5771" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="810:5772" data-name="Promise">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="810:5773">
              One change
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5774">
              on your return date
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5775" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:5776">
            Move your return to any date, earlier or later. You pay only the price difference. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5777" data-name="gap" />
          <div className="[word-break:break-word] bg-[#faf8f5] content-stretch flex flex-col gap-[12px] items-start leading-[18px] not-italic p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5778" data-name="Rules">
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="810:5779" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] w-full" data-node-id="810:5780">
                You cannot cancel it after that
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5781">
                No refund on the return. Your onward trip is not affected
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="810:5782" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="810:5783">
                Change it up to 8 hours before
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5784">
                After that the date is fixed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5785" data-name="Trip Guarantee wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5786" data-name="Trip Guarantee">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5787" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5788" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5789">
                Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5790">
                ₹26 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5791" data-name="spacer" />
            <div className="content-stretch flex items-start relative rounded-[999px] shrink-0" data-node-id="810:5792" data-name="Icon">
              <div className="h-[41px] relative shrink-0 w-[34px]" data-node-id="810:5793" data-name="Art / Shield · Trip Guarantee">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5794" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5795">
            Get back full ticket price + ₹500 extra if your bus gets cancelled by the operator. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5796" data-name="gap" />
          <div className="bg-[#efeef6] content-stretch flex flex-col gap-[8px] items-start justify-center py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5797" data-name="Breakdown">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5798">{`You'll get ₹3,419 refund if bus gets cancelled`}</p>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="810:5799" data-name="Row">
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5800" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5801" data-name="Amount">
                  <IconBank className="h-[28px] relative shrink-0 w-[30px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5803">
                    ₹2,919
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5804">
                  Full refund
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#3a57e8] text-[18px] whitespace-nowrap" data-node-id="810:5805">
                +
              </p>
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5806" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5807" data-name="Amount">
                  <IconWalletCard className="h-[26px] relative shrink-0 w-[28px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5809">
                    ₹500
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5810">
                  Cashback
                </p>
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5811" data-name="gap" />
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5812" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5813">
              Bought by 7,42,445+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5814" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5815" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5816" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5817">
                Add Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5818">
                ₹26 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5819" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5820" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5821" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5822" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5823" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5824">{`Don't add Trip Guarantee`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5825" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5826" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5827" data-name="Travel Insurance wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5828" data-name="Travel Insurance">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5829" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5830" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5831">
                Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5832">
                ₹15 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5833" data-name="spacer" />
            <LogoAcko className="h-[24px] relative shrink-0 w-[80px]" />
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5835" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5836">
            Insure your travel by adding ₹15.0 per passenger. Powered by Acko General Insurance Ltd.
          </p>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5837" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5838" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5839" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5840" data-name="Art / Cover · Luggage">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverLuggage} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5841">
              In the event of loss of luggage
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5842">
              Upto ₹5,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5843" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5844" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5845" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5846" data-name="Art / Cover · Hospital">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverHospital} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5847">
              In the event of accidental hospitalisation
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5848">
              Upto ₹75,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5849" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5850" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5851" data-name="Icon">
              <div className="relative shrink-0 size-[12px]" data-node-id="810:5852" data-name="Art / Cover · Person">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverPerson} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5853">
              In case of death/PTD/PPD
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5854">
              Upto ₹6 Lakh
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5855" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] min-w-full not-italic relative shrink-0 text-[#1b1bd1] text-[14px] w-[min-content]" data-node-id="810:5856">
            View full coverage details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5857" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5858" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5859" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5860">
                Add Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5861">
                ₹15 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5862" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5863" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5864" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5865" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5866" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5867">{`Don't add Travel Insurance`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5868" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5869" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5870" data-name="GST wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5871" data-name="GST">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5872" data-name="Row">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5873">
              I have a GST number (optional)?
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5874" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5875" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center not-italic pb-[156px] pt-[26px] relative shrink-0 text-[14px] w-full" data-node-id="810:5876" data-name="Terms">
        <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5877">
          By clicking ‘Pay now’, I accept
        </p>
        <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[40px] items-start justify-center leading-[18px] relative shrink-0 text-[#1b1bd1] w-full whitespace-nowrap" data-node-id="810:5878" data-name="Links">
          <p className="relative shrink-0" data-node-id="810:5879">{`Terms & Conditions`}</p>
          <p className="relative shrink-0" data-node-id="810:5880">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[#e6e6ec] border-solid border-t bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 pb-[26px] pt-[12px] px-[16px] right-0" data-node-id="810:5881" data-name="Pay bar">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="810:5882" data-name="Amount">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5883">
            Amount
          </p>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5884" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5885">
            ₹17,514
          </p>
          <div className="border border-[#8a8a96] border-solid content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" data-node-id="810:5886" data-name="Expand">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="810:5887">
              +
            </p>
          </div>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Pay now" showIcon={false} />
      </div>
    </div>
  );
}