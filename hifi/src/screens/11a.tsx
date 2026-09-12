const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgButtonClose = "assets/27f3359b-7642-4d28-ae07-9dbf13647bef.svg";
const imgIconCalendar = "assets/8b1dbaae-1b05-4657-bb9a-3b69452dc009.svg";
const imgArtRefer = "assets/ec0ef796-ab5a-4a38-bad4-475ca0833e93.png";
const imgIconPolicyBadge = "assets/a7ae7569-2d8a-4a8e-8ba3-30adfa903e1c.png";
const imgIconChat = "assets/e4f7892e-14a2-4a37-bcd7-d15ba79c75df.svg";
const imgArtRedBuddy = "assets/c159bb98-94e5-49c8-ae0e-5ca509a187fd.png";
const imgIconPhone = "assets/be00fe5b-c798-497d-b88d-62acf1d305d4.svg";
const imgIconDirections = "assets/bebcd082-0445-41d4-91f9-9408edb22f75.svg";
const imgGlyph1 = "assets/edce27a9-3c0c-4a11-9460-bdf39d04e716.svg";
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
const imgArtSunburst = "assets/f91547bb-5e6a-46ab-b983-65c3f2e97334.svg";
const imgArtSeatGuarantee = "assets/470260ce-0282-4e81-a870-bbc84ca38a54.svg";
const imgButtonShare = "assets/0027d395-abdb-4491-9888-e71f7ab35c29.svg";
const imgButtonSupport = "assets/9a1ed022-0e7e-4975-9d57-bb7a07793731.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgMarker = "assets/6280aa85-f461-44e4-9003-fd9bae23d7bd.svg";
const imgMarker1 = "assets/dfe32957-1e71-451e-9967-a4e3d86aa505.svg";
const imgDashes = "assets/8849d02a-2d02-4ed6-8c36-a95bc7bb0916.svg";
const imgNotch = "assets/70f3dac5-525f-4be5-93af-b2bfddace60f.svg";
const imgGlyph2 = "assets/edce27a9-3c0c-4a11-9460-bdf39d04e716.svg";
const imgRadio = "assets/371bc1c5-4d2e-4ba6-b088-ef0781008474.svg";

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

function ButtonClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1326" data-name="Button / Close">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonClose} />
    </div>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="10:17" data-name="Icon / Calendar">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCalendar} />
    </div>
  );
}

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
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
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

