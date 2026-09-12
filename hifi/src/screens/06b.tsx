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

export default function Component06BYourReturnDayCannotChange() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="521:3805" data-name="06b · Your return · day cannot change">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="521:3806" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="521:3807" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I521:3807;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I521:3807;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="521:3808" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I521:3808;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I521:3808;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I521:3808;34:91">
              Your return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I521:3808;34:92">
              Nainital → Delhi · Fri, 18 – Mon, 21 Sep
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I521:3808;56:226" data-name="Trailing slot">
            <div className="content-stretch flex h-[52px] items-center justify-center px-[10px] relative shrink-0" data-node-id="I521:3808;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I521:3808;53:196;97:644">
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="521:3809" data-name="Content">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] w-full" data-node-id="521:3810">
          Now pick one of your 4 days
        </p>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="521:3811" data-name="Lead">
          <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="521:3812">
            Mon, 21 Sep.
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="521:3813">
            You cannot change this date later.
          </p>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="521:3814" data-name="Rules">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[16px] w-full" data-node-id="522:3872">
            You cannot change this date later
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="522:3873" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="522:3874">
            No bus on Mon, 21 Sep offers a date change.
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="522:3875" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="522:3876">
            A grey dot means no date change
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="522:3877" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="522:3878">
            Pick a day without a dot to keep your one change.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="521:3823" data-name="Days">
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="521:3858" data-name="Day · Fri, 18 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="521:3859" data-name="Frame">
              <p className="relative shrink-0" data-node-id="521:3860">
                Fri, 18 Sep
              </p>
              <p className="relative shrink-0" data-node-id="521:3861">
                from ₹1,050
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="521:3862" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[194px]" data-node-id="521:3863">
                3 buses · all can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="521:3864">
                ₹310 more
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="521:3865" data-name="Day · Sat, 19 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="521:3866" data-name="Frame">
              <p className="relative shrink-0" data-node-id="521:3867">
                Sat, 19 Sep
              </p>
              <p className="relative shrink-0" data-node-id="521:3868">
                from ₹1,190
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="521:3869" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[193px]" data-node-id="521:3870">
                2 buses · all can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="521:3871">
                ₹450 more
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic p-[16px] relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="521:3872" data-name="Day · Sun, 20 Sep">
            <div className="content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="521:3873" data-name="Frame">
              <p className="relative shrink-0" data-node-id="521:3874">
                Sun, 20 Sep
              </p>
              <p className="relative shrink-0" data-node-id="521:3875">
                from ₹870
              </p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="521:3876" data-name="Detail row">
              <p className="relative self-stretch shrink-0 w-[188px]" data-node-id="521:3877">
                4 buses · 3 can change date
              </p>
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="521:3878">
                ₹130 more
              </p>
            </div>
          </div>
          <div className="bg-white border-2 border-[#c54646] border-solid content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07),0px_2px_6px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="521:3848" data-name="Day · Mon, 21 Sep">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#1d1d1d] text-[16px] w-full whitespace-nowrap" data-node-id="521:3849" data-name="Frame">
              <p className="relative shrink-0" data-node-id="521:3850">
                Mon, 21 Sep
              </p>
              <p className="relative shrink-0" data-node-id="521:3851">
                from ₹740
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[14px] w-full" data-node-id="521:3852" data-name="Detail row">
              <p className="relative self-stretch shrink-0 text-[#a45729] w-[258px]" data-node-id="521:3853">
                2 buses · cannot change this date later
              </p>
              <p className="relative shrink-0 text-[#636363] whitespace-nowrap" data-node-id="521:3854">
                Your pick
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="521:3855" data-name="Frame">
              <div className="bg-[#e9eaf6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="521:3856" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="521:3857">
                  ↻ Cheapest
                </p>
              </div>
              <div className="bg-[#f6ede6] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="523:3873" data-name="Pill / Cannot change">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#a45729] text-[12px] whitespace-nowrap" data-node-id="523:3874">
                  ↻ Cannot change this date
                </p>
              </div>
            </div>
          </div>
          <div className="border-[#c54646] border-l-2 border-solid content-stretch flex flex-col gap-[8px] items-start pb-[4px] pl-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="521:3879" data-name="Bus fold">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] whitespace-nowrap" data-node-id="521:3880">
              RECOMMENDED BUS
            </p>
            <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-node-id="521:3881" data-name="Your bus card">
              <div className="content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start overflow-clip relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="521:3882" data-name="Card / Bus">
                <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="I521:3882;74:287" data-name="Body">
                  <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I521:3882;39:110" data-name="Times and fare">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="I521:3882;39:111" data-name="Times column">
                      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I521:3882;39:112" data-name="Time line">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I521:3882;39:113">
                          23:10
                        </p>
                        <div className="bg-[var(--border\/divider,#e6e6e6)] h-[1.5px] relative shrink-0 w-[7px]" data-node-id="I521:3882;39:114" data-name="Dash" />
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I521:3882;39:115">
                          07:20
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I521:3882;39:116">
                        8h 10m · 9 seats (2 single)
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0" data-node-id="I521:3882;39:117" data-name="Fare column">
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-node-id="I521:3882;179:1447" data-name="Price row">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I521:3882;39:118">
                          ₹770
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-node-id="I521:3882;39:120" data-name="Operator row">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="I521:3882;39:121" data-name="Operator column">
                      <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="I521:3882;39:122" data-name="Name row">
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I521:3882;39:123">
                          International Tourist Centre
                        </p>
                        <IconBusPin className="relative shrink-0 size-[22px]" />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="I521:3882;39:125">
                        VE A/C Sleeper (2+1)
                      </p>
                    </div>
                    <div className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" data-node-id="I521:3882;39:126" data-name="Rating">
                      <div className="bg-[var(--surface\/positive,#458442)] content-stretch flex gap-[3px] h-[20px] items-center justify-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="I521:3882;39:126;36:118" data-name="Score">
                        <div className="relative shrink-0 size-[11px]" data-node-id="I521:3882;39:126;36:119" data-name="Star">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I521:3882;39:126;36:121">
                          4.2
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/positive,#2e5c2a)] text-center w-full" data-node-id="I521:3882;39:126;36:122">
                        420
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I521:3882;179:1449" data-name="Amenities">
                    <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex gap-[4px] h-[24px] items-center overflow-clip pl-[6px] pr-[9px] relative rounded-[var(--radius\/6,6px)] shrink-0" data-node-id="I521:3882;39:132" data-name="Date change">
                      <IconHourglass className="relative shrink-0 size-[20px]" />
                      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I521:3882;39:132;36:111">
                        No date change
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="521:3883" data-name="Seat and pills">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="521:3884">
                  Seat U3 — U4 is taken on this bus
                </p>
                <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="521:3885" data-name="Pills">
                  <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="521:3886" data-name="Pill">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="521:3887">
                      Free Cancellation
                    </p>
                  </div>
                  <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="521:3888" data-name="Pill">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="521:3889">
                      Closest to your onward
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] whitespace-nowrap" data-node-id="521:3890">
              OTHER BUSES ON MON, 21 SEP
            </p>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="521:3891" data-name="Trade · Cheapest">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="521:3892" data-name="Top">
                <div className="bg-[#e9eaf6] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[4px] shrink-0" data-node-id="521:3893" data-name="Why">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[12px] whitespace-nowrap" data-node-id="521:3894">
                    Cheapest
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] whitespace-nowrap" data-node-id="521:3895">
                  ₹30 less
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="521:3896">
                19:45 — 03:50 · ★ 4.2 (420) · cannot change date
              </p>
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#c54646] text-[14px] whitespace-nowrap" data-node-id="521:3897">
              <p className="leading-[normal]">See all 2 in full →</p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex flex-col items-center justify-between left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="521:3898" data-name="Action bar">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] w-full" data-node-id="521:3899">
          This bus cannot change its date. You said you were not sure yet — pick a day without the warning to keep that.
        </p>
        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="521:3900" data-name="Action row">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="521:3901" data-name="Summary">
            <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="521:3902">
              Return · Mon, 21 Sep · 23:10
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="521:3903">
              ₹770
            </p>
          </div>
          <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Book a fixed date" showIcon={false} />
        </div>
      </div>
    </div>
  );
}
