const imgGlyph = "assets/92c21a05-8d64-4e98-9d11-19d006e96f94.svg";
const imgIconHourglass = "assets/e54bb5ba-bd48-4048-8309-aeb625d28d6f.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgIconTickCircle = "assets/116bcfa4-60e3-4b94-abc2-40311f2c855d.svg";

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

type CardLegProps = {
  className?: string;
  arrival?: string;
  caption?: string;
  departure?: string;
  operator?: string;
  price?: string;
  route?: string;
  seat?: string;
  showCaption?: boolean;
  showReturnExtras?: boolean;
  tag?: string;
};

function CardLeg({ className, arrival = "08:00", caption = "ISBT Kashmiri Gate, Gate 4 → Nainital Bus Stand", departure = "23:55", operator = "Laxmi Holidays Pvt Ltd", price = "₹1,599", route = "Delhi → Nainital · 8h 5m", seat = "Seat U4", showCaption = true, showReturnExtras = false, tag = "Onward · Fri, 7 Aug" }: CardLegProps) {
  return (
    <div className={className || "bg-[var(--surface\\/default,white)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[var(--radius\\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] w-[358px]"} data-node-id="103:832" data-name="Card / Leg">
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="103:798">
        {tag}
      </p>
      <div className="h-[8px] relative shrink-0 w-px" data-node-id="103:799" data-name="gap" />
      <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="103:800" data-name="Time row">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="103:801" data-name="Times">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="103:802">
            {departure}
          </p>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="103:803" data-name="Dash" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="103:804">
            {arrival}
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="103:805">
          {price}
        </p>
      </div>
      <div className="h-[8px] relative shrink-0 w-px" data-node-id="103:806" data-name="gap" />
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between not-italic overflow-clip relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="103:807" data-name="Route row">
        <p className="flex-[1_0_0] leading-[18px] min-w-px relative text-[13px]" data-node-id="103:808">
          {route}
        </p>
        <p className="leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="103:809">
          {seat}
        </p>
      </div>
      <div className="h-[16px] relative shrink-0 w-px" data-node-id="103:810" data-name="gap" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="103:811" data-name="Operator block">
        <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="103:812">
          {operator}
        </p>
        {showCaption && (
          <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="103:813">
            {caption}
          </p>
        )}
      </div>
      {showReturnExtras && (
        <div className="content-stretch flex flex-col items-start overflow-clip pt-[10px] relative shrink-0 w-full" data-node-id="103:814" data-name="Return extras">
          <div className="[word-break:break-word] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip pt-[10px] relative shrink-0 w-full" data-node-id="103:815" data-name="Boarding">
            <p className="font-['Inter:Extra_Bold'] font-extrabold leading-[14px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#767680)] tracking-[0.8px] w-full" data-node-id="I103:815;102:798">
              BOARDING
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I103:815;102:799">
              23:55 · Nainital Bus Stand
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I103:815;102:800">
              Tallital, near the boat house
            </p>
          </div>
          <div className="[word-break:break-word] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip pt-[10px] relative shrink-0 w-full" data-node-id="103:819" data-name="Dropping">
            <p className="font-['Inter:Extra_Bold'] font-extrabold leading-[14px] relative shrink-0 text-[10px] text-[color:var(--text\/tertiary,#767680)] tracking-[0.8px] w-full" data-node-id="I103:819;102:798">
              DROPPING
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I103:819;102:799">
              08:00 · ISBT Kashmiri Gate
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I103:819;102:800">
              Gate Number 4 — where you started
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[20px] items-start leading-[20px] not-italic overflow-clip pt-[8px] relative shrink-0 text-[14px] text-[color:var(--text\/accent,#c54646)] w-full whitespace-nowrap" data-node-id="103:823" data-name="Actions">
            <p className="relative shrink-0" data-node-id="103:824">
              Change seat
            </p>
            <p className="relative shrink-0" data-node-id="103:825">
              Change points
            </p>
          </div>
          <div className="h-[12px] relative shrink-0 w-px" data-node-id="103:826" data-name="gap" />
          <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[6px] h-[26px] items-center overflow-clip px-[10px] relative rounded-[var(--radius\/6,6px)] shrink-0" data-node-id="103:827" data-name="Change pill">
            <div className="relative shrink-0 size-[20px]" data-node-id="103:828" data-name="Icon / Hourglass">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHourglass} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="103:829">
              You can change this date once
            </p>
          </div>
          <div className="h-[8px] relative shrink-0 w-px" data-node-id="103:830" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="103:831">
            After that, the return cannot be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Component16ReturnMoved() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="138:1391" data-name="16 · Return moved">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="138:1392" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="138:1393" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I138:1393;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I138:1393;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="138:1394" data-name="Nav / Top Bar">
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I138:1394;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I138:1394;34:91">
              Date changed
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I138:1394;34:92">
              Nainital → Delhi · 1 passenger
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px pb-[24px] pt-[13px] px-[16px] relative w-full" data-node-id="138:1416" data-name="Content">
        <div className="bg-[#e7f4e9] content-stretch flex gap-[12px] h-[102px] items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="138:1417" data-name="Relief">
          <div className="relative shrink-0 size-[24px]" data-node-id="377:3127" data-name="Icon / Tick Circle">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTickCircle} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative" data-node-id="377:3130" data-name="Frame">
            <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#2e5c2a] text-[17px] w-full" data-node-id="377:3131">
              Return moved to Tue, 15 Sep
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#3d5a38] text-[14px] w-full" data-node-id="377:3132">
              Back in Delhi a day earlier. Nothing else about the trip moved.
            </p>
          </div>
        </div>
        <CardLeg caption="Nainital Bus Stand → ISBT Kashmiri Gate, Gate 4" className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[var(--radius\/16,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" price="₹1,060" route="Nainital → Delhi" tag="RETURN · TUE, 15 SEP" />
        <div className="[word-break:break-word] bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col gap-[4px] items-start not-italic p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="138:1455" data-name="What you paid">
          <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="138:1456">
            Changed from Wed, 16 Sep
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="138:1457">
            The new day is ₹30 cheaper. You do not get that back.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="373:3120" data-name="Frame">
          <div className="bg-[#f5dcce] content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="373:3121" data-name="Frame">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a3a2a] text-[14px] w-full" data-node-id="373:3122">
              Note: This was your one date change. This ticket cannot be cancelled or changed again.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip pl-[2px] relative shrink-0 w-full" data-node-id="373:3123" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="373:3124">
              Your onward trip is the same
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="373:3125">
              Thu, 10 Sep · 23:55 · seat U4
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex items-center pb-[31px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="138:1466" data-name="Action bar">
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="View ticket" showIcon={false} />
      </div>
    </div>
  );
}
