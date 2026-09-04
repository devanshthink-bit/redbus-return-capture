const imgGlyph = "assets/6279cea4-2236-4a30-b945-636463997476.svg";
const imgNoChangeDot = "assets/906f3b78-3a7e-4780-9a14-fc6734112b76.svg";
const imgIconChevronLeft = "assets/a4e30f08-0851-476d-ada6-48d890a85054.svg";
const imgStatusIcons = "assets/a38a1c1b-d298-4d43-9c93-9dba6bdd2d04.svg";
const imgEllipse = "assets/03287047-a3e4-43a1-b294-1be3623dae3d.svg";

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
  state?: "Default" | "Selected" | "Out" | "Unavailable" | "Full" | "In reach";
};

function CalendarDay({ className, day = "10", fare = "₹910", noDateChange = false, state = "Default" }: CalendarDayProps) {
  const isDefault = state === "Default";
  const isFull = state === "Full";
  const isInReach = state === "In reach";
  const isOut = state === "Out";
  const isSelected = state === "Selected";
  const isUnavailable = state === "Unavailable";
  return (
    <div className={className || `${String.raw`content-stretch flex flex-col gap-px h-[52px] items-center justify-center relative rounded-[var(--radius\/10,10px)] w-[50px] `}${isInReach ? String.raw`bg-[var(--calendar\/reach-band,#fbf4f4)]` : isOut ? String.raw`bg-[var(--colour\/neutral\/150,#e9eaf6)]` : isSelected ? String.raw`bg-[var(--surface\/accent,#c54646)]` : ""}`} id={isInReach ? "node-91_526" : isFull ? "node-82_326" : isUnavailable ? "node-82_321" : isOut ? "node-82_316" : isSelected ? "node-82_311" : "node-82_306"}>
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
      {isSelected && (
        <>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="82:308">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="82:309">
            {fare}
          </p>
        </>
      )}
      {isSelected && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="82:310" data-name="No change dot">
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
      {isInReach && (
        <>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--calendar\/reach-ink,#3a3a44)] whitespace-nowrap" data-node-id="91:527">
            {day}
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="91:528">
            {fare}
          </p>
        </>
      )}
      {isInReach && noDateChange && (
        <div className="absolute right-[10px] size-[5px] top-[6px]" data-node-id="91:529" data-name="No change dot">
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

export default function Component05BReturnOneDayPicked() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="91:534" data-name="05b · Return · one day picked">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="91:535" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="91:536" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I91:536;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I91:536;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="91:537" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I91:537;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I91:537;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I91:537;34:91">
              Return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I91:537;34:92">
              Nainital → Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="91:538" data-name="Content">
        <div className="[word-break:break-word] bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-col gap-[4px] items-start not-italic px-[16px] py-[12px] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full whitespace-nowrap" data-node-id="91:539" data-name="Onward journey">
          <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="91:540">
            Onward journey
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="91:541">
            Delhi → Nainital · Thu, 10 Sep · 23:55
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="91:542" data-name="Question">
          <p className="font-['Inter:Bold'] font-bold leading-[25px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="91:543">
            When can you travel back?
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="91:544">
            Shaded days are within 7 days of your pick.
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="347:2873" data-name="Calendar">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="347:2874">
            September 2026
          </p>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold gap-[4px] items-start leading-[normal] not-italic overflow-clip pb-[10px] pt-[14px] relative shrink-0 text-[#636363] text-[11px] text-center tracking-[0.22px] w-full" data-node-id="347:2875" data-name="Weekdays">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2876">
              MON
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2877">
              TUE
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2878">
              WED
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2879">
              THU
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2880">
              FRI
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2881">
              SAT
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="347:2882">
              SUN
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="347:2883" data-name="Rule" />
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="347:2884" data-name="Sep grid">
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="347:2885" data-name="Week">
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="347:2886" data-name="—" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="1" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="2" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="3" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="4" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="5" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="6" fare=" " state="Unavailable" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="347:2893" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="7" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="8" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="9" fare=" " state="Unavailable" />
              <CalendarDay className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" fare="Out" state="Out" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="11" fare="₹1,260" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="12" fare="₹1,140" state="In reach" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="13" fare="Full" state="Full" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="347:2901" data-name="Week">
              <CalendarDay className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--text\/on-accent,white)]" day="14" fare="₹800" state="Selected" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="15" fare="₹860" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="16" fare="₹860" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="17" fare="₹970" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="18" fare="₹1,050" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="19" fare="₹1,190" state="In reach" />
              <CalendarDay className="bg-[var(--calendar\/reach-band,#fbf4f4)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="20" fare="₹870" state="In reach" />
            </div>
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="347:2909" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="21" fare="₹740" noDateChange />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="22" fare="₹1,000" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="23" fare="Full" state="Full" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="24" fare="₹860" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="25" fare="₹1,180" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="26" fare="₹1,240" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="27" fare="₹810" />
            </div>
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="347:2917" data-name="Week">
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="28" fare="₹760" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="29" fare="₹790" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="30" fare="₹930" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="347:2921" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="347:2922" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="347:2923" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="347:2924" data-name="—" />
            </div>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="347:2925" data-name="Legend">
            <div className="relative shrink-0 size-[5px]" data-node-id="347:2926" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="347:2927">
              No bus that day can change its date
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#636363] text-[12px] w-[min-content]" data-node-id="347:2928">
            Each price is the cheapest bus that day. You pick the bus next.
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="91:608" data-name="Rules">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="91:795">
            We’ll book Mon, 14 Sep · ₹800
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="91:796" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="91:797">
            You can change the date once after booking, to any date. Pay any price difference.
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="91:798" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] w-full" data-node-id="91:799">
            Not sure? Tap a second day
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="91:800" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="91:801">
            Up to 7 days apart. That is only how we pick your day — your ticket can still move to any date.
          </p>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex gap-[16px] items-center left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="91:612" data-name="Action bar">
        <div className="content-stretch flex h-[44px] items-center justify-center overflow-clip pl-[4px] pr-[10px] relative shrink-0" data-node-id="227:1784" data-name="Button / Text action">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I227:1784;97:644">
            Skip
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Continue" showIcon={false} />
      </div>
    </div>
  );
}
