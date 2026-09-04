const imgGlyph = "assets/07a5b80f-1afa-4c41-85f2-04f64ae869b2.svg";
const imgIconHourglass = "assets/10f25cd9-fc34-459a-b532-31fde1993c4f.svg";
const imgStar = "assets/44bfb3f1-c65b-4bf8-b899-562d26100210.svg";
const imgIconBusPin = "assets/ac24227f-52d5-4d4e-9178-81de5cb09e9c.svg";
const imgIconChevronLeft = "assets/47609d36-5705-4209-9696-0c15153a4abc.svg";
const imgStatusIcons = "assets/fdc1b2df-35c9-4a94-88e1-d663e4f0bd33.svg";

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

type RatingBadgeProps = {
  className?: string;
  count?: string;
  score?: string;
};

function RatingBadge({ className, count = "178", score = "4.7" }: RatingBadgeProps) {
  return (
    <div className={className || "bg-[var(--surface\\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\\/6,6px)] w-[47px]"} data-node-id="36:123" data-name="Rating badge">
      <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="36:118" data-name="Score">
        <div className="relative shrink-0 size-[11px]" data-node-id="36:119" data-name="Star">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="36:121">
          {score}
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="36:122">
        {count}
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

export default function Component06AYourReturnDayChosen() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="100:717" data-name="06a · Your return · day chosen">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="100:718" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="100:719" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I100:719;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I100:719;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="100:720" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I100:720;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I100:720;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I100:720;34:91">
              Your return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I100:720;34:92">
              Nainital → Delhi · Fri, 11 – Thu, 17 Sep
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I100:720;56:226" data-name="Trailing slot">
            <div className="content-stretch flex items-center justify-center px-[10px] relative shrink-0" data-node-id="I100:720;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I100:720;53:196;97:644">
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="100:721" data-name="Content">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="100:722" data-name="Lead">
          <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="100:723">
            Thu, 17 Sep, your last day.
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="100:724">
            You never need to change it.
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="100:725" data-name="Rules">
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="100:729" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] w-full" data-node-id="100:730">
            No refund on a cheaper day
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="100:731" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="100:732">
            You only pay when the new day costs more.
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="100:765" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="100:766">
            Changing is free until you pay
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="100:767" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="100:768">
            After you pay, you get one date change.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="100:733" data-name="Days">
          <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="411:2967" data-name="Day · Fri, 11 Sep · 23:55">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="411:2968" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2969">
                Fri, 11 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:2970">
                from ₹1,260
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#636363] text-[14px] w-full whitespace-nowrap" data-node-id="411:2971" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2972">
                1 bus · can change date
              </p>
              <p className="relative shrink-0" data-node-id="411:3012">
                ₹290 more
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="411:2973" data-name="Frame">
              <div className="bg-[#f6ede6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="411:2974" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[12px] whitespace-nowrap" data-node-id="411:2975">
                  ↻ Different seat — U4 taken
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="411:2976" data-name="Day · Sat, 12 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="411:2977" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2978">
                Sat, 12 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:2979">
                from ₹1,140
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between overflow-clip relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="411:2980" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2981">
                2 buses · all can change date
              </p>
              <p className="relative shrink-0" data-node-id="411:3013">
                ₹170 more
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip p-[16px] relative rounded-[12px] shrink-0 text-[#636363] w-full whitespace-nowrap" data-node-id="411:2982" data-name="Day · Sun, 13 Sep · 22:15">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[16px] w-full" data-node-id="411:2983" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2984">
                Sun, 13 Sep · 22:15
              </p>
              <p className="relative shrink-0" data-node-id="411:2985">
                ₹960
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between overflow-clip relative shrink-0 text-[14px] w-full" data-node-id="411:2986" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2987">
                Laxmi Holidays Pvt Ltd
              </p>
              <p className="relative shrink-0" data-node-id="411:2988">
                No seats left
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="411:2989" data-name="Day · Mon, 14 Sep">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold h-[71px] items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="411:2990" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2991">
                Mon, 14 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:2992">
                from ₹800
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="412:2908" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[188px]" data-node-id="411:2993">
                4 buses · 2 can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="411:3014">
                ₹170 cheaper
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="411:2994" data-name="Frame">
              <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="411:2995" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="411:2996">
                  ↻ Cheapest
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="411:2997" data-name="Day · Tue, 15 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold h-[42px] items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="411:2998" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:2999">
                Tue, 15 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:3000">
                from ₹860
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="412:2909" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[188px]" data-node-id="411:3001">
                4 buses · 3 can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="411:3015">
                ₹110 cheaper
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="411:3002" data-name="Day · Wed, 16 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold h-[42px] items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="411:3003" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:3004">
                Wed, 16 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:3005">
                from ₹860
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="412:2910" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[187px]" data-node-id="411:3006">
                7 buses · 5 can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="411:3016">
                ₹110 cheaper
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white border-2 border-[#c54646] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="411:3007" data-name="Day · Thu, 17 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold h-[42px] items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="411:3008" data-name="Frame">
              <p className="relative shrink-0" data-node-id="411:3009">
                Thu, 17 Sep
              </p>
              <p className="relative shrink-0" data-node-id="411:3010">
                from ₹970
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="412:2911" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[193px]" data-node-id="411:3011">
                5 buses · all can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="411:3017">
                Your pick
              </p>
            </div>
          </div>
          <div className="border-[#c54646] border-l-2 border-solid content-stretch flex flex-col gap-[8px] items-start pb-[4px] pl-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="413:2908" data-name="Bus fold">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] whitespace-nowrap" data-node-id="413:2909">
              YOUR BUS
            </p>
            <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-node-id="414:2952" data-name="Your bus card">
              <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="413:2910" data-name="Card / Bus">
                <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I413:2910;74:287" data-name="Body">
                  <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I413:2910;39:110" data-name="Times and fare">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I413:2910;39:111" data-name="Times column">
                      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I413:2910;39:112" data-name="Time line">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I413:2910;39:113">
                          23:55
                        </p>
                        <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I413:2910;39:114" data-name="Dash" />
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I413:2910;39:115">
                          08:00
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I413:2910;39:116">
                        8h 5m · 24 Seats (6 Single)
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I413:2910;39:117" data-name="Fare column">
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I413:2910;179:1447" data-name="Price row">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I413:2910;39:118">
                          ₹1,120
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I413:2910;39:120" data-name="Operator row">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I413:2910;39:121" data-name="Operator column">
                      <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I413:2910;39:122" data-name="Name row">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I413:2910;39:123">
                          Laxmi Holidays Pvt Ltd
                        </p>
                        <IconBusPin className="relative shrink-0 size-[22px]" />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I413:2910;39:125">
                        Bharat Benz A/C Seater /Sleeper (2+1)
                      </p>
                    </div>
                    <RatingBadge className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" />
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I413:2910;179:1449" data-name="Amenities">
                    <ChipDateChange className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="414:2953" data-name="Seat and pills">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="413:2962">
                  Seat U4 — same as your onward
                </p>
                <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="413:2963" data-name="Pills">
                  <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="413:2964" data-name="Pill">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="413:2965">
                      Free Cancellation
                    </p>
                  </div>
                  <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="413:2966" data-name="Pill">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="413:2967">
                      Closest to your onward
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] whitespace-nowrap" data-node-id="413:2968">
              OTHER BUSES THAT DAY
            </p>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="413:2969" data-name="Trade · Cheapest">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="413:2970" data-name="Top">
                <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="413:2971" data-name="Why">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="413:2972">
                    Cheapest
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] whitespace-nowrap" data-node-id="413:2973">
                  ₹150 less
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="413:2974">
                21:15 — 05:40 · ★ 4.5 (315)
              </p>
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#c54646] text-[14px] whitespace-nowrap" data-node-id="413:2975">
              <p className="leading-[normal]">All 5 buses on Thu, 17 Sep →</p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex items-center justify-between left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="100:740" data-name="Action bar">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="100:741" data-name="Summary">
          <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="100:742">
            Return · Thu, 17 Sep · 23:55
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="100:743">
            ₹1,120
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[48px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-[176px]" label="Review trip" showIcon={false} />
      </div>
    </div>
  );
}
