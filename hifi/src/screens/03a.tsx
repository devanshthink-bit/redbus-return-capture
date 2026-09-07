const imgArtPrimo = "assets/180e720d-ef38-40a2-babe-7815bb8770c7.png";
const imgStar = "assets/5defeabb-4b51-4462-9a95-e9a44e39c85f.svg";
const imgStateWomenOnly = "assets/233a8b3c-0b6a-4bae-8b5c-62101f19c57c.svg";
const imgStateBookedFemale = "assets/5c327726-ad21-418b-b3e4-b417bc8d4dc6.svg";
const imgStateMenOnly = "assets/482fd8a7-cd09-4da0-a177-c77574b93c02.svg";
const imgStateBookedMale = "assets/6cb648fc-3537-47de-9cdb-ea6da09fd4c8.svg";
const imgStateWomenOnly1 = "assets/00000790-8cae-4007-9543-0e4c28e0d439.svg";
const imgStateBookedFemale1 = "assets/c16b97a4-3563-44b4-ab78-56f49c652946.svg";
const imgStateBookedMale1 = "assets/13ddfb8f-8081-48eb-978b-af7b34734274.svg";
const imgStateMenOnly1 = "assets/29fe08c8-256c-47a5-9f5f-6649e0c96324.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgPhoto = "assets/e1493517-bca5-4aaa-976b-200125ff5ebf.png";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgArtSteeringWheel = "assets/15e65345-49df-474e-be45-ae631f3e831b.svg";
const imgSparkle = "assets/8dc1da91-cd71-4fd5-abfb-741575eac530.svg";

function ArtPrimo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32.67px] relative w-[59.33px]"} data-node-id="74:272" data-name="Art / Primo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtPrimo} />
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

type SeatSleeperProps = {
  className?: string;
  state?: "Available" | "Selected" | "Booked" | "Women only" | "Booked female" | "Men only" | "Booked male";
};

function SeatSleeper({ className, state = "Available" }: SeatSleeperProps) {
  const isBooked = state === "Booked";
  const isBookedFemale = state === "Booked female";
  const isBookedMale = state === "Booked male";
  const isMenOnly = state === "Men only";
  const isSelected = state === "Selected";
  const isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale = ["Women only", "Booked female", "Men only", "Booked male"].includes(state);
  return (
    <div className={className || `h-[70px] relative w-[32px] ${isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale ? "" : isBooked ? "bg-[#e6e6e6] rounded-[9px]" : isSelected ? "bg-[#8ab58c] border-[#4d784b] border-[1.5px] border-solid rounded-[9px]" : "bg-white border-[#4d784b] border-[1.5px] border-solid rounded-[9px]"}`} id={isBookedMale ? "node-203_1917" : isMenOnly ? "node-203_1913" : isBookedFemale ? "node-203_1910" : state === "Women only" ? "node-51_211" : isBooked ? "node-51_208" : isSelected ? "node-51_206" : "node-51_203"}>
      {isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isBookedMale ? imgStateBookedMale : isMenOnly ? imgStateMenOnly : isBookedFemale ? imgStateBookedFemale : imgStateWomenOnly} />}
      {["Available", "Selected"].includes(state) && <div className={`absolute inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px] ${isSelected ? "bg-[#c9e2c6]" : "bg-[#dff3d8]"}`} id={isSelected ? "node-203_1906" : "node-203_1905"} data-name="Pillow" />}
    </div>
  );
}

type SeatSeaterProps = {
  className?: string;
  state?: "Available" | "Women only" | "Booked female" | "Booked male" | "Booked" | "Men only";
};

