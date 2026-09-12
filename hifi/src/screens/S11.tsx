const imgArtRefer = "assets/ec0ef796-ab5a-4a38-bad4-475ca0833e93.png";
const imgIconPolicyBadge = "assets/a7ae7569-2d8a-4a8e-8ba3-30adfa903e1c.png";
const imgIconChat = "assets/e4f7892e-14a2-4a37-bcd7-d15ba79c75df.svg";
const imgArtRedBuddy = "assets/c159bb98-94e5-49c8-ae0e-5ca509a187fd.png";
const imgIconPhone = "assets/be00fe5b-c798-497d-b88d-62acf1d305d4.svg";
const imgIconDirections = "assets/bebcd082-0445-41d4-91f9-9408edb22f75.svg";
const imgGlyph = "assets/edce27a9-3c0c-4a11-9460-bdf39d04e716.svg";
const imgIconList = "assets/49b7538d-a7c1-445a-a40e-3d18587cb448.svg";
const imgArtSafetyVideo = "assets/82fd44c9-607c-4253-9eba-79c323eb9a21.png";
const imgArtHotelPalm = "assets/8b5e2670-6996-4d10-94ce-1ca2005b6839.png";
const imgArtHotelBunk = "assets/1ef25e0f-4f01-4de9-b498-9fd1e2872bd7.png";
const imgArtLiveTracking = "assets/eb72dc8d-521d-4eda-a2ae-6cd68eee8494.png";
const imgArtScratchCard = "assets/1719b144-784f-40e4-bf69-aabf7329cf50.png";
const imgIconCancel = "assets/eaf7aaa8-5b15-4f99-8572-a499f5590e13.svg";
const imgButtonAppleWallet = "assets/659c7bb8-9409-4f1d-b898-52b40a84583f.png";
const imgLogoRedBusMarkWhite = "assets/a64dab4a-2197-48c8-871f-96c58b498ab7.png";
const imgArtTripRewardMark = "assets/34bc959d-d061-454e-8167-1a8c39dc0deb.png";
const imgFrame = "assets/a4acfe59-d8aa-4483-ab10-c40ba5ace219.png";
const imgArtSunburst = "assets/48e81a14-e2ea-4eea-a66f-2c66872be76f.svg";
const imgArtSeatGuarantee = "assets/725098d2-098a-49d4-9266-ec2152fec7cd.svg";
const imgButtonShare = "assets/1e695a68-6c72-42f9-9435-d5254d14e0cc.svg";
const imgButtonSupport = "assets/706d4bea-9333-4123-a98c-9a42f24c0a8c.svg";
const imgButtonClose = "assets/81890823-36d2-4ecf-9cd5-bf7bf13f4b0f.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgMarker = "assets/6280aa85-f461-44e4-9003-fd9bae23d7bd.svg";
const imgMarker1 = "assets/dfe32957-1e71-451e-9967-a4e3d86aa505.svg";
const imgDashes = "assets/8849d02a-2d02-4ed6-8c36-a95bc7bb0916.svg";
const imgNotch = "assets/70f3dac5-525f-4be5-93af-b2bfddace60f.svg";
const imgGlyph1 = "assets/edce27a9-3c0c-4a11-9460-bdf39d04e716.svg";

function ArtRefer({ className }: { className?: string }) {
  return (
    <div className={className || "h-[180px] overflow-clip relative w-[162px]"} data-node-id="678:4046" data-name="Art / Refer">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtRefer} />
    </div>
  );
}

function IconPolicyBadge({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[22px]"} data-node-id="750:4240" data-name="Icon / Policy Badge">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconPolicyBadge} />
    </div>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="685:4042" data-name="Icon / Chat">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="685:4040" data-name="Icon / Chat">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChat} />
      </div>
    </div>
  );
}

function ArtRedBuddy({ className }: { className?: string }) {
  return (
    <div className={className || "h-[79px] overflow-clip relative w-[60px]"} data-node-id="678:4045" data-name="Art / redBuddy">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtRedBuddy} />
    </div>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="672:4034" data-name="Icon / Phone">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="672:4032" data-name="Icon / Phone">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPhone} />
      </div>
    </div>
  );
}

