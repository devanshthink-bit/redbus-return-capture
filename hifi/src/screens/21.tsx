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

export default function Component21FilterBuses() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="792:4561" data-name="21 · Filter Buses">
      <div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-node-id="792:4562" data-name="Backdrop">
        <div className="absolute bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[390px]" data-node-id="795:6205" data-name="Bus list header · behind">
          <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="795:6206" data-name="Status Bar / Light">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I795:6206;13:3">
              9:41
            </p>
            <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I795:6206;13:4" data-name="Status icons">
              <div className="absolute inset-[-1.3%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
              </div>
            </div>
          </div>
          <div className="h-[75px] relative shrink-0 w-full" data-node-id="795:6207" data-name="Nav / Top Bar">
            <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I795:6207;34:88" data-name="Back">
              <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I795:6207;34:90" data-name="Titles">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I795:6207;34:91">
                ISBT Kashmiri Gate… → Nainital
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I795:6207;34:92">
                57 Buses
              </p>
            </div>
            <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I795:6207;56:226" data-name="Trailing slot">
              <div className="[word-break:break-word] bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center not-italic px-[12px] py-[9px] relative rounded-[var(--radius\/20,20px)] shrink-0 text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I795:6207;53:196" data-name="Trailing">
                <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px]" data-node-id="I795:6207;53:196;53:193">
                  10 Sep
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px]" data-node-id="I795:6207;53:196;53:194">
                  Fri
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="795:6208" data-name="Tabs">
            <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex h-[48px] items-start p-[2px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="795:6209" data-name="Segmented / Two-up">
              <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-[1_0_0] h-full items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" data-node-id="I795:6209;34:98" data-name="Active">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I795:6209;34:99">
                  Buses
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" data-node-id="I795:6209;34:100" data-name="Inactive">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I795:6209;34:101">
                  Trains
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--surface\/page,#f2f2f7)] h-px relative shrink-0 w-full" data-node-id="795:6210" data-name="Divider" />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.35)] h-[844px] left-0 top-0 w-[390px]" data-node-id="792:4697" data-name="Scrim" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[774px] items-start left-0 overflow-clip rounded-tl-[20px] rounded-tr-[20px] top-[70px] w-[390px]" data-node-id="792:4698" data-name="Sheet">
        <div className="bg-white content-stretch flex gap-[12px] h-[58px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="792:4699" data-name="Title row">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#0000e4] text-[16px] whitespace-nowrap" data-node-id="792:4700">
            Close
          </p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[24px] min-w-px not-italic relative text-[#1d1d1d] text-[17px] text-center" data-node-id="792:4701">
            Filter Buses
          </p>
          <div className="h-px relative shrink-0 w-[44px]" data-node-id="792:4702" data-name="spacer" />
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-node-id="792:4703" data-name="Body">
          <div className="bg-[#f4f4f7] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="792:4704" data-name="Rail">
            <div className="content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4705" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4706">
                AI Smart filter
              </p>
            </div>
            <div className="bg-white border-[#c54646] border-l-3 border-solid content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4707" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4708">
                Sort by
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4709" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4710">
                Departure Time from Source
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4711" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4712">
                Bus Type
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4713" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4714">
                Single Window Sleeper/Seater
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4715" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4716">
                Boarding Points
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4717" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4718">
                Dropping Points
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4719" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4720">
                RTC Bus Service Type
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4721" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4722">
                Amenities
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4723" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4724">
                Bus Operator
              </p>
            </div>
            <div className="border-[#e6e6e6] border-solid border-t content-stretch flex items-center overflow-clip pl-[14px] pr-[10px] py-[14px] relative shrink-0 w-full" data-node-id="792:4725" data-name="Cat">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[18px] min-w-px not-italic relative text-[#1d1d1d] text-[13px]" data-node-id="792:4726">
                Special Features
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start leading-[22px] min-w-px not-italic overflow-clip px-[20px] py-[8px] relative" data-node-id="792:4727" data-name="Pane">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="792:4728" data-name="Option">
              <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="792:4729">
                Relevance
              </p>
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#c54646] text-[17px] whitespace-nowrap" data-node-id="792:4730">
                ✓
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="792:4731" data-name="Option">
              <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="792:4732">
                Price - low to high
              </p>
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#c54646] text-[17px] whitespace-nowrap" data-node-id="792:4733">
                ​
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="792:4734" data-name="Option">
              <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="792:4735">
                Best rated first
              </p>
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#c54646] text-[17px] whitespace-nowrap" data-node-id="792:4736">
                ​
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="792:4737" data-name="Option">
              <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="792:4738">
                Early departure
              </p>
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#c54646] text-[17px] whitespace-nowrap" data-node-id="792:4739">
                ​
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip py-[14px] relative shrink-0 w-full" data-node-id="792:4740" data-name="Option">
              <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="792:4741">
                Late departure
              </p>
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#c54646] text-[17px] whitespace-nowrap" data-node-id="792:4742">
                ​
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border-[#e6e6e6] border-solid border-t content-stretch flex gap-[14px] items-center overflow-clip pb-[34px] pt-[14px] px-[16px] relative shrink-0 w-full" data-node-id="792:4743" data-name="Action bar">
          <div className="bg-white border border-[#8a8a8a] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip relative rounded-[999px] shrink-0 w-[122px]" data-node-id="792:4744" data-name="Button / Clear All">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="792:4745">
              Clear All
            </p>
          </div>
          <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)]" label="Apply" showIcon={false} />
        </div>
      </div>
    </div>
  );
}
