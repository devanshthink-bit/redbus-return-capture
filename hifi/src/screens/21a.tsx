const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";

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

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function Component21AFilterBusesAi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="793:5360" data-name="21a · Filter Buses · AI">
      <div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-node-id="793:5361" data-name="Backdrop">
        <div className="absolute bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[390px]" data-node-id="795:6237" data-name="Bus list header · behind">
          <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="795:6238" data-name="Status Bar / Light">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I795:6238;13:3">
              9:41
            </p>
            <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I795:6238;13:4" data-name="Status icons">
              <div className="absolute inset-[-1.3%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
              </div>
            </div>
          </div>
          <div className="h-[75px] relative shrink-0 w-full" data-node-id="795:6239" data-name="Nav / Top Bar">
            <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I795:6239;34:88" data-name="Back">
              <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I795:6239;34:90" data-name="Titles">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I795:6239;34:91">
                ISBT Kashmiri Gate… → Nainital
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I795:6239;34:92">
                57 Buses
              </p>
            </div>
            <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I795:6239;56:226" data-name="Trailing slot">
              <div className="[word-break:break-word] bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center not-italic px-[12px] py-[9px] relative rounded-[var(--radius\/20,20px)] shrink-0 text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I795:6239;53:196" data-name="Trailing">
                <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px]" data-node-id="I795:6239;53:196;53:193">
                  10 Sep
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px]" data-node-id="I795:6239;53:196;53:194">
                  Fri
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="795:6240" data-name="Tabs">
            <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex h-[48px] items-start p-[2px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="795:6241" data-name="Segmented / Two-up">
              <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-full items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" data-node-id="I795:6241;34:98" data-name="Active">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I795:6241;34:99">
                  Buses
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="I795:6241;34:100" data-name="Inactive">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I795:6241;34:101">
                  Trains
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--surface\/page,#f2f2f7)] h-px relative shrink-0 w-full" data-node-id="795:6242" data-name="Divider" />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.35)] h-[844px] left-0 top-0 w-[390px]" data-node-id="793:5496" data-name="Scrim" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[774px] items-start left-[8px] overflow-clip rounded-bl-[36px] rounded-br-[36px] rounded-tl-[20px] rounded-tr-[20px] top-[62px] w-[374px]" data-node-id="793:5497" data-name="Sheet">
        <div className="bg-white content-stretch flex gap-[12px] h-[58px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="793:5498" data-name="Title row">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#0000e4] text-[16px] whitespace-nowrap" data-node-id="793:5499">
            Close
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[24px] min-w-px not-italic relative text-[#1d1d1d] text-[17px] text-center" data-node-id="793:5500">
            Filter Buses
          </p>
          <div className="h-px relative shrink-0 w-[44px]" data-node-id="793:5501" data-name="spacer" />
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-node-id="793:5502" data-name="Body">
          <div className="bg-[#f4f4f7] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="793:5503" data-name="Rail">
            <div className="bg-white border-[#c54646] border-l-3 border-solid content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5504" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5505">
                AI Smart filter
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5506" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5507">
                Sort by
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5508" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5509">
                Departure Time from Source
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5510" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5511">
                Bus Type
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5512" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5513">
                Single Window Sleeper/Seater
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5514" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5515">
                Boarding Points
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5516" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5517">
                Dropping Points
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5518" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5519">
                RTC Bus Service Type
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5520" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5521">
                Amenities
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5522" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5523">
                Bus Operator
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="793:5524" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="793:5525">
                Special Features
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip px-[20px] py-[8px] relative" data-node-id="793:5526" data-name="Pane">
            <div className="bg-white border-[#7a3fd0] border-[1.5px] border-solid content-stretch flex flex-col h-[122px] items-start overflow-clip p-[14px] relative rounded-[12px] shrink-0 w-[200px]" data-node-id="793:6345" data-name="Ask box">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[#636363] text-[15px] w-full" data-node-id="793:6346">
                Search for your bus preferences in any language
              </p>
            </div>
            <div className="h-[14px] relative shrink-0 w-px" data-node-id="793:6347" data-name="gap" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] min-w-full not-italic relative shrink-0 text-[#636363] text-[13px] w-[min-content]" data-node-id="793:6348">
              Try asking
            </p>
            <div className="h-[10px] relative shrink-0 w-px" data-node-id="793:6349" data-name="gap" />
            <div className="bg-[#eceaf6] content-stretch flex items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="793:6350" data-name="Suggestion">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#1d1d1d] text-[15px]" data-node-id="793:6351">
                Explore Comfortable Sleeper Buses
              </p>
            </div>
            <div className="h-[10px] relative shrink-0 w-px" data-node-id="793:6352" data-name="gap" />
            <div className="bg-[#eceaf6] content-stretch flex items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="793:6353" data-name="Suggestion">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#1d1d1d] text-[15px]" data-node-id="793:6354">
                Find Early Booking Discount Buses
              </p>
            </div>
            <div className="h-[10px] relative shrink-0 w-px" data-node-id="793:6355" data-name="gap" />
            <div className="bg-[#eceaf6] content-stretch flex items-start overflow-clip px-[14px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="793:6356" data-name="Suggestion">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#1d1d1d] text-[15px]" data-node-id="793:6357">
                Show Evening AC Sleeper Buses
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border-[#e6e6e6] border-solid border-t content-stretch flex gap-[14px] items-center overflow-clip pb-[34px] pt-[14px] px-[16px] relative shrink-0 w-full" data-node-id="793:5542" data-name="Action bar">
          <div className="bg-white border border-[#8a8a8a] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip relative rounded-[999px] shrink-0 w-[122px]" data-node-id="793:5543" data-name="Button / Clear All">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="793:5544">
              Clear All
            </p>
          </div>
          <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]" label="Apply" showIcon={false} />
        </div>
      </div>
    </div>
  );
}
