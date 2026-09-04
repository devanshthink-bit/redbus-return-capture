const imgGlyph = "assets/d3346838-3ec5-4d85-aee4-643dda45796f.svg";
const imgGlyph1 = "assets/10de1e39-ba84-407b-a663-cf82e4a5fd59.svg";
const imgArtTripRewardBadge = "assets/72b4f11d-fa42-40af-acae-22feca9f4d21.png";
const imgStateWomenOnly = "assets/2abeb48f-59c1-4016-85c5-afedda55a2ad.svg";
const imgStateBookedFemale = "assets/c16b97a4-3563-44b4-ab78-56f49c652946.svg";
const imgStateBookedMale = "assets/13ddfb8f-8081-48eb-978b-af7b34734274.svg";
const imgIconChevronLeft = "assets/982b1d42-8990-4741-aefe-7d26e9f06764.svg";
const imgStatusIcons = "assets/e16d0f59-9a27-435d-a9a4-4ab5782e9b68.svg";
const imgArtSteeringWheel = "assets/15e65345-49df-474e-be45-ae631f3e831b.svg";
const imgSparkle = "assets/d7e1240d-5bc0-42f3-bfff-2be54d80b1f6.svg";
const imgBreakdown = "assets/b725b0a7-dffd-4022-be80-fcb3548ccf83.svg";

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

function IconChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="116:1171" data-name="Icon / Chevron Right">
      <div className="absolute left-0 size-[20px] top-0" data-node-id="116:1172" data-name="glyph">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph1} />
      </div>
    </div>
  );
}

function ArtTripRewardStripCompact({ className }: { className?: string }) {
  return (
    <div className={className || "bg-gradient-to-r content-stretch flex from-[#fceaee] gap-[12px] h-[41px] items-center overflow-clip px-[12px] relative rounded-[10px] to-[#f8f0e2] w-[370px]"} data-node-id="76:285" data-name="Art / tripReward strip · compact">
      <div className="h-[21px] relative shrink-0 w-[92px]" data-node-id="287:2630" data-name="Art / tripReward badge">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTripRewardBadge} />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[18px] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis whitespace-nowrap" data-node-id="287:2631">
        Free ticket with Laxmi…
      </p>
      <IconChevronRight className="relative shrink-0 size-[18px]" />
    </div>
  );
}

type SeatSleeperProps = {
  className?: string;
  state?: "Available" | "Selected";
};

function SeatSleeper({ className, state = "Available" }: SeatSleeperProps) {
  const isSelected = state === "Selected";
  return (
    <div className={className || `border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] w-[32px] ${isSelected ? "bg-[#8ab58c]" : "bg-white"}`} id={isSelected ? "node-51_206" : "node-51_203"}>
      <div className={`absolute inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px] ${isSelected ? "bg-[#c9e2c6]" : "bg-[#dff3d8]"}`} id={isSelected ? "node-203_1906" : "node-203_1905"} data-name="Pillow" />
    </div>
  );
}

type SeatSeaterProps = {
  className?: string;
  state?: "Available" | "Women only" | "Booked female" | "Booked male";
};