function SeatSeater({ className, state = "Available" }: SeatSeaterProps) {
  const isAvailableOrBooked = ["Available", "Booked"].includes(state);
  const isBooked = state === "Booked";
  const isBookedFemale = state === "Booked female";
  const isBookedMale = state === "Booked male";
  const isMenOnly = state === "Men only";
  return (
    <div className={className || "relative size-[30px]"} id={isMenOnly ? "node-203_1936" : isBooked ? "node-203_1925" : isBookedMale ? "node-51_220" : isBookedFemale ? "node-51_218" : state === "Women only" ? "node-51_216" : "node-51_214"}>
      {["Women only", "Booked female", "Booked male", "Men only"].includes(state) && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isMenOnly ? imgStateMenOnly1 : isBookedMale ? imgStateBookedMale1 : isBookedFemale ? imgStateBookedFemale1 : imgStateWomenOnly1} />}
      {isAvailableOrBooked && (
        <>
          <div className={`absolute inset-[28.67%_3%_3%_3%] rounded-[7px] ${isBooked ? "bg-[#e6e6e6]" : "bg-white border-[#4d784b] border-[1.6px] border-solid"}`} id={isBooked ? "node-203_1926" : "node-203_1920"} data-name="Arms" />
          <div className={`absolute inset-[3%_15.33%_29%_15.33%] rounded-[5.5px] ${isBooked ? "bg-[#e6e6e6]" : "bg-white border-[#4d784b] border-[1.6px] border-solid"}`} id={isBooked ? "node-203_1927" : "node-203_1921"} data-name="Back" />
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

export default function Component03ASeatMapSheetCollapsed() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="193:1845" data-name="03a · Seat map · sheet collapsed">
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="193:1846" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="193:1847" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I193:1847;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I193:1847;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="193:1860" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I193:1860;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I193:1860;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I193:1860;34:91">
              Select seats
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I193:1860;34:92">
              ISBT Kashmiri Gate, Delhi → Nainital
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I193:1860;56:226" data-name="Trailing slot" />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-start overflow-clip pl-[16px] pt-[16px] relative shrink-0" data-node-id="530:3872" data-name="Decks">
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="530:3873" data-name="Lower deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="530:3874" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="530:3875">
              Lower deck
            </p>
            <div className="-translate-y-1/2 absolute right-[3px] size-[44px] top-1/2" data-node-id="530:3876" data-name="Art / Steering wheel">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSteeringWheel} />
            </div>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="530:3877" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="530:3878" data-name="Sleepers">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3879" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3881">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3882" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3884">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3885" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3887">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3888" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3890">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3891" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3893">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3894" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3896">
                  ₹1,599
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="530:3897" data-name="Aisle" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3898" data-name="Seaters A">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3899" data-name="Seat Booked female">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked female" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3901">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3902" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3904">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3905" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3907">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3908" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3910">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3911" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3913">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3914" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3916">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3917" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3919">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3920" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3922">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3923" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3925">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3926" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3928">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3929" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3931">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3932" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3934">
                  ₹999
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="530:3935" data-name="Gap" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3936" data-name="Seaters B">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3937" data-name="Seat Booked male">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3939">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3940" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3942">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3943" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3945">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3946" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3948">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3949" data-name="Seat Women only">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Women only" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3951">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3952" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3954">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3955" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3957">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3958" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3960">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3961" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3963">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3964" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3966">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3967" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3969">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3970" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3972">
                  ₹999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="530:3973" data-name="Upper deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="530:3974" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="530:3975">
              Upper deck
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="530:3976" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="530:3977" data-name="Row 1">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3978" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3980">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3981" data-name="Seat Selected">
                <SeatSleeper className="bg-[#8ab58c] border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" state="Selected" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/seat-price-selected,#458442)] whitespace-nowrap" data-node-id="530:3983">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3984" data-name="Seat Booked">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3986">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3987" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3989">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3990" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3992">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3993" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:3995">
                  ₹1,599
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="530:3996" data-name="Aisle" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="530:3997" data-name="Row 2">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:3998" data-name="Seat Booked">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4000">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4001" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4003">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4004" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4006">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4007" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4009">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4010" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4012">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4013" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4015">
                  ₹1,299
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="530:4016" data-name="Gap" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="530:4017" data-name="Row 3">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4018" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4020">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4021" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4023">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4024" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4026">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4027" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4029">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4030" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4032">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="530:4033" data-name="Seat Available">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="530:4035">
                  ₹1,299
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center pb-[276.56px] pt-[33.3px] px-[16px] relative shrink-0 w-full" data-node-id="210:1995" data-name="Seat types">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="210:1996">
          Know your seat types
        </p>
        <div className="h-[29.9px] relative shrink-0 w-px" data-node-id="210:1997" data-name="gap" />
        <div className="bg-[#f2f1f5] border border-[#e3e2e8] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="210:1998" data-name="Legend">
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold h-[38.7px] items-center leading-[18px] not-italic pl-[16px] pr-[14.5px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="210:1999" data-name="Header">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="210:2000">
              Type
            </p>
            <p className="relative shrink-0 text-center w-[60px]" data-node-id="210:2001">
              Seater
            </p>
            <p className="relative shrink-0 text-center w-[64px]" data-node-id="210:2002">
              Sleeper
            </p>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2003" data-name="Divider" />
          <div className="content-stretch flex h-[94.2px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2004" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2005">
              Available
            </p>
            <div className="content-stretch flex h-[94.2px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2006" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" />
            </div>
            <div className="content-stretch flex h-[94.2px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2010" data-name="Sleeper">
              <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2013" data-name="Divider" />
          <div className="content-stretch flex h-[93.9px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2014" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2015">
              Already booked
            </p>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2016" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" state="Booked" />
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2020" data-name="Sleeper">
              <SeatSleeper className="bg-[#e6e6e6] h-[70px] relative rounded-[9px] shrink-0 w-[32px]" state="Booked" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2022" data-name="Divider" />
          <div className="content-stretch flex h-[94.3px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2023" data-name="Row">
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2024">
              <p className="leading-[20px] mb-0">Available only for</p>
              <p className="leading-[20px]">female passenger</p>
            </div>
            <div className="content-stretch flex h-[94.3px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2025" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" state="Women only" />
            </div>
            <div className="content-stretch flex h-[94.3px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2031" data-name="Sleeper">
              <SeatSleeper className="h-[70px] relative shrink-0 w-[32px]" state="Women only" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2036" data-name="Divider" />
          <div className="content-stretch flex h-[92.8px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2037" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2038">
              Booked by female passenger
            </p>
            <div className="content-stretch flex h-[92.8px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2039" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" state="Booked female" />
            </div>
            <div className="content-stretch flex h-[92.8px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2045" data-name="Sleeper">
              <SeatSleeper className="h-[70px] relative shrink-0 w-[32px]" state="Booked female" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2049" data-name="Divider" />
          <div className="content-stretch flex h-[93.9px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2050" data-name="Row">
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2051">
              <p className="leading-[20px] mb-0">Available only for</p>
              <p className="leading-[20px]">male passenger</p>
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2052" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" state="Men only" />
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2058" data-name="Sleeper">
              <SeatSleeper className="h-[70px] relative shrink-0 w-[32px]" state="Men only" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2063" data-name="Divider" />
          <div className="content-stretch flex h-[94.6px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2064" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2065">
              Booked by male passenger
            </p>
            <div className="content-stretch flex h-[94.6px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2066" data-name="Seater">
              <SeatSeater className="relative shrink-0 size-[30px]" state="Booked male" />
            </div>
            <div className="content-stretch flex h-[94.6px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2072" data-name="Sleeper">
              <SeatSleeper className="h-[70px] relative shrink-0 w-[32px]" state="Booked male" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[278.56px] overflow-clip right-[20px] rounded-[var(--radius\/full,999px)] shadow-[0px_0px_16px_0px_rgba(107,61,140,0.28)] size-[48px]" data-node-id="196:1876" style={{ backgroundImage: "linear-gradient(135deg, rgb(197, 70, 70) 0%, rgb(121, 65, 224) 71.429%)" }} data-name="Button / Ask Ray FAB">
        <div className="absolute left-[11px] size-[26px] top-[11px]" data-node-id="I196:1876;63:230" data-name="Sparkle">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkle} />
        </div>
      </div>
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[232.56px] items-start left-0 overflow-clip pt-[9px] px-[16px] right-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.12)]" data-node-id="267:2400" data-name="Bottom sheet · collapsed">
        <div className="content-stretch flex items-start justify-center overflow-clip pb-[12px] relative shrink-0 w-full" data-node-id="267:2401" data-name="Handle bar">
          <div className="bg-[#e5e5e7] h-[4.5px] relative rounded-[999px] shrink-0 w-[34px]" data-node-id="267:2402" data-name="Rectangle" />
        </div>
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="267:2403" data-name="Operator">
          <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px overflow-clip relative" data-node-id="267:2404" data-name="Name">
            <ArtPrimo className="h-[33px] relative shrink-0 w-[59px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[24px] min-w-px not-italic relative text-[18px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="267:2406">
              International Tourist Centre
            </p>
          </div>
          <RatingBadge className="bg-[var(--surface\/positive-subtle,#e0f3d9)] content-stretch flex flex-col items-center overflow-clip relative rounded-[var(--radius\/6,6px)] shrink-0 w-[47px]" count="231" score="4.6" />
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="267:2413">
          23:15 - 08:15 · Wed, 09 Sep
        </p>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip pt-[7px] relative shrink-0 w-full" data-node-id="267:2414" data-name="Preview">
          <div className="h-[47px] relative rounded-[8px] shrink-0 w-[117px]" data-node-id="267:2415" data-name="Photo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPhoto} />
          </div>
          <div className="bg-[#e8e9f3] content-stretch flex flex-col gap-px h-[47px] items-start overflow-clip px-[8px] py-[5px] relative rounded-[8px] shrink-0 w-[94px]" data-node-id="267:2416" data-name="Rising star">
            <ArtPrimo className="h-[33px] relative shrink-0 w-[59px]" />
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="267:2418">
              A rising star
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[22px] items-center overflow-clip pt-[25px] relative shrink-0 w-full" data-node-id="267:2419" data-name="Tabs">
          <div className="bg-[#c54848] content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="267:2420" data-name="Tab · Highlights">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="267:2421">
              Highlights
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="267:2422">
            Booking policies
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="267:2423">
            Bus route
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="267:2424">{`Boarding & dropping`}</p>
        </div>
      </div>
    </div>
  );
}