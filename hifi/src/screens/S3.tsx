const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgLogoAcko = "assets/c87a29f5-ae81-49bc-9023-e19193aceb2b.png";
const imgIconWalletCard = "assets/83fcb996-8fa7-4cae-ad6a-78bf06a84787.png";
const imgIconBank = "assets/0fe17d5c-ab72-4cca-8410-fe46221f86b3.png";
const imgIconHourglass = "assets/e138f8f0-40ec-4703-bdc6-eb2b6e0e7076.svg";
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
const imgAvatar = "assets/avatar-devansh-36.png";
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

export default function S3ReturnSeatGoneReviewYourTrip() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="810:5367" data-name="S3 · Return seat gone · Review your trip">
      <div className="bg-[#f5f5fa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="810:5368" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="810:5369" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I810:5369;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I810:5369;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="810:5370" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I810:5370;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I810:5370;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I810:5370;34:91">
              Passenger Information
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I810:5370;34:92">
              Delhi → Nainital
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I810:5370;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="bg-[#1b3874] content-stretch flex gap-[12px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="810:5371" data-name="Primo banner">
        <ArtPrimoOnNavy className="h-[32.2px] relative shrink-0 w-[60px]" />
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-px items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5373" data-name="Text">
          <p className="leading-[20px] relative shrink-0 text-[14px] text-white" data-node-id="810:5374">
            On Time · Friendly Staff · Top Rated
          </p>
          <p className="leading-[18px] relative shrink-0 text-[#f0c24b] text-[13px]" data-node-id="810:5375">
            Rising Stars on redBus
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="810:5376">
          ✕
        </p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="810:5623" data-name="Seat gone">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[20px] text-center w-full" data-node-id="810:5624">
          Your return seat is gone
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[16px] text-center w-full" data-node-id="810:5625">
          Seat U5 is gone — someone just booked it. Your onward trip is fine.
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="810:5626" data-name="Actions">
          <div className="bg-[#c54646] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="810:5627" data-name="Button / Pick another return">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="810:5628">
              Pick another return
            </p>
          </div>
          <div className="bg-white border border-[#767680] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="810:5629" data-name="Button / Continue without a return">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="810:5630">
              Continue without a return
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[14px] items-start pb-[14px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="810:5377" data-name="Journey">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="810:5378" data-name="Operator">
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5379" data-name="Rule" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5380">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-[#dcdce2] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5381" data-name="Rule" />
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="810:5382" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5383">
            ONWARD
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="810:5384" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5385" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5386">
                Thu, 10 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5387">
                ISBT Kashmiri Gate, Gate 4
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="810:5388" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5389">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="810:5390" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5391">
                Fri, 11 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5392">
                Nainital Bus Stand
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5393" data-name="Divider" />
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="810:5394" data-name="Leg">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5395">
            RETURN
          </p>
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="810:5396" data-name="Row">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[18px] min-w-px not-italic relative whitespace-nowrap" data-node-id="810:5397" data-name="From">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5398">
                Mon, 14 Sep · 23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5399">
                Nainital Bus Stand
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="810:5400" data-name="Arrow">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="810:5401">
                →
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end leading-[18px] min-w-px not-italic relative text-right whitespace-nowrap" data-node-id="810:5402" data-name="To">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5403">
                Tue, 15 Sep · 08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5404">
                ISBT Kashmiri Gate
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[24px] items-start not-italic pt-[4px] relative shrink-0 text-[#1b1bd1] text-[14px] w-full whitespace-nowrap" data-node-id="810:5405" data-name="Return actions">
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="810:5406">
              <p className="leading-[18px]">Change seat</p>
            </a>
            <p className="leading-[18px] relative shrink-0" data-node-id="810:5407">
              Change points
            </p>
            <a className="block cursor-pointer leading-[0] relative shrink-0" data-node-id="810:5408">
              <p className="leading-[18px]">Change bus</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5409" data-name="Passengers">
          <div className="bg-[#ecebf2] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="810:5410" data-name="Chip">
            <IconSeat className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5412">
              1 Passenger
            </p>
          </div>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5413" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1b1bd1] text-[14px] whitespace-nowrap" data-node-id="810:5414">
            View details
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5415" data-name="Contact Details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5416" data-name="Contact Details">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5417" data-name="Title row">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5418" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5419">
                Contact Details
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5420" data-name="spacer" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5421">
              Edit
            </p>
          </div>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5422" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5423">
            Ticket details will be sent to
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5424" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5425" data-name="Row">
            <IconMail className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5427">
              devanshoffc@gmail.com
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5428" data-name="Row">
            <IconPhoneFilled className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5430">
              +91 6396483499
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center pb-[10px] relative shrink-0 w-full" data-node-id="810:5431" data-name="Row">
            <IconPin className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5433">
              Karnataka
            </p>
          </div>
          <div className="bg-[#dff3d8] content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5434" data-name="Strip">
            <LogoWhatsApp className="relative shrink-0 size-[26px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5436">
              WhatsApp communication enabled
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5437" data-name="Passenger details wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5438" data-name="Passenger details">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="810:5439">
            Passenger details
          </p>
          <div className="h-[2px] relative shrink-0 w-px" data-node-id="810:5440" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5441">
            0/1 selected
          </p>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5442" data-name="gap" />
          <div className="bg-[#f5dcdc] content-stretch flex gap-[10px] items-center justify-center py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="810:5443" data-name="Add passenger">
            <IconAddPassenger className="h-[26px] relative shrink-0 w-[28px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5445">
              Add new passenger
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-px" data-node-id="810:5446" data-name="gap" />
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5447" data-name="Divider" />
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5448" data-name="gap" />
          <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-node-id="810:5449" data-name="Passenger">
            <div className="relative shrink-0 size-[36px]" data-node-id="810:5450" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="36" src={imgAvatar} width="36" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5451" data-name="Text">
              <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5452">
                Devansh Somvanshi
              </p>
              <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5453">
                Male, 29 Years
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5454" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5455" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5456" data-name="Free Cancellation wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5457" data-name="Free Cancellation">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5458" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5459">
              Bought by 1,19,417+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5460" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5461" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5462" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5463">
                Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5464">
                ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5465" data-name="spacer" />
            <div className="bg-[#f7e6ea] content-stretch flex items-start p-[6px] relative rounded-[999px] shrink-0" data-node-id="810:5466" data-name="Icon">
              <div className="h-[31px] relative shrink-0 w-[26px]" data-node-id="810:5467" data-name="Art / Shield · Free Cancellation">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5468" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="810:5469" data-name="Refund">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="810:5470">
              100% refund
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5471">
              on cancellation
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5472" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:5473">
            Cancel anytime up to 6 hours before bus departure time to get a full refund. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5474" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5475" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5476" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5477">
                Add Free Cancellation
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5478">
                Only for ₹60 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5479" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5480" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5481" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5482" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5483" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5484">{`Don't add Free Cancellation`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5485" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5486" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="810:5487" data-name="What declining gives you">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5488">
              Without it, you still get a part refund
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5489">
              How much depends on how early you cancel. With it, you get the full fare back.
            </p>
            <div className="h-[16px] relative shrink-0 w-full" data-node-id="810:5490" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:5491">
              The fee itself is not refunded
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:5492">
              You get the ticket price back, not the ₹60.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5493" data-name="Free date change wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5494" data-name="Free date change">
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5495" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5496">
              Included on this bus · no fee
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5497" data-name="gap" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5498" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5499" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5500">
                Free date change
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5501">
                On your return only
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5502" data-name="spacer" />
            <div className="bg-[#ecebf6] content-stretch flex items-start p-[7px] relative rounded-[999px] shrink-0" data-node-id="810:5503" data-name="Icon">
              <IconHourglass className="relative shrink-0 size-[22px]" />
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5505" data-name="gap" />
          <div className="[word-break:break-word] border border-[#dcdce2] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center not-italic py-[14px] relative rounded-[10px] shrink-0 text-center w-full" data-node-id="810:5506" data-name="Promise">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#2e7d32] text-[20px] w-full" data-node-id="810:5507">
              One change
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5508">
              on your return date
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5509" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:5510">
            Move your return to any date, earlier or later. You pay only the price difference. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5511" data-name="gap" />
          <div className="[word-break:break-word] bg-[#faf8f5] content-stretch flex flex-col gap-[12px] items-start leading-[18px] not-italic p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5512" data-name="Rules">
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="810:5513" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] w-full" data-node-id="810:5514">
                You cannot cancel it after that
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5515">
                No refund on the return. Your onward trip is not affected
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-node-id="810:5516" data-name="Rule">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="810:5517">
                Change it up to 8 hours before
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:5518">
                After that the date is fixed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5519" data-name="Trip Guarantee wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5520" data-name="Trip Guarantee">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5521" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5522" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5523">
                Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5524">
                ₹26 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5525" data-name="spacer" />
            <div className="content-stretch flex items-start relative rounded-[999px] shrink-0" data-node-id="810:5526" data-name="Icon">
              <div className="h-[41px] relative shrink-0 w-[34px]" data-node-id="810:5527" data-name="Art / Shield · Trip Guarantee">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtShieldFreeCancellation} />
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5528" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5529">
            Get back full ticket price + ₹500 extra if your bus gets cancelled by the operator. View details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5530" data-name="gap" />
          <div className="bg-[#efeef6] content-stretch flex flex-col gap-[8px] items-start justify-center py-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5531" data-name="Breakdown">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5532">{`You'll get ₹3,419 refund if bus gets cancelled`}</p>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="810:5533" data-name="Row">
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5534" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5535" data-name="Amount">
                  <IconBank className="h-[28px] relative shrink-0 w-[30px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5537">
                    ₹2,919
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5538">
                  Full refund
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#3a57e8] text-[18px] whitespace-nowrap" data-node-id="810:5539">
                +
              </p>
              <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-node-id="810:5540" data-name="Col">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="810:5541" data-name="Amount">
                  <IconWalletCard className="h-[26px] relative shrink-0 w-[28px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="810:5543">
                    ₹500
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="810:5544">
                  Cashback
                </p>
              </div>
            </div>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5545" data-name="gap" />
          <div className="bg-[#dff3d8] content-stretch flex items-start px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-full" data-node-id="810:5546" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] whitespace-nowrap" data-node-id="810:5547">
              Bought by 7,42,445+ people in the last month
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5548" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5549" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5550" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5551">
                Add Trip Guarantee
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5552">
                ₹26 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5553" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5554" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5555" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5556" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5557" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5558">{`Don't add Trip Guarantee`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5559" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5560" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5561" data-name="Travel Insurance wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start px-[16px] py-[18px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5562" data-name="Travel Insurance">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5563" data-name="Title row">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5564" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5565">
                Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5566">
                ₹15 per passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5567" data-name="spacer" />
            <LogoAcko className="h-[24px] relative shrink-0 w-[80px]" />
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5569" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:5570">
            Insure your travel by adding ₹15.0 per passenger. Powered by Acko General Insurance Ltd.
          </p>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5571" data-name="gap" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5572" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5573" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5574" data-name="Art / Cover · Luggage">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverLuggage} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5575">
              In the event of loss of luggage
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5576">
              Upto ₹5,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5577" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5578" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5579" data-name="Icon">
              <div className="relative shrink-0 size-[13px]" data-node-id="810:5580" data-name="Art / Cover · Hospital">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverHospital} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5581">
              In the event of accidental hospitalisation
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5582">
              Upto ₹75,000
            </p>
          </div>
          <div className="bg-[#eaeaf0] h-px relative shrink-0 w-full" data-node-id="810:5583" data-name="Divider" />
          <div className="content-stretch flex gap-[12px] items-center py-[11px] relative shrink-0 w-full" data-node-id="810:5584" data-name="Cover">
            <div className="bg-[#efeef6] content-stretch flex items-start p-[5px] relative rounded-[999px] shrink-0" data-node-id="810:5585" data-name="Icon">
              <div className="relative shrink-0 size-[12px]" data-node-id="810:5586" data-name="Art / Cover · Person">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCoverPerson} />
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5587">
              In case of death/PTD/PPD
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-right whitespace-nowrap" data-node-id="810:5588">
              Upto ₹6 Lakh
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="810:5589" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] min-w-full not-italic relative shrink-0 text-[#1b1bd1] text-[14px] w-[min-content]" data-node-id="810:5590">
            View full coverage details
          </p>
          <div className="h-[14px] relative shrink-0 w-px" data-node-id="810:5591" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5592" data-name="Option">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic relative shrink-0 whitespace-nowrap" data-node-id="810:5593" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="810:5594">
                Add Travel Insurance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)]" data-node-id="810:5595">
                ₹15 for 1 passenger
              </p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5596" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5597" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="h-[10px] relative shrink-0 w-px" data-node-id="810:5598" data-name="gap" />
          <div className="border border-[#dcdce2] border-solid content-stretch flex items-center px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="810:5599" data-name="Option">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="810:5600" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5601">{`Don't add Travel Insurance`}</p>
            </div>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5602" data-name="spacer" />
            <div className="relative shrink-0 size-[20px]" data-node-id="810:5603" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[30px] px-[16px] relative shrink-0 w-full" data-node-id="810:5604" data-name="GST wrap">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="810:5605" data-name="GST">
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="810:5606" data-name="Row">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5607">
              I have a GST number (optional)?
            </p>
            <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5608" data-name="spacer" />
            <div className="border-[#3a3a44] border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px]" data-node-id="810:5609" data-name="Checkbox" />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center not-italic pb-[156px] pt-[26px] relative shrink-0 text-[14px] w-full" data-node-id="810:5610" data-name="Terms">
        <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="810:5611">
          By clicking ‘Pay now’, I accept
        </p>
        <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[40px] items-start justify-center leading-[18px] relative shrink-0 text-[#1b1bd1] w-full whitespace-nowrap" data-node-id="810:5612" data-name="Links">
          <p className="relative shrink-0" data-node-id="810:5613">{`Terms & Conditions`}</p>
          <p className="relative shrink-0" data-node-id="810:5614">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[#e6e6ec] border-solid border-t bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 pb-[26px] pt-[12px] px-[16px] right-0" data-node-id="810:5615" data-name="Pay bar">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="810:5616" data-name="Amount">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5617">
            Amount
          </p>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="810:5618" data-name="spacer" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:5619">
            ₹2,919
          </p>
          <div className="border border-[#8a8a96] border-solid content-stretch flex items-start px-[5px] py-px relative rounded-[4px] shrink-0" data-node-id="810:5620" data-name="Expand">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="810:5621">
              +
            </p>
          </div>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center opacity-45 overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Pay now" showIcon={false} />
      </div>
    </div>
  );
}