function SeatSeater({ className, state = "Available" }: SeatSeaterProps) {
  const isAvailable = state === "Available";
  const isBookedFemale = state === "Booked female";
  const isBookedMale = state === "Booked male";
  return (
    <div className={className || "relative size-[30px]"} id={isBookedMale ? "node-51_220" : isBookedFemale ? "node-51_218" : state === "Women only" ? "node-51_216" : "node-51_214"}>
      {["Women only", "Booked female", "Booked male"].includes(state) && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isBookedMale ? imgStateBookedMale : isBookedFemale ? imgStateBookedFemale : imgStateWomenOnly} />}
      {isAvailable && (
        <>
          <div className="absolute bg-white border-[#4d784b] border-[1.6px] border-solid inset-[28.67%_3%_3%_3%] rounded-[7px]" data-node-id="203:1920" data-name="Arms" />
          <div className="absolute bg-white border-[#4d784b] border-[1.6px] border-solid inset-[3%_15.33%_29%_15.33%] rounded-[5.5px]" data-node-id="203:1921" data-name="Back" />
        </>
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

export default function Component08AReturnSeat() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="423:2952" data-name="08a · Return seat">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="423:2953" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="423:2954" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I423:2954;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I423:2954;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="423:2955" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I423:2955;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I423:2955;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I423:2955;34:91">
              Select seats
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I423:2955;34:92">
              Nainital → Delhi · Thu, 17 Sep
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I423:2955;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[31px] items-start overflow-clip pb-[4px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="425:3104" data-name="Return note">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-h-px not-italic relative text-[#636363] text-[12px] w-full" data-node-id="423:3251">
          This is your return bus. Your onward seat stays the same.
        </p>
      </div>
      <div className="content-stretch flex gap-[16px] items-start overflow-clip pl-[16px] pt-[16px] relative shrink-0" data-node-id="423:2956" data-name="Decks">
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="423:2957" data-name="Lower deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="423:2958" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:2959">
              Lower deck
            </p>
            <div className="-translate-y-1/2 absolute right-[3px] size-[44px] top-1/2" data-node-id="423:2960" data-name="Art / Steering wheel">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSteeringWheel} />
            </div>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="423:2961" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="423:2962" data-name="Sleepers">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2963" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2965">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2966" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2968">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2969" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2971">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2972" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2974">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2975" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2977">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2978" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2980">
                  ₹1,120
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="423:2981" data-name="Aisle" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2982" data-name="Seaters A">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2983" data-name="Seat Booked female">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked female" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2985">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2986" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2988">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2989" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2991">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2992" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2994">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2995" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:2997">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:2998" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3000">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3001" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3003">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3004" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3006">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3007" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3009">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3010" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3012">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3013" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3015">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3016" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3018">
                  ₹1,120
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="423:3019" data-name="Gap" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3020" data-name="Seaters B">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3021" data-name="Seat Booked male">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3023">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3024" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3026">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3027" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3029">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3030" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3032">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3033" data-name="Seat Women only">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Women only" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3035">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3036" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3038">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3039" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3041">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3042" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3044">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3045" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3047">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3048" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3050">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3051" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3053">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3054" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3056">
                  ₹1,120
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="423:3057" data-name="Upper deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="423:3058" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:3059">
              Upper deck
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="423:3060" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="423:3061" data-name="Row 1">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3062" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3064">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3065" data-name="Seat Selected">
                <SeatSleeper className="bg-[#8ab58c] border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" state="Selected" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/seat-price-selected,#458442)] whitespace-nowrap" data-node-id="423:3067">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3068" data-name="Seat Booked">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3070">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3071" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3073">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3074" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3076">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3077" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3079">
                  ₹1,120
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="423:3080" data-name="Aisle" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="423:3081" data-name="Row 2">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3082" data-name="Seat Booked">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3084">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3085" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3087">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3088" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3090">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3091" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3093">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3094" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3096">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3097" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3099">
                  ₹1,120
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="423:3100" data-name="Gap" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="423:3101" data-name="Row 3">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3102" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3104">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3105" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3107">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3108" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3110">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3111" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3113">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3114" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3116">
                  ₹1,120
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="423:3117" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="423:3119">
                  ₹1,120
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center pb-[270.3px] pt-[28px] relative shrink-0 w-full" data-node-id="423:3120" data-name="Seat types heading">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="423:3121">
          Know your seat types
        </p>
      </div>
      <div className="absolute bottom-[284.3px] drop-shadow-[0px_0px_8px_rgba(107,61,140,0.28)] right-[16px] rounded-[var(--radius\/full,999px)] size-[48px]" data-node-id="423:3122" style={{ backgroundImage: "linear-gradient(135deg, rgb(197, 70, 70) 0%, rgb(121, 65, 224) 71.429%)" }} data-name="Ask Ray">
        <div className="absolute left-[11px] size-[26px] top-[11px]" data-node-id="I423:3122;63:230" data-name="Sparkle">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkle} />
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] bottom-0 content-stretch flex flex-col items-center left-0 overflow-clip pb-[50.3px] pt-[11.6px] right-0 rounded-tl-[var(--radius\/20,20px)] rounded-tr-[var(--radius\/20,20px)] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.12)]" data-node-id="423:3123" data-name="Bottom sheet">
        <div className="bg-[var(--border\/divider,#e6e6e6)] h-[5px] relative rounded-[3px] shrink-0 w-[40px]" data-node-id="423:3124" data-name="Grabber" />
        <div className="content-stretch flex items-start pt-[8.4px] px-[16px] relative shrink-0 w-full" data-node-id="423:3125" data-name="tripReward">
          <ArtTripRewardStripCompact className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-[#fceaee] gap-[12px] h-[41px] items-center min-w-px overflow-clip px-[12px] relative rounded-[10px] to-[#f8f0e2]" />
        </div>
        <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-[390px]" data-node-id="423:3127" data-name="Divider" />
        <div className="content-stretch flex items-center justify-between pt-[30.4px] px-[16px] relative shrink-0 w-full" data-node-id="423:3128" data-name="Selection summary">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:3129">
            Seat U4 selected
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="423:3130" data-name="Fare">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:3131">
              ₹1,120
            </p>
            <div className="relative shrink-0 size-[18px]" data-node-id="423:3132" data-name="Breakdown">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBreakdown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[23.6px] px-[16px] relative shrink-0 w-full" data-node-id="423:3135" data-name="Action">
          <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[47px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" label="Select points" showIcon={false} />
        </div>
      </div>
    </div>
  );
}
