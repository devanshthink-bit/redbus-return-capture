const imgArtPrimo = "assets/180e720d-ef38-40a2-babe-7815bb8770c7.png";
const imgStar = "assets/d11e8eae-1ebe-4173-8ecc-95e7ad236163.svg";
const imgStateWomenOnly = "assets/233a8b3c-0b6a-4bae-8b5c-62101f19c57c.svg";
const imgStateBookedFemale = "assets/5c327726-ad21-418b-b3e4-b417bc8d4dc6.svg";
const imgStateMenOnly = "assets/482fd8a7-cd09-4da0-a177-c77574b93c02.svg";
const imgStateBookedMale = "assets/6cb648fc-3537-47de-9cdb-ea6da09fd4c8.svg";
const imgStateWomenOnly1 = "assets/0d7631fa-8ac9-4205-8391-c82d4a3ff817.svg";
const imgStateBookedFemale1 = "assets/be66be0c-6b86-45ac-a756-f890d6cf0272.svg";
const imgStateBookedMale1 = "assets/c975fa3e-8da9-4566-8056-afd12649d7db.svg";
const imgStateMenOnly1 = "assets/29fe08c8-256c-47a5-9f5f-6649e0c96324.svg";
const imgArtSteeringWheel = "assets/a8046f97-d818-4e0c-ab76-d4a7c7186ef2.svg";
const imgIconChevronLeft = "assets/067f8864-5cb1-4cd7-ac2b-aa0f6b96e39f.svg";
const imgPhoto = "assets/e1493517-bca5-4aaa-976b-200125ff5ebf.png";
const imgStatusIcons = "assets/8bc5bc2f-43f9-4703-888d-a80ceafb5924.svg";
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
  state?: "Available" | "Booked" | "Women only" | "Booked female" | "Men only" | "Booked male";
};

