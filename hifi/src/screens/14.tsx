const imgIconMic = "https://www.figma.com/api/mcp/asset/26796fd9-9c69-4aab-9453-1c15b3eeef1a.svg";
const imgIconAiSparkle = "https://www.figma.com/api/mcp/asset/8909187d-200e-437d-9929-f4c57bfd3cf6.svg";
const imgIconPercent = "https://www.figma.com/api/mcp/asset/1b1539f1-ba38-43b9-ba70-3799bb7016d0.svg";
const imgIconStarOutline = "https://www.figma.com/api/mcp/asset/6792ec27-54fb-4819-bd2a-4ac0ab7f4e33.svg";
const imgIconChevronDown = "https://www.figma.com/api/mcp/asset/fcb1ccfa-6c85-4930-8861-8f5c7376d96d.svg";
const imgIconSliders = "https://www.figma.com/api/mcp/asset/896ed676-bbb4-47d6-a9fa-3c7131944418.svg";
const imgIconHourglass = "assets/fc79b371-8622-4754-8241-fef3e1e574f9.svg";
const imgIconBusPin = "assets/69a4634a-5991-41fa-8b2b-bb170464cf48.svg";
const imgIconBus = "assets/550e0797-aedd-4962-964f-1c86e8440304.svg";
const imgIconChevronLeft = "assets/fb976138-0da0-4e95-8b36-6e154196c3e4.svg";
const imgStatusIcons = "assets/e7cf91ba-97ef-4d27-ba0f-2972ead625e9.svg";
const imgStar = "assets/a129e3f9-3ac2-4035-bc30-20b9ba59e998.svg";

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

function IconBus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="10:16" data-name="Icon / Bus">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBus} />
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

