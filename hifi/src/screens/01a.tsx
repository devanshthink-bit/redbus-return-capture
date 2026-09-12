const imgLogoRedBusMark = "assets/24678315-8076-42a5-adf4-048efb56feb5.png";
const imgIconBus = "assets/550e0797-aedd-4962-964f-1c86e8440304.svg";
const imgArtWallet = "assets/f78dbdd1-07f6-4431-aa6c-36db9c60a7f9.png";
const imgArtAvatarWomen = "assets/2e80c296-3987-4197-9648-a36d3013e11e.png";
const imgArtTileMetro = "assets/c848d6c6-ecdb-4a5e-bbb4-723a458ff3b9.png";
const imgArtTileHotels = "assets/f95caae6-d768-414f-a6b8-435dab1294e4.png";
const imgArtTileTrain = "assets/2a12b614-4a09-4630-9a31-2efdebb77810.png";
const imgArtTileBus = "assets/b7c03f18-2891-44b6-a6bf-7b792795f43f.png";
const imgFestiveBanner = "assets/68e0b224-42ec-465f-96b7-80402a4e8d21.png";
const imgArtCouponTicket = "assets/45153482-cff1-4b2d-bba9-584c1ab71284.png";
const imgArtTrain = "assets/b7de6a27-7e9f-4744-94d9-aae1a8c710ca.png";
const imgArtCouponCreator = "assets/858fc6fd-dd7a-45ed-9b52-f6203fbdb737.png";
const imgArtGiftBox = "assets/94832eef-e4d1-408f-ae4a-cc1dc9ca7da4.png";
const imgPhoto = "assets/f627e563-9917-4d09-9f23-bff2e40c1c04.png";
const imgPhoto1 = "assets/ec5ec9b2-3017-47a5-a940-806607674c47.png";
const imgPhoto2 = "assets/9ae3f3e4-0d38-4122-86dd-2fcc66ac592d.png";
const imgCrest = "assets/9c0b94be-e9f7-40b1-87a9-94b13074a86c.png";
const imgCrest1 = "assets/4b8eb3ba-fd14-4795-a00f-6b337492628f.png";
const imgWhatsnew = "assets/04dcc207-8f42-4412-aff6-f561a84b1c8b.png";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgIcon = "assets/8b1dbaae-1b05-4657-bb9a-3b69452dc009.svg";
const imgArrows = "assets/cb00b3f2-7707-4c55-8a7f-5064aa651dc5.svg";
const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgArtSunburst = "assets/bda687c1-0447-4e49-97f2-130fc4c62373.svg";
const imgFrame = "assets/5b2e3aa2-2477-4b36-8908-390be8c387b8.svg";
const imgDot = "assets/db707fce-bb98-47c2-bc37-8e64d7c1bcbc.svg";
const imgDot1 = "assets/c8d8152d-b4e2-4fa8-a1b4-0ac3b30dcd84.svg";
const imgBlob = "assets/2d3e1cbd-3e2b-41eb-a4c3-5fbf38d5783e.svg";
const imgEllipse = "assets/bd413fb7-507a-4f81-bdf6-426c8d8b2a69.svg";
const imgVector = "assets/df528a13-32eb-41d9-a6d8-670921772d8c.svg";
const imgFrame1 = "assets/c607fe5f-cb39-4c87-a88e-2ed1a5aa7bc5.svg";
const imgFrame2 = "assets/6e560916-0faf-48e6-974b-5ee043d5d7da.svg";
const imgFrame3 = "assets/ee8843b7-87b5-4e01-9292-9dd34d74cfc2.svg";
const imgFrame4 = "assets/6f3ca641-0d62-4487-94ac-e44cdd192a7e.svg";
const imgIconStarFilled = "assets/e6b8b574-4612-454f-8355-c1dd70e2b974.svg";
const imgIcon1 = "assets/ba7cc76c-5b9f-4a28-8509-31170dbcd9d8.svg";
const imgIcon2 = "assets/ffe46d02-6e9d-493d-9f48-df1978e85067.svg";
const imgIcon3 = "assets/c9425971-3686-465e-bb0c-4040d86af53b.svg";
const imgIcon4 = "assets/1dcba43d-fde6-40a0-aea7-d0ca17f3d5f8.svg";
const imgIcon5 = "assets/960ddedf-8889-4133-b360-ba1c7db5d24e.svg";