function SeatSleeper({ className, state = "Available" }: SeatSleeperProps) {
  const isBooked = state === "Booked";
  const isBookedFemale = state === "Booked female";
  const isBookedMale = state === "Booked male";
  const isMenOnly = state === "Men only";
  const isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale = ["Women only", "Booked female", "Men only", "Booked male"].includes(state);
  return (
    <div className={className || `h-[70px] relative w-[32px] ${isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale ? "" : isBooked ? "bg-[#e6e6e6] rounded-[9px]" : "bg-white border-[#4d784b] border-[1.5px] border-solid rounded-[9px]"}`} id={isBookedMale ? "node-203_1917" : isMenOnly ? "node-203_1913" : isBookedFemale ? "node-203_1910" : state === "Women only" ? "node-51_211" : isBooked ? "node-51_208" : "node-51_203"}>
      {isWomenOnlyOrBookedFemaleOrMenOnlyOrBookedMale && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isBookedMale ? imgStateBookedMale : isMenOnly ? imgStateMenOnly : isBookedFemale ? imgStateBookedFemale : imgStateWomenOnly} />}
      {state === "Available" && <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="203:1905" data-name="Pillow" />}
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

function ArtSteeringWheel({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="51:222" data-name="Art / Steering wheel">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSteeringWheel} />
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
        <div className="h-[75px] relative shrink-0 w-full" data-node-id="193:1860" data-name="Nav / Top Bar">
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
      <div className="content-stretch flex gap-[27.1px] items-start pt-[15.2px] relative shrink-0" data-node-id="201:1879" data-name="Decks">
        <div className="bg-white content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[14px] shrink-0 w-[182.3px]" data-node-id="201:1880" data-name="Deck">
          <div className="bg-[#fafafa] content-stretch flex h-[61px] items-center px-[13px] relative rounded-tl-[14px] rounded-tr-[14px] shrink-0 w-full" data-node-id="201:1881" data-name="Deck header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="201:1882">
              Lower deck
            </p>
            <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="201:1883" data-name="spacer" />
            <ArtSteeringWheel className="relative shrink-0 size-[34.3px]" />
          </div>
          <div className="content-stretch flex items-start pb-[22px] pt-[20.2px] px-[13px] relative shrink-0 w-full" data-node-id="201:1885" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:1886" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1887" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1890">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1891" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1894">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1895" data-name="Seat">
                <SeatSleeper className="h-[67.5px] relative shrink-0 w-[31.1px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:1897">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1898" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1901">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1902" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1905">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1906" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1909">
                  ₹1,699
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[40.8px]" data-node-id="201:1972" data-name="Aisle" />
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:1910" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1911" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1913">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1914" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1916">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1917" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1919">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1920" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:1922">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1923" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1925">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1926" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1928">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1929" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1932">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1933" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1936">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1937" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1940">
                  ₹1,499
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[18px]" data-node-id="201:1973" data-name="Gap" />
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:1941" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1942" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1944">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1945" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1947">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1948" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1950">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1951" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:1953">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1954" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1956">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1957" data-name="Seat">
                <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1959">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1960" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1963">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1964" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1967">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1968" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1971">
                  ₹1,499
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[14px] shrink-0 w-[182.3px]" data-node-id="201:1974" data-name="Deck">
          <div className="bg-[#fafafa] content-stretch flex h-[61px] items-center px-[13px] relative rounded-tl-[14px] rounded-tr-[14px] shrink-0 w-full" data-node-id="201:1975" data-name="Deck header">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="201:1976">
              Upper deck
            </p>
          </div>
          <div className="content-stretch flex items-start pb-[22px] pt-[20.2px] px-[13px] relative shrink-0 w-full" data-node-id="201:1977" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:1978" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1979" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1982">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1983" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1986">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1987" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1990">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1991" data-name="Seat">
                <SeatSleeper className="h-[67.5px] relative shrink-0 w-[31.1px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:1993">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1994" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:1997">
                  ₹1,699
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:1998" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2001">
                  ₹1,699
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[40.8px]" data-node-id="201:2050" data-name="Aisle" />
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:2002" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2003" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2006">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2007" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2010">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2011" data-name="Seat">
                <SeatSleeper className="h-[67.5px] relative shrink-0 w-[31.1px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:2013">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2014" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2017">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2018" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2021">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2022" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2025">
                  ₹1,499
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[18px]" data-node-id="201:2051" data-name="Gap" />
            <div className="content-stretch flex flex-col gap-[0.7px] items-center relative shrink-0" data-node-id="201:2026" data-name="Column">
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2027" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2030">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2031" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2034">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2035" data-name="Seat">
                <SeatSleeper className="h-[67.5px] relative shrink-0 w-[31.1px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] text-center whitespace-nowrap" data-node-id="201:2037">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2038" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2041">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2042" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2045">
                  ₹1,499
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0" data-node-id="201:2046" data-name="Seat">
                <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[67.5px] relative rounded-[9px] shrink-0 w-[31.1px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] text-center whitespace-nowrap" data-node-id="201:2049">
                  ₹1,499
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
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" />
            </div>
            <div className="content-stretch flex h-[94.2px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2010" data-name="Sleeper">
              <SeatSleeper className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[61.7px] relative rounded-[9px] shrink-0 w-[29.6px]" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2013" data-name="Divider" />
          <div className="content-stretch flex h-[93.9px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2014" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2015">
              Already booked
            </p>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2016" data-name="Seater">
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Booked" />
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2020" data-name="Sleeper">
              <SeatSleeper className="bg-[#e6e6e6] h-[61.7px] relative rounded-[9px] shrink-0 w-[29.6px]" state="Booked" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2022" data-name="Divider" />
          <div className="content-stretch flex h-[94.3px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2023" data-name="Row">
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2024">
              <p className="leading-[20px] mb-0">Available only for</p>
              <p className="leading-[20px]">female passenger</p>
            </div>
            <div className="content-stretch flex h-[94.3px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2025" data-name="Seater">
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Women only" />
            </div>
            <div className="content-stretch flex h-[94.3px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2031" data-name="Sleeper">
              <SeatSleeper className="h-[61.7px] relative shrink-0 w-[29.6px]" state="Women only" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2036" data-name="Divider" />
          <div className="content-stretch flex h-[92.8px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2037" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2038">
              Booked by female passenger
            </p>
            <div className="content-stretch flex h-[92.8px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2039" data-name="Seater">
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Booked female" />
            </div>
            <div className="content-stretch flex h-[92.8px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2045" data-name="Sleeper">
              <SeatSleeper className="h-[61.7px] relative shrink-0 w-[29.6px]" state="Booked female" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2049" data-name="Divider" />
          <div className="content-stretch flex h-[93.9px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2050" data-name="Row">
            <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2051">
              <p className="leading-[20px] mb-0">Available only for</p>
              <p className="leading-[20px]">male passenger</p>
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2052" data-name="Seater">
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Men only" />
            </div>
            <div className="content-stretch flex h-[93.9px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2058" data-name="Sleeper">
              <SeatSleeper className="h-[61.7px] relative shrink-0 w-[29.6px]" state="Men only" />
            </div>
          </div>
          <div className="bg-[#e3e2e8] h-px relative shrink-0 w-full" data-node-id="210:2063" data-name="Divider" />
          <div className="content-stretch flex h-[94.6px] items-center pl-[16px] pr-[14.5px] relative shrink-0 w-full" data-node-id="210:2064" data-name="Row">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="210:2065">
              Booked by male passenger
            </p>
            <div className="content-stretch flex h-[94.6px] items-center justify-center relative shrink-0 w-[60px]" data-node-id="210:2066" data-name="Seater">
              <SeatSeater className="h-[24.9px] relative shrink-0 w-[25.3px]" state="Booked male" />
            </div>
            <div className="content-stretch flex h-[94.6px] items-center justify-center relative shrink-0 w-[64px]" data-node-id="210:2072" data-name="Sleeper">
              <SeatSleeper className="h-[61.7px] relative shrink-0 w-[29.6px]" state="Booked male" />
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
            <ArtPrimo className="h-[29px] relative shrink-0 w-[52px]" />
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
            <ArtPrimo className="h-[20px] relative shrink-0 w-[46px]" />
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