const imgButtonClose = "assets/e011fb32-138b-444b-9eca-710d6df1d012.svg";
const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgArtCoverPerson = "assets/0c3c11cb-205a-4858-9139-f1e4ebb6de2e.png";
const imgArtCoverHospital = "assets/237a7c28-e418-4102-b26a-4f2e8f0f43e6.png";
const imgArtCoverLuggage = "assets/121b36ea-4581-411e-9267-453c287a219a.png";
const imgLogoAcko = "assets/c87a29f5-ae81-49bc-9023-e19193aceb2b.png";
const imgIconWalletCard = "assets/83fcb996-8fa7-4cae-ad6a-78bf06a84787.png";
const imgIconBank = "assets/0fe17d5c-ab72-4cca-8410-fe46221f86b3.png";
const imgArtShieldTripGuarantee = "assets/f88d22e4-40fd-4197-b646-54f08b3f20a4.png";
const imgIconHourglass = "assets/e138f8f0-40ec-4703-bdc6-eb2b6e0e7076.svg";
const imgArtShieldFreeCancellation = "assets/d1bd5d83-5f10-458d-b078-e6f009f0f4a6.png";
const imgIconAddPassenger = "assets/7809ae76-4caf-42f0-936a-4441cbeecbbe.png";
const imgLogoWhatsApp = "assets/a5095ba5-5b6f-40fd-9abf-ba4fd955c35b.png";
const imgIconPin = "assets/14633a77-7518-49f8-a287-91e21d838a62.png";
const imgIconPhoneFilled = "assets/7dca6784-8680-47a6-9ce9-8bb31a177d60.png";
const imgIconMail = "assets/07f33865-5252-4fb2-81d8-b27809d4f68a.png";
const imgIconSeat = "assets/6e477112-565d-4b4d-8039-41a6059fc9f5.png";
const imgArtPrimoOnNavy = "assets/fa5d30e0-7fdf-4efa-a4d8-a3f163de5175.png";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgAvatar = "assets/avatar-devansh-36.png";
const imgRadio = "assets/f410a566-6990-4296-9328-11bace6bed32.svg";
const imgDot = "assets/e3ba5a6c-19af-4a5b-b8da-896debdd44bc.svg";
const imgRail = "assets/600465f5-c4dd-470c-8b4e-c9d14774ced1.svg";

function ButtonClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1326" data-name="Button / Close">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonClose} />
    </div>
  );
}

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
    <div className={className || "overflow-clip relative size-[36px]"} data-node-id="715:4164" data-name="Art / Cover · Person">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverPerson} />
    </div>
  );
}

function ArtCoverHospital({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[36px]"} data-node-id="715:4163" data-name="Art / Cover · Hospital">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverHospital} />
    </div>
  );
}

