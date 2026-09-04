const imgArtPrimoOnNavy = "assets/492d7b81-126b-4dc0-b1ea-7b0976c71d18.png";
const imgIconThumbUp = "assets/593709e2-3563-49c7-8618-8c4fcaad19b5.svg";
const imgIconStarFilled = "assets/ef5bcd8b-c7a5-4459-960c-6aed312a0643.svg";
const imgIconTickCircle = "assets/343d22d4-f15a-45ab-b99f-319546f02c5c.svg";
const imgIconFeatureReadingLight = "assets/8e6f7a15-a9ef-406e-8007-1d24c1b177c1.svg";
const imgIconFeatureBedSheet = "assets/8876d20f-ea03-4423-a170-637b2e9d8bda.svg";
const imgIconFeatureCharging = "assets/fcef3492-69e7-4f26-8848-be928bce2d10.svg";
const imgIconFeatureBlankets = "assets/a5de349b-c4da-49c5-b838-ba0d405b7e69.svg";
const imgIconFeatureWaterBottle = "assets/17599550-92f8-47a5-b1e4-8aa70343ed01.svg";
const imgIconFeatureToilet = "assets/f2e0e280-4063-4fbb-834c-b106e6fced0c.svg";
const imgIconFeaturePillow = "assets/8741aa3f-ebd7-418e-9852-9002e8cb70da.svg";
const imgDot = "assets/a1868400-5598-461c-a05f-bad6ca3b85d6.svg";
const imgIconPolicyPickup = "assets/305a919e-4de0-47f6-aa0d-1821ecb07588.svg";
const imgIconPolicyLiquor = "assets/d510c566-a435-45dc-a798-91e4e953b1eb.svg";
const imgIconPolicyToilet = "assets/fbbae24a-3688-43c9-9847-a10d2f042516.svg";
const imgIconPolicyRoute = "assets/437889eb-1cef-49e9-a523-f59e7e62cd8f.svg";
const imgIconPolicyPets = "assets/6bf5a3b1-e366-4051-bd82-d6f1cac74610.svg";
const imgIconPolicyLuggage = "assets/b2c1e6b6-c264-42ee-8601-87d3f606e151.svg";
const imgIconPolicyChild = "assets/c676aee4-a118-4a6b-9af5-21b7927868de.svg";
const imgGlyph = "assets/362ba083-fab2-417d-accd-66574bd0bea1.svg";
const imgArtPrimo = "assets/1637499b-d967-4b1d-b99d-940507154fb6.png";
const imgArtSunburst = "assets/456916d6-6dc9-43d2-ad53-969b99e885b3.svg";
const imgArtLaurel = "assets/f72f3b5e-b4c9-47a9-bbd0-40f8ed17040a.svg";
const imgGroup = "assets/05ec3d48-9c70-4587-b109-b48fc2b22bbf.svg";
const imgStar = "assets/358bb95a-b08a-4670-a58e-6d4681ee5cd8.svg";
const imgPhoto1 = "assets/0f66b95e-98e1-44d0-8929-705749334f99.png";
const imgPhoto2 = "assets/fc0563d5-0e5b-44f3-b0bd-c85c12d69274.png";
const imgArtPrimoBus = "assets/24fa5737-e1fd-47ad-a028-9404700b08b7.png";
const imgStatusIcons = "assets/8f545a61-af61-4080-ae94-c3c1137acf49.svg";
const imgCollapse = "assets/62b4891e-58c6-4837-9429-572159077cac.svg";
const imgVector = "assets/38cf441f-3b17-47cf-be3b-d4c07144fd06.svg";
const imgIconStarFilled1 = "assets/d6088563-b5ed-4a2a-904b-a4c162ee8b78.svg";

function ArtPrimoOnNavy({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.2px] relative w-[60px]"} data-node-id="224:1872" data-name="Art / Primo · on navy">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPrimoOnNavy} />
    </div>
  );
}

function IconThumbUp({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="243:1790" data-name="Icon / Thumb Up">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconThumbUp} />
    </div>
  );
}

type ChipPraiseProps = {
  className?: string;
  label?: string;
  showIcon?: boolean;
};

