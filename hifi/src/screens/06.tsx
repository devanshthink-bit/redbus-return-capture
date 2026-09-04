const imgGlyph = "assets/74c7ca02-1b11-414a-bfd9-5a5b80027a3a.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/e9037b2a-42c8-4e00-b11e-a242d1b9b242.svg";

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

export default function Component06YourReturnPickADay() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="99:636" data-name="06 · Your return · pick a day">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="99:637" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="99:638" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I99:638;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I99:638;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="99:651" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I99:651;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I99:651;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I99:651;34:91">
              Your return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I99:651;34:92">
              Nainital → Delhi · Fri, 11 – Thu, 17 Sep
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I99:651;56:226" data-name="Trailing slot">
            <div className="content-stretch flex items-center justify-center px-[10px] relative shrink-0" data-node-id="I99:651;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I99:651;53:196;97:644">
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="99:661" data-name="Content">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="99:662" data-name="Lead">
          <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="99:663">
            Pick your return day.
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="99:664">
            Switching is free until you pay.
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="99:665" data-name="Rules">
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="99:669" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] w-full" data-node-id="99:670">
            No refund on a cheaper day
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="99:671" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="99:672">
            You only pay when the new day costs more.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="99:673" data-name="Days">
          <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="351:2700" data-name="Day · Fri, 11 Sep · 23:55">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="351:2701" data-name="Frame">
              <p className="relative shrink-0" data-node-id="351:2702">
                Fri, 11 Sep
              </p>
              <p className="relative shrink-0" data-node-id="351:2703">
                from ₹1,260
              </p>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="351:2704" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="351:2705">
                1 bus · can change date
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="410:2967" data-name="Frame">
              <div className="bg-[#f6ede6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="410:2968" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[12px] whitespace-nowrap" data-node-id="410:2969">
                  ↻ Different seat — U4 taken
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="351:2706" data-name="Day · Sat, 12 Sep">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="351:2707" data-name="Frame">
              <p className="relative shrink-0" data-node-id="351:2708">
                Sat, 12 Sep
              </p>
              <p className="relative shrink-0" data-node-id="351:2709">
                from ₹1,140
              </p>
            </div>
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="351:2710" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="351:2711">
                2 buses · all can change date
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 text-[#636363] w-full whitespace-nowrap" data-node-id="351:2712" data-name="Day · Sun, 13 Sep · 22:15">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[16px] w-full" data-node-id="351:2713" data-name="Frame">
              <p className="relative shrink-0" data-node-id="351:2714">
                Sun, 13 Sep · 22:15
              </p>
              <p className="relative shrink-0" data-node-id="351:2715">
                ₹960
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between overflow-clip relative shrink-0 text-[14px] w-full" data-node-id="351:2716" data-name="Frame">
              <p className="relative shrink-0" data-node-id="351:2717">
                Laxmi Holidays Pvt Ltd
              </p>
              <p className="relative shrink-0" data-node-id="352:2642">
                No seats left
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="352:2643" data-name="Day · Mon, 14 Sep">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="352:2644" data-name="Frame">
              <p className="relative shrink-0" data-node-id="352:2645">
                Mon, 14 Sep
              </p>
              <p className="relative shrink-0" data-node-id="352:2646">
                from ₹800
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#636363] text-[14px] w-[min-content]" data-node-id="352:2647">
              4 buses · 2 can change date
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="352:2648" data-name="Frame">
              <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="352:2649" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="352:2650">
                  ↻ Cheapest
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="352:2689" data-name="Day · Tue, 15 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="352:2690" data-name="Frame">
              <p className="relative shrink-0" data-node-id="352:2691">
                Tue, 15 Sep
              </p>
              <p className="relative shrink-0" data-node-id="352:2692">
                from ₹860
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="352:2693">
              4 buses · 3 can change date
            </p>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="352:2694" data-name="Day · Wed, 16 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="352:2695" data-name="Frame">
              <p className="relative shrink-0" data-node-id="352:2696">
                Wed, 16 Sep
              </p>
              <p className="relative shrink-0" data-node-id="352:2697">
                from ₹860
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="352:2698">
              7 buses · 5 can change date
            </p>
          </div>
          <a className="[word-break:break-word] bg-white content-stretch cursor-pointer flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 text-left w-full" data-node-id="352:2699" data-name="Day · Thu, 17 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="352:2700" data-name="Frame">
              <p className="relative shrink-0" data-node-id="352:2701">
                Thu, 17 Sep
              </p>
              <p className="relative shrink-0" data-node-id="352:2702">
                from ₹970
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="352:2703">
              5 buses · all can change date
            </p>
          </a>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex items-center justify-between left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="99:747" data-name="Action bar">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="99:748" data-name="Summary">
          <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="99:749">
            Return
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="99:750">
            —
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[48px] items-center justify-center opacity-40 px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-[176px]" label="Review trip" showIcon={false} />
      </div>
    </div>
  );
}