function IconDirections({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="672:4031" data-name="Icon / Directions">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="672:4027" data-name="Icon / Directions">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDirections} />
      </div>
    </div>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="116:1171" data-name="Icon / Chevron Right">
      <div className="absolute left-0 size-[20px] top-0" data-node-id="116:1172" data-name="glyph">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
      </div>
    </div>
  );
}

function IconList({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="672:4026" data-name="Icon / List">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="672:4021" data-name="Icon / List">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconList} />
      </div>
    </div>
  );
}

function ArtSafetyVideo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[182px] overflow-clip relative w-[326px]"} data-node-id="678:4044" data-name="Art / Safety video">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtSafetyVideo} />
    </div>
  );
}

function ArtHotelPalm({ className }: { className?: string }) {
  return (
    <div className={className || "h-[142px] overflow-clip relative w-[120px]"} data-node-id="678:4043" data-name="Art / Hotel · Palm">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtHotelPalm} />
    </div>
  );
}

function ArtHotelBunk({ className }: { className?: string }) {
  return (
    <div className={className || "h-[142px] overflow-clip relative w-[240px]"} data-node-id="678:4042" data-name="Art / Hotel · Bunk">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtHotelBunk} />
    </div>
  );
}

function ArtLiveTracking({ className }: { className?: string }) {
  return (
    <div className={className || "h-[168px] overflow-clip relative w-[326px]"} data-node-id="678:4041" data-name="Art / Live tracking">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtLiveTracking} />
    </div>
  );
}

function ArtScratchCard({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[58px]"} data-node-id="678:4040" data-name="Art / Scratch card">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtScratchCard} />
    </div>
  );
}

function IconCancel({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="672:4020" data-name="Icon / Cancel">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="672:4016" data-name="Icon / Cancel">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCancel} />
      </div>
    </div>
  );
}

function ButtonAppleWallet({ className }: { className?: string }) {
  return (
    <div className={className || "h-[53.33px] relative w-[370px]"} data-node-id="121:1330" data-name="Button / Apple Wallet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonAppleWallet} />
    </div>
  );
}

function LogoRedBusMarkWhite({ className }: { className?: string }) {
  return (
    <div className={className || "h-[17px] overflow-clip relative w-[25px]"} data-node-id="750:4241" data-name="Logo / redBus mark · white">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoRedBusMarkWhite} />
    </div>
  );
}

function ArtTripRewardMark({ className }: { className?: string }) {
  return (
    <div className={className || "h-[26px] overflow-clip relative w-[100px]"} data-node-id="678:4047" data-name="Art / tripReward mark">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardMark} />
    </div>
  );
}

function ArtSeatGuarantee({ className }: { className?: string }) {
  return (
    <div className={className || "bg-gradient-to-r from-[#a3e4ad] h-[44.67px] overflow-clip relative to-[#d7f2da] w-[402px]"} data-node-id="121:1325" data-name="Art / Seat Guarantee">
      <div className="absolute right-[-80px] size-[230px] top-[-100px]" data-node-id="289:2611" data-name="Art / Sunburst">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[20px] left-[16px] not-italic text-[16px] text-[color:var(--text\/primary,#1d1d1d)] top-[calc(50%-13px)] whitespace-nowrap" data-node-id="289:2634">
        Seat Guarantee with redBus
      </p>
      <div className="-translate-y-1/2 absolute h-[28px] right-[28px] top-[calc(50%+0.67px)] w-[24px]" data-node-id="289:2635" data-name="Frame">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFrame} />
      </div>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSeatGuarantee} />
    </div>
  );
}

function ButtonShare({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1328" data-name="Button / Share">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonShare} />
    </div>
  );
}

function ButtonSupport({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1327" data-name="Button / Support">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonSupport} />
    </div>
  );
}

function ButtonClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1326" data-name="Button / Close">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonClose} />
    </div>
  );
}