function ChipPraise({ className, label = "Punctuality (90)", showIcon = true }: ChipPraiseProps) {
  return (
    <div className={className || "bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px]"} data-node-id="243:1796" data-name="Chip / Praise">
      {showIcon && <IconThumbUp className="relative shrink-0 size-[16px]" />}
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="243:1799">
        {label}
      </p>
    </div>
  );
}

function IconStarFilled({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="244:1785" data-name="Icon / Star Filled">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStarFilled} />
    </div>
  );
}

type RowRatingBarProps = {
  className?: string;
  percent?: string;
  stars?: string;
};

function RowRatingBar({ className, percent = "76%", stars = "5" }: RowRatingBarProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center relative w-[358px]"} data-node-id="244:1796" data-name="Row / Rating bar">
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="244:1797">
        {stars}
      </p>
      <IconStarFilled className="relative shrink-0 size-[18px]" />
      <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip pr-[62px] relative rounded-[999px]" data-node-id="244:1800" data-name="Track">
        <div className="bg-[#3e3e3e] flex-[1_0_0] h-full min-w-px relative rounded-[999px]" data-node-id="244:1801" data-name="Fill" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-right w-[46px]" data-node-id="244:1802">
        {percent}
      </p>
    </div>
  );
}

function IconTickCircle({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="246:1792" data-name="Icon / Tick Circle">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTickCircle} />
    </div>
  );
}

function IconFeatureReadingLight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1867" data-name="Icon / Feature Reading Light">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureReadingLight} />
    </div>
  );
}

function IconFeatureBedSheet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1861" data-name="Icon / Feature Bed Sheet">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureBedSheet} />
    </div>
  );
}

function IconFeatureCharging({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1857" data-name="Icon / Feature Charging">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureCharging} />
    </div>
  );
}

function IconFeatureBlankets({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1851" data-name="Icon / Feature Blankets">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureBlankets} />
    </div>
  );
}

function IconFeatureWaterBottle({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1846" data-name="Icon / Feature Water Bottle">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureWaterBottle} />
    </div>
  );
}

function IconFeatureToilet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1840" data-name="Icon / Feature Toilet">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeatureToilet} />
    </div>
  );
}

function IconFeaturePillow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1833" data-name="Icon / Feature Pillow">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFeaturePillow} />
    </div>
  );
}

type RowStopProps = {
  className?: string;
  address?: string;
  date?: string;
  name?: string;
  rail?: "First" | "Middle" | "Only";
  time?: string;
};

function RowStop({ className, address = "Kashmiri Gate Metro Gate No.5 ,Kashmiri Gate Metro Gate No.5", date = "09 Sep", name = "Isbt Kashmiri Gate Metro Gate No.5", rail = "First", time = "23:15" }: RowStopProps) {
  const isMiddle = rail === "Middle";
  const isOnly = rail === "Only";
  return (
    <div className={className || "content-stretch flex items-start relative w-[358px]"} id={isOnly ? "node-247_1823" : isMiddle ? "node-247_1803" : "node-247_1793"}>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic overflow-clip pb-[14px] pt-px relative shrink-0 text-right w-[52px]" id={isOnly ? "node-247_1824" : isMiddle ? "node-247_1804" : "node-247_1794"} data-name="Time">
        <p className="font-['Inter:Medium'] font-medium leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="247:1795">
          {time}
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="247:1796">
          {date}
        </p>
      </div>
      <div className="relative self-stretch shrink-0 w-[17px]" id={isOnly ? "node-247_1827" : isMiddle ? "node-247_1807" : "node-247_1797"} data-name="Rail">
        {["First", "Middle"].includes(rail) && <div className={`-translate-x-1/2 absolute bg-[#dddde2] bottom-[-5px] left-1/2 rounded-[3px] w-[6px] ${isMiddle ? "top-0" : "top-[10px]"}`} id={isMiddle ? "node-247_1808" : "node-247_1798"} data-name="Line" />}
        <div className="-translate-x-1/2 absolute left-1/2 size-[10px] top-[5px]" id={isOnly ? "node-247_1828" : isMiddle ? "node-247_1809" : "node-247_1799"} data-name="Dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[22px] min-w-px not-italic overflow-clip pb-[14px] pl-[4px] relative text-[16px]" id={isOnly ? "node-247_1829" : isMiddle ? "node-247_1810" : "node-247_1800"} data-name="Text">
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="247:1801">
          {name}
        </p>
        <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="247:1802">
          {address}
        </p>
      </div>
    </div>
  );
}