function LogoRedBusMark({ className }: { className?: string }) {
  return (
    <div className={className || "h-[23px] relative w-[36px]"} data-node-id="270:2405" data-name="Logo / redBus mark">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoRedBusMark} />
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

function ArtWallet({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[30px]"} data-node-id="108:974" data-name="Art / Wallet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtWallet} />
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

function ArtAvatarWomen({ className }: { className?: string }) {
  return (
    <div className={className || "h-[34.67px] relative w-[27.33px]"} data-node-id="10:15" data-name="Art / Avatar Women">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtAvatarWomen} />
    </div>
  );
}

function ArtTileMetro({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[72px]"} data-node-id="10:14" data-name="Art / Tile / Metro">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtTileMetro} />
    </div>
  );
}

function ArtTileHotels({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[72px]"} data-node-id="10:13" data-name="Art / Tile / Hotels">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtTileHotels} />
    </div>
  );
}

function ArtTileTrain({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[72px]"} data-node-id="10:12" data-name="Art / Tile / Train">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtTileTrain} />
    </div>
  );
}

function ArtTileBus({ className }: { className?: string }) {
  return (
    <div className={className || "h-[48px] relative w-[72px]"} data-node-id="10:11" data-name="Art / Tile / Bus">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtTileBus} />
    </div>
  );
}

