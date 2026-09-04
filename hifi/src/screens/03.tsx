const imgGlyph = "assets/ba208442-6f69-45c0-8dba-e2f2adb64a4c.svg";
const imgGlyph1 = "assets/a3fb996c-94ed-4a43-ab51-c814d9ecc22c.svg";
const imgArtTripRewardBadge = "assets/d11b3793-4db7-4733-9309-2511617bb0bd.png";
const imgStateWomenOnly = "assets/00000790-8cae-4007-9543-0e4c28e0d439.svg";
const imgStateBookedFemale = "assets/96c394ba-9120-48e1-a9ef-fd874f068065.svg";
const imgStateBookedMale = "assets/b705f18f-ab2b-42ab-8158-8e3f2c671851.svg";
const imgIconChevronLeft = "assets/9ef8bf2e-7668-4d13-bfd5-da483e850476.svg";
const imgArtwork = "assets/d8dfe1d3-3d58-449e-bd55-0c1cdd4b5153.png";
const imgStatusIcons = "assets/c01505d4-2e4f-4aa4-a00e-69019bec8431.svg";
const imgArtSteeringWheel = "assets/057bfdda-c947-401a-90b6-f61870b179a4.svg";
const imgSparkle = "assets/69ee340a-f4f5-4744-9ff5-1dd90faaa84c.svg";
const imgBreakdown = "assets/5db4a2ee-c4ba-474d-87c1-10b44ebec4e5.svg";

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