function IconPolicyPickup({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1829" data-name="Icon / Policy Pickup">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyPickup} />
    </div>
  );
}

function IconPolicyLiquor({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1819" data-name="Icon / Policy Liquor">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyLiquor} />
    </div>
  );
}

function IconPolicyToilet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1813" data-name="Icon / Policy Toilet">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyToilet} />
    </div>
  );
}

function IconPolicyRoute({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1805" data-name="Icon / Policy Route">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyRoute} />
    </div>
  );
}

function IconPolicyPets({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1800" data-name="Icon / Policy Pets">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyPets} />
    </div>
  );
}

function IconPolicyLuggage({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1793" data-name="Icon / Policy Luggage">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyLuggage} />
    </div>
  );
}

function IconPolicyChild({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="241:1786" data-name="Icon / Policy Child">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconPolicyChild} />
    </div>
  );
}

type RowCancellationProps = {
  className?: string;
  propWith?: string;
  state?: "Header" | "Default" | "Highlighted";
  when?: string;
  whenDetail?: string;
  without?: string;
};

function RowCancellation({ className, propWith = "100% refund", state = "Header", when = "Up to 72h before departure", whenDetail = "Until 06 Sep, 23:15", without = "75% refund" }: RowCancellationProps) {
  const isDefault = state === "Default";
  const isDefaultOrHighlighted = ["Default", "Highlighted"].includes(state);
  const isHeader = state === "Header";
  const isHighlighted = state === "Highlighted";
  return (
    <div className={className || `border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative w-[358px] ${isHighlighted ? "bg-[#e9eaf5]" : isDefault ? "bg-white" : "bg-[#f2f1f7]"}`} id={isHighlighted ? "node-246_1811" : isDefault ? "node-246_1800" : "node-246_1793"}>
      <div className={`border-[#e9eaf5] border-r border-solid content-stretch flex flex-col items-start overflow-clip pl-[14px] pr-[12px] py-[10px] relative self-stretch shrink-0 w-[155px] ${isDefaultOrHighlighted ? "[word-break:break-word] gap-[3px] not-italic" : ""}`} id={isHighlighted ? "node-246_1812" : isDefault ? "node-246_1801" : "node-246_1794"} data-name="Cell / When">
        {isDefaultOrHighlighted && (
          <>
            <p className="font-['Inter:Medium'] font-medium leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="246:1802">
              {when}
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="246:1803">
              {whenDetail}
            </p>
          </>
        )}
        {isHeader && (
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="246:1795">
            Cancellation Time
          </p>
        )}
      </div>
      <div className="border-[#e9eaf5] border-r border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative self-stretch shrink-0 w-[103px]" id={isHighlighted ? "node-246_1815" : isDefault ? "node-246_1804" : "node-246_1796"} data-name="Cell / Without">
        {isDefaultOrHighlighted && (
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="246:1805">
            {without}
          </p>
        )}
        {isHeader && (
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="246:1797">
            Without Free Cancellation
          </p>
        )}
      </div>
      <div className={`content-stretch flex items-center overflow-clip px-[12px] py-[10px] relative self-stretch shrink-0 w-[100px] ${isDefaultOrHighlighted ? "gap-[6px]" : ""}`} id={isHighlighted ? "node-246_1817" : isDefault ? "node-246_1806" : "node-246_1798"} data-name="Cell / With">
        {isDefaultOrHighlighted && (
          <>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/positive,#2e5c2a)]" data-node-id="246:1807">
              {propWith}
            </p>
            <IconTickCircle className="relative shrink-0 size-[20px]" />
          </>
        )}
        {isHeader && (
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="246:1799">
            With Free Cancellation
          </p>
        )}
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

function ArtPrimo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.67px] relative w-[59.33px]"} data-node-id="74:272" data-name="Art / Primo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPrimo} />
    </div>
  );
}

