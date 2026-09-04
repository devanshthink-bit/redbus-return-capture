const imgGlyph = "assets/9e596533-9057-4caa-bca6-900ca1832df5.svg";
const imgIconHourglass = "assets/4cbb7aac-71cc-4def-a91b-62c9b6945b94.svg";
const imgIconBusPin = "assets/527ce3a6-ba82-45af-bc09-ed9caf248124.svg";
const imgIconChevronLeft = "assets/83b57c3b-d335-4e2f-bfa9-16c2721443e0.svg";
const imgStatusIcons = "assets/e7eb9918-be36-4d4a-867d-501043880fa0.svg";
const imgStar = "assets/63a46699-0b50-4ecb-b23a-fb1f307a35e3.svg";

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

function IconBusPin({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[22px]"} data-node-id="33:91" data-name="Icon / Bus Pin">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBusPin} />
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

export default function Component07ChooseYourBus() {
  return (
    <div className="bg-[#f1f1f6] content-stretch flex flex-col items-start relative size-full" data-node-id="358:2642" data-name="07 · Choose your bus">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="358:2643" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="358:2644" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I358:2644;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I358:2644;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="358:2645" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I358:2645;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I358:2645;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I358:2645;34:91">
              Choose your bus
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I358:2645;34:92">
              Nainital → Delhi · Mon, 14 Sep
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="358:2665" data-name="Content">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pl-[2px] relative shrink-0 w-full" data-node-id="373:3106" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="373:3107" data-name="Frame">
            <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1d1d1d] text-[17px] w-full" data-node-id="373:3108">
              4 buses on Mon, 14 Sep
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="373:3109">
              Your boarding and dropping times move with the bus.
            </p>
          </div>
          <div className="bg-[#f5dcce] content-stretch flex flex-col items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="373:3110" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a3a2a] text-[14px] w-full" data-node-id="373:3111">
              Note: Only buses with the “Free date change” tag can be moved to another date later.
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="367:2682" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="367:2683" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I367:2683;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2683;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I367:2683;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I367:2683;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2683;39:113">
                      19:45
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I367:2683;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2683;39:115">
                      03:50
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2683;39:116">
                    8h 5m · 21 Seats (9 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I367:2683;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I367:2683;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2683;39:118">
                      ₹800
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2683;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2683;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I367:2683;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I367:2683;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2683;39:123">
                      International Tourist Centre
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2683;39:125">
                    VE A/C Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I367:2683;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I367:2683;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I367:2683;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I367:2683;39:126;36:121">
                      4.2
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I367:2683;39:126;36:122">
                    420
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-[149px]" data-node-id="I367:2683;179:1449" data-name="Amenities" />
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="367:2735" data-name="Frame">
            <div className="bg-[#f1f1f1] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2736" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="367:2737">
                No date change
              </p>
            </div>
            <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2738" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="367:2739">
                Cheapest
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="367:2740" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="367:2741" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I367:2741;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2741;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I367:2741;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I367:2741;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2741;39:113">
                      21:15
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I367:2741;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2741;39:115">
                      05:40
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2741;39:116">
                    8h 25m · 31 Seats (6 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I367:2741;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I367:2741;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2741;39:118">
                      ₹880
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2741;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2741;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I367:2741;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I367:2741;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2741;39:123">
                      RS Yadav Smart Bus
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2741;39:125">
                    A/C Seater / Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I367:2741;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I367:2741;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I367:2741;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I367:2741;39:126;36:121">
                      4.5
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I367:2741;39:126;36:122">
                    315
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I367:2741;179:1449" data-name="Amenities">
                <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="367:2793" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="367:2794" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I367:2794;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2794;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I367:2794;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I367:2794;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2794;39:113">
                      23:10
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I367:2794;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2794;39:115">
                      07:20
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2794;39:116">
                    8h 10m · 21 Seats (9 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I367:2794;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I367:2794;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2794;39:118">
                      ₹830
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2794;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2794;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I367:2794;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I367:2794;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2794;39:123">
                      International Tourist Centre
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2794;39:125">
                    VE A/C Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I367:2794;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I367:2794;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I367:2794;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I367:2794;39:126;36:121">
                      4.2
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I367:2794;39:126;36:122">
                    420
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-[149px]" data-node-id="I367:2794;179:1449" data-name="Amenities" />
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="367:2846" data-name="Frame">
            <div className="bg-[#f1f1f1] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2847" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="367:2848">
                No date change
              </p>
            </div>
            <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2849" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="367:2850">
                Free Cancellation
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="367:2851" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="367:2852" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I367:2852;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2852;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I367:2852;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I367:2852;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2852;39:113">
                      23:55
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I367:2852;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2852;39:115">
                      08:00
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2852;39:116">
                    8h 5m · 46 Seats (12 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I367:2852;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I367:2852;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2852;39:118">
                      ₹1,030
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2852;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I367:2852;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I367:2852;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I367:2852;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I367:2852;39:123">
                      Laxmi Holidays Pvt Ltd
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I367:2852;39:125">
                    Bharat Benz A/C Seater /Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I367:2852;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I367:2852;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I367:2852;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I367:2852;39:126;36:121">
                      4.7
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I367:2852;39:126;36:122">
                    178
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I367:2852;179:1449" data-name="Amenities">
                <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="367:2904" data-name="Frame">
            <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2905" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="367:2906">
                Free Cancellation
              </p>
            </div>
            <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="367:2907" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="367:2908">
                Closest to your onward
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[#e4e4e4] border-solid content-stretch flex items-center justify-between overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="359:2661" data-name="Action bar">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="359:2662" data-name="Frame">
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px]" data-node-id="359:2663">
            Return
          </p>
          <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[18px]" data-node-id="359:2664">
            ₹1,030
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex flex-[1_0_0] gap-[10px] h-[46px] items-center justify-center min-w-px overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]" label="Review trip" showIcon={false} />
      </div>
    </div>
  );
}
