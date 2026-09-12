const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgArtNoBuses = "assets/f8c251e3-59d4-4abf-a777-28d9193d84b6.png";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgSparkle = "assets/3dc77bf2-2e3b-4740-9675-619bc53c4e0b.svg";

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function Component22NoBuses() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="794:6159" data-name="22 · No buses">
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="794:6160" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="794:6161" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I794:6161;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I794:6161;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[75px] relative shrink-0 w-full" data-node-id="794:6162" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I794:6162;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I794:6162;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I794:6162;34:91">
              ISBT Kashmiri Gate… → Nainital
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I794:6162;34:92">
              0 Buses
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I794:6162;56:226" data-name="Trailing slot">
            <div className="[word-break:break-word] bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center not-italic px-[12px] py-[9px] relative rounded-[var(--radius\/20,20px)] shrink-0 text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I794:6162;53:196" data-name="Trailing">
              <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px]" data-node-id="I794:6162;53:196;53:193">
                10 Sep
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px]" data-node-id="I794:6162;53:196;53:194">
                Fri
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="794:6163" data-name="Tabs">
          <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex h-[48px] items-start p-[2px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="794:6164" data-name="Segmented / Two-up">
            <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-full items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" data-node-id="I794:6164;34:98" data-name="Active">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I794:6164;34:99">
                Buses
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="I794:6164;34:100" data-name="Inactive">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I794:6164;34:101">
                Trains
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/page,#f2f2f7)] h-px relative shrink-0 w-full" data-node-id="794:6165" data-name="Divider" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-clip p-[16px] relative w-full" data-node-id="794:6319" data-name="No buses">
        <div className="h-[174px] relative rounded-[12px] shrink-0 w-[342px]" data-node-id="794:6320" data-name="Art / No buses">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgArtNoBuses} />
        </div>
        <div className="h-[26px] relative shrink-0 w-px" data-node-id="794:6321" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center w-[min-content]" data-node-id="794:6322">
          Oops!!
        </p>
        <div className="h-[4px] relative shrink-0 w-px" data-node-id="794:6323" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center w-[min-content]" data-node-id="794:6324">
          No Buses Found
        </p>
        <div className="h-[18px] relative shrink-0 w-px" data-node-id="794:6325" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[44px] leading-[22px] not-italic relative shrink-0 text-[#636363] text-[15px] text-center w-[320px]" data-node-id="794:6326">
          Sorry! No Buses found for applied filters. Modify filters and try again
        </p>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-r bottom-[46.02px] content-stretch drop-shadow-[0px_4px_7px_rgba(89,51,128,0.35)] flex from-[#c54646] gap-[6px] h-[43px] items-center justify-center left-1/2 pl-[18px] pr-[20px] rounded-[var(--radius\/full,999px)] to-[#7941e0]" data-node-id="794:6288" data-name="Ask Ray">
        <div className="relative shrink-0 size-[22px]" data-node-id="794:6289" data-name="Sparkle">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkle} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="794:6292">
          Ask Ray
        </p>
      </div>
    </div>
  );
}