function ArtCoverLuggage({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[36px]"} data-node-id="715:4162" data-name="Art / Cover · Luggage">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverLuggage} />
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

function ArtShieldTripGuarantee({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[44px]"} data-node-id="715:4160" data-name="Art / Shield · Trip Guarantee">
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
    <div className={className || "overflow-clip relative size-[44px]"} data-node-id="715:4159" data-name="Art / Shield · Free Cancellation">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
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

export default function Component09ABookingDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[8px] relative size-full" data-node-id="704:4096" data-name="09a · Booking details">
      <div className="bg-[#f2f2f7] h-[300px] overflow-clip relative shrink-0 w-full" data-node-id="704:4097" data-name="Backdrop">
        <div className="absolute bg-[#f0eff5] content-stretch flex flex-col h-[3246px] items-start left-0 overflow-x-clip overflow-y-auto top-0 w-[390px]" data-node-id="721:4125" data-name="Review · behind">
          <div className="bg-[#f5f5fa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="721:4126" data-name="Header">
            <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="721:4127" data-name="Status Bar / Light">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I721:4127;13:3">
                9:41
              </p>
              <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I721:4127;13:4" data-name="Status icons">
                <div className="absolute inset-[-1.3%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
                </div>
              </div>
            </div>
            <div className="h-[63px] relative shrink-0 w-full" data-node-id="721:4128" data-name="Nav / Top Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I721:4128;34:88" data-name="Back">
                <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I721:4128;34:90" data-name="Titles">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I721:4128;34:91">
                  Passenger Information
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I721:4128;34:92">
                  Delhi → Nainital
                </p>
              </div>
              <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I721:4128;56:226" data-name="Trailing slot" />
            </div>
          </div>
          <div className="bg-[#1b3874] content-stretch flex gap-[12px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="721:4129" data-name="Primo banner">
            <ArtPrimoOnNavy className="h-[32.2px] relative shrink-0 w-[60px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-px items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="721:4131" data-name="Text">
              <p className="leading-[20px] relative shrink-0 text-[14px] text-white" data-node-id="721:4132">
                On Time · Friendly Staff · Top Rated
              </p>
              <p className="leading-[18px] relative shrink-0 text-[#f0c24b] text-[13px]" data-node-id="721:4133">
                Rising Stars on redBus
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="721:4134">
              ✕
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="721:4135" data-name="Journey">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="721:4136" data-name="Operator">
              <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4137" data-name="Rule" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="721:4138">
                Laxmi Holidays Pvt Ltd
              </p>
              <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4139" data-name="Rule" />
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="721:4140" data-name="Leg">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="721:4141">
                ONWARD
              </p>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="721:4142" data-name="Row">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="721:4143" data-name="From">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4144">
                    Thu, 10 Sep · 23:55
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4145">
                    ISBT Kashmiri Gate, Gate 4
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="721:4146" data-name="Arrow">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="721:4147">
                    →
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="721:4148" data-name="To">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4149">
                    Fri, 11 Sep · 08:00
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4150">
                    Nainital Bus Stand
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="721:4151" data-name="Divider" />
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="721:4152" data-name="Leg">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="721:4153">
                RETURN
              </p>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="721:4154" data-name="Row">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="721:4155" data-name="From">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4156">
                    Mon, 14 Sep · 23:55
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4157">
                    Nainital Bus Stand
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="721:4158" data-name="Arrow">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="721:4159">
                    →
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="721:4160" data-name="To">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4161">
                    Tue, 15 Sep · 08:00
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4162">
                    ISBT Kashmiri Gate
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[24px] items-start not-italic pt-[4px] relative shrink-0 text-[#1b1bd1] text-[14px] w-full whitespace-nowrap" data-node-id="721:4163" data-name="Return actions">
                <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="721:4164">
                  <p className="leading-[18px]">Change seat</p>
                </a>
                <p className="leading-[18px] relative shrink-0" data-node-id="721:4165">
                  Change points
                </p>
                <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="721:4166">
                  <p className="leading-[18px]">Change bus</p>
                </a>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4167" data-name="Passengers">
              <div className="bg-[#ecebf2] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="721:4168" data-name="Chip">
                <IconSeat className="relative shrink-0 size-[24px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4170">
                  1 Passenger
                </p>
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4171" data-name="spacer" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1b1bd1] text-[14px] whitespace-nowrap" data-node-id="721:4172">
                View details
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4173" data-name="Contact Details wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4174" data-name="Contact Details">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4175" data-name="Title row">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="721:4176" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4177">
                    Contact Details
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4178" data-name="spacer" />
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4179">
                  Edit
                </p>
              </div>
              <div className="h-[2px] relative shrink-0 w-px" data-node-id="721:4180" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="721:4181">
                Ticket details will be sent to
              </p>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4182" data-name="gap" />
              <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="721:4183" data-name="Row">
                <IconMail className="relative shrink-0 size-[28px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4185">
                  devanshoffc@gmail.com
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="721:4186" data-name="Row">
                <IconPhoneFilled className="relative shrink-0 size-[28px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4188">
                  +91 6396483499
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="721:4189" data-name="Row">
                <IconPin className="relative shrink-0 size-[28px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4191">
                  Karnataka
                </p>
              </div>
              <div className="bg-[#dff3d8] content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="721:4192" data-name="Strip">
                <LogoWhatsApp className="relative shrink-0 size-[26px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="721:4194">
                  WhatsApp communication enabled
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4195" data-name="Passenger details wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4196" data-name="Passenger details">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="721:4197">
                Passenger details
              </p>
              <div className="h-[2px] relative shrink-0 w-px" data-node-id="721:4198" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="721:4199">
                0/1 selected
              </p>
              <div className="h-[16px] relative shrink-0 w-px" data-node-id="721:4200" data-name="gap" />
              <div className="bg-[#f5dcdc] content-stretch flex gap-[10px] items-center justify-center py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="721:4201" data-name="Add passenger">
                <IconAddPassenger className="h-[26px] relative shrink-0 w-[28px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4203">
                  Add new passenger
                </p>
              </div>
              <div className="h-[16px] relative shrink-0 w-px" data-node-id="721:4204" data-name="gap" />
              <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="721:4205" data-name="Divider" />
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4206" data-name="gap" />
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="721:4207" data-name="Passenger">
                <div className="relative shrink-0 size-[36px]" data-node-id="721:4208" data-name="Avatar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="36" src={imgAvatar} width="36" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4209" data-name="Text">
                  <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4210">
                    Devansh Somvanshi
                  </p>
                  <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4211">
                    Male, 29 Years
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4212" data-name="spacer" />
                <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="721:4213" data-name="Checkbox" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4214" data-name="Free Cancellation wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4215" data-name="Free Cancellation">
              <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="721:4216" data-name="Strip">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="721:4217">
                  Bought by 1,19,417+ people in the last month
                </p>
              </div>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4218" data-name="gap" />
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4219" data-name="Title row">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4220" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4221">
                    Free Cancellation
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4222">
                    ₹60 per passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4223" data-name="spacer" />
                <div className="bg-[#f7e6ea] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4224" data-name="Icon">
                  <ArtShieldFreeCancellation className="relative shrink-0 size-[44px]" />
                </div>
              </div>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4226" data-name="gap" />
              <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="721:4227" data-name="Refund">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="721:4228">
                  100% refund
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="721:4229">
                  on cancellation
                </p>
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4230" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="721:4231">
                Cancel anytime up to 6 hours before bus departure time to get a full refund. View details
              </p>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4232" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4233" data-name="Option">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4234" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4235">
                    Add Free Cancellation
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4236">
                    Only for ₹60 per passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4237" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4238" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
              <div className="h-[10px] relative shrink-0 w-px" data-node-id="721:4239" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4240" data-name="Option">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="721:4241" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4242">{`Don't add Free Cancellation`}</p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4243" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4244" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="721:4245" data-name="What declining gives you">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="721:4246">
                  Without it, you still get a part refund
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="721:4247">
                  How much depends on how early you cancel. With it, you get the full fare back.
                </p>
                <div className="h-[16px] relative shrink-0 w-full" data-node-id="721:4248" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="721:4249">
                  The fee itself is not refunded
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="721:4250">
                  You get the ticket price back, not the ₹60.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4251" data-name="Free date change wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4252" data-name="Free date change">
              <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="721:4253" data-name="Strip">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="721:4254">
                  Included on this bus · no fee
                </p>
              </div>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4255" data-name="gap" />
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4256" data-name="Title row">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4257" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4258">
                    Free date change
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4259">
                    On your return only
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4260" data-name="spacer" />
                <div className="bg-[#ecebf6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4261" data-name="Icon">
                  <IconHourglass className="relative shrink-0 size-[22px]" />
                </div>
              </div>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4263" data-name="gap" />
              <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="721:4264" data-name="Promise">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="721:4265">
                  One change
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="721:4266">
                  on your return date
                </p>
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4267" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="721:4268">
                Move your return to any date, earlier or later. You pay only the price difference. View details
              </p>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4269" data-name="gap" />
              <div className="[word-break:break-word] bg-[#faf8f5] content-stretch flex flex-col gap-[12px] items-start leading-[18px] not-italic p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4270" data-name="Rules">
                <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="721:4271" data-name="Rule">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] w-full" data-node-id="721:4272">
                    You cannot cancel it after that
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="721:4273">
                    No refund on the return. Your onward trip is not affected
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="721:4274" data-name="Rule">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="721:4275">
                    Change it up to 8 hours before
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="721:4276">
                    After that the date is fixed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4277" data-name="Trip Guarantee wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4278" data-name="Trip Guarantee">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4279" data-name="Title row">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4280" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4281">
                    Trip Guarantee
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4282">
                    ₹26 per passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4283" data-name="spacer" />
                <div className="bg-[#f7e6ea] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4284" data-name="Icon">
                  <ArtShieldTripGuarantee className="relative shrink-0 size-[44px]" />
                </div>
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4286" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="721:4287">
                Get back full ticket price + ₹500 extra if your bus gets cancelled by the operator. View details
              </p>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4288" data-name="gap" />
              <div className="bg-[#efeef6] content-stretch flex flex-col gap-[8px] items-start justify-center py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4289" data-name="Breakdown">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="721:4290">{`You'll get ₹3,419 refund if bus gets cancelled`}</p>
                <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="721:4291" data-name="Row">
                  <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="721:4292" data-name="Col">
                    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="721:4293" data-name="Amount">
                      <IconBank className="h-[28px] relative shrink-0 w-[30px]" />
                      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="721:4295">
                        ₹2,919
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="721:4296">
                      Full refund
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#3a57e8] text-[18px] whitespace-nowrap" data-node-id="721:4297">
                    +
                  </p>
                  <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="721:4298" data-name="Col">
                    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="721:4299" data-name="Amount">
                      <IconWalletCard className="h-[26px] relative shrink-0 w-[28px]" />
                      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="721:4301">
                        ₹500
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="721:4302">
                      Cashback
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4303" data-name="gap" />
              <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="721:4304" data-name="Strip">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="721:4305">
                  Bought by 7,42,445+ people in the last month
                </p>
              </div>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4306" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4307" data-name="Option">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4308" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4309">
                    Add Trip Guarantee
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4310">
                    ₹26 for 1 passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4311" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4312" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
              <div className="h-[10px] relative shrink-0 w-px" data-node-id="721:4313" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4314" data-name="Option">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="721:4315" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4316">{`Don't add Trip Guarantee`}</p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4317" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4318" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4319" data-name="Travel Insurance wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4320" data-name="Travel Insurance">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4321" data-name="Title row">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4322" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4323">
                    Travel Insurance
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4324">
                    ₹15 per passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4325" data-name="spacer" />
                <LogoAcko className="h-[24px] relative shrink-0 w-[80px]" />
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4327" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="721:4328">
                Insure your travel by adding ₹15.0 per passenger. Powered by Acko General Insurance Ltd.
              </p>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4329" data-name="gap" />
              <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="721:4330" data-name="Cover">
                <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4331" data-name="Icon">
                  <ArtCoverLuggage className="relative shrink-0 size-[36px]" />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4333">
                  In the event of loss of luggage
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="721:4334">
                  Upto ₹5,000
                </p>
              </div>
              <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="721:4335" data-name="Divider" />
              <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="721:4336" data-name="Cover">
                <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4337" data-name="Icon">
                  <ArtCoverHospital className="relative shrink-0 size-[36px]" />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4339">
                  In the event of accidental hospitalisation
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="721:4340">
                  Upto ₹75,000
                </p>
              </div>
              <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="721:4341" data-name="Divider" />
              <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="721:4342" data-name="Cover">
                <div className="bg-[#efeef6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="721:4343" data-name="Icon">
                  <ArtCoverPerson className="relative shrink-0 size-[36px]" />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4345">
                  In case of death/PTD/PPD
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="721:4346">
                  Upto ₹6 Lakh
                </p>
              </div>
              <div className="h-[12px] relative shrink-0 w-px" data-node-id="721:4347" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] min-w-full not-italic relative shrink-0 text-[#1b1bd1] text-[14px] w-[min-content]" data-node-id="721:4348">
                View full coverage details
              </p>
              <div className="h-[14px] relative shrink-0 w-px" data-node-id="721:4349" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4350" data-name="Option">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="721:4351" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="721:4352">
                    Add Travel Insurance
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="721:4353">
                    ₹15 for 1 passenger
                  </p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4354" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4355" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
              <div className="h-[10px] relative shrink-0 w-px" data-node-id="721:4356" data-name="gap" />
              <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="721:4357" data-name="Option">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="721:4358" data-name="Text">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4359">{`Don't add Travel Insurance`}</p>
                </div>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4360" data-name="spacer" />
                <div className="relative shrink-0 size-[20px]" data-node-id="721:4361" data-name="Radio">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="721:4362" data-name="GST wrap">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="721:4363" data-name="GST">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="721:4364" data-name="Row">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4365">
                  I have a GST number (optional)?
                </p>
                <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4366" data-name="spacer" />
                <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="721:4367" data-name="Checkbox" />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center not-italic pb-[156px] pt-[26px] relative shrink-0 text-[14px] w-full" data-node-id="721:4368" data-name="Terms">
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="721:4369">
              By clicking ‘Pay now’, I accept
            </p>
            <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[40px] items-start justify-center leading-[18px] relative shrink-0 text-[#1b1bd1] w-full whitespace-nowrap" data-node-id="721:4370" data-name="Links">
              <p className="relative shrink-0" data-node-id="721:4371">{`Terms & Conditions`}</p>
              <p className="relative shrink-0" data-node-id="721:4372">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="absolute bg-[var(--surface\/default,white)] border-[#e6e6ec] border-solid border-t bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 pb-[26px] pt-[12px] px-[16px] right-0" data-node-id="721:4373" data-name="Pay bar">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="721:4374" data-name="Amount">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4375">
                Amount
              </p>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="721:4376" data-name="spacer" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="721:4377">
                ₹2,919
              </p>
              <div className="border border-[#8a8a96] border-solid content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" data-node-id="721:4378" data-name="Expand">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="721:4379">
                  +
                </p>
              </div>
            </div>
            <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Pay now" showIcon={false} />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0" data-node-id="721:4381" data-name="Scrim" />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[28px] pt-[20px] px-[16px] relative rounded-bl-[36px] rounded-br-[36px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[374px]" data-node-id="704:4124" data-name="Sheet">
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="704:4125" data-name="Title row">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[28px] min-w-px not-italic relative text-[#1d1d1d] text-[22px]" data-node-id="704:4126">
            Review booking details
          </p>
          <ButtonClose className="relative shrink-0 size-[36px]" />
        </div>
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4131" data-name="gap" />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="704:4132" data-name="Leg · ONWARD">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] w-[min-content]" data-node-id="704:4133">
            ONWARD · THU, 10 SEP
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="704:4134" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-[min-content]" data-node-id="704:4135">
            Laxmi Holidays Pvt Ltd
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4136">
            1 Seat · Bharat Benz A/C Seater /Sleeper (2+1)
          </p>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4137" data-name="gap" />
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4122" data-name="Timeline">
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4123" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="704:4140" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px]" data-node-id="704:4141">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px]" data-node-id="704:4142">
                  10 Sep
                </p>
              </div>
              <div className="relative self-stretch shrink-0 w-[12px]" data-node-id="714:4124" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[-1px] left-1/2 rounded-[2px] top-[11px] w-[3px]" data-node-id="714:4125" data-name="Line" />
                <div className="-translate-x-1/2 absolute left-1/2 size-[11px] top-[6px]" data-node-id="714:4126" data-name="Dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic pb-[16px] relative self-stretch" data-node-id="704:4146" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4147">
                  Isbt Kashmiri Gate Metro Gate No.5
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4148">
                  Kashmiri Gate Metro Gate No.5
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[56px] items-center overflow-clip relative shrink-0 w-full" data-node-id="714:4127" data-name="Duration">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-[62px] whitespace-nowrap" data-node-id="704:4150" data-name="When">
                <p className="relative shrink-0" data-node-id="704:4151">
                  Approx.
                </p>
                <p className="relative shrink-0" data-node-id="704:4152">
                  8h 5m
                </p>
              </div>
              <div className="h-full relative shrink-0 w-[12px]" data-node-id="714:4128" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[10px] left-1/2 rounded-[2px] top-0 w-[3px]" data-node-id="714:4129" data-name="Line" />
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="714:4130" data-name="Info" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4131" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="704:4157" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px]" data-node-id="704:4158">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px]" data-node-id="704:4159">
                  11 Sep
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[12px]" data-node-id="714:4132" data-name="Rail">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRail} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic relative self-stretch" data-node-id="704:4163" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4164">
                  Nainital Mall Road
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4165">
                  Tallital Bus Stand ( Drop By Cab Or Mini Bus From Haldwani To Nainital )
                </p>
              </div>
            </div>
          </div>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4166" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="704:4167">
            Seat details
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4168">
            1 Seat
          </p>
          <div className="h-[10px] relative shrink-0 w-full" data-node-id="704:4169" data-name="gap" />
          <div className="bg-[#d0f1d3] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="704:4170" data-name="Seat pill">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#174d26] text-[15px] w-[120px]" data-node-id="704:4171">
              U4 - Upper deck
            </p>
          </div>
        </div>
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4173" data-name="gap" />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="704:4172" data-name="Divider" />
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4174" data-name="gap" />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="704:4175" data-name="Leg · RETURN">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] w-[min-content]" data-node-id="704:4176">
            RETURN · MON, 14 SEP
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="704:4177" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-[min-content]" data-node-id="704:4178">
            Laxmi Holidays Pvt Ltd
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4179">
            1 Seat · Bharat Benz A/C Seater /Sleeper (2+1)
          </p>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4180" data-name="gap" />
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4134" data-name="Timeline">
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4135" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="704:4183" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px]" data-node-id="704:4184">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px]" data-node-id="704:4185">
                  14 Sep
                </p>
              </div>
              <div className="relative self-stretch shrink-0 w-[12px]" data-node-id="714:4136" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[-1px] left-1/2 rounded-[2px] top-[11px] w-[3px]" data-node-id="714:4137" data-name="Line" />
                <div className="-translate-x-1/2 absolute left-1/2 size-[11px] top-[6px]" data-node-id="714:4138" data-name="Dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic pb-[16px] relative self-stretch" data-node-id="704:4189" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4190">
                  Nainital Bus Stand
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4191">
                  Tallital, near the boat house
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[56px] items-center overflow-clip relative shrink-0 w-full" data-node-id="714:4139" data-name="Duration">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-[62px] whitespace-nowrap" data-node-id="704:4193" data-name="When">
                <p className="relative shrink-0" data-node-id="704:4194">
                  Approx.
                </p>
                <p className="relative shrink-0" data-node-id="704:4195">
                  8h 5m
                </p>
              </div>
              <div className="h-full relative shrink-0 w-[12px]" data-node-id="714:4140" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[10px] left-1/2 rounded-[2px] top-0 w-[3px]" data-node-id="714:4141" data-name="Line" />
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="714:4142" data-name="Info" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4143" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="704:4200" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px]" data-node-id="704:4201">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px]" data-node-id="704:4202">
                  15 Sep
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[12px]" data-node-id="714:4144" data-name="Rail">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRail} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic relative self-stretch" data-node-id="704:4206" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4207">
                  ISBT Kashmiri Gate
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4208">
                  Gate Number 4 — where you started
                </p>
              </div>
            </div>
          </div>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4209" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="704:4210">
            Seat details
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4211">
            1 Seat
          </p>
          <div className="h-[10px] relative shrink-0 w-full" data-node-id="704:4212" data-name="gap" />
          <div className="bg-[#d0f1d3] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="704:4213" data-name="Seat pill">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#174d26] text-[15px] w-[120px]" data-node-id="704:4214">
              U4 - Upper deck
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}