export default function Component01ASelectDate() {
  return (
    <div className="bg-white relative size-full" data-node-id="540:3888" data-name="01a · Select date">
      <div className="absolute bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 top-0 w-[390px]" data-node-id="540:3889" data-name="Sticky header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="540:3890" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I540:3890;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I540:3890;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip pb-[14px] pt-[5px] px-[24px] relative shrink-0 w-full" data-node-id="540:3891" data-name="Category strip">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="540:3892" data-name="Category Tile">
            <ArtTileBus className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I540:3892;14:4">
              Bus Tickets
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="540:3893" data-name="Category Tile">
            <ArtTileTrain className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I540:3893;14:4">
              Train Tickets
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="540:3894" data-name="Category Tile">
            <ArtTileHotels className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I540:3894;14:4">
              Hotels
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="540:3895" data-name="Category Tile">
            <ArtTileMetro className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I540:3895;14:4">
              Metro Tickets
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip rounded-bl-[24px] rounded-br-[24px] top-[130px] w-[390px]" data-node-id="540:3896" data-name="Top block">
        <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="540:3897" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(252, 242, 241) 34%, rgb(249, 236, 235) 80%, rgb(207, 160, 166) 100%)" }} data-name="Search section">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[34px] not-italic relative shrink-0 text-[26px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="540:3898">
            Bus Tickets
          </p>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex flex-col items-start relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="540:3899" data-name="Search card">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="540:3900" data-name="Search / Row">
              <IconBus className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I540:3900;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I540:3900;16:28">
                  From
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I540:3900;16:29">
                  ISBT Kashmiri Gate, Delhi
                </p>
              </div>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="540:3901" data-name="Divider" />
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="540:3902" data-name="Search / Row">
              <IconBus className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I540:3902;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I540:3902;16:28">
                  To
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I540:3902;16:29">
                  Nainital
                </p>
              </div>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="540:3903" data-name="Divider" />
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="540:3904" data-name="Search / Row">
              <div className="relative shrink-0 size-[24px]" data-node-id="I540:3904;16:26" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I540:3904;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I540:3904;16:28">
                  Date of journey
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I540:3904;16:29">
                  Thu 10 Sep
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I540:3904;16:30" data-name="Trailing">
                <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[38px] items-center justify-center px-[12px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I540:3904;16:31" data-name="Chip / Quick date">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I540:3904;16:31;16:23">
                    Today
                  </p>
                </div>
                <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[38px] items-center justify-center px-[12px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I540:3904;16:33" data-name="Chip / Quick date">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I540:3904;16:33;16:23">
                    Tomorrow
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colour\/neutral\/800,#4a4a4a)] right-[7px] rounded-[var(--radius\/full,999px)] size-[40px] top-[37px]" data-node-id="540:3905" data-name="Swap">
              <div className="absolute left-0 size-[40px] top-0" data-node-id="I540:3905;23:62" data-name="Arrows">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrows} />
              </div>
            </div>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[13px] items-center pl-[20px] pr-[13px] py-[10px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="540:3906" data-name="Booking for women card">
            <ArtAvatarWomen className="h-[34.67px] relative shrink-0 w-[27.33px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="540:3908" data-name="Text">
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="540:3909">
                Booking for women
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/link,#0000e4)]" data-node-id="540:3910">
                Know more
              </p>
            </div>
            <div className="bg-[var(--surface\/control-off,#c5c5c7)] h-[27px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-[63px]" data-node-id="540:3911" data-name="Toggle / iOS">
              <div className="absolute bg-[var(--surface\/default,white)] h-[23px] left-[2px] rounded-[var(--radius\/full,999px)] top-[2px] w-[37px]" data-node-id="I540:3911;18:46" data-name="Knob" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="540:3912" data-name="CTA">
            <a className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[46px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" data-node-id="540:3913" data-name="Button / Primary">
              <div className="relative shrink-0 size-[20px]" data-node-id="I540:3913;18:49" data-name="Icon">
                <div className="absolute left-0 size-[20px] top-0" data-node-id="I540:3913;18:49;13:16" data-name="glyph">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] text-left whitespace-nowrap" data-node-id="I540:3913;18:53">
                Search buses
              </p>
            </a>
          </div>
        </div>
        <div className="h-[126px] relative shrink-0 w-full" data-node-id="540:3914" data-name="Festive banner">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFestiveBanner} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.45)] h-[844px] left-0 top-0 w-[390px]" data-node-id="540:3915" data-name="Scrim" />
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[8px] overflow-clip pt-[24px] rounded-bl-[36px] rounded-br-[36px] rounded-tl-[24px] rounded-tr-[24px] top-[339px] w-[374px]" data-node-id="540:3916" data-name="Sheet / Select date">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="540:3917" data-name="Title row">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="540:3918">
            Select date
          </p>
          <div className="bg-[#f1f1f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[36px]" data-node-id="540:3919" data-name="Close">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[16px] whitespace-nowrap" data-node-id="540:3920">
              ✕
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start overflow-clip pt-[14px] px-[16px] relative shrink-0 w-full" data-node-id="541:3959" data-name="Weekdays">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3960" data-name="MON"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3961">MON</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3962" data-name="TUE"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3963">TUE</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3964" data-name="WED"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3965">WED</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3966" data-name="THU"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3967">THU</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3968" data-name="FRI"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3969">FRI</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3970" data-name="SAT"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3971">SAT</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[6px] relative" data-node-id="541:3972" data-name="SUN"><p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#636363] text-[12px] text-center whitespace-nowrap" data-node-id="541:3973">SUN</p></div>
        </div>
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="541:3974" data-name="Rule" />
        <div className="content-stretch flex items-start overflow-clip pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="541:3975" data-name="September label">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="541:3976">September 2026</p>
        </div>
        <div className="content-stretch flex items-start overflow-clip pt-[8px] px-[16px] relative shrink-0 w-full" data-node-id="541:3977" data-name="Week 1">
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:3978" data-name="—" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3979" data-name="Sep 1"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3980">1</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3981" data-name="Sep 2"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3982">2</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3983" data-name="Sep 3"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3984">3</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3985" data-name="Sep 4"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3986">4</p></div>
          <div className="bg-[#1d1d1d] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative rounded-[23px]" data-node-id="541:3987" data-name="Sep 5"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="541:3988">5</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3989" data-name="Sep 6"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:3990">6</p></div>
        </div>
        <div className="content-stretch flex items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="541:3991" data-name="Week 2">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3992" data-name="Sep 7"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3993">7</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3994" data-name="Sep 8"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3995">8</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3996" data-name="Sep 9"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3997">9</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:3998" data-name="Sep 10"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:3999">10</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4000" data-name="Sep 11"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4001">11</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4002" data-name="Sep 12"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4003">12</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4004" data-name="Sep 13"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4005">13</p></div>
        </div>
        <div className="content-stretch flex items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="541:4006" data-name="Week 3">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4007" data-name="Sep 14"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4008">14</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4009" data-name="Sep 15"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4010">15</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4011" data-name="Sep 16"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4012">16</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4013" data-name="Sep 17"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4014">17</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4015" data-name="Sep 18"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4016">18</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4017" data-name="Sep 19"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4018">19</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4019" data-name="Sep 20"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4020">20</p></div>
        </div>
        <div className="content-stretch flex items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="541:4021" data-name="Week 4">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4022" data-name="Sep 21"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4023">21</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4024" data-name="Sep 22"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4025">22</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4026" data-name="Sep 23"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4027">23</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4028" data-name="Sep 24"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4029">24</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4030" data-name="Sep 25"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4031">25</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4032" data-name="Sep 26"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4033">26</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4034" data-name="Sep 27"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4035">27</p></div>
        </div>
        <div className="content-stretch flex items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="541:4036" data-name="Week 5">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4037" data-name="Sep 28"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4038">28</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4039" data-name="Sep 29"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4040">29</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4041" data-name="Sep 30"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4042">30</p></div>
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4043" data-name="—" />
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4044" data-name="—" />
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4045" data-name="—" />
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4046" data-name="—" />
        </div>
        <div className="content-stretch flex items-start overflow-clip pt-[24px] px-[16px] relative shrink-0 w-full" data-node-id="541:4047" data-name="October label">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="541:4048">October 2026</p>
        </div>
        <div className="content-stretch flex items-start overflow-clip pt-[8px] px-[16px] relative shrink-0 w-full" data-node-id="541:4049" data-name="Oct week 1">
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4050" data-name="—" />
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4051" data-name="—" />
          <div className="flex-[1_0_0] h-[52px] min-w-px relative" data-node-id="541:4052" data-name="—" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4053" data-name="Oct 1"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4054">1</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4055" data-name="Oct 2"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center whitespace-nowrap" data-node-id="541:4056">2</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4057" data-name="Oct 3"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4058">3</p></div>
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[14px] relative" data-node-id="541:4059" data-name="Oct 4"><p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#d63031] text-[16px] text-center whitespace-nowrap" data-node-id="541:4060">4</p></div>
        </div>
      </div>
    </div>
  );
}
