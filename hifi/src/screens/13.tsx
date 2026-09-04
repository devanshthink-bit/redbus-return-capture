const imgNoChangeDot = "assets/4ea7aeae-b3b6-441d-9fe6-3c8c718f7acc.svg";
const imgIconPercent = "assets/8d8cf691-4c4c-4aeb-af13-37cf77b78c2d.svg";
const imgIconBus = "assets/b8583bc0-1ea9-4c90-9002-9de54f02345f.svg";
const imgIconCalendar = "assets/8b1dbaae-1b05-4657-bb9a-3b69452dc009.svg";
const imgIconChevronLeft = "assets/b31cf46f-a9ee-48a7-addd-b80e90d15a48.svg";
const imgStatusIcons = "assets/d86d1e89-fc29-4db6-b008-c928a6697d87.svg";
const imgEllipse = "assets/91ce3514-0f67-4a10-879b-ade4f0a1eb4e.svg";

type CalendarDayProps = {
  className?: string;
  day?: string;
  fare?: string;
  noDateChange?: boolean;
  state?: "Default" | "Selected" | "Out" | "Unavailable" | "Full";
};

function CalendarDay({ className, day = "10", fare = "₹910", noDateChange = false, state = "Default" }: CalendarDayProps) {
  const isDefault = state === "Default";
  const isFull = state === "Full";
  const isOut = state === "Out";
  const isSelected = state === "Selected";
  const isUnavailable = state === "Unavailable";
  return (
    <div className={className || `${String.raw`content-stretch flex flex-col gap-px h-[52px] items-center justify-center relative rounded-[var(--radius\/10,10px)] w-[50px] `}${isOut ? String.raw`bg-[var(--colour\/neutral\/150,#e9eaf6)]` : isSelected ? String.raw`bg-[var(--surface\/accent,#c54646)]` : ""}`} id={isFull ? "node-82_326" : isUnavailable ? "node-82_321" : isOut ? "node-82_316" : isSelected ? "node-82_311" : "node-82_306"}>
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

function IconBus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="10:16" data-name="Icon / Bus">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBus} />
    </div>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="10:17" data-name="Icon / Calendar">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCalendar} />
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

export default function Component13ChangeDay() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="118:1259" data-name="13 · Change day">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="118:1260" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="118:1261" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I118:1261;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I118:1261;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="118:1274" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I118:1274;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I118:1274;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I118:1274;34:91">
              Change day
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I118:1274;34:92">
              Nainital → Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="118:1284" data-name="Content">
        <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="118:1285" data-name="Your booking">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="118:1286">
            Your booking
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="118:1287" data-name="gap" />
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="118:1288" data-name="Row">
            <p className="relative shrink-0" data-node-id="118:1289">
              Wed, 16 Sep · 23:55
            </p>
            <p className="relative shrink-0" data-node-id="118:1290">
              ₹1,090
            </p>
          </div>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="118:1291" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="118:1292">
            Laxmi Holidays Pvt Ltd · Seat U5
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col gap-[18px] items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="118:1293" data-name="Rules">
          <div className="bg-[#f5dcce] content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="375:3106" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a3a2a] text-[14px] w-full" data-node-id="375:3107">
              Note: Once you change the date for this ticket, you will not be able to cancel or change the date again.
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-full" data-node-id="375:3108">
            How does this work?
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="375:3109" data-name="Frame">
            <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-node-id="375:3110" data-name="Frame">
              <IconCalendar className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-node-id="375:3123" data-name="Frame">
                <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="375:3124">
                  Pick a new date
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="375:3125">
                  Move to any date, earlier or later. You pay only the fare difference, if any.
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-node-id="375:3126" data-name="Frame">
              <IconBus className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-node-id="375:3134" data-name="Frame">
                <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="375:3135">
                  Choose from available buses
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="375:3136">
                  You can select a bus from the same operator and route as your original ticket.
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-node-id="375:3137" data-name="Frame">
              <IconPercent className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-node-id="375:3143" data-name="Frame">
                <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="375:3144">
                  No refund on a cheaper day
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="375:3145">
                  If the new day costs less, the difference is not refunded.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="338:2666" data-name="Calendar">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="338:2667">
            September 2026
          </p>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold gap-[4px] items-start leading-[normal] not-italic overflow-clip pb-[10px] pt-[14px] relative shrink-0 text-[#636363] text-[11px] text-center tracking-[0.22px] w-full" data-node-id="338:2668" data-name="Weekdays">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2669">
              MON
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2670">
              TUE
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2671">
              WED
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2672">
              THU
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2673">
              FRI
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2674">
              SAT
            </p>
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="338:2675">
              SUN
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="338:2676" data-name="Rule" />
          <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="338:2677" data-name="Sep grid">
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="339:2619" data-name="Week">
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="339:2620" data-name="—" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="1" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="2" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="3" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="4" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="5" fare=" " state="Unavailable" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)] whitespace-nowrap" day="6" fare=" " state="Unavailable" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="339:2663" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="7" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="8" fare=" " state="Unavailable" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="9" fare=" " state="Unavailable" />
              <CalendarDay className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" fare="Out" state="Out" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="11" fare="+₹170" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="12" fare="+₹50" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="13" fare="Full" state="Full" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="339:2710" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="14" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="15" fare="₹0" />
              <CalendarDay className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--text\/on-accent,white)]" day="16" fare="Booked" state="Selected" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="17" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="18" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="19" fare="+₹100" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="20" fare="₹0" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="339:2742" data-name="Week">
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="21" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="22" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)] text-[color:var(--calendar\/unavailable,#9a9aa4)]" day="23" fare="Full" state="Full" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="24" fare="₹0" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="25" fare="+₹90" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="26" fare="+₹150" />
              <CalendarDay className="content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px relative rounded-[var(--radius\/10,10px)]" day="27" fare="₹0" />
            </div>
            <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="339:2777" data-name="Week">
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="28" fare="₹0" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="29" fare="₹0" />
              <CalendarDay className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-px h-[52px] items-center justify-center min-w-px not-italic relative rounded-[var(--radius\/10,10px)] whitespace-nowrap" day="30" fare="₹0" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="339:2790" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="339:2791" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="339:2792" data-name="—" />
              <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="339:2793" data-name="—" />
            </div>
          </div>
          <div className="content-stretch flex gap-[7px] items-center overflow-clip pt-[12px] relative shrink-0 w-full" data-node-id="339:2794" data-name="Legend">
            <div className="relative shrink-0 size-[5px]" data-node-id="339:2795" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] whitespace-nowrap" data-node-id="339:2796">
              No bus that day can change its date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
