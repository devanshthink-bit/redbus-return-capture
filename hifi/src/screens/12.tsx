const imgArtNoPastBookings = "assets/05034b9c-ba45-473e-987a-3a54601bbc8b.png";
const imgGlyph = "assets/b6d9b21f-ae76-46fd-8602-469ba114e6aa.svg";
const imgArtBookingBand = "assets/4d79bf4c-2cd5-4966-a26b-50a802602822.png";
const imgStatusIcons = "assets/049e923c-40ca-419a-a8df-9d147e472ff9.svg";
const imgPassengersIcon = "assets/77de20bb-e075-4033-9c79-14c6bee8888a.svg";
const imgFilter = "assets/144f965b-bfc3-4d4e-97d4-2113aa10e10e.svg";
const imgIcon = "assets/9370a295-259b-48e8-b048-b90e4b4d3631.svg";
const imgIcon1 = "assets/9a010bbb-9fe2-40ca-811e-ca40b3d5b762.svg";
const imgIcon2 = "assets/635a7654-ed3f-4f13-9881-69b990f19589.svg";
const imgIcon3 = "assets/e4d59177-d3a7-4251-857e-274de5b7bee5.svg";
const imgIcon4 = "assets/960ddedf-8889-4133-b360-ba1c7db5d24e.svg";

function ArtNoPastBookings({ className }: { className?: string }) {
  return (
    <div className={className || "h-[115px] relative w-[206.67px]"} data-node-id="124:1325" data-name="Art / No past bookings">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtNoPastBookings} />
    </div>
  );
}

type ChipFilterProps = {
  className?: string;
  label?: string;
};

function ChipFilter({ className, label = "Bus" }: ChipFilterProps) {
  return (
    <div className={className || "bg-[var(--surface\\/default,white)] border border-[var(--border\\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center overflow-clip px-[12px] relative rounded-[var(--radius\\/10,10px)]"} data-node-id="20:55" data-name="Chip / Filter">
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="20:54">
        {label}
      </p>
    </div>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="116:1171" data-name="Icon / Chevron Right">
      <div className="absolute left-0 size-[20px] top-0" data-node-id="116:1172" data-name="glyph">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
      </div>
    </div>
  );
}

function ArtBookingBand({ className }: { className?: string }) {
  return (
    <div className={className || "h-[118px] relative w-[358px]"} data-node-id="121:1324" data-name="Art / Booking band">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtBookingBand} />
    </div>
  );
}

export default function Component12MyBookings() {
  return (
    <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="125:1324" data-name="12 · My Bookings">
      <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="125:1325" data-name="Status Bar / Light">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I125:1325;13:3">
          9:41
        </p>
        <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I125:1325;13:4" data-name="Status icons">
          <div className="absolute inset-[-1.3%_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[102px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="125:1338" data-name="Content">
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[40px] not-italic relative shrink-0 text-[32px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="125:1339">
          My Bookings
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="125:1340" data-name="Upcoming booking">
          <a className="bg-[var(--surface\/default,white)] content-stretch cursor-pointer drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="125:1341" data-name="Booking">
            <div className="h-[118px] overflow-clip relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="I125:1341;121:1332" data-name="Band">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtBookingBand} />
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[2px] items-start left-[16px] not-italic text-[color:var(--text\/primary,#1d1d1d)] text-left top-[14px] whitespace-nowrap" data-node-id="I125:1341;121:1335" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[34px] relative shrink-0 text-[26px]" data-node-id="I125:1341;121:1336">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="I125:1341;121:1337">
                  Mon, 14 Sep
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic p-[16px] relative shrink-0 text-left w-full" data-node-id="I125:1341;121:1338" data-name="Body">
              <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I125:1341;121:1339">
                Bus to Delhi
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I125:1341;121:1340">
                LAXMI HOLIDAYS PVT LTD
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I125:1341;121:1341">
                Nainital Bus Stand → ISBT Kashmiri Gate, Delhi
              </p>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="I125:1341;121:1342" data-name="Divider" />
            <div className="content-stretch flex items-center justify-between px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="I125:1341;121:1343" data-name="Footer">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I125:1341;121:1344" data-name="Passengers">
                <div className="relative shrink-0 size-[22px]" data-node-id="I125:1341;121:1345" data-name="Passengers icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPassengersIcon} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I125:1341;121:1350">
                  1
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I125:1341;121:1351">
                In 8 days
              </p>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="I125:1341;132:1359" data-name="Divider 2" />
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="I125:1341;132:1360" data-name="Change day">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="I125:1341;132:1361" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-left w-[min-content]" data-node-id="I125:1341;132:1362">
                  Change your return day
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] min-w-full not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] text-left w-[min-content]" data-node-id="I125:1341;132:1363">
                  Any date, earlier or later. Pay only the price difference.
                </p>
                <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[var(--radius\/4,4px)] shrink-0" data-node-id="I125:1341;132:1364" data-name="Balance">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-left whitespace-nowrap" data-node-id="I125:1341;132:1365">
                    1 change left
                  </p>
                </div>
              </div>
              <IconChevronRight className="relative shrink-0 size-[20px]" />
            </div>
          </a>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="125:1371" data-name="Past bookings heading">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="125:1372">
            Past bookings
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="125:1373" data-name="Filter">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilter} />
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="125:1378" data-name="Filter chips">
          <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="125:1379" data-name="Chip / Filter">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I125:1379;20:54">
              All
            </p>
          </div>
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" />
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" label="Train" />
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" label="Metro" />
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" label="Autos & Cabs" />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center pt-[20px] relative shrink-0 w-full" data-node-id="125:1389" data-name="No past bookings">
          <ArtNoPastBookings className="h-[115px] relative shrink-0 w-[206.67px]" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="125:1391">
            No past bookings
          </p>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.86)] bottom-0 content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.1)] flex h-[66px] items-center justify-between left-[20px] px-[14px] right-[20px] rounded-[var(--radius\/full,999px)]" data-node-id="125:1392" data-name="Nav / Tab Bar">
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I125:1392;24:73" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I125:1392;24:73;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I125:1392;24:73;24:65">
            Home
          </p>
        </div>
        <div className="bg-[var(--surface\/selected,#ededed)] content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I125:1392;24:76" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I125:1392;24:76;24:68" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-selected,#bd3e3e)] text-center whitespace-nowrap" data-node-id="I125:1392;24:76;24:69">
            My Bookings
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I125:1392;24:79" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I125:1392;24:79;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I125:1392;24:79;24:65">
            Offers
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I125:1392;24:82" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I125:1392;24:82;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I125:1392;24:82;24:65">
            Help
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I125:1392;24:85" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I125:1392;24:85;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I125:1392;24:85;24:65">
            My Account
          </p>
        </div>
      </div>
    </div>
  );
}