function ArtSunburst({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[150px]"} data-node-id="250:1850" data-name="Art / Sunburst">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
    </div>
  );
}

function ArtLaurel({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[26px]"} data-node-id="250:1826" data-name="Art / Laurel">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtLaurel} />
    </div>
  );
}

function ArtLaurelMirrored({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[26px]"} data-node-id="251:1881" data-name="Art / Laurel · mirrored">
      <div className="absolute flex inset-[0.22%_5.56%_4%_6.3%] items-center justify-center" data-node-id="251:1870" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Group">
            <div className="absolute inset-[0_0_-1.96%_0]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
      </div>
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

export default function Component03BSeatMapSheetFull() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col gap-[8px] items-start relative size-full" data-node-id="193:1872" data-name="03b · Seat map · sheet full">
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="193:1873" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="193:1874" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I193:1874;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I193:1874;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip pb-[24px] pt-[10px] px-[16px] relative shrink-0 w-full" data-node-id="248:1780" data-name="Sheet header">
        <div className="relative shrink-0 size-[24px]" data-node-id="258:2127" data-name="Collapse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCollapse} />
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip pt-[8px] relative shrink-0 w-full" data-node-id="248:1806" data-name="Operator">
          <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px overflow-clip relative" data-node-id="248:1807" data-name="Name">
            <ArtPrimo className="h-[29px] relative shrink-0 w-[52px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[24px] min-w-px not-italic relative text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="248:1809">
              International Tourist Centre
            </p>
          </div>
          <RatingBadge className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" count="231" score="4.6" />
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="248:1816">
          23:15 - 08:15 · Wed, 09 Sep
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="248:1817">
          Bharat Benz A/C Seater /Sleeper (2+1)
        </p>
        <div className="content-stretch flex gap-[8px] h-[134px] items-start overflow-clip pt-[6px] relative shrink-0 w-full" data-node-id="248:1818" data-name="Photos">
          <div className="h-full relative rounded-[10px] shrink-0 w-[273px]" data-node-id="248:1819" data-name="Photo 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgPhoto1} />
          </div>
          <div className="h-full relative rounded-[10px] shrink-0 w-[94px]" data-node-id="248:1820" data-name="Photo 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgPhoto2} />
          </div>
        </div>
        <div className="content-stretch flex gap-[22px] items-center overflow-clip pt-[10px] relative shrink-0 w-full" data-node-id="248:1821" data-name="Tabs">
          <div className="bg-[#c54848] content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="248:1822" data-name="Tab · Highlights">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="248:1823">
              Highlights
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="248:1824">
            Booking policies
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="248:1825">
            Bus route
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="248:1826">{`Boarding & dropping`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] px-[16px] relative shrink-0 w-full" data-node-id="248:1781" data-name="Highlights">
        <div className="bg-white content-stretch flex gap-[12px] h-[64px] items-center overflow-clip pl-[12px] relative rounded-[14px] shrink-0 w-full" data-node-id="251:1802" data-name="Card / Top 5%">
          <div className="content-stretch flex gap-[2px] items-center overflow-clip relative shrink-0" data-node-id="251:1803" data-name="Top 5%">
            <ArtLaurelMirrored className="h-[34px] relative shrink-0 w-[22px]" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="251:1815">
              Top 5%
            </p>
            <ArtLaurel className="h-[34px] relative shrink-0 w-[22px]" />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/secondary,#636363)]" data-node-id="251:1827">
            One of the best on this route
          </p>
          <div className="h-full overflow-clip relative shrink-0 w-[96px]" data-node-id="251:1828" data-name="Primo burst">
            <ArtSunburst className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+35px)] size-[150px] top-[calc(50%+3px)]" />
            <div className="absolute bg-gradient-to-r bottom-0 from-white left-0 to-[rgba(255,255,255,0)] top-0 w-[30px]" data-node-id="251:1882" data-name="Fade" />
            <ArtPrimo className="-translate-x-1/2 -translate-y-1/2 absolute h-[36px] left-[calc(50%-2px)] top-[calc(50%-6px)] w-[64px]" />
            <IconChevronRight className="absolute bottom-[4px] right-[8px] size-[16px]" />
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="248:1782" data-name="Cancellation and refund policy">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="252:1847">
          Cancellation and refund policy
        </p>
        <div className="border border-[#e9eaf5] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="252:1848" data-name="Table">
          <RowCancellation className="bg-[#f2f1f7] border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative shrink-0 w-full" />
          <RowCancellation className="bg-[#e9eaf5] border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative shrink-0 w-full" state="Highlighted" />
          <RowCancellation className="bg-white border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative shrink-0 w-full" state="Default" when="48h before departure" whenDetail="06 Sep, 23:15 - 07 Sep, 23:15" />
          <RowCancellation className="bg-white border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative shrink-0 w-full" state="Default" when="24h before departure" whenDetail="07 Sep, 23:15 - 08 Sep, 23:15" />
          <RowCancellation className="bg-white border-[#e9eaf5] border-b border-solid content-stretch flex items-start relative shrink-0 w-full" state="Default" when="12h before departure" whenDetail="08 Sep, 23:15 - 09 Sep, 11:15" without="50% refund" />
          <div className="bg-white border-0 border-[#e9eaf5] border-solid content-stretch flex items-start relative shrink-0 w-full" data-node-id="252:1904" data-name="Row / Cancellation">
            <div className="[word-break:break-word] border-[#e9eaf5] border-r border-solid content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip pl-[14px] pr-[12px] py-[10px] relative self-stretch shrink-0 w-[155px]" data-node-id="I252:1904;246:1801" data-name="Cell / When">
              <p className="font-['Inter:Medium'] font-medium leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I252:1904;246:1802">
                Less than 12h before departure
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I252:1904;246:1803">
                After 09 Sep, 23:15
              </p>
            </div>
            <div className="border-[#e9eaf5] border-r border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[10px] relative self-stretch shrink-0 w-[103px]" data-node-id="I252:1904;246:1804" data-name="Cell / Without">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I252:1904;246:1805">
                No refund
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[12px] py-[10px] relative self-stretch shrink-0 w-[100px]" data-node-id="I252:1904;246:1806" data-name="Cell / With">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-[color:var(--text\/positive,#2e5c2a)]" data-node-id="I252:1904;246:1807">
                100% refund
              </p>
              <IconTickCircle className="relative shrink-0 size-[20px]" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r content-stretch flex from-[#f4e7ea] gap-[10px] items-start overflow-clip p-[14px] relative rounded-[12px] shrink-0 to-white w-full" data-node-id="252:1915" data-name="Free Cancellation callout">
          <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="252:1916" data-name="Shield">
            <div className="absolute inset-[9.17%_18.33%]" data-node-id="252:1917" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold inset-[26.67%_39.77%_27.88%_37.5%] leading-[normal] not-italic text-[8.25px] text-center text-white whitespace-nowrap" data-node-id="252:1918">
              ₹
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[0px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="252:1919">
            <span className="leading-[22px] text-[16px]">{`Opt for `}</span>
            <span className="font-['Inter:Bold'] font-bold leading-[22px] text-[#b63468] text-[16px]">Free Cancellation</span>
            <span className="leading-[22px] text-[16px]">{` while booking to get a full refund.`}</span>
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="252:1920">
          * Cancellation charges are computed on a per seat basis. Above cancellation fare is calculated based on seat fare of ₹ 1299
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="252:1921">
          * Cancellation charges are calculated based on service start date + time at :09-09-2026 23:15
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="252:1922">{` * Ticket cannot be cancelled after scheduled bus departure time from the first boarding point`}</p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="252:1923">
          * Note: Cancellation charges mentioned above are excluding GST
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="252:1924">
          * For group bookings cancellation of individual seats is not allowed.
        </p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="248:1783" data-name="Date change policy">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="253:1907">
          Date change policy
        </p>
        <div className="bg-[#e8e9f4] content-stretch flex flex-col items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="253:1908" data-name="Notice">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="253:1909">
            This bus operator does not support rescheduling of the ticket
          </p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="248:1784" data-name="Other policies">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="253:1910">
          Other policies
        </p>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1911" data-name="Row / Policy">
          <IconPolicyChild className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1911;244:1793" data-name="Text">
            <p className="relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1911;244:1794">
              Child passenger policy
            </p>
            <p className="relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1911;244:1795">
              Children above the age of 5 will need a ticket
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1931" data-name="Row / Policy">
          <IconPolicyLuggage className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1931;244:1793" data-name="Text">
            <p className="leading-[22px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1931;244:1794">
              Luggage policy
            </p>
            <div className="leading-[0] relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1931;244:1795">
              <p className="leading-[22px] mb-0">Carrying fish is not allowed</p>
              <p className="leading-[22px] mb-0">1 pieces of luggage will be accepted free of charge per passenger. Excess items will be chargeable</p>
              <p className="leading-[22px]">Excess baggage over 15 kgs per passenger will be chargeable</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1946" data-name="Row / Policy">
          <IconPolicyPets className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1946;244:1793" data-name="Text">
            <p className="relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1946;244:1794">
              Pets Policy
            </p>
            <p className="relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1946;244:1795">
              Pets are not allowed
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1961" data-name="Row / Policy">
          <IconPolicyRoute className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1961;244:1793" data-name="Text">
            <p className="leading-[22px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1961;244:1794">
              Route Policy
            </p>
            <div className="leading-[0] relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1961;244:1795">
              <p className="leading-[22px] mb-0">Bus will pass through Rampur , Rudrapur , Haldwani and Kathgodam.</p>
              <p className="leading-[22px]">This bus starts from Mori Gate Delhi</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1974" data-name="Row / Policy">
          <IconPolicyToilet className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1974;244:1793" data-name="Text">
            <p className="relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1974;244:1794">
              Toilet Usage Policy
            </p>
            <p className="relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1974;244:1795">
              In Bus Toilet with Only Urinal Facility
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:1990" data-name="Row / Policy">
          <IconPolicyLiquor className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:1990;244:1793" data-name="Text">
            <p className="relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:1990;244:1794">
              Liquor Policy
            </p>
            <p className="relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:1990;244:1795">
              Carrying or consuming liquor inside the bus is prohibited. Bus operator reserves the right to deboard drunk passengers.
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="253:2004" data-name="Row / Policy">
          <IconPolicyPickup className="relative shrink-0 size-[22px]" />
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[22px] min-w-px not-italic overflow-clip relative text-[16px]" data-node-id="I253:2004;244:1793" data-name="Text">
            <p className="relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I253:2004;244:1794">
              Pick up time policy
            </p>
            <p className="relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I253:2004;244:1795">
              Bus operator is not obligated to wait beyond the scheduled departure time of the bus. No refund request will be entertained for late arriving passengers.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[4px] items-start overflow-clip px-[16px] py-[20px] relative shrink-0 w-full" data-node-id="248:1785" data-name="Bus route">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="255:1976">
          Bus route
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="255:1977">
          450 km · 9h
        </p>
        <div className="h-[104px] relative shrink-0 w-full" data-node-id="255:1978" data-name="Route">
          <div className="absolute bg-[#f8df9c] h-[7px] left-0 rounded-[1px] top-[90px] w-[58px]" data-node-id="255:1981" data-name="Rectangle" />
          <div className="absolute bg-[#f8df9c] h-[7px] left-0 rounded-[1px] top-[24px] w-[36px]" data-node-id="255:1980" data-name="Rectangle" />
          <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0] left-0 not-italic right-0 text-[0px] text-[color:var(--text\/primary,#1d1d1d)] top-[8px]" data-node-id="255:1979">
            <span className="font-['Inter:Medium'] font-medium leading-[22px] text-[16px]">Delhi</span>
            <span className="leading-[22px] text-[16px]">{` → Moradabad → Rampur (Uttar Pradesh) → Bilaspur(Uttar Pradesh) → Rudrapur → Haldwani → Kathgodam → Kainchi dham → `}</span>
            <span className="font-['Inter:Medium'] font-medium leading-[22px] text-[16px]">Nainital</span>
          </p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[6px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1786" data-name="Boarding points">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="255:1982">
          Boarding points
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="255:1983">
          Delhi
        </p>
        <RowStop className="content-stretch flex items-start relative shrink-0 w-full" />
        <RowStop address="ITC Lounge Metro Pillar No 215 Opp- Anand Vihar ISBT" className="content-stretch flex items-start relative shrink-0 w-full" name="Anand Vihar Itc Lounge" rail="Middle" time="23:59" />
        <RowStop address="Sector 62 Noida Near Foot Over Bridge ,Towards To Hapur (UP)" className="content-stretch flex items-start relative shrink-0 w-full" date="10 Sep" name="Noida" rail="Middle" time="00:20" />
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="255:2014" data-name="Row / Stop">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic overflow-clip pb-[14px] pt-px relative shrink-0 text-right w-[52px]" data-node-id="I255:2014;247:1814" data-name="Time">
            <p className="font-['Inter:Medium'] font-medium leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I255:2014;247:1815">
              00:30
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I255:2014;247:1816">
              10 Sep
            </p>
          </div>
          <div className="relative self-stretch shrink-0 w-[17px]" data-node-id="I255:2014;247:1817" data-name="Rail">
            <div className="-translate-x-1/2 absolute bg-[#dddde2] h-[10px] left-1/2 rounded-[3px] top-0 w-[6px]" data-node-id="I255:2014;247:1818" data-name="Line" />
            <div className="-translate-x-1/2 absolute left-1/2 size-[10px] top-[5px]" data-node-id="I255:2014;247:1819" data-name="Dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip pb-[14px] pl-[4px] relative" data-node-id="I255:2014;247:1820" data-name="Text">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I255:2014;247:1821">
              Abes Engineer College Gaziabad
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[6px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1787" data-name="Dropping point">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="255:2024">
          Dropping point
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="255:2025">
          Nainital
        </p>
        <RowStop address="Tallital Bus Stand ( Drop By Cab Or Mini Bus From Haldwani To Nainital )" className="content-stretch flex items-start relative shrink-0 w-full" date="10 Sep" name="Nainital Mall Road" rail="Only" time="08:15" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip pb-[22px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1788" data-name="Rest stop">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="256:2020">
          Rest stop
        </p>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="256:2021">
          Shiva Dhaba Gajraula ( Jitendra Choudhary )
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full whitespace-pre-wrap" data-node-id="256:2022">{`01:15 AM  •  20 Mins stop`}</p>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="256:2023">
          Traveller Experiences
        </p>
        <div className="content-start flex flex-wrap gap-[10px] items-start overflow-clip pt-[6px] relative shrink-0 w-full" data-node-id="256:2024" data-name="Experiences">
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Washroom Hygiene" />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Food Quality" />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Safety" />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[22px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1789" data-name="Bus features">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="256:2038">
          Bus features
        </p>
        <div className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="256:2039" data-name="Features">
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2040" data-name="Chip / Feature">
            <IconFeaturePillow className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2040;243:1795">
              Pillow
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2049" data-name="Chip / Feature">
            <IconFeatureToilet className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2049;243:1795">
              Toilet
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2060" data-name="Chip / Feature">
            <IconFeatureWaterBottle className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2060;243:1795">
              Water Bottle
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2069" data-name="Chip / Feature">
            <IconFeatureBlankets className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2069;243:1795">
              Blankets
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2077" data-name="Chip / Feature">
            <IconFeatureCharging className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2077;243:1795">
              Charging Point
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2086" data-name="Chip / Feature">
            <IconFeatureBedSheet className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2086;243:1795">
              Bed Sheet
            </p>
          </div>
          <div className="bg-[#ede7f4] content-stretch flex gap-[6px] items-center pl-[10px] pr-[12px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="256:2093" data-name="Chip / Feature">
            <IconFeatureReadingLight className="relative shrink-0 size-[18px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I256:2093;243:1795">
              Reading Light
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[22px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1790" data-name="Ratings & reviews">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="257:2071" data-name="Header">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[26px] min-w-px not-italic relative text-[20px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="257:2072">{`Ratings & reviews`}</p>
          <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="257:2073" data-name="Score">
            <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="257:2074" data-name="Value">
              <div className="relative shrink-0 size-[24px]" data-node-id="257:2075" data-name="Icon / Star Filled">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStarFilled1} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[34px] not-italic relative shrink-0 text-[#278534] text-[26px] whitespace-nowrap" data-node-id="257:2077">
                4.6
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="257:2078">
              231 ratings
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="257:2079" data-name="Verified">
          <IconTickCircle className="relative shrink-0 size-[22px]" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[#278534] text-[16px] whitespace-nowrap" data-node-id="257:2083">
            Real feedback from verified travelers
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="257:2084" data-name="Bars">
          <RowRatingBar className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="257:2093" data-name="Row / Rating bar">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I257:2093;244:1797">
              4
            </p>
            <IconStarFilled className="relative shrink-0 size-[18px]" />
            <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip pr-[220px] relative rounded-[999px]" data-node-id="I257:2093;244:1800" data-name="Track">
              <div className="bg-[#3e3e3e] flex-[1_0_0] h-full min-w-px relative rounded-[999px]" data-node-id="I257:2093;244:1801" data-name="Fill" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-right w-[46px]" data-node-id="I257:2093;244:1802">
              15%
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="257:2100" data-name="Row / Rating bar">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I257:2100;244:1797">
              3
            </p>
            <IconStarFilled className="relative shrink-0 size-[18px]" />
            <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip pr-[254px] relative rounded-[999px]" data-node-id="I257:2100;244:1800" data-name="Track">
              <div className="bg-[#3e3e3e] flex-[1_0_0] h-full min-w-px relative rounded-[999px]" data-node-id="I257:2100;244:1801" data-name="Fill" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-right w-[46px]" data-node-id="I257:2100;244:1802">
              2%
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="257:2107" data-name="Row / Rating bar">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I257:2107;244:1797">
              2
            </p>
            <IconStarFilled className="relative shrink-0 size-[18px]" />
            <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip pr-[255px] relative rounded-[999px]" data-node-id="I257:2107;244:1800" data-name="Track">
              <div className="bg-[#3e3e3e] flex-[1_0_0] h-full min-w-px relative rounded-[999px]" data-node-id="I257:2107;244:1801" data-name="Fill" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-right w-[46px]" data-node-id="I257:2107;244:1802">
              2%
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="257:2114" data-name="Row / Rating bar">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I257:2114;244:1797">
              1
            </p>
            <IconStarFilled className="relative shrink-0 size-[18px]" />
            <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip pr-[249px] relative rounded-[999px]" data-node-id="I257:2114;244:1800" data-name="Track">
              <div className="bg-[#3e3e3e] flex-[1_0_0] h-full min-w-px relative rounded-[999px]" data-node-id="I257:2114;244:1801" data-name="Fill" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-right w-[46px]" data-node-id="I257:2114;244:1802">
              5%
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="257:2121">
          Loved by travellers
        </p>
        <div className="content-start flex flex-wrap gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="257:2122" data-name="Praise">
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Driving (73)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="AC (66)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Staff behavior (64)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Rest stop hygiene (61)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Cleanliness (60)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Seat / Sleep Comfort (60)" showIcon={false} />
          <ChipPraise className="bg-[#bbf0b8] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[999px] shrink-0" label="Live tracking (42)" showIcon={false} />
        </div>
        <div className="bg-[#f2d9d5] content-stretch flex items-center justify-center overflow-clip py-[15px] relative rounded-[12px] shrink-0 w-full" data-node-id="257:2155" data-name="Read all reviews">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="257:2156">
            Read all 57 reviews
          </p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[22px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="248:1791" data-name="This is a Primo">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="258:2121">
          This is a Primo
        </p>
        <div className="bg-[#1b3874] h-[239px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="258:2122" data-name="Card / Primo">
          <div className="absolute bottom-0 h-[114px] left-0 right-0" data-node-id="258:2123" data-name="Art / Primo bus">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPrimoBus} />
          </div>
          <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[24px] left-[18px] not-italic text-[18px] text-white top-[20px] w-[240px]" data-node-id="258:2124">
            International Tourist Centre
          </p>
          <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[22px] left-[18px] not-italic text-[16px] text-white top-[48px] whitespace-nowrap" data-node-id="258:2125">
            A Rising Star on redBus
          </p>
          <ArtPrimoOnNavy className="absolute h-[40px] right-[16px] top-[18px] w-[74px]" />
        </div>
      </div>
    </div>
  );
}