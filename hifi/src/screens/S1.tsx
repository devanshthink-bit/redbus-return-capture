const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgLogoAcko = "assets/c87a29f5-ae81-49bc-9023-e19193aceb2b.png";
const imgIconWalletCard = "assets/83fcb996-8fa7-4cae-ad6a-78bf06a84787.png";
const imgIconBank = "assets/0fe17d5c-ab72-4cca-8410-fe46221f86b3.png";
const imgIconAddPassenger = "assets/7809ae76-4caf-42f0-936a-4441cbeecbbe.png";
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

function IconAddPassenger({ className }: { className?: string }) {
  return (
    <div className={className || "h-[26px] overflow-clip relative w-[28px]"} data-node-id="715:4158" data-name="Icon / Add passenger">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconAddPassenger} />
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

export default function S1RouteHasNoneReviewYourTrip() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="810:5111" data-name="S1 · Route has none · Review your trip">
      <div className="bg-[#f5f5fa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="810:5112" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="810:5113" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I810:5113;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I810:5113;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="810:5114" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I810:5114;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I810:5114;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I810:5114;34:91">
              Passenger Information
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I810:5114;34:92">
              Delhi → Nainital
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I810:5114;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="bg-[#1b3874] content-stretch flex gap-[12px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="810:5115" data-name="Primo banner">
        <ArtPrimoOnNavy className="h-[32.2px] relative shrink-0 w-[60px]" />
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-px items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5117" data-name="Text">
          <p className="leading-[20px] relative shrink-0 text-[14px] text-white" data-node-id="810:5118">
            On Time · Friendly Staff · Top Rated
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#f0c24b] text-[13px]" data-node-id="810:5119">
            Rising Stars on redBus
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="810:5120">
          ✕
        </p>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="810:5121" data-name="Journey">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="810:5122" data-name="Operator">
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5123" data-name="Rule" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5124">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5125" data-name="Rule" />
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="810:5126" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5127">
            ONWARD
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="810:5128" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5129" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5130">
                Thu, 10 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5131">
                ISBT Kashmiri Gate, Gate 4
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="810:5132" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5133">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="810:5134" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5135">
                Fri, 11 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5136">
                Nainital Bus Stand
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5153" data-name="Passengers">
          <div className="bg-[#ecebf2] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="810:5154" data-name="Chip">
            <IconSeat className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5156">
              1 Passenger
            </p>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5157" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1b1bd1] text-[14px] whitespace-nowrap" data-node-id="810:5158">
            View details
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5159" data-name="Contact Details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5160" data-name="Contact Details">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5161" data-name="Title row">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5162" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5163">
                Contact Details
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5164" data-name="spacer" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5165">
              Edit
            </p>
          </div>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5166" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5167">
            Ticket details will be sent to
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5168" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5169" data-name="Row">
            <IconMail className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5171">
              devanshoffc@gmail.com
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5172" data-name="Row">
            <IconPhoneFilled className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5174">
              +91 6396483499
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5175" data-name="Row">
            <IconPin className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5177">
              Karnataka
            </p>
          </div>
          <div className="bg-[#dff3d8] content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5178" data-name="Strip">
            <LogoWhatsApp className="relative shrink-0 size-[26px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5180">
              WhatsApp communication enabled
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5181" data-name="Passenger details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5182" data-name="Passenger details">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="810:5183">
            Passenger details
          </p>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5184" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5185">
            0/1 selected
          </p>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5186" data-name="gap" />
          <div className="bg-[#f5dcdc] content-stretch flex gap-[10px] items-center justify-center py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="810:5187" data-name="Add passenger">
            <IconAddPassenger className="h-[26px] relative shrink-0 w-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5189">
              Add new passenger
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5190" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5191" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5192" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5193" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5194" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5195" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5196">
                Devansh Somvanshi
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5197">
                Male, 29 Years
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5198" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5199" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5200" data-name="Free Cancellation wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5201" data-name="Free Cancellation">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5202" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5203">
              Bought by 1,19,417+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5204" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5205" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5206" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5207">
                Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5208">
                ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5209" data-name="spacer" />
            <div className="bg-[#f7e6ea] content-stretch flex items-start p-[6px] relative rounded-[999px] shrink-0" data-node-id="810:5210" data-name="Icon">
              <div className="h-[31px] relative shrink-0 w-[26px]" data-node-id="810:5211" data-name="Art / Shield · Free Cancellation">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5212" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="810:5213" data-name="Refund">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="810:5214">
              100% refund
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5215">
              on cancellation
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5216" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:5217">
            Cancel anytime up to 6 hours before bus departure time to get a full refund. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5218" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5219" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5220" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5221">
                Add Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5222">
                Only for ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5223" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5224" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5225" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5226" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5227" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5228">{`Don't add Free Cancellation`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5229" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5230" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="810:5231" data-name="What declining gives you">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5232">
              Without it, you still get a part refund
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5233">
              How much depends on how early you cancel. With it, you get the full fare back.
            </p>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="810:5234" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5235">
              The fee itself is not refunded
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5236">
              You get the ticket price back, not the ₹60.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5263" data-name="Trip Guarantee wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5264" data-name="Trip Guarantee">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5265" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5266" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5267">
                Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5268">
                ₹26 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5269" data-name="spacer" />
            <div className="content-stretch flex items-start relative rounded-[999px] shrink-0" data-node-id="810:5270" data-name="Icon">
              <div className="h-[41px] relative shrink-0 w-[34px]" data-node-id="810:5271" data-name="Art / Shield · Trip Guarantee">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5272" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5273">
            Get back full ticket price + ₹500 extra if your bus gets cancelled by the operator. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5274" data-name="gap" />
          <div className="bg-[#efeef6] content-stretch flex flex-col gap-[8px] items-start justify-center py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5275" data-name="Breakdown">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5276">{`You'll get ₹3,419 refund if bus gets cancelled`}</p>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="810:5277" data-name="Row">
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5278" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5279" data-name="Amount">
                  <IconBank className="h-[28px] relative shrink-0 w-[30px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5281">
                    ₹2,919
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5282">
                  Full refund
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#3a57e8] text-[18px] whitespace-nowrap" data-node-id="810:5283">
                +
              </p>
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5284" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5285" data-name="Amount">
                  <IconWalletCard className="h-[26px] relative shrink-0 w-[28px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5287">
                    ₹500
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5288">
                  Cashback
                </p>
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5289" data-name="gap" />
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5290" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5291">
              Bought by 7,42,445+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5292" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5293" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5294" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5295">
                Add Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5296">
                ₹26 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5297" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5298" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5299" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5300" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5301" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5302">{`Don't add Trip Guarantee`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5303" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5304" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5305" data-name="Travel Insurance wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5306" data-name="Travel Insurance">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5307" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5308" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5309">
                Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5310">
                ₹15 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5311" data-name="spacer" />
            <LogoAcko className="h-[24px] relative shrink-0 w-[80px]" />
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5313" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5314">
            Insure your travel by adding ₹15.0 per passenger. Powered by Acko General Insurance Ltd.
          </p>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5315" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5316" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5317" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5318" data-name="Art / Cover · Luggage">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverLuggage} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5319">
              In the event of loss of luggage
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5320">
              Upto ₹5,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5321" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5322" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5323" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5324" data-name="Art / Cover · Hospital">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverHospital} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5325">
              In the event of accidental hospitalisation
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5326">
              Upto ₹75,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5327" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5328" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5329" data-name="Icon">
              <div className="relative shrink-0 size-[12px]" data-node-id="810:5330" data-name="Art / Cover · Person">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverPerson} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5331">
              In case of death/PTD/PPD
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5332">
              Upto ₹6 Lakh
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5333" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] min-w-full not-italic relative shrink-0 text-[#1b1bd1] text-[14px] w-[min-content]" data-node-id="810:5334">
            View full coverage details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5335" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5336" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5337" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5338">
                Add Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5339">
                ₹15 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5340" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5341" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5342" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5343" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5344" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5345">{`Don't add Travel Insurance`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5346" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5347" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5348" data-name="GST wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5349" data-name="GST">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5350" data-name="Row">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5351">
              I have a GST number (optional)?
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5352" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5353" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center not-italic pb-[156px] pt-[26px] relative shrink-0 text-[14px] w-full" data-node-id="810:5354" data-name="Terms">
        <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5355">
          By clicking ‘Pay now’, I accept
        </p>
        <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[40px] items-start justify-center leading-[18px] relative shrink-0 text-[#1b1bd1] w-full whitespace-nowrap" data-node-id="810:5356" data-name="Links">
          <p className="relative shrink-0" data-node-id="810:5357">{`Terms & Conditions`}</p>
          <p className="relative shrink-0" data-node-id="810:5358">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[#e6e6ec] border-solid border-t bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 pb-[26px] pt-[12px] px-[16px] right-0" data-node-id="810:5359" data-name="Pay bar">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="810:5360" data-name="Amount">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5361">
            Amount
          </p>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5362" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5363">
            ₹1,920
          </p>
          <div className="border border-[#8a8a96] border-solid content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" data-node-id="810:5364" data-name="Expand">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="810:5365">
              +
            </p>
          </div>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Pay now" showIcon={false} />
      </div>
    </div>
  );
}