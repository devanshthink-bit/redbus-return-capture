const imgIconBusPin = "assets/67e3fa5d-beaa-44bd-86e5-2fd9fb5d4e16.svg";
const imgArtTripRewardBadge = "assets/f0d7a768-034f-4335-8c5e-4d0f6cca11e3.png";
const imgIconHourglass = "assets/445285fd-4a4e-4d01-a8b0-aa56d8703b13.svg";
const imgStar = "assets/5defeabb-4b51-4462-9a95-e9a44e39c85f.svg";
const imgPrimo = "assets/c6ff67f9-de0e-476f-844e-2e5f00e50f77.png";
const imgArtPrimoOnNavy = "assets/fa5d30e0-7fdf-4efa-a4d8-a3f163de5175.png";
const imgIconWallet = "assets/8b1bd93d-c03f-4c45-bd85-2e7201fecbf3.svg";
const imgIconMic = "assets/e886aaf7-ec97-495b-9160-302a8ba54b5c.svg";
const imgIconAiSparkle = "assets/75df5628-0af0-4288-8c3f-80f4b4067562.svg";
const imgIconPercent = "assets/c07ebfe3-79fe-4cb5-ba03-776c2cb3d026.svg";
const imgIconStarOutline = "assets/6403abef-6ecd-4b4b-9acb-dd8f545da50c.svg";
const imgIconChevronDown = "assets/27002156-26df-4958-8e53-6ddfb3f43632.svg";
const imgIconSliders = "assets/23bc4116-aaee-4029-abfa-80cb405575e5.svg";
const imgArtPromoFlexiTicket = "assets/5e96b561-d419-402e-8b38-34fe36f42f1c.png";
const imgArtPromoFreeCancellation = "assets/366e0a60-55b8-40ea-bd11-81702526eb6c.png";
const imgArtPromoPrimo = "assets/54cfc3e8-f8dc-4f3a-bc93-471bee4c0d7e.png";
const imgIconChevronLeft = "assets/f9b5f1d5-2c4a-45e1-9f76-e07304ade0f7.svg";
const imgArtFreeCancellationBadge = "assets/0c877135-2205-4426-8776-e34d60ab6846.png";
const imgStatusIcons = "assets/99675a6d-6099-46bc-bceb-901d87fa5c8e.svg";
const imgFrame = "assets/a222b1be-be46-4afd-abe7-06bc42e40e22.svg";
const imgEllipse = "assets/ccb38678-8aa7-43aa-9405-992391d115ef.svg";
const imgEllipse1 = "assets/bb057839-071f-4c8b-a1e1-48a141aeed11.svg";
const imgArtSunburst = "assets/4f29cf59-f402-4214-b62f-34751e46da70.svg";
const imgArtSunburst1 = "assets/8dd257d5-080f-4b06-a31d-093ad37fc1cd.svg";
const imgSparkle = "assets/3dc77bf2-2e3b-4740-9675-619bc53c4e0b.svg";

function IconBusPin({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[22px]"} data-node-id="33:91" data-name="Icon / Bus Pin">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBusPin} />
    </div>
  );
}