export default function S11ReturnDroppedTicketDetails() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="810:6297" data-name="S11 · Return dropped · Ticket details">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="810:6298" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="810:6299" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I810:6299;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I810:6299;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="810:6300" data-name="Nav">
          <ButtonClose className="-translate-y-1/2 absolute left-[12px] size-[44px] top-1/2" />
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[200px]" data-node-id="810:6302" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="810:6303">
              Ticket details
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="810:6304">
              Ticket #TV9Q92193734
            </p>
          </div>
          <ButtonSupport className="-translate-y-1/2 absolute right-[64px] size-[44px] top-1/2" />
          <ButtonShare className="-translate-y-1/2 absolute right-[12px] size-[44px] top-1/2" />
        </div>
      </div>
      <ArtSeatGuarantee className="bg-gradient-to-r from-[#a3e4ad] h-[43.337px] overflow-clip relative shrink-0 to-[#d7f2da] w-[390px]" />
      <div className="bg-white content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="810:6308" data-name="Tabs">
        <div className="bg-[#c54646] content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="810:6309" data-name="Tab">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[15px] text-white w-[100px]" data-node-id="810:6310">
            Ticket details
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="810:6311" data-name="Tab">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[91px]" data-node-id="810:6312">
            Live tracking
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="810:6313" data-name="Tab">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[46px]" data-node-id="810:6314">
            Hotels
          </p>
        </div>
        <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="810:6315" data-name="Tab">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[46px]" data-node-id="810:6316">
            Safety
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="810:6317" data-name="Content">
        <div className="bg-gradient-to-r content-stretch flex from-[#faf2db] gap-[10px] items-center overflow-clip px-[14px] py-[12px] relative rounded-[12px] shrink-0 to-[#efdbea] w-full" data-node-id="810:6318" data-name="tripReward banner">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="810:6319" data-name="Text">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="810:6320" data-name="Top">
              <ArtTripRewardMark className="h-[25px] relative shrink-0 w-[96px]" />
              <div className="bg-[#af8b3c] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="810:6322" data-name="Days left">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic relative shrink-0 text-[13px] text-white w-[72px]" data-node-id="810:6323">
                  4 days left
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="810:6324">
              Unlock to get free ticket with Laxmi Holidays
            </p>
          </div>
          <IconChevronRight className="relative shrink-0 size-[20px]" />
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:6326">
          ONWARD
        </p>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="810:6327" data-name="Onward ticket">
          <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="810:6328" data-name="Journey">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6329" data-name="From">
              <div className="relative shrink-0 size-[22px]" data-node-id="810:6330" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="810:6333" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="810:6334">
                  Delhi
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="810:6335">
                  ISBT Kashmiri Gate
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="810:6336" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="810:6337">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="810:6338">
                  Thu, 10 Sep
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="810:6339" data-name="Duration">
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:6340" data-name="Rule" />
              <LogoRedBusMarkWhite className="h-[17px] relative shrink-0 w-[25px]" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="810:6342">
                8h 5m
              </p>
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="810:6343" data-name="Rule" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6344" data-name="To">
              <div className="relative shrink-0 size-[22px]" data-node-id="810:6345" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="810:6348" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="810:6349">
                  Nainital
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="810:6350">
                  Nainital Bus Stand
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="810:6351" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="810:6352">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="810:6353">
                  Fri, 11 Sep
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="810:6354" data-name="Passenger">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="810:6355" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="810:6356">
                LAXMI HOLIDAYS PVT LTD
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="810:6357">
                Devansh Somvanshi
              </p>
            </div>
            <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="810:6358" data-name="Seat badge">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="810:6359">
                U4
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center pb-[18px] pt-[4px] relative shrink-0 w-full" data-node-id="810:6366" data-name="Tear off">
            <div className="h-[22px] relative shrink-0 w-full" data-node-id="810:6367" data-name="Perforation">
              <div className="absolute h-0 left-[24px] top-[11px] w-[310px]" data-node-id="810:6368" data-name="Dashes">
                <div className="absolute inset-[-1.5px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgDashes} />
                </div>
              </div>
              <div className="absolute left-[-11px] size-[22px] top-0" data-node-id="810:6369" data-name="Notch">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
              </div>
              <div className="absolute left-[347px] size-[22px] top-0" data-node-id="810:6370" data-name="Notch">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] text-center w-full" data-node-id="810:6371">
              Ticket details
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="810:6594" data-name="Error">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] text-center w-full" data-node-id="810:6595">
            No return booked
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] text-center w-full" data-node-id="810:6596">
            You booked this trip one way. You can book a return any time.
          </p>
          <div className="bg-[#c54646] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="810:6597" data-name="Button / Book a return">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="810:6598">
              Book a return
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="810:6419">
          Bus number and tracking details will be shared on the day of journey on +*********499
        </p>
        <ButtonAppleWallet className="h-[51.6px] relative shrink-0 w-[358px]" />
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="810:6421" data-name="Ticket actions">
          <div className="content-stretch flex gap-[14px] items-center p-[16px] relative shrink-0 w-full" data-node-id="810:6422" data-name="Review and cancel">
            <IconCancel className="relative shrink-0 size-[26px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative" data-node-id="810:6424" data-name="Text">
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] underline whitespace-nowrap" data-node-id="810:6425">
                Review and cancel
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:6426">
                85% refund if you cancel From 9th Sep 11:55 PM Until 13th Sep 11:55 PM
              </p>
            </div>
            <div className="relative shrink-0 size-[20px]" data-node-id="810:6427" data-name="Icon / Chevron Right">
              <div className="absolute left-0 size-[20px] top-0" data-node-id="I810:6427;116:1172" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="810:6446">
          Ticket sent to your email and WhatsApp.
        </p>
        <div className="bg-[#f1e5b7] content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[14px] relative rounded-[12px] shrink-0 w-full" data-node-id="810:6447" data-name="Scratch card">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="810:6448" data-name="Text">
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#594d2e] text-[14px] w-full" data-node-id="810:6449">
              Congratulations 🎉
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1d1d1d] text-[18px] w-full" data-node-id="810:6450">
              You won a scratch card
            </p>
          </div>
          <ArtScratchCard className="relative shrink-0 size-[58px]" />
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="810:6452" data-name="Live tracking">
          <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="810:6453" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="810:6454">
              Live tracking
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="810:6455" data-name="Divider" />
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="810:6456" data-name="Body">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="810:6457">
              Starts 1 hr before boarding time
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="810:6458">
              Check back later for updates
            </p>
            <div className="h-[8px] relative shrink-0 w-full" data-node-id="810:6459" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[min-content]" data-node-id="810:6460">
              Laxmi Holidays Pvt Ltd
            </p>
            <div className="h-[10px] relative shrink-0 w-full" data-node-id="810:6461" data-name="gap" />
            <ArtLiveTracking className="h-[168px] relative rounded-[8px] shrink-0 w-[326px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#e7e6fa] content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="810:6463" data-name="Hotels">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-full" data-node-id="810:6464">
          Book your stay near Delhi
        </p>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#4b4be8] text-[20px] w-full" data-node-id="810:6465">
          Verified stays
        </p>
        <div className="h-[8px] relative shrink-0 w-full" data-node-id="810:6466" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="810:6467">
          Tue, 15 Sep - Wed, 16 Sep
        </p>
        <div className="h-[12px] relative shrink-0 w-full" data-node-id="810:6468" data-name="gap" />
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="810:6469" data-name="Cards">
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[240px]" data-node-id="810:6470" data-name="Card / Hotel">
            <ArtHotelBunk className="h-[142px] relative shrink-0 w-[240px]" />
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="810:6472" data-name="Text">
              <div className="content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[18px] overflow-clip relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6473" data-name="Place">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="810:6474">
                  Paharganj, Delhi
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through relative shrink-0 w-[41px]" data-node-id="810:6475">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:6476" data-name="Name">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="810:6477">
                  Bunk Hostel Delhi
                </p>
                <p className="relative shrink-0 w-[42px]" data-node-id="810:6478">
                  ₹436
                </p>
              </div>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6479">
                3.8 km from ISBT Ka…
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6480">
                980 m drive to New…
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[240px]" data-node-id="810:6481" data-name="Card / Hotel">
            <ArtHotelPalm className="h-[142px] relative shrink-0 w-[240px]" />
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="810:6483" data-name="Text">
              <div className="content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[18px] overflow-clip relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6484" data-name="Place">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="810:6485">
                  Paharganj, Delhi
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through relative shrink-0 w-[40px]" data-node-id="810:6486">
                  ₹2,100
                </p>
              </div>
              <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="810:6487" data-name="Name">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="810:6488">
                  Hotel Palm Dor
                </p>
                <p className="relative shrink-0 w-[41px]" data-node-id="810:6489">
                  ₹899
                </p>
              </div>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6490">
                3.1 km from ISBT K…
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="810:6491">
                4 minutes walk to I…
              </p>
            </div>
          </div>
        </div>
        <div className="h-[14px] relative shrink-0 w-full" data-node-id="810:6492" data-name="gap" />
        <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="810:6493" data-name="Button / View all Hotels">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[116px]" data-node-id="810:6494">
            View all Hotels
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-center pb-[24px] pt-[16px] relative shrink-0 w-full" data-node-id="810:6495" data-name="Content · below hotels">
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6496" data-name="Safety Tips">
          <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="810:6497" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="810:6498">
              Safety Tips
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="810:6499" data-name="Body">
            <ArtSafetyVideo className="h-[182px] relative rounded-[10px] shrink-0 w-[326px]" />
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6501" data-name="View booking policy">
          <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="810:6502" data-name="Row">
            <IconList className="relative shrink-0 size-[26px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="810:6504" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#0000e4] text-[16px] w-full" data-node-id="810:6505">
                View booking policy
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:6506">
                Reschedule and cancellation policy
              </p>
            </div>
            <IconChevronRight className="relative shrink-0 size-[20px]" />
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6508" data-name="View bus details">
          <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="810:6509" data-name="Row">
            <IconList className="relative shrink-0 size-[26px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="810:6511" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#0000e4] text-[16px] w-full" data-node-id="810:6512">
                View bus details
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="810:6513">
                Travel policy, amenities, etc.
              </p>
            </div>
            <IconChevronRight className="relative shrink-0 size-[20px]" />
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6515" data-name="Boarding point details">
          <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="810:6516" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="810:6517">
              Boarding point details
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="810:6518" data-name="Divider" />
          <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="810:6519" data-name="Body">
            <div className="bg-[#e4e4f6] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[8px] shrink-0" data-node-id="810:6520" data-name="When">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] w-[125px]" data-node-id="810:6521">
                23:55 · Mon, 14 Sep
              </p>
            </div>
            <div className="h-[10px] relative shrink-0 w-full" data-node-id="810:6522" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="810:6523">
              Nainital Bus Stand
            </p>
            <div className="h-[4px] relative shrink-0 w-full" data-node-id="810:6524" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="810:6525">
              Tallital, near the boat house
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="810:6526">
              Opposite Nainital Bus Stand ticket counter
            </p>
            <div className="h-[14px] relative shrink-0 w-full" data-node-id="810:6527" data-name="gap" />
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="810:6528" data-name="Divider" />
          <div className="content-stretch flex items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="810:6529" data-name="Actions">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip relative" data-node-id="810:6530" data-name="Action">
              <IconDirections className="relative shrink-0 size-[22px]" />
              <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] underline w-[81px]" data-node-id="810:6532">
                Directions
              </p>
            </div>
            <div className="bg-[#e4e4e4] h-[24px] relative shrink-0 w-px" data-node-id="810:6533" data-name="Rule" />
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip relative" data-node-id="810:6534" data-name="Action">
              <IconPhone className="relative shrink-0 size-[22px]" />
              <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] underline w-[69px]" data-node-id="810:6536">
                Bus stop
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6537" data-name="Need help">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="810:6538" data-name="Body">
            <ArtRedBuddy className="h-[79px] relative shrink-0 w-[60px]" />
            <div className="h-[12px] relative shrink-0 w-full" data-node-id="810:6540" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[25px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[19px] text-center w-[min-content]" data-node-id="810:6541">
              Need help with policy details?
            </p>
            <div className="h-[8px] relative shrink-0 w-full" data-node-id="810:6542" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] text-center w-[min-content]" data-node-id="810:6543">
              24x7 support · Quick resolution · Multilingual
            </p>
            <div className="h-[14px] relative shrink-0 w-full" data-node-id="810:6544" data-name="gap" />
            <div className="bg-[#f5dada] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="810:6545" data-name="Button / Chat">
              <IconChat className="relative shrink-0 size-[22px]" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[156px]" data-node-id="810:6547">
                Chat with redBuddy
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="810:6548" data-name="Travel policies">
          <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="810:6549" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="810:6550">
              Travel policies
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="810:6551" data-name="Divider" />
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[16px] py-[18px] relative shrink-0 w-full" data-node-id="810:6552" data-name="Body">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6553" data-name="Row / Policy">
              <IconPolicyBadge className="relative shrink-0 size-[22px]" />
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I810:6553;244:1793" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I810:6553;244:1794">
                  Child passenger policy
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I810:6553;244:1795">
                  Children above the age of 4 will need a ticket
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6554" data-name="Row / Policy">
              <IconPolicyBadge className="relative shrink-0 size-[22px]" />
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I810:6554;244:1793" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I810:6554;244:1794">
                  Luggage policy
                </p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I810:6554;244:1795">
                  <p className="leading-[22px] mb-0">2 pieces of luggage will be accepted free of charge per passenger. Excess items will be chargeable</p>
                  <p className="leading-[22px]">Excess baggage over 20 kgs per passenger will be chargeable</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6555" data-name="Row / Policy">
              <IconPolicyBadge className="relative shrink-0 size-[22px]" />
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I810:6555;244:1793" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I810:6555;244:1794">
                  Pets Policy
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I810:6555;244:1795">
                  Pets are not allowed
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6556" data-name="Row / Policy">
              <IconPolicyBadge className="relative shrink-0 size-[22px]" />
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I810:6556;244:1793" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I810:6556;244:1794">
                  Liquor Policy
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I810:6556;244:1795">
                  Carrying or consuming liquor inside the bus is prohibited. Bus operator reserves the right to deboard drunk passengers.
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="810:6557" data-name="Row / Policy">
              <IconPolicyBadge className="relative shrink-0 size-[22px]" />
              <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="I810:6557;244:1793" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I810:6557;244:1794">
                  Pick up time policy
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I810:6557;244:1795">
                  <span className="leading-[22px] text-[16px]">{`Bus operator is not obligated to wait beyond the scheduled departure time of the bus. No refund request w… `}</span>
                  <span className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] text-[#1d1d1d] text-[16px] underline">read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[17px] items-center overflow-clip pl-[30px] pr-[16px] relative shrink-0 w-full" data-node-id="810:6558" data-name="Refer">
          <div className="content-stretch flex flex-col items-start overflow-clip py-[18px] relative shrink-0 w-[180px]" data-node-id="810:6559" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="810:6560">
              Loving the redBus experience? Let your friends know too!
            </p>
            <div className="h-[8px] relative shrink-0 w-full" data-node-id="810:6561" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="810:6562">
              Refer your friends and earn Rs 100 for every successful referral.
            </p>
            <div className="h-[14px] relative shrink-0 w-full" data-node-id="810:6563" data-name="gap" />
            <div className="bg-[#efcdcd] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[11px] relative rounded-[999px] shrink-0" data-node-id="810:6564" data-name="Button / Refer Now">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="810:6565">
                Refer Now
              </p>
            </div>
          </div>
          <ArtRefer className="h-[163px] relative shrink-0 w-[147px]" />
        </div>
      </div>
    </div>
  );
}