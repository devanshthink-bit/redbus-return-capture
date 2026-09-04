const imgGlyph = "assets/f5f53432-421a-4e44-8b9b-f7cb99f695dc.svg";
const imgIconHourglass = "assets/e138f8f0-40ec-4703-bdc6-eb2b6e0e7076.svg";
const imgStatusIcons = "assets/f1ef788b-cb8f-4341-aefa-cafca2b34b7d.svg";
const imgMarker = "assets/6a72828b-1ad3-4d61-8d4e-1cd729307cbf.svg";
const imgMarker1 = "assets/dfe32957-1e71-451e-9967-a4e3d86aa505.svg";

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

export default function Component10BookingConfirmed() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="114:1007" data-name="10 · Booking confirmed">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="114:1008" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="114:1009" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I114:1009;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I114:1009;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="114:1022" data-name="Nav / Top Bar">
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I114:1022;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I114:1022;34:91">
              Booking confirmed
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I114:1022;34:92">
              Delhi ↔ Nainital · 1 passenger
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="114:1032" data-name="Content">
        <div className="[word-break:break-word] bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-col gap-[4px] items-start not-italic px-[16px] py-[12px] relative rounded-[var(--radius\/8,8px)] shrink-0 w-full whitespace-nowrap" data-node-id="114:1033" data-name="Your trip">
          <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="114:1034">
            Your trip
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="114:1035">
            Thu, 10 Sep → Mon, 14 Sep · 4 days
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1036">
          ONWARD
        </p>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="114:1037" data-name="Onward ticket">
          <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="I114:1037;113:1008" data-name="Journey">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I114:1037;113:1009" data-name="From">
              <div className="relative shrink-0 size-[22px]" data-node-id="I114:1037;113:1010" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1037;113:1013" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1037;113:1014">
                  Delhi
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I114:1037;113:1015">
                  ISBT Kashmiri Gate
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1037;113:1016" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I114:1037;113:1017">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I114:1037;113:1018">
                  Thu, 10 Sep
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="I114:1037;113:1019" data-name="Duration">
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I114:1037;113:1020" data-name="Rule" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1037;113:1021">
                8h 5m
              </p>
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I114:1037;113:1022" data-name="Rule" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I114:1037;113:1023" data-name="To">
              <div className="relative shrink-0 size-[22px]" data-node-id="I114:1037;113:1024" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1037;113:1027" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1037;113:1028">
                  Nainital
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I114:1037;113:1029">
                  Nainital Bus Stand
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1037;113:1030" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I114:1037;113:1031">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I114:1037;113:1032">
                  Fri, 11 Sep
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="I114:1037;113:1033" data-name="Passenger">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I114:1037;113:1034" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1037;113:1035">
                LAXMI HOLIDAYS PVT LTD
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="I114:1037;113:1036">
                Devansh Somvanshi
              </p>
            </div>
            <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="I114:1037;113:1037" data-name="Seat badge">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I114:1037;113:1038">
                U4
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1069">
          RETURN
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="114:1070" data-name="Return ticket">
          <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="114:1071" data-name="Ticket">
            <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="I114:1071;113:1008" data-name="Journey">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I114:1071;113:1009" data-name="From">
                <div className="relative shrink-0 size-[22px]" data-node-id="I114:1071;113:1010" data-name="Marker">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1071;113:1013" data-name="Place">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1071;113:1014">
                    Nainital
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I114:1071;113:1015">
                    Nainital Bus Stand
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1071;113:1016" data-name="When">
                  <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I114:1071;113:1017">
                    23:55
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I114:1071;113:1018">
                    Mon, 14 Sep
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="I114:1071;113:1019" data-name="Duration">
                <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I114:1071;113:1020" data-name="Rule" />
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1071;113:1021">
                  8h 5m
                </p>
                <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I114:1071;113:1022" data-name="Rule" />
              </div>
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I114:1071;113:1023" data-name="To">
                <div className="relative shrink-0 size-[22px]" data-node-id="I114:1071;113:1024" data-name="Marker">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1071;113:1027" data-name="Place">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1071;113:1028">
                    Delhi
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I114:1071;113:1029">
                    ISBT Kashmiri Gate
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I114:1071;113:1030" data-name="When">
                  <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I114:1071;113:1031">
                    08:00
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I114:1071;113:1032">
                    Tue, 15 Sep
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="I114:1071;113:1033" data-name="Passenger">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I114:1071;113:1034" data-name="Text">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I114:1071;113:1035">
                  LAXMI HOLIDAYS PVT LTD
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="I114:1071;113:1036">
                  Devansh Somvanshi
                </p>
              </div>
              <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="I114:1071;113:1037" data-name="Seat badge">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I114:1071;113:1038">
                  U2
                </p>
              </div>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="I114:1071;141:1427" data-name="Divider 2" />
            <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="I114:1071;141:1428" data-name="Change note">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I114:1071;141:1429" data-name="Line">
                <IconHourglass className="relative shrink-0 size-[20px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[22px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I114:1071;141:1431">
                  You can change this date once
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I114:1071;141:1432">
                After that, the return cannot be cancelled.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="114:1107" data-name="Changing your return day">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/secondary,#636363)] tracking-[0.4px] w-full" data-node-id="114:1108">
            CHANGING YOUR RETURN DAY
          </p>
          <div className="h-[12px] relative shrink-0 w-full" data-node-id="114:1109" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="114:1110">
            Open your ticket
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="114:1111" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1112">
            Tap Change day and pick another date
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="114:1113" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="114:1114">
            No fee to change it
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="114:1115" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1116">
            Pay only if the new bus costs more
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="114:1117" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="114:1118">
            Change to any date
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="114:1119" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1120">
            Any day in that range, earlier or later
          </p>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="114:1121" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] w-full" data-node-id="114:1122">
            You cannot cancel after that
          </p>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="114:1123" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1124">
            No refund on the return
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="114:1125">
          Ticket sent to your email and WhatsApp.
        </p>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex flex-col items-start left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="114:1126" data-name="Action bar">
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[48px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" label="View ticket" showIcon={false} />
      </div>
    </div>
  );
}