function ArtTripRewardStrip({ className }: { className?: string }) {
  return (
    <div className={className || "bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] to-[#f8f0e2] w-[370px]"} data-node-id="74:273" data-name="Art / tripReward strip">
      <div className="h-[23.2px] relative shrink-0 w-[100px]" data-node-id="287:2635" data-name="Art / tripReward badge">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
      </div>
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[0px] text-[color:var(--text\/primary,#1d1d1d)] text-right" data-node-id="287:2636">
        <p className="leading-[17px] mb-0 text-[13px]">Take 3 trips with Laxmi Holidays</p>
        <p className="text-[13px]">
          <span className="leading-[17px]">{`to `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic">get a free ticket</span>
        </p>
      </div>
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

type ChipDateChangeProps = {
  className?: string;
  state?: "Allowed";
};

function ChipDateChange({ className, state = "Allowed" }: ChipDateChangeProps) {
  return (
    <div className={className || "bg-[var(--colour\\/neutral\\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\\/6,6px)]"} data-node-id="36:114">
      <IconHourglass className="relative shrink-0 size-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="36:111">
        Free date change
      </p>
    </div>
  );
}

function ToggleIOs({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--surface\\/control-off,#c5c5c7)] h-[27px] overflow-clip relative rounded-[var(--radius\\/full,999px)] w-[63px]"} data-node-id="18:47" data-name="Toggle / iOS">
      <div className="absolute bg-[var(--surface\/default,white)] h-[23px] left-[2px] rounded-[var(--radius\/full,999px)] top-[2px] w-[37px]" data-node-id="18:46" data-name="Knob" />
    </div>
  );
}

type RatingBadgeProps = {
  className?: string;
  count?: string;
  score?: string;
};

function RatingBadge({ className, count = "178", score = "4.7" }: RatingBadgeProps) {
  return (
    <div className={className || "bg-[var(--surface\\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\\/6,6px)] w-[47px]"} data-node-id="36:123" data-name="Rating badge">
      <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="36:118" data-name="Score">
        <div className="relative shrink-0 size-[11px]" data-node-id="36:119" data-name="Star">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="36:121">
          {score}
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="36:122">
        {count}
      </p>
    </div>
  );
}

type CardBusProps = {
  className?: string;
  arrival?: string;
  busType?: string;
  deal?: string;
  departure?: string;
  meta?: string;
  offer?: string;
  operator?: string;
  price?: string;
  ribbon?: string;
  showDateChange?: boolean;
  showDeal?: boolean;
  showOffer?: boolean;
  showPrimo?: boolean;
  showRibbon?: boolean;
  showToilet?: boolean;
  showTripReward?: boolean;
  showWasPrice?: boolean;
  wasPrice?: string;
};

function CardBus({ className, arrival = "08:00", busType = "Bharat Benz A/C Seater /Sleeper (2+1)", deal = "Return Trip redDeal: Min. 10.0% off on return ticket", departure = "23:55", meta = "8h 5m · 46 Seats (12 Single)", offer = "Min. 10% OFF on 3 or more seats", operator = "Laxmi Holidays Pvt Ltd", price = "₹999", ribbon = "Try new 10% OFF", showDateChange = true, showDeal = false, showOffer = false, showPrimo = false, showRibbon = false, showToilet = false, showTripReward = false, showWasPrice = false, wasPrice = "₹550" }: CardBusProps) {
  return (
    <div className={className || "bg-[var(--surface\\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] w-[358px]"} data-node-id="39:135" data-name="Card / Bus">
      <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="74:287" data-name="Body">
        {showPrimo && (
          <div className="h-[32.67px] relative shrink-0 w-[59.33px]" data-node-id="74:274" data-name="Primo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrimo} />
          </div>
        )}
        {showRibbon && (
          <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-node-id="179:1444" data-name="Ribbon row">
            <div className="bg-[#f8df9d] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="179:1445" data-name="Ribbon">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="179:1446">
                {ribbon}
              </p>
            </div>
          </div>
        )}
        <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="39:110" data-name="Times and fare">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="39:111" data-name="Times column">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="39:112" data-name="Time line">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="39:113">
                {departure}
              </p>
              <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="39:114" data-name="Dash" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="39:115">
                {arrival}
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="39:116">
              {meta}
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="39:117" data-name="Fare column">
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="179:1447" data-name="Price row">
              {showWasPrice && (
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="179:1448">
                  {wasPrice}
                </p>
              )}
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="39:118">
                {price}
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="39:119">
              Onwards
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="39:120" data-name="Operator row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="39:121" data-name="Operator column">
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="39:122" data-name="Name row">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="39:123">
                {operator}
              </p>
              <IconBusPin className="relative shrink-0 size-[22px]" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="39:125">
              {busType}
            </p>
          </div>
          <RatingBadge className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" />
        </div>
        <div className="content-stretch flex gap-[8px] items-start min-h-[24px] relative shrink-0" data-node-id="179:1449" data-name="Amenities">
          {showToilet && (
            <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="179:1450" data-name="Toilet">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="179:1451">
                Toilet
              </p>
            </div>
          )}
          {showDateChange && <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />}
        </div>
        {showOffer && (
          <div className="bg-[#ede7f4] content-stretch flex items-start px-[9px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="179:1452" data-name="Offer strip">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="179:1453">
              {offer}
            </p>
          </div>
        )}
        {showDeal && (
          <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="74:275" data-name="Deal strip">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="74:276">
              {deal}
            </p>
          </div>
        )}
      </div>
      {showTripReward && (
        <div className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" data-node-id="74:277" data-name="tripReward">
          <div className="h-[23.2px] relative shrink-0 w-[100px]" data-node-id="I74:277;287:2635" data-name="Art / tripReward badge">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[0px] text-[color:var(--text\/primary,#1d1d1d)] text-right" data-node-id="I74:277;287:2636">
            <p className="leading-[17px] mb-0 text-[13px]">Take 3 trips with Laxmi Holidays</p>
            <p className="text-[13px]">
              <span className="leading-[17px]">{`to `}</span>
              <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic">get a free ticket</span>
            </p>
          </div>
        </div>
      )}
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

function ArtPrimo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.67px] relative w-[59.33px]"} data-node-id="74:272" data-name="Art / Primo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrimo} />
    </div>
  );
}

function IconWallet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="33:95" data-name="Icon / Wallet">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWallet} />
    </div>
  );
}

function IconMic({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="33:90" data-name="Icon / Mic">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMic} />
    </div>
  );
}

function IconAiSparkle({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="33:94" data-name="Icon / AI Sparkle">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAiSparkle} />
    </div>
  );
}