export default function Component11AChangeOfPlans() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="777:4259" data-name="11a · Change of plans">
      <div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-node-id="777:4260" data-name="Backdrop">
        <div className="absolute bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[390px]" data-node-id="777:4261" data-name="Ticket · behind">
          <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="777:4262" data-name="Header">
            <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="777:4263" data-name="Status Bar / Light">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I777:4263;13:3">
                9:41
              </p>
              <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I777:4263;13:4" data-name="Status icons">
                <div className="absolute inset-[-1.3%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
                </div>
              </div>
            </div>
            <div className="h-[63px] relative shrink-0 w-full" data-node-id="777:4264" data-name="Nav">
              <ButtonClose className="-translate-y-1/2 absolute left-[12px] size-[44px] top-1/2" />
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[200px]" data-node-id="777:4266" data-name="Titles">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="777:4267">
                  Ticket details
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="777:4268">
                  Ticket #TV9Q92193734
                </p>
              </div>
              <ButtonSupport className="-translate-y-1/2 absolute right-[64px] size-[44px] top-1/2" />
              <ButtonShare className="-translate-y-1/2 absolute right-[12px] size-[44px] top-1/2" />
            </div>
          </div>
          <ArtSeatGuarantee className="bg-gradient-to-r from-[#a3e4ad] h-[43.337px] overflow-clip relative shrink-0 to-[#d7f2da] w-[390px]" />
          <div className="bg-white content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="777:4272" data-name="Tabs">
            <div className="bg-[#c54646] content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="777:4273" data-name="Tab">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[15px] text-white w-[100px]" data-node-id="777:4274">
                Ticket details
              </p>
            </div>
            <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="777:4275" data-name="Tab">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[91px]" data-node-id="777:4276">
                Live tracking
              </p>
            </div>
            <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="777:4277" data-name="Tab">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[46px]" data-node-id="777:4278">
                Hotels
              </p>
            </div>
            <div className="content-stretch flex items-center overflow-clip px-[20px] py-[9px] relative rounded-[8px] shrink-0" data-node-id="777:4279" data-name="Tab">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-[46px]" data-node-id="777:4280">
                Safety
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="777:4281" data-name="Content">
            <div className="bg-gradient-to-r content-stretch flex from-[#faf2db] gap-[10px] items-center overflow-clip px-[14px] py-[12px] relative rounded-[12px] shrink-0 to-[#efdbea] w-full" data-node-id="777:4282" data-name="tripReward banner">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="777:4283" data-name="Text">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="777:4284" data-name="Top">
                  <ArtTripRewardMark className="h-[25px] relative shrink-0 w-[96px]" />
                  <div className="bg-[#af8b3c] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="777:4286" data-name="Days left">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic relative shrink-0 text-[13px] text-white w-[72px]" data-node-id="777:4287">
                      4 days left
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="777:4288">
                  Unlock to get free ticket with Laxmi Holidays
                </p>
              </div>
              <IconChevronRight className="relative shrink-0 size-[20px]" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="777:4290">
              ONWARD
            </p>
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="777:4291" data-name="Onward ticket">
              <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="777:4292" data-name="Journey">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4293" data-name="From">
                  <div className="relative shrink-0 size-[22px]" data-node-id="777:4294" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4297" data-name="Place">
                    <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4298">
                      Delhi
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="777:4299">
                      ISBT Kashmiri Gate
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4300" data-name="When">
                    <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="777:4301">
                      23:55
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="777:4302">
                      Thu, 10 Sep
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="777:4303" data-name="Duration">
                  <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="777:4304" data-name="Rule" />
                  <LogoRedBusMarkWhite className="h-[17px] relative shrink-0 w-[25px]" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4306">
                    8h 5m
                  </p>
                  <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="777:4307" data-name="Rule" />
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4308" data-name="To">
                  <div className="relative shrink-0 size-[22px]" data-node-id="777:4309" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4312" data-name="Place">
                    <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4313">
                      Nainital
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="777:4314">
                      Nainital Bus Stand
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4315" data-name="When">
                    <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="777:4316">
                      08:00
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="777:4317">
                      Fri, 11 Sep
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="777:4318" data-name="Passenger">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="777:4319" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4320">
                    LAXMI HOLIDAYS PVT LTD
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="777:4321">
                    Devansh Somvanshi
                  </p>
                </div>
                <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="777:4322" data-name="Seat badge">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="777:4323">
                    U4
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center pb-[18px] pt-[4px] relative shrink-0 w-full" data-node-id="777:4330" data-name="Tear off">
                <div className="h-[22px] relative shrink-0 w-full" data-node-id="777:4331" data-name="Perforation">
                  <div className="absolute h-0 left-[24px] top-[11px] w-[310px]" data-node-id="777:4332" data-name="Dashes">
                    <div className="absolute inset-[-1.5px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgDashes} />
                    </div>
                  </div>
                  <div className="absolute left-[-11px] size-[22px] top-0" data-node-id="777:4333" data-name="Notch">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
                  </div>
                  <div className="absolute left-[347px] size-[22px] top-0" data-node-id="777:4334" data-name="Notch">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] text-center w-full" data-node-id="777:4335">
                  Ticket details
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="777:4336">
              RETURN
            </p>
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="777:4337" data-name="Return ticket">
              <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="777:4338" data-name="Journey">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4339" data-name="From">
                  <div className="relative shrink-0 size-[22px]" data-node-id="777:4340" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4343" data-name="Place">
                    <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4344">
                      Nainital
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="777:4345">
                      Nainital Bus Stand
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4346" data-name="When">
                    <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="777:4347">
                      23:55
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="777:4348">
                      Mon, 14 Sep
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="777:4349" data-name="Duration">
                  <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="777:4350" data-name="Rule" />
                  <LogoRedBusMarkWhite className="h-[17px] relative shrink-0 w-[25px]" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4352">
                    8h 5m
                  </p>
                  <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="777:4353" data-name="Rule" />
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4354" data-name="To">
                  <div className="relative shrink-0 size-[22px]" data-node-id="777:4355" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4358" data-name="Place">
                    <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4359">
                      Delhi
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="777:4360">
                      ISBT Kashmiri Gate
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="777:4361" data-name="When">
                    <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="777:4362">
                      08:00
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="777:4363">
                      Tue, 15 Sep
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="777:4364" data-name="Passenger">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="777:4365" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="777:4366">
                    LAXMI HOLIDAYS PVT LTD
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="777:4367">
                    Devansh Somvanshi
                  </p>
                </div>
                <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="777:4368" data-name="Seat badge">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="777:4369">
                    U2
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center pb-[18px] pt-[4px] relative shrink-0 w-full" data-node-id="777:4376" data-name="Tear off">
                <div className="h-[22px] relative shrink-0 w-full" data-node-id="777:4377" data-name="Perforation">
                  <div className="absolute h-0 left-[24px] top-[11px] w-[310px]" data-node-id="777:4378" data-name="Dashes">
                    <div className="absolute inset-[-1.5px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgDashes} />
                    </div>
                  </div>
                  <div className="absolute left-[-11px] size-[22px] top-0" data-node-id="777:4379" data-name="Notch">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
                  </div>
                  <div className="absolute left-[347px] size-[22px] top-0" data-node-id="777:4380" data-name="Notch">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] text-center w-full" data-node-id="777:4381">
                  Ticket details
                </p>
              </div>
              <div className="border-[#e4e4e4] border-solid border-t content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="777:4382" data-name="Change day">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="I777:4382;116:1175" data-name="Text">
                  <a className="[word-break:break-word] block cursor-pointer font-['Inter:Bold'] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="I777:4382;116:1176">
                    <p className="leading-[22px]">Change your return day</p>
                  </a>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] min-w-full not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="I777:4382;116:1177">
                    Any date, earlier or later. Pay only the price difference.
                  </p>
                  <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[var(--radius\/4,4px)] shrink-0" data-node-id="I777:4382;116:1178" data-name="Balance">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I777:4382;116:1179">
                      1 change left
                    </p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[20px]" data-node-id="I777:4382;116:1180" data-name="Icon / Chevron Right">
                  <div className="absolute left-0 size-[20px] top-0" data-node-id="I777:4382;116:1180;116:1172" data-name="glyph">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="777:4383">
              Bus number and tracking details will be shared on the day of journey on +*********499
            </p>
            <ButtonAppleWallet className="h-[51.6px] relative shrink-0 w-[358px]" />
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="777:4385" data-name="Ticket actions">
              <div className="content-stretch flex gap-[14px] items-center p-[16px] relative shrink-0 w-full" data-node-id="777:4386" data-name="Review and cancel">
                <IconCancel className="relative shrink-0 size-[26px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative" data-node-id="777:4388" data-name="Text">
                  <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] underline whitespace-nowrap" data-node-id="777:4389">
                    Review and cancel
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="777:4390">
                    85% refund if you cancel From 9th Sep 11:55 PM Until 13th Sep 11:55 PM
                  </p>
                </div>
                <div className="relative shrink-0 size-[20px]" data-node-id="777:4391" data-name="Icon / Chevron Right">
                  <div className="absolute left-0 size-[20px] top-0" data-node-id="I777:4391;116:1172" data-name="glyph">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="777:4392" data-name="Changing your return day">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#636363)] tracking-[0.4px] w-full" data-node-id="777:4393">
                CHANGING YOUR RETURN DAY
              </p>
              <div className="h-[12px] relative shrink-0 w-full" data-node-id="777:4394" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="777:4395">
                Open your ticket
              </p>
              <div className="h-[4px] relative shrink-0 w-full" data-node-id="777:4396" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="777:4397">
                Tap Change day and pick another date
              </p>
              <div className="h-[16px] relative shrink-0 w-full" data-node-id="777:4398" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="777:4399">
                No fee to change it
              </p>
              <div className="h-[4px] relative shrink-0 w-full" data-node-id="777:4400" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="777:4401">
                Pay only if the new bus costs more
              </p>
              <div className="h-[16px] relative shrink-0 w-full" data-node-id="777:4402" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="777:4403">
                Change to any date
              </p>
              <div className="h-[4px] relative shrink-0 w-full" data-node-id="777:4404" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="777:4405">
                Any day in that range, earlier or later
              </p>
              <div className="h-[16px] relative shrink-0 w-full" data-node-id="777:4406" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] w-full" data-node-id="777:4407">
                You cannot cancel after that
              </p>
              <div className="h-[4px] relative shrink-0 w-full" data-node-id="777:4408" data-name="gap" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="777:4409">
                No refund on the return
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="777:4410">
              Ticket sent to your email and WhatsApp.
            </p>
            <div className="bg-[#f1e5b7] content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[14px] relative rounded-[12px] shrink-0 w-full" data-node-id="777:4411" data-name="Scratch card">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4412" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#594d2e] text-[14px] w-full" data-node-id="777:4413">
                  Congratulations 🎉
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1d1d1d] text-[18px] w-full" data-node-id="777:4414">
                  You won a scratch card
                </p>
              </div>
              <ArtScratchCard className="relative shrink-0 size-[58px]" />
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="777:4416" data-name="Live tracking">
              <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="777:4417" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="777:4418">
                  Live tracking
                </p>
              </div>
              <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="777:4419" data-name="Divider" />
              <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="777:4420" data-name="Body">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="777:4421">
                  Starts 1 hr before boarding time
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="777:4422">
                  Check back later for updates
                </p>
                <div className="h-[8px] relative shrink-0 w-full" data-node-id="777:4423" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[min-content]" data-node-id="777:4424">
                  Laxmi Holidays Pvt Ltd
                </p>
                <div className="h-[10px] relative shrink-0 w-full" data-node-id="777:4425" data-name="gap" />
                <ArtLiveTracking className="h-[168px] relative rounded-[8px] shrink-0 w-[326px]" />
              </div>
            </div>
          </div>
          <div className="bg-[#e7e6fa] content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="777:4427" data-name="Hotels">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-full" data-node-id="777:4428">
              Book your stay near Delhi
            </p>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#4b4be8] text-[20px] w-full" data-node-id="777:4429">
              Verified stays
            </p>
            <div className="h-[8px] relative shrink-0 w-full" data-node-id="777:4430" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="777:4431">
              Tue, 15 Sep - Wed, 16 Sep
            </p>
            <div className="h-[12px] relative shrink-0 w-full" data-node-id="777:4432" data-name="gap" />
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="777:4433" data-name="Cards">
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[240px]" data-node-id="777:4434" data-name="Card / Hotel">
                <ArtHotelBunk className="h-[142px] relative shrink-0 w-[240px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="777:4436" data-name="Text">
                  <div className="content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[18px] overflow-clip relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4437" data-name="Place">
                    <p className="flex-[1_0_0] min-w-px relative" data-node-id="777:4438">
                      Paharganj, Delhi
                    </p>
                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through relative shrink-0 w-[41px]" data-node-id="777:4439">
                      ₹1,499
                    </p>
                  </div>
                  <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="777:4440" data-name="Name">
                    <p className="flex-[1_0_0] min-w-px relative" data-node-id="777:4441">
                      Bunk Hostel Delhi
                    </p>
                    <p className="relative shrink-0 w-[42px]" data-node-id="777:4442">
                      ₹436
                    </p>
                  </div>
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4443">
                    3.8 km from ISBT Ka…
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4444">
                    980 m drive to New…
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[240px]" data-node-id="777:4445" data-name="Card / Hotel">
                <ArtHotelPalm className="h-[142px] relative shrink-0 w-[240px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="777:4447" data-name="Text">
                  <div className="content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[18px] overflow-clip relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4448" data-name="Place">
                    <p className="flex-[1_0_0] min-w-px relative" data-node-id="777:4449">
                      Paharganj, Delhi
                    </p>
                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through relative shrink-0 w-[40px]" data-node-id="777:4450">
                      ₹2,100
                    </p>
                  </div>
                  <div className="content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="777:4451" data-name="Name">
                    <p className="flex-[1_0_0] min-w-px relative" data-node-id="777:4452">
                      Hotel Palm Dor
                    </p>
                    <p className="relative shrink-0 w-[41px]" data-node-id="777:4453">
                      ₹899
                    </p>
                  </div>
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4454">
                    3.1 km from ISBT K…
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="777:4455">
                    4 minutes walk to I…
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[14px] relative shrink-0 w-full" data-node-id="777:4456" data-name="gap" />
            <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="777:4457" data-name="Button / View all Hotels">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[116px]" data-node-id="777:4458">
                View all Hotels
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-center pb-[24px] pt-[16px] relative shrink-0 w-full" data-node-id="777:4459" data-name="Content · below hotels">
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4460" data-name="Safety Tips">
              <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="777:4461" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="777:4462">
                  Safety Tips
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="777:4463" data-name="Body">
                <ArtSafetyVideo className="h-[182px] relative rounded-[10px] shrink-0 w-[326px]" />
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4465" data-name="View booking policy">
              <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="777:4466" data-name="Row">
                <IconList className="relative shrink-0 size-[26px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4468" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#0000e4] text-[16px] w-full" data-node-id="777:4469">
                    View booking policy
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="777:4470">
                    Reschedule and cancellation policy
                  </p>
                </div>
                <IconChevronRight className="relative shrink-0 size-[20px]" />
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4472" data-name="View bus details">
              <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="777:4473" data-name="Row">
                <IconList className="relative shrink-0 size-[26px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4475" data-name="Text">
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#0000e4] text-[16px] w-full" data-node-id="777:4476">
                    View bus details
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="777:4477">
                    Travel policy, amenities, etc.
                  </p>
                </div>
                <IconChevronRight className="relative shrink-0 size-[20px]" />
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4479" data-name="Boarding point details">
              <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="777:4480" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="777:4481">
                  Boarding point details
                </p>
              </div>
              <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="777:4482" data-name="Divider" />
              <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="777:4483" data-name="Body">
                <div className="bg-[#e4e4f6] content-stretch flex items-start overflow-clip px-[12px] py-[5px] relative rounded-[8px] shrink-0" data-node-id="777:4484" data-name="When">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[#1d1d1d] text-[13px] w-[125px]" data-node-id="777:4485">
                    23:55 · Mon, 14 Sep
                  </p>
                </div>
                <div className="h-[10px] relative shrink-0 w-full" data-node-id="777:4486" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="777:4487">
                  Nainital Bus Stand
                </p>
                <div className="h-[4px] relative shrink-0 w-full" data-node-id="777:4488" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="777:4489">
                  Tallital, near the boat house
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="777:4490">
                  Opposite Nainital Bus Stand ticket counter
                </p>
                <div className="h-[14px] relative shrink-0 w-full" data-node-id="777:4491" data-name="gap" />
              </div>
              <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="777:4492" data-name="Divider" />
              <div className="content-stretch flex items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="777:4493" data-name="Actions">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip relative" data-node-id="777:4494" data-name="Action">
                  <IconDirections className="relative shrink-0 size-[22px]" />
                  <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] underline w-[81px]" data-node-id="777:4496">
                    Directions
                  </p>
                </div>
                <div className="bg-[#e4e4e4] h-[24px] relative shrink-0 w-px" data-node-id="777:4497" data-name="Rule" />
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px overflow-clip relative" data-node-id="777:4498" data-name="Action">
                  <IconPhone className="relative shrink-0 size-[22px]" />
                  <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] underline w-[69px]" data-node-id="777:4500">
                    Bus stop
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4501" data-name="Need help">
              <div className="content-stretch flex flex-col items-center overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="777:4502" data-name="Body">
                <ArtRedBuddy className="h-[79px] relative shrink-0 w-[60px]" />
                <div className="h-[12px] relative shrink-0 w-full" data-node-id="777:4504" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[25px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[19px] text-center w-[min-content]" data-node-id="777:4505">
                  Need help with policy details?
                </p>
                <div className="h-[8px] relative shrink-0 w-full" data-node-id="777:4506" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] text-center w-[min-content]" data-node-id="777:4507">
                  24x7 support · Quick resolution · Multilingual
                </p>
                <div className="h-[14px] relative shrink-0 w-full" data-node-id="777:4508" data-name="gap" />
                <div className="bg-[#f5dada] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="777:4509" data-name="Button / Chat">
                  <IconChat className="relative shrink-0 size-[22px]" />
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-[156px]" data-node-id="777:4511">
                    Chat with redBuddy
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/12,12px)] shrink-0 w-[358px]" data-node-id="777:4512" data-name="Travel policies">
              <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="777:4513" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="777:4514">
                  Travel policies
                </p>
              </div>
              <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="777:4515" data-name="Divider" />
              <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[16px] py-[18px] relative shrink-0 w-full" data-node-id="777:4516" data-name="Body">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4517" data-name="Row / Policy">
                  <IconPolicyBadge className="relative shrink-0 size-[22px]" />
                  <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I777:4517;244:1793" data-name="Text">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I777:4517;244:1794">
                      Child passenger policy
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I777:4517;244:1795">
                      Children above the age of 4 will need a ticket
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4518" data-name="Row / Policy">
                  <IconPolicyBadge className="relative shrink-0 size-[22px]" />
                  <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I777:4518;244:1793" data-name="Text">
                    <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I777:4518;244:1794">
                      Luggage policy
                    </p>
                    <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I777:4518;244:1795">
                      <p className="leading-[22px] mb-0">2 pieces of luggage will be accepted free of charge per passenger. Excess items will be chargeable</p>
                      <p className="leading-[22px]">Excess baggage over 20 kgs per passenger will be chargeable</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4519" data-name="Row / Policy">
                  <IconPolicyBadge className="relative shrink-0 size-[22px]" />
                  <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I777:4519;244:1793" data-name="Text">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I777:4519;244:1794">
                      Pets Policy
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I777:4519;244:1795">
                      Pets are not allowed
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4520" data-name="Row / Policy">
                  <IconPolicyBadge className="relative shrink-0 size-[22px]" />
                  <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I777:4520;244:1793" data-name="Text">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I777:4520;244:1794">
                      Liquor Policy
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I777:4520;244:1795">
                      Carrying or consuming liquor inside the bus is prohibited. Bus operator reserves the right to deboard drunk passengers.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="777:4521" data-name="Row / Policy">
                  <IconPolicyBadge className="relative shrink-0 size-[22px]" />
                  <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="I777:4521;244:1793" data-name="Text">
                    <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I777:4521;244:1794">
                      Pick up time policy
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I777:4521;244:1795">
                      <span className="leading-[22px] text-[16px]">{`Bus operator is not obligated to wait beyond the scheduled departure time of the bus. No refund request w… `}</span>
                      <span className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] text-[#1d1d1d] text-[16px] underline">read more</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[17px] items-center overflow-clip pl-[30px] pr-[16px] relative shrink-0 w-full" data-node-id="777:4522" data-name="Refer">
              <div className="content-stretch flex flex-col items-start overflow-clip py-[18px] relative shrink-0 w-[180px]" data-node-id="777:4523" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="777:4524">
                  Loving the redBus experience? Let your friends know too!
                </p>
                <div className="h-[8px] relative shrink-0 w-full" data-node-id="777:4525" data-name="gap" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="777:4526">
                  Refer your friends and earn Rs 100 for every successful referral.
                </p>
                <div className="h-[14px] relative shrink-0 w-full" data-node-id="777:4527" data-name="gap" />
                <div className="bg-[#efcdcd] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[11px] relative rounded-[999px] shrink-0" data-node-id="777:4528" data-name="Button / Refer Now">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="777:4529">
                    Refer Now
                  </p>
                </div>
              </div>
              <ArtRefer className="h-[163px] relative shrink-0 w-[147px]" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.45)] h-[844px] left-0 top-0 w-[390px]" data-node-id="777:4531" data-name="Scrim" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[8px] overflow-clip pb-[28px] pt-[20px] px-[16px] rounded-bl-[36px] rounded-br-[36px] rounded-tl-[20px] rounded-tr-[20px] top-[432px] w-[374px]" data-node-id="777:4532" data-name="Sheet">
        <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="777:4687" data-name="Title row">
          <IconCalendar className="relative shrink-0 size-[30px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4700" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="777:4701">
              Change of plans?
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[15px] w-full" data-node-id="777:4702">
              Free date change available
            </p>
          </div>
          <ButtonClose className="relative shrink-0 size-[36px]" />
        </div>
        <div className="h-[22px] relative shrink-0 w-px" data-node-id="777:4707" data-name="gap" />
        <div className="bg-[#d6f5cd] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-node-id="777:4708" data-name="Badge / Smart choice">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1f4d1c] text-[13px] whitespace-nowrap" data-node-id="777:4709">
            Smart choice · ₹0 fees
          </p>
        </div>
        <div className="bg-white border border-[#e6e6e6] border-solid content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="777:4710" data-name="Option / Change date">
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4711" data-name="Text">
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1d1d1d] text-[17px] w-full" data-node-id="777:4712">
              Change date or time for FREE
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="777:4713">
              Pay ₹0 to reschedule your trip. You only pay if the new bus fare is higher.
            </p>
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="777:4714" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="h-[12px] relative shrink-0 w-px" data-node-id="777:4715" data-name="gap" />
        <div className="bg-white border border-[#e6e6e6] border-solid content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="777:4716" data-name="Option / Cancel">
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative" data-node-id="777:4717" data-name="Text">
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1d1d1d] text-[17px] w-full" data-node-id="777:4718">
              Cancel and get ₹763 refund
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="777:4719">
              Fees charged by bus operator
            </p>
          </div>
          <div className="relative shrink-0 size-[26px]" data-node-id="777:4720" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-px" data-node-id="777:4721" data-name="gap" />
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Proceed to cancel" showIcon={false} />
      </div>
    </div>
  );
}