export default function Component14MoveBuses() {
  return (
    <div className="bg-[#f1f1f6] content-stretch flex flex-col items-start relative size-full" data-node-id="360:2663" data-name="14 · Move · buses">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="360:2664" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="360:2665" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I360:2665;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I360:2665;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="360:2666" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I360:2666;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I360:2666;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I360:2666;34:91">
              Choose your bus
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I360:2666;34:92">
              Nainital → Delhi · Tue, 15 Sep
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="360:2689" data-name="Content">
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[10px] items-start pb-[11px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="794:6345" data-name="Filters">
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="794:6346" data-name="Chips row 1">
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="794:6347" data-name="Chip / Filter and Sort">
              <IconSliders className="relative shrink-0 size-[24px]" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="794:6349">
                Filter and Sort
              </p>
              <IconChevronDown className="relative shrink-0 size-[20px]" />
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="794:6351" data-name="Chip / Primo Bus">
              <IconStarOutline className="relative shrink-0 size-[24px]" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="794:6353">
                Primo Bus
              </p>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[6px] h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="794:6354" data-name="Chip / Deals">
              <IconPercent className="relative shrink-0 size-[24px]" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="794:6356">
                Deals
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="794:6357" data-name="Chips row 2">
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="794:6358" data-name="Chip / Group Deal">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="794:6359">
                Group Deal
              </p>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="794:6360" data-name="Chip / Early Buy">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="794:6361">
                Early Buy
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="794:6362" data-name="AI Smart filter">
            <p className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Inter:Regular'] font-normal from-[#c54646] leading-[18px] not-italic relative shrink-0 text-[13px] text-[transparent] to-[#7941e0] whitespace-nowrap" data-node-id="794:6363">
              AI Smart filter
            </p>
            <div className="bg-[var(--surface\/default,white)] border-[#385ded] border-[1.5px] border-solid content-stretch flex gap-[7px] h-[42px] items-center pl-[15px] pr-[14px] relative rounded-[var(--radius\/10,10px)] shrink-0 w-full" data-node-id="794:6364" data-name="AI Smart filter field">
              <IconAiSparkle className="relative shrink-0 size-[28px]" />
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/tertiary,#767680)]" data-node-id="794:6366">{`Search 'AC sleeper under 1000'`}</p>
              <IconMic className="relative shrink-0 size-[24px]" />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="360:2690" data-name="Frame">
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="360:2691">
            Your booking
          </p>
          <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="360:2692" data-name="Frame">
            <p className="relative shrink-0" data-node-id="360:2693">
              Wed, 16 Sep · 23:55
            </p>
            <p className="relative shrink-0" data-node-id="360:2694">
              ₹1,090
            </p>
          </div>
          <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#636363] text-[14px] w-[min-content]" data-node-id="360:2695">
            Laxmi Holidays Pvt Ltd · Seat U5
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="377:3133" data-name="Frame">
          <div className="bg-[#f5dcce] content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="377:3134" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="377:3135">
              Note: Once you change the date for this ticket, you will not be able to cancel or change the date again.
            </p>
          </div>
          <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-node-id="377:3136" data-name="Frame">
            <IconBus className="relative shrink-0 size-[24px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-node-id="377:3144" data-name="Frame">
              <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="377:3145">
                Choose from available buses
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="377:3146">
                These are the Laxmi Holidays Pvt Ltd buses on the same route. Other operators are not offered.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="368:2850" data-name="Frame">
          <a className="content-stretch cursor-pointer drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="368:2851" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I368:2851;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I368:2851;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I368:2851;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I368:2851;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I368:2851;39:113">
                      20:30
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I368:2851;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I368:2851;39:115">
                      04:35
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I368:2851;39:116">
                    8h 5m · 46 Seats (12 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I368:2851;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I368:2851;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I368:2851;39:118">
                      ₹970
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I368:2851;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I368:2851;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I368:2851;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I368:2851;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I368:2851;39:123">
                      Laxmi Holidays Pvt Ltd
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-left whitespace-nowrap" data-node-id="I368:2851;39:125">
                    Bharat Benz A/C Seater /Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I368:2851;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I368:2851;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I368:2851;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] text-left whitespace-nowrap" data-node-id="I368:2851;39:126;36:121">
                      4.7
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I368:2851;39:126;36:122">
                    178
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I368:2851;179:1449" data-name="Amenities">
                <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
              </div>
            </div>
          </a>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[normal] not-italic overflow-clip pt-[2px] px-[16px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="368:2903" data-name="Frame">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="368:2904">
              Seat U5 taken — you get U4
            </p>
            <p className="relative shrink-0 whitespace-nowrap" data-node-id="368:2905">
              ₹120 less — no refund
            </p>
          </div>
          <div className="content-start flex flex-wrap items-start overflow-clip pt-[6px] px-[16px] relative shrink-0 w-full" data-node-id="368:2906" data-name="Frame">
            <div className="bg-[#f6ede6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="368:2907" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[12px] whitespace-nowrap" data-node-id="368:2908">
                ↻ Different seat
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="368:2909" data-name="Frame">
          <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="368:2910" data-name="Card / Bus">
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I368:2910;74:287" data-name="Body">
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I368:2910;39:110" data-name="Times and fare">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I368:2910;39:111" data-name="Times column">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I368:2910;39:112" data-name="Time line">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I368:2910;39:113">
                      23:55
                    </p>
                    <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I368:2910;39:114" data-name="Dash" />
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I368:2910;39:115">
                      08:00
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I368:2910;39:116">
                    8h 5m · 46 Seats (12 Single)
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I368:2910;39:117" data-name="Fare column">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I368:2910;179:1447" data-name="Price row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I368:2910;39:118">
                      ₹1,060
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I368:2910;39:119">
                    Onwards
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I368:2910;39:120" data-name="Operator row">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I368:2910;39:121" data-name="Operator column">
                  <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I368:2910;39:122" data-name="Name row">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I368:2910;39:123">
                      Laxmi Holidays Pvt Ltd
                    </p>
                    <IconBusPin className="relative shrink-0 size-[22px]" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I368:2910;39:125">
                    Bharat Benz A/C Seater /Sleeper (2+1)
                  </p>
                </div>
                <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I368:2910;39:126" data-name="Rating">
                  <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I368:2910;39:126;36:118" data-name="Score">
                    <div className="relative shrink-0 size-[11px]" data-node-id="I368:2910;39:126;36:119" data-name="Star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I368:2910;39:126;36:121">
                      4.7
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I368:2910;39:126;36:122">
                    178
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I368:2910;179:1449" data-name="Amenities">
                <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[normal] not-italic overflow-clip pt-[2px] px-[16px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="368:2962" data-name="Frame">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="368:2963">
              Seat U5 taken — you get U4
            </p>
            <p className="relative shrink-0 whitespace-nowrap" data-node-id="368:2964">
              ₹30 less — no refund
            </p>
          </div>
          <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip pt-[6px] px-[16px] relative shrink-0 w-full" data-node-id="368:2965" data-name="Frame">
            <div className="bg-[#f6ede6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="368:2966" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[12px] whitespace-nowrap" data-node-id="368:2967">
                ↻ Different seat
              </p>
            </div>
            <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="368:2968" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="368:2969">
                Same time as now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