function IconPercent({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="33:89" data-name="Icon / Percent">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPercent} />
    </div>
  );
}

function IconStarOutline({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="33:88" data-name="Icon / Star Outline">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStarOutline} />
    </div>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:87" data-name="Icon / Chevron Down">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronDown} />
    </div>
  );
}

function IconSliders({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="33:86" data-name="Icon / Sliders">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSliders} />
    </div>
  );
}

function ArtPromoFlexiTicket({ className }: { className?: string }) {
  return (
    <div className={className || "h-[98px] relative w-[110.33px]"} data-node-id="95:642" data-name="Art / Promo / FlexiTicket">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPromoFlexiTicket} />
    </div>
  );
}

function ArtPromoFreeCancellation({ className }: { className?: string }) {
  return (
    <div className={className || "h-[98px] relative w-[129.33px]"} data-node-id="95:641" data-name="Art / Promo / Free Cancellation">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPromoFreeCancellation} />
    </div>
  );
}

function ArtPromoPrimo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[98px] relative w-[129.67px]"} data-node-id="95:640" data-name="Art / Promo / Primo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPromoPrimo} />
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

export default function Component02OutboundBusList() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="35:85" data-name="02 · Outbound bus list">
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="35:86" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="35:87" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I35:87;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I35:87;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[75px] relative shrink-0 w-full" data-node-id="35:100" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I35:100;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I35:100;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I35:100;34:91">
              ISBT Kashmiri Gate… → Nainital
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I35:100;34:92">
              57 Buses
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I35:100;56:226" data-name="Trailing slot">
            <div className="[word-break:break-word] bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center not-italic px-[12px] py-[9px] relative rounded-[var(--radius\/20,20px)] shrink-0 text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I35:100;53:196" data-name="Trailing">
              <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px]" data-node-id="I35:100;53:196;53:193">
                10 Sep
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px]" data-node-id="I35:100;53:196;53:194">
                Fri
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="35:109" data-name="Tabs">
          <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex h-[48px] items-start p-[2px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="35:110" data-name="Segmented / Two-up">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-full items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" data-node-id="I35:110;34:98" data-name="Active">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I35:110;34:99">
                Buses
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="I35:110;34:100" data-name="Inactive">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I35:110;34:101">
                Trains
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/page,#f2f2f7)] h-px relative shrink-0 w-full" data-node-id="35:115" data-name="Divider" />
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex gap-[8px] items-start overflow-clip pl-[16px] py-[21px] relative shrink-0 w-full" data-node-id="35:116" data-name="Promo strip">
        <ArtPromoPrimo className="h-[98px] relative shrink-0 w-[129.67px]" />
        <ArtPromoFreeCancellation className="h-[98px] relative shrink-0 w-[129.33px]" />
        <ArtPromoFlexiTicket className="h-[98px] relative shrink-0 w-[110.33px]" />
      </div>
      <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="35:118" data-name="Divider" />
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[10px] items-start pb-[11px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="35:119" data-name="Filters">
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="35:120" data-name="Chips row 1">
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="74:371" data-name="Chip / Filter and Sort">
            <IconSliders className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="74:373">
              Filter and Sort
            </p>
            <IconChevronDown className="relative shrink-0 size-[20px]" />
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="74:375" data-name="Chip / Primo Bus">
            <IconStarOutline className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="74:377">
              Primo Bus
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="74:378" data-name="Chip / Deals">
            <IconPercent className="relative shrink-0 size-[24px]" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="74:380">
              Deals
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="35:121" data-name="Chips row 2">
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="74:381" data-name="Chip / Group Deal">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="74:382">
              Group Deal
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="74:383" data-name="Chip / Early Buy">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="74:384">
              Early Buy
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="40:116" data-name="AI Smart filter">
          <p className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Inter:Regular'] font-normal from-[#c54646] leading-[18px] not-italic relative shrink-0 text-[13px] text-[transparent] to-[#7941e0] whitespace-nowrap" data-node-id="35:135">
            AI Smart filter
          </p>
          <div className="bg-[var(--surface\/default,white)] border-[#385ded] border-[1.5px] border-solid content-stretch flex gap-[7px] h-[42px] items-center pl-[15px] pr-[14px] relative rounded-[var(--radius\/10,10px)] shrink-0 w-full" data-node-id="35:136" data-name="AI Smart filter field">
            <IconAiSparkle className="relative shrink-0 size-[28px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="35:138">{`Search 'AC sleeper under 1000'`}</p>
            <IconMic className="relative shrink-0 size-[24px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[10px] px-[16px] relative shrink-0 w-full" data-node-id="40:117" data-name="Results 1">
        <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex gap-[4px] h-[44px] items-center px-[14px] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full" data-node-id="40:118" data-name="Wallet strip">
          <IconWallet className="relative shrink-0 size-[24px]" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="40:120">
            <span className="font-['Inter:Bold'] font-bold leading-[20px] text-[#347933] text-[14px]">₹100</span>
            <span className="leading-[20px] text-[14px]">{` in your wallet`}</span>
          </p>
        </div>
        <a className="bg-[var(--surface\/default,white)] content-stretch cursor-pointer flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1462" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1462;74:287" data-name="Body">
            <ArtPrimo className="h-[32.67px] relative shrink-0 w-[59.33px]" />
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1462;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1462;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1462;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I183:1462;39:113">
                    23:15
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1462;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I183:1462;39:115">
                    08:15
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I183:1462;39:116">
                  9h · 36 Seats (10 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1462;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1462;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I183:1462;39:118">
                    ₹1,299
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I183:1462;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1462;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1462;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1462;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I183:1462;39:123">
                    International Tourist Centre
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I183:1462;39:125">
                  Bharat Benz A/C Seater /Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1462;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1462;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1462;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] text-left whitespace-nowrap" data-node-id="I183:1462;39:126;36:121">
                    4.6
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1462;39:126;36:122">
                  231
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1462;179:1449" data-name="Amenities">
              <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="I183:1462;179:1450" data-name="Toilet">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I183:1462;179:1451">
                  Toilet
                </p>
              </div>
            </div>
          </div>
        </a>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1503" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1503;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1503;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1503;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1503;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1503;39:113">
                    23:55
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1503;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1503;39:115">
                    08:00
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1503;39:116">
                  8h 5m · 40 Seats (11 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1503;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1503;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1503;39:118">
                    ₹599
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1503;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1503;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1503;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1503;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1503;39:123">
                    Laxmi Holidays Pvt Ltd
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1503;39:125">
                  Bharat Benz A/C Seater /Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1503;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1503;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1503;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1503;39:126;36:121">
                    4.5
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1503;39:126;36:122">
                  200
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1503;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
            <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1503;74:275" data-name="Deal strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1503;74:276">
                Return Trip redDeal: Min. 10.0% off on return ticket
              </p>
            </div>
          </div>
          <ArtTripRewardStrip className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" />
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1544" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1544;74:287" data-name="Body">
            <ArtPrimo className="h-[32.67px] relative shrink-0 w-[59.33px]" />
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1544;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1544;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1544;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1544;39:113">
                    22:15
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1544;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1544;39:115">
                    07:00
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1544;39:116">
                  8h 45m · 40 Seats (6 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1544;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1544;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1544;39:118">
                    ₹1,599
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1544;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1544;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1544;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1544;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1544;39:123">
                    RS Yadav Smart Bus
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1544;39:125">
                  A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1544;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1544;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1544;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1544;39:126;36:121">
                    4.4
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1544;39:126;36:122">
                  311
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1544;179:1449" data-name="Amenities">
              <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="I183:1544;179:1450" data-name="Toilet">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1544;179:1451">
                  Toilet
                </p>
              </div>
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1585" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1585;74:287" data-name="Body">
            <ArtPrimo className="h-[32.67px] relative shrink-0 w-[59.33px]" />
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1585;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1585;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1585;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1585;39:113">
                    22:25
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1585;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1585;39:115">
                    07:15
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1585;39:116">
                  8h 50m · 42 Seats (6 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1585;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1585;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1585;39:118">
                    ₹1,299
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1585;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1585;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1585;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1585;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1585;39:123">
                    International Tourist Centre
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1585;39:125">
                  VE A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1585;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1585;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1585;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1585;39:126;36:121">
                    4.3
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1585;39:126;36:122">
                  393
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1585;179:1449" data-name="Amenities">
              <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="I183:1585;179:1450" data-name="Toilet">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1585;179:1451">
                  Toilet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r content-stretch flex flex-col from-[#1b3874] gap-[6px] h-[267.22px] items-center overflow-clip pt-[16px] px-[16px] relative shrink-0 to-[#741e42] via-[#2d3768] via-[45%] w-full" data-node-id="183:1626" data-name="primowed">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="286:2457" data-name="Title">
          <ArtPrimoOnNavy className="h-[32px] relative shrink-0 w-[66px]" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="286:2459">
            Wednesdays
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="286:2460">
          Exclusive benefits for Primo buses
        </p>
        <div className="bg-white content-stretch flex flex-col gap-[6px] items-center px-[16px] py-[14px] relative rounded-[14px] shrink-0 w-full" data-node-id="286:2461" data-name="Ticket">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[#1b7a45] text-[16px] whitespace-nowrap" data-node-id="286:2462">
            Get extra 10% OFF
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="286:2463">
            Up to ₹200. Apply code on payment page
          </p>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip pt-[2px] relative shrink-0" data-node-id="286:2464" data-name="Use code">
            <div className="bg-[#c7c7cc] h-px relative shrink-0 w-[52px]" data-node-id="286:2465" data-name="Rectangle" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="286:2466">
              Use code
            </p>
            <div className="bg-[#c7c7cc] h-px relative shrink-0 w-[52px]" data-node-id="286:2467" data-name="Rectangle" />
          </div>
          <div className="bg-[#f2f1f7] content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[8px] shrink-0" data-node-id="286:2468" data-name="Code box">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="286:2469">
              PRIMODAY
            </p>
            <div className="relative shrink-0 size-[16px]" data-node-id="286:2470" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
          </div>
        </div>
        <div className="absolute left-[-9px] size-[18px] top-[180px]" data-node-id="286:2473" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <div className="absolute right-[-9px] size-[18px] top-[180px]" data-node-id="286:2474" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
        </div>
        <div className="[word-break:break-word] bg-[rgba(0,0,0,0.16)] content-stretch flex font-['Inter:Regular'] font-normal gap-[10px] items-center justify-center leading-[20px] not-italic overflow-clip py-[11px] relative shrink-0 text-[14px] w-full whitespace-nowrap" data-node-id="286:2475" data-name="Footer">
          <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0 text-white" data-node-id="286:2476" data-name="Frame">
            <p className="relative shrink-0" data-node-id="286:2477">
              🕐
            </p>
            <p className="relative shrink-0" data-node-id="286:2478">
              On time
            </p>
          </div>
          <p className="relative shrink-0 text-[rgba(255,255,255,0.5)]" data-node-id="286:2479">
            |
          </p>
          <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0 text-white" data-node-id="286:2480" data-name="Frame">
            <p className="relative shrink-0" data-node-id="286:2481">
              🙂
            </p>
            <p className="relative shrink-0" data-node-id="286:2482">
              Friendly staff
            </p>
          </div>
          <p className="relative shrink-0 text-[rgba(255,255,255,0.5)]" data-node-id="286:2483">
            |
          </p>
          <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0 text-white" data-node-id="286:2484" data-name="Frame">
            <p className="relative shrink-0" data-node-id="286:2485">
              ⭐
            </p>
            <p className="relative shrink-0" data-node-id="286:2486">
              Top rated
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8df9c] content-stretch flex flex-col gap-[14px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="183:1627" data-name="toprated">
        <div className="-translate-x-1/2 absolute left-1/2 size-[460px] top-[-150px]" data-node-id="287:2480" data-name="Art / Sunburst">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="287:2503">
          Book top-rated buses to save 10% or more
        </p>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="287:2504" data-name="Cards">
          <CardBus arrival="05:30" busType="A/C Seater / Sleeper (2+1)" className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[330px]" departure="22:00" meta="7h 30m · 32 Seats (8 Single)" operator="Vamika Travels" price="₹495" showDateChange={false} showOffer showRibbon showWasPrice />
          <CardBus arrival="16:10" busType="Bharat Benz A/C Sleeper (2+1)" className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[330px]" departure="07:45" meta="8h 25m · 40 Seats (10 Single)" operator="zingbus" price="₹560" showDateChange={false} showOffer showRibbon showWasPrice wasPrice="₹640" />
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="287:2605" data-name="CTA wrap">
          <div className="bg-white content-stretch flex items-center justify-center overflow-clip py-[13px] relative rounded-[10px] shrink-0 w-full" data-node-id="287:2606" data-name="View all buses">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="287:2607">
              View all buses
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="183:1628" data-name="Results 2">
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1629" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1629;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-node-id="I183:1629;179:1444" data-name="Ribbon row">
              <div className="bg-[#f8df9d] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I183:1629;179:1445" data-name="Ribbon">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1629;179:1446">
                  Exclusive 12.5% OFF
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1629;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1629;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1629;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1629;39:113">
                    23:15
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1629;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1629;39:115">
                    08:25
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1629;39:116">
                  9h 10m · 34 Seats (2 Single)
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I183:1629;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1629;179:1447" data-name="Price row">
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="I183:1629;179:1448">
                    ₹842
                  </p>
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1629;39:118">
                    ₹737
                  </p>
                </div>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="I183:1629;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1629;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1629;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1629;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1629;39:123">
                    zingbus plus
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1629;39:125">
                  Bharat Benz A/C Seater /Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1629;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1629;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1629;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1629;39:126;36:121">
                    4.6
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1629;39:126;36:122">
                  95
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" data-node-id="I183:1629;74:277" data-name="tripReward">
            <div className="h-[23.2px] relative shrink-0 w-[100px]" data-node-id="I183:1629;74:277;287:2635" data-name="Art / tripReward badge">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
            </div>
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)] text-right" data-node-id="I183:1629;74:277;287:2636">
              <p className="leading-[17px] mb-0">Take 4 trips with zingbus plus</p>
              <p>
                <span className="leading-[17px]">{`to `}</span>
                <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic">get a free ticket</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="183:1670" data-name="travelplans">
        <div className="absolute right-[-50px] size-[230px] top-[-40px]" data-node-id="286:2487" data-name="Art / Sunburst">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst1} />
        </div>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="286:2510" data-name="Heading">
          <div className="h-[34px] relative shrink-0 w-[33px]" data-node-id="286:2511" data-name="Art / Free Cancellation badge">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtFreeCancellationBadge} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="286:2512" data-name="Frame">
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="286:2513">
              Travel plans might change
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="286:2514">
              <span className="leading-[22px] text-[16px]">{`Add `}</span>
              <span className="font-['Inter:Medium'] font-medium leading-[22px] text-[#b63468] text-[16px]">Free Cancellation</span>
              <span className="leading-[22px] text-[16px]">{` to get full refund`}</span>
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#e6e6eb] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[14px] py-[13px] relative rounded-[12px] shrink-0 w-full" data-node-id="286:2515" data-name="Filter card">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="286:2516">
            Only show buses that provide Free Cancellation
          </p>
          <ToggleIOs className="bg-[var(--surface\/control-off,#c5c5c7)] h-[27px] overflow-clip relative rounded-[var(--radius\/full,999px)] shrink-0 w-[63px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="183:1671" data-name="Results 3">
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1672" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1672;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1672;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1672;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1672;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1672;39:113">
                    23:30
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1672;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1672;39:115">
                    07:35
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1672;39:116">
                  8h 5m · 36 Seats (12 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1672;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1672;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1672;39:118">
                    ₹841
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1672;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1672;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1672;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1672;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1672;39:123">
                    Laxmi Holidays Pvt Ltd
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1672;39:125">
                  VE A/C Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1672;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1672;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1672;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1672;39:126;36:121">
                    4.2
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1672;39:126;36:122">
                  412
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1672;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
            <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1672;74:275" data-name="Deal strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1672;74:276">
                Return Trip redDeal: Min. 10.0% off on return ticket
              </p>
            </div>
          </div>
          <ArtTripRewardStrip className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" />
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1713" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1713;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1713;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1713;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1713;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1713;39:113">
                    21:50
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1713;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1713;39:115">
                    06:35
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1713;39:116">
                  8h 45m · 25 Seats (8 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1713;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1713;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1713;39:118">
                    ₹999
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1713;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1713;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1713;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1713;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1713;39:123">
                    Blueworld tourist private limited
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1713;39:125">
                  A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1713;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1713;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1713;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1713;39:126;36:121">
                    4.2
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1713;39:126;36:122">
                  208
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1713;179:1449" data-name="Amenities">
              <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="I183:1713;179:1450" data-name="Toilet">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1713;179:1451">
                  Toilet
                </p>
              </div>
            </div>
            <div className="bg-[#ede7f4] content-stretch flex items-start px-[9px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I183:1713;179:1452" data-name="Offer strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1713;179:1453">
                Min. 12.5% OFF on 3 or more seats
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1754" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1754;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1754;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1754;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1754;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1754;39:113">
                    23:50
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1754;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1754;39:115">
                    07:50
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1754;39:116">
                  8h · 36 Seats (12 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1754;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1754;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1754;39:118">
                    ₹897
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1754;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1754;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1754;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1754;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1754;39:123">
                    Laxmi Holidays Pvt Ltd
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1754;39:125">
                  VE A/C Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1754;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1754;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1754;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1754;39:126;36:121">
                    4.1
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1754;39:126;36:122">
                  311
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1754;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
            <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1754;74:275" data-name="Deal strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1754;74:276">
                Return Trip redDeal: Min. 10.0% off on return ticket
              </p>
            </div>
          </div>
          <ArtTripRewardStrip className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[4px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="183:1795" data-name="freetickets">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="287:2608" data-name="Heading">
          <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="287:2609">
            Get free tickets
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="287:2610">
            Repeat trips with an operator and get a free ticket
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] items-start overflow-clip pt-[10px] px-[16px] relative shrink-0 w-full" data-node-id="287:2611" data-name="Operators">
          <div className="bg-white border border-[#e6e6eb] border-solid content-stretch flex flex-col h-[100px] items-start overflow-clip relative rounded-[10px] shrink-0 w-[134px]" data-node-id="287:2612" data-name="Card / tripReward">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip pb-[10px] pl-[12px] pr-[10px] pt-[11px] relative shrink-0 w-full" data-node-id="287:2613" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full whitespace-nowrap" data-node-id="287:2614">
                Laxmi Holidays
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="287:2615">
                6 services
              </p>
            </div>
            <div className="bg-[#faf3d9] content-stretch flex items-center overflow-clip px-[12px] py-[7px] relative shrink-0 w-full" data-node-id="287:2616" data-name="tripReward">
              <div className="h-[21px] relative shrink-0 w-[92px]" data-node-id="287:2617" data-name="Art / tripReward badge">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e6e6eb] border-solid content-stretch flex flex-col h-[100px] items-start overflow-clip relative rounded-[10px] shrink-0 w-[134px]" data-node-id="287:2618" data-name="Card / tripReward">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip pb-[10px] pl-[12px] pr-[10px] pt-[11px] relative shrink-0 w-full" data-node-id="287:2619" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full whitespace-nowrap" data-node-id="287:2620">
                zingbus
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="287:2621">
                4 services
              </p>
            </div>
            <div className="bg-[#faf3d9] content-stretch flex items-center overflow-clip px-[12px] py-[7px] relative shrink-0 w-full" data-node-id="287:2622" data-name="tripReward">
              <div className="h-[21px] relative shrink-0 w-[92px]" data-node-id="287:2623" data-name="Art / tripReward badge">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e6e6eb] border-solid content-stretch flex flex-col h-[100px] items-start overflow-clip relative rounded-[10px] shrink-0 w-[134px]" data-node-id="287:2624" data-name="Card / tripReward">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip pb-[10px] pl-[12px] pr-[10px] pt-[11px] relative shrink-0 w-full" data-node-id="287:2625" data-name="Frame">
              <p className="font-['Inter:Medium'] font-medium leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full whitespace-nowrap" data-node-id="287:2626">
                FLIXBUS
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="287:2627">
                3 services
              </p>
            </div>
            <div className="bg-[#faf3d9] content-stretch flex items-center overflow-clip px-[12px] py-[7px] relative shrink-0 w-full" data-node-id="287:2628" data-name="tripReward">
              <div className="h-[21px] relative shrink-0 w-[92px]" data-node-id="287:2629" data-name="Art / tripReward badge">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="183:1796" data-name="Results 4">
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1797" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1797;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1797;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1797;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1797;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1797;39:113">
                    22:30
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1797;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1797;39:115">
                    06:35
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1797;39:116">
                  8h 5m · 44 Seats (12 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1797;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1797;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1797;39:118">
                    ₹599
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1797;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1797;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1797;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1797;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1797;39:123">
                    Laxmi Holidays Pvt Ltd
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1797;39:125">
                  VE A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[#f4e7df] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1797;39:126" data-name="Rating">
                <div className="bg-[#bc872d] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1797;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1797;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1797;39:126;36:121">
                    3.8
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1797;39:126;36:122">
                  379
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1797;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
            <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1797;74:275" data-name="Deal strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1797;74:276">
                Return Trip redDeal: Min. 10.0% off on return ticket
              </p>
            </div>
          </div>
          <ArtTripRewardStrip className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" />
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1838" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1838;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-node-id="I183:1838;179:1444" data-name="Ribbon row">
              <div className="bg-[#f8df9d] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I183:1838;179:1445" data-name="Ribbon">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1838;179:1446">
                  Try new 10% OFF
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1838;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1838;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1838;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1838;39:113">
                    22:00
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1838;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1838;39:115">
                    05:30
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1838;39:116">
                  7h 30m · 32 Seats (8 Single)
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I183:1838;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1838;179:1447" data-name="Price row">
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="I183:1838;179:1448">
                    ₹550
                  </p>
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1838;39:118">
                    ₹495
                  </p>
                </div>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="I183:1838;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1838;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1838;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1838;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1838;39:123">
                    Vamika Travels
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1838;39:125">
                  A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[#f4e7df] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1838;39:126" data-name="Rating">
                <div className="bg-[#bc872d] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1838;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1838;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1838;39:126;36:121">
                    3.8
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1838;39:126;36:122">
                  98
                </p>
              </div>
            </div>
            <div className="bg-[#ede7f4] content-stretch flex items-start px-[9px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I183:1838;179:1452" data-name="Offer strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1838;179:1453">
                Min. 10% OFF on 3 or more seats
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1879" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1879;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-node-id="I183:1879;179:1444" data-name="Ribbon row">
              <div className="bg-[#f8df9d] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I183:1879;179:1445" data-name="Ribbon">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1879;179:1446">
                  Exclusive 12.5% OFF
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1879;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1879;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1879;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1879;39:113">
                    07:00
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1879;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1879;39:115">
                    15:55
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1879;39:116">
                  8h 55m · 33 Seats (4 Single)
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I183:1879;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1879;179:1447" data-name="Price row">
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="I183:1879;179:1448">
                    ₹1,069
                  </p>
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1879;39:118">
                    ₹935
                  </p>
                </div>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="I183:1879;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1879;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1879;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1879;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1879;39:123">
                    zingbus plus
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1879;39:125">
                  Bharat Benz A/C Seater /Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1879;39:126" data-name="Rating">
                <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1879;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1879;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1879;39:126;36:121">
                    4.5
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1879;39:126;36:122">
                  64
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" data-node-id="I183:1879;74:277" data-name="tripReward">
            <div className="h-[23.2px] relative shrink-0 w-[100px]" data-node-id="I183:1879;74:277;287:2635" data-name="Art / tripReward badge">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
            </div>
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)] text-right" data-node-id="I183:1879;74:277;287:2636">
              <p className="leading-[17px] mb-0">Take 4 trips with zingbus plus</p>
              <p>
                <span className="leading-[17px]">{`to `}</span>
                <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[17px] not-italic">get a free ticket</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1920" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1920;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1920;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1920;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1920;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1920;39:113">
                    22:30
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1920;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1920;39:115">
                    06:30
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1920;39:116">
                  8h · 48 Seats (6 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1920;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1920;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1920;39:118">
                    ₹799
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1920;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1920;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1920;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1920;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1920;39:123">
                    Fasttrack Travels
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1920;39:125">
                  VE A/C Seater / Sleeper (2+2)
                </p>
              </div>
              <div className="bg-[#f4e7df] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1920;39:126" data-name="Rating">
                <div className="bg-[#bc872d] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1920;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1920;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1920;39:126;36:121">
                    3.9
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1920;39:126;36:122">
                  233
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1920;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:1961" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:1961;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1961;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:1961;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:1961;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1961;39:113">
                    23:00
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:1961;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1961;39:115">
                    07:05
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1961;39:116">
                  8h 5m · 44 Seats (12 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:1961;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:1961;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1961;39:118">
                    ₹599
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1961;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:1961;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:1961;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:1961;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:1961;39:123">
                    Laxmi Holidays Pvt Ltd
                  </p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:1961;39:125">
                  VE A/C Seater / Sleeper (2+1)
                </p>
              </div>
              <div className="bg-[#f4e7df] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:1961;39:126" data-name="Rating">
                <div className="bg-[#bc872d] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1961;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:1961;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:1961;39:126;36:121">
                    3.8
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:1961;39:126;36:122">
                  335
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:1961;179:1449" data-name="Amenities">
              <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
            </div>
            <div className="bg-[var(--surface\/deal,#f4e7e0)] content-stretch flex items-start overflow-clip px-[9px] py-[8px] relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:1961;74:275" data-name="Deal strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[13px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:1961;74:276">
                Return Trip redDeal: Min. 10.0% off on return ticket
              </p>
            </div>
          </div>
          <ArtTripRewardStrip className="bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[16px] h-[54px] items-center overflow-clip pl-[10px] pr-[11px] relative rounded-[10px] shrink-0 to-[#f8f0e2] w-full" />
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-[358px]" data-node-id="183:2002" data-name="Card / Bus">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I183:2002;74:287" data-name="Body">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:2002;39:110" data-name="Times and fare">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I183:2002;39:111" data-name="Times column">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I183:2002;39:112" data-name="Time line">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:2002;39:113">
                    08:00
                  </p>
                  <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I183:2002;39:114" data-name="Dash" />
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:2002;39:115">
                    14:15
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:2002;39:116">
                  6h 15m · 56 Seats (2 Single)
                </p>
              </div>
              <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I183:2002;39:117" data-name="Fare column">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I183:2002;179:1447" data-name="Price row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:2002;39:118">
                    ₹600
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:2002;39:119">
                  Onwards
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I183:2002;39:120" data-name="Operator row">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I183:2002;39:121" data-name="Operator column">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I183:2002;39:122" data-name="Name row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:2002;39:123">{`India Tours & Travels (GetBookCab)`}</p>
                  <IconBusPin className="relative shrink-0 size-[22px]" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I183:2002;39:125">
                  A/C Seater / Sleeper (2+2)
                </p>
              </div>
              <div className="bg-[#f4e7df] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I183:2002;39:126" data-name="Rating">
                <div className="bg-[#bc872d] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I183:2002;39:126;36:118" data-name="Score">
                  <div className="relative shrink-0 size-[11px]" data-node-id="I183:2002;39:126;36:119" data-name="Star">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I183:2002;39:126;36:121">
                    3.5
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I183:2002;39:126;36:122">
                  255
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I183:2002;179:1449" data-name="Amenities">
              <div className="bg-[#ece9f4] content-stretch flex items-start px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="I183:2002;179:1450" data-name="Toilet">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I183:2002;179:1451">
                  Toilet
                </p>
              </div>
            </div>
            <div className="bg-[#ede7f4] content-stretch flex items-start px-[9px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="I183:2002;179:1452" data-name="Offer strip">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I183:2002;179:1453">
                Min. 15% OFF on 3 or more seats
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-r bottom-[46px] content-stretch drop-shadow-[0px_4px_7px_rgba(89,51,128,0.35)] flex from-[#c54646] gap-[6px] h-[43px] items-center justify-center left-1/2 pl-[18px] pr-[20px] rounded-[var(--radius\/full,999px)] to-[#7941e0]" data-node-id="40:200" data-name="Ask Ray">
        <div className="relative shrink-0 size-[22px]" data-node-id="40:201" data-name="Sparkle">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkle} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="40:204">
          Ask Ray
        </p>
      </div>
    </div>
  );
}