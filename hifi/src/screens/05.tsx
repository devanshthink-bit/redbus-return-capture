const imgGlyph = "assets/f8eb1eae-ff07-40bc-8148-2e5b056082c4.svg";
const imgNoChangeDot = "assets/909e0470-fcdb-48d4-bf36-435813192560.svg";
const imgIconChevronLeft = "assets/0f5e7cb0-8490-472f-b17f-aba02fea49e3.svg";
const imgStatusIcons = "assets/4ed9412b-a873-4471-938b-88ef5312966b.svg";
const imgEllipse = "assets/319b1653-24db-4425-9992-a40e2fce1943.svg";

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

type CalendarDayProps = {
  className?: string;
  day?: string;
  fare?: string;
  noDateChange?: boolean;
  state?: "Default" | "Out" | "Unavailable" | "Full";
};

function CalendarDay({ className, day = "10", fare = "₹910", noDateChange = false, state = "Default" }: CalendarDayProps) {
  const isDefault = state === "Default";
  const isFull = state === "Full";
  const isOut = state === "Out";
  const isUnavailable = state === "Unavailable";
  return (
    <div className={className || `${String.raw`content-stretch flex flex-col gap-px h-[52px] items-center justify-center relative rounded-[var(--radius\/10,10px)] w-[50px] `}${isOut ? String.raw`bg-[var(--colour\/neutral\/150,#e9eaf6)]` : ""}`} id={isFull ? "node-82_326" : isUnavailable ? "node-82_321" : isOut ? "node-82_316" : "node-82_306"}>
      {isDefault && (
        <>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="82:303">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="82:304">
            {fare}
          </p>
        </>
      )}
      {isDefault && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="82:305" data-name="No change dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNoChangeDot} />
        </div>
      )}
      {isOut && (
        <>
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="82:313">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="82:314">
            {fare}
          </p>
        </>
      )}
      {isOut && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="82:315" data-name="No change dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNoChangeDot} />
        </div>
      )}
      {isUnavailable && (
        <>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium'] font-medium leading-[20px] line-through not-italic relative shrink-0 text-[16px] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" data-node-id="82:318">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" data-node-id="82:319">
            {fare}
          </p>
        </>
      )}
      {isUnavailable && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="82:320" data-name="No change dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNoChangeDot} />
        </div>
      )}
      {isFull && (
        <>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" data-node-id="82:323">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" data-node-id="82:324">
            {fare}
          </p>
        </>
      )}
      {isFull && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="82:325" data-name="No change dot">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNoChangeDot} />
        </div>
      )}
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

export default function Component05ReturnPickYourDays() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="83:296" data-name="05 · Return · pick your days">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="83:297" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="83:298" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I83:298;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I83:298;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="83:311" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I83:311;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I83:311;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I83:311;34:91">
              Return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I83:311;34:92">
              Nainital → Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="83:321" data-name="Content">
        <div className="[word-break:break-word] bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-col gap-[4px] items-start not-italic px-[16px] py-[12px] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full whitespace-nowrap" data-node-id="83:322" data-name="Onward journey">
          <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="83:323">
            Onward journey
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="83:324">
            Delhi → Nainital · Thu, 10 Sep · 23:55
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="83:325" data-name="Question">
          <p className="font-['Inter:Bold'] font-bold leading-[25px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="83:326">
            When can you travel back?
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="83:327">
            Pick your return day. Not sure? Tap two days instead.
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="345:2709" data-name="Calendar">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="345:2710">
            September 2026
          </p>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold gap-[4px] items-start leading-[normal] not-italic overflow-clip pb-[10px] pt-[14px] relative shrink-0 text-[#636363] text-[11px] text-center tracking-[0.22px] w-full" data-node-id="345:2711" data-name="Weekdays">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2712">
              MON
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2713">
              TUE
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2714">
              WED
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2715">
              THU
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2716">
              FRI
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2717">
              SAT
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="345:2718">
              SUN
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="345:2719" data-name="Rule" />
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="345:2720" data-name="Sep grid">
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="345:2721" data-name="Week">
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="345:2722" data-name="—" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="1" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="2" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="3" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="4" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="5" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="6" fare=" " state="Unavailable" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="345:2729" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="7" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="8" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="9" fare=" " state="Unavailable" />
              <CalendarDay className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" fare="Out" state="Out" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="11" fare="₹1,260" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="12" fare="₹1,140" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="13" fare="Full" state="Full" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="345:2737" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="14" fare="₹800" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="15" fare="₹860" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="16" fare="₹860" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="17" fare="₹970" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="18" fare="₹1,050" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="19" fare="₹1,190" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="20" fare="₹870" />
            </div>
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="345:2745" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="21" fare="₹740" noDateChange />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="22" fare="₹1,000" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="23" fare="Full" state="Full" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="24" fare="₹860" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="25" fare="₹1,180" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="26" fare="₹1,240" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="27" fare="₹810" />
            </div>
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="345:2753" data-name="Week">
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="28" fare="₹760" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="29" fare="₹790" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="30" fare="₹930" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="345:2757" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="345:2758" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="345:2759" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="345:2760" data-name="—" />
            </div>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="345:2761" data-name="Legend">
            <div className="relative shrink-0 size-[5px]" data-node-id="345:2762" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="345:2763">
              No bus that day can change its date
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#636363] text-[12px] w-[min-content]" data-node-id="345:2863">
            Each price is the cheapest bus that day. You pick the bus next.
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="85:408" data-name="Rules">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="85:409">
            Prices can go up
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="85:410" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="85:411">
            Book now and this day stays at this price. Change the day later and you pay that day’s price then.
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex gap-[16px] items-center left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="85:415" data-name="Action bar">
        <div className="content-stretch flex h-[44px] items-center justify-center overflow-clip pl-[4px] pr-[10px] relative shrink-0" data-node-id="227:1780" data-name="Button / Text action">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I227:1780;97:644">
            Skip
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px opacity-40 px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Continue" showIcon={false} />
      </div>
    </div>
  );
}