export default function Component03OutboundSeatMap() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="54:192" data-name="03 · Outbound seat map">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="54:193" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="54:194" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I54:194;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I54:194;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="54:207" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I54:207;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I54:207;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I54:207;34:91">
              Select seats
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I54:207;34:92">
              ISBT Kashmiri Gate, Delh…
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I54:207;56:226" data-name="Trailing slot">
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="I54:207;53:196" data-name="Trailing">
              <div className="h-[44.67px] relative shrink-0 w-[96.33px]" data-node-id="I54:207;53:196;60:229" data-name="Artwork">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtwork} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-start overflow-clip pl-[16px] pt-[16px] relative shrink-0" data-node-id="54:216" data-name="Decks">
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="54:217" data-name="Lower deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="54:218" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="54:219">
              Lower deck
            </p>
            <div className="-translate-y-1/2 absolute right-[3px] size-[44px] top-1/2" data-node-id="54:220" data-name="Art / Steering wheel">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSteeringWheel} />
            </div>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="54:221" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="54:222" data-name="Sleepers">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:223" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:224" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:224;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:226">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:227" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:228" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:228;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:230">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:231" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:232" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:232;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:234">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:235" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:236" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:236;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:238">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:284" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:285" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:285;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:287">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:288" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:289" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:289;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:291">
                  ₹1,599
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="54:239" data-name="Aisle" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:240" data-name="Seaters A">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:242" data-name="Seat Booked female">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked female" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:244">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:248" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:250">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:254" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:256">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:260" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:262">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:266" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:268">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:272" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:274">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:278" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:280">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:284" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:286">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:292" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:294">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:295" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:297">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:298" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:300">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:301" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:303">
                  ₹999
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="54:290" data-name="Gap" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:241" data-name="Seaters B">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:245" data-name="Seat Booked male">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Booked male" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:247">
                  Sold
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:251" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:253">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:257" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:259">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:263" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:265">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:269" data-name="Seat Women only">
                <SeatSeater className="relative shrink-0 size-[30px]" state="Women only" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:271">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:275" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:277">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:281" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:283">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:287" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:289">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:304" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:306">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:307" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:309">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:310" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:312">
                  ₹999
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:313" data-name="Seat Available">
                <SeatSeater className="relative shrink-0 size-[30px]" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:315">
                  ₹999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex flex-col gap-[24px] items-start pb-[12px] pt-[21px] px-[4px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-[200px]" data-node-id="54:291" data-name="Upper deck">
          <div className="content-stretch flex items-center justify-between pl-[9px] pr-[3px] relative shrink-0 w-full" data-node-id="54:292" data-name="Deck title">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="54:293">
              Upper deck
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/divider,#e6e6e6)] border-solid content-stretch flex items-start overflow-clip px-[14.5px] py-[20px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="54:294" data-name="Seat grid">
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="54:295" data-name="Row 1">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:298" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:299" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:299;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:301">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:302" data-name="Seat Selected">
                <div className="bg-[#8ab58c] border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:303" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#c9e2c6] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:303;203:1906" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/seat-price-selected,#458442)] whitespace-nowrap" data-node-id="54:305">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:306" data-name="Seat Booked">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:307" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:307;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:308">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:309" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:310" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:310;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:312">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:316" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:317" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:317;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:319">
                  ₹1,599
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:320" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:321" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:321;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:323">
                  ₹1,599
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[59.5px]" data-node-id="54:344" data-name="Aisle" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="54:296" data-name="Row 2">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:313" data-name="Seat Booked">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:314" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:314;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:315">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:316" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:317" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:317;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:319">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:320" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:321" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:321;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:323">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:324" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:325" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:325;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:327">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:324" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:325" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:325;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:327">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:328" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:329" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:329;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:331">
                  ₹1,299
                </p>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-[12px]" data-node-id="54:345" data-name="Gap" />
            <div className="content-stretch flex flex-col gap-[4.33px] items-center relative shrink-0" data-node-id="54:297" data-name="Row 3">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:328" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:329" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:329;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:331">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:332" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:333" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:333;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:335">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:336" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:337" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:337;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:339">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="54:340" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="54:341" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I54:341;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="54:343">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:332" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:333" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:333;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:335">
                  ₹1,299
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="78:336" data-name="Seat Available">
                <div className="bg-white border-[#4d784b] border-[1.5px] border-solid h-[70px] relative rounded-[9px] shrink-0 w-[32px]" data-node-id="78:337" data-name="Seat / Sleeper">
                  <div className="absolute bg-[#dff3d8] inset-[calc(82.86%+0.99px)_calc(12.5%-1.13px)_calc(7.14%-1.29px)_calc(12.5%-1.13px)] rounded-[3px]" data-node-id="I78:337;203:1905" data-name="Pillow" />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#636363)] whitespace-nowrap" data-node-id="78:339">
                  ₹1,299
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center pb-[270.3px] pt-[28px] relative shrink-0 w-full" data-node-id="55:224" data-name="Seat types heading">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] text-center whitespace-nowrap" data-node-id="55:225">
          Know your seat types
        </p>
      </div>
      <div className="absolute bottom-[284.3px] drop-shadow-[0px_0px_8px_rgba(107,61,140,0.28)] right-[16px] rounded-[var(--radius\/full,999px)] size-[48px]" data-node-id="63:234" style={{ backgroundImage: "linear-gradient(135deg, rgb(197, 70, 70) 0%, rgb(121, 65, 224) 71.429%)" }} data-name="Ask Ray">
        <div className="absolute left-[11px] size-[26px] top-[11px]" data-node-id="I63:234;63:230" data-name="Sparkle">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkle} />
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] bottom-0 content-stretch flex flex-col items-center left-0 overflow-clip pb-[50.3px] pt-[11.6px] right-0 rounded-tl-[var(--radius\/20,20px)] rounded-tr-[var(--radius\/20,20px)] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.12)]" data-node-id="76:286" data-name="Bottom sheet">
        <div className="bg-[var(--border\/divider,#e6e6e6)] h-[5px] relative rounded-[3px] shrink-0 w-[40px]" data-node-id="76:287" data-name="Grabber" />
        <div className="content-stretch flex items-start pt-[8.4px] px-[16px] relative shrink-0 w-full" data-node-id="76:288" data-name="tripReward">
          <ArtTripRewardStripCompact className="bg-gradient-to-r content-stretch flex flex-[1_0_0] from-[#fceaee] gap-[12px] h-[41px] items-center min-w-px overflow-clip px-[12px] relative rounded-[10px] to-[#f8f0e2]" />
        </div>
        <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-[390px]" data-node-id="76:290" data-name="Divider" />
        <div className="content-stretch flex items-center justify-between pt-[30.4px] px-[16px] relative shrink-0 w-full" data-node-id="76:291" data-name="Selection summary">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="76:292">
            1 seat selected
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="76:293" data-name="Fare">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="76:294">
              ₹1,599
            </p>
            <div className="relative shrink-0 size-[18px]" data-node-id="76:295" data-name="Breakdown">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBreakdown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[23.6px] px-[16px] relative shrink-0 w-full" data-node-id="76:298" data-name="Action">
          <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[47px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" label="Select boarding & dropping points" showIcon={false} />
        </div>
      </div>
    </div>
  );
}