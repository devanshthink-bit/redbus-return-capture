const imgLogoRedBusMark = "assets/24678315-8076-42a5-adf4-048efb56feb5.png";
const imgIconBus = "assets/1ab58a8d-210f-4036-a41c-53d5ebb0f374.svg";
const imgArtWallet = "assets/009cfb72-a2f3-43f5-a4a0-31a90cb5463f.png";
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
const imgStatusIcons = "assets/6760601c-76c5-45ee-b3ce-7cea22ce0518.svg";
const imgIcon = "assets/022ac74d-2b00-43d7-8f6f-5554dc8d5d22.svg";
const imgArrows = "assets/cb00b3f2-7707-4c55-8a7f-5064aa651dc5.svg";
const imgGlyph = "assets/0a7fcc88-a71e-4188-a701-8611a8813150.svg";
const imgArtSunburst = "assets/6936741a-edef-4ffe-a7ac-4d9933cd5625.svg";
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
const imgIconStarFilled = "assets/ca8eb380-a72d-4125-abaf-21a890f26e4f.svg";
const imgIcon1 = "assets/ba7cc76c-5b9f-4a28-8509-31170dbcd9d8.svg";
const imgIcon2 = "assets/ffe46d02-6e9d-493d-9f48-df1978e85067.svg";
const imgIcon3 = "assets/c9425971-3686-465e-bb0c-4040d86af53b.svg";
const imgIcon4 = "assets/1dcba43d-fde6-40a0-aea7-d0ca17f3d5f8.svg";
const imgIcon5 = "assets/b6e22c1a-6c8a-4ca1-a0ce-a0798c163427.svg";

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

export default function Component01Home() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="14:6" data-name="01 · Home">
      <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] flex flex-col items-start relative shrink-0 w-full" data-node-id="14:7" data-name="Sticky header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="14:8" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I14:8;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I14:8;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip pb-[14px] pt-[5px] px-[24px] relative shrink-0 w-full" data-node-id="14:21" data-name="Category strip">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="14:22" data-name="Category Tile">
            <ArtTileBus className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I14:22;14:4">
              Bus Tickets
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="14:25" data-name="Category Tile">
            <ArtTileTrain className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I14:25;14:4">
              Train Tickets
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="14:28" data-name="Category Tile">
            <ArtTileHotels className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I14:28;14:4">
              Hotels
            </p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[79px]" data-node-id="14:31" data-name="Category Tile">
            <ArtTileMetro className="h-[48px] relative shrink-0 w-[72px]" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="I14:31;14:4">
              Metro Tickets
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" data-node-id="164:1446" data-name="Top block">
        <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="16:36" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(252, 242, 241) 34%, rgb(249, 236, 235) 80%, rgb(207, 160, 166) 100%)" }} data-name="Search section">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[34px] not-italic relative shrink-0 text-[26px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="16:37">
            Bus Tickets
          </p>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex flex-col items-start relative rounded-[var(--radius\/6,6px)] shrink-0 w-full" data-node-id="16:38" data-name="Search card">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="16:39" data-name="Search / Row">
              <IconBus className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I16:39;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I16:39;16:28">
                  From
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I16:39;16:29">
                  ISBT Kashmiri Gate, Delhi
                </p>
              </div>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="16:49" data-name="Divider" />
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[10px] relative shrink-0 w-full" data-node-id="16:50" data-name="Search / Row">
              <IconBus className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I16:50;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I16:50;16:28">
                  To
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I16:50;16:29">
                  Nainital
                </p>
              </div>
            </div>
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="16:60" data-name="Divider" />
            <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[9px] relative shrink-0 w-full" data-node-id="16:61" data-name="Search / Row">
              <div className="relative shrink-0 size-[24px]" data-node-id="I16:61;16:26" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-node-id="I16:61;16:27" data-name="Text">
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="I16:61;16:28">
                  Date of journey
                </p>
                <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="I16:61;16:29">
                  Thu 10 Sep
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I16:61;16:30" data-name="Trailing">
                <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[38px] items-center justify-center px-[12px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I16:61;16:31" data-name="Chip / Quick date">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I16:61;16:31;16:23">
                    Today
                  </p>
                </div>
                <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[38px] items-center justify-center px-[12px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I16:61;16:33" data-name="Chip / Quick date">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I16:61;16:33;16:23">
                    Tomorrow
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--colour\/neutral\/800,#4a4a4a)] right-[7px] rounded-[var(--radius\/full,999px)] size-[40px] top-[37px]" data-node-id="16:71" data-name="Swap">
              <div className="absolute left-0 size-[40px] top-0" data-node-id="I16:71;23:62" data-name="Arrows">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrows} />
              </div>
            </div>
          </div>
          <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex gap-[13px] items-center pl-[20px] pr-[13px] py-[10px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="18:55" data-name="Booking for women card">
            <ArtAvatarWomen className="h-[34.67px] relative shrink-0 w-[27.33px]" />
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="18:57" data-name="Text">
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="18:58">
                Booking for women
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/link,#0000e4)]" data-node-id="18:59">
                Know more
              </p>
            </div>
            <div className="bg-[var(--surface\/control-off,#c5c5c7)] h-[27px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-[63px]" data-node-id="18:60" data-name="Toggle / iOS">
              <div className="absolute bg-[var(--surface\/default,white)] h-[23px] left-[2px] rounded-[var(--radius\/full,999px)] top-[2px] w-[37px]" data-node-id="I18:60;18:46" data-name="Knob" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="18:62" data-name="CTA">
            <a className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[46px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" data-node-id="18:63" data-name="Button / Primary">
              <div className="relative shrink-0 size-[20px]" data-node-id="I18:63;18:49" data-name="Icon">
                <div className="absolute left-0 size-[20px] top-0" data-node-id="I18:63;18:49;13:16" data-name="glyph">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] text-left whitespace-nowrap" data-node-id="I18:63;18:53">
                Search buses
              </p>
            </a>
          </div>
        </div>
        <div className="h-[126px] relative shrink-0 w-full" data-node-id="164:1447" data-name="Festive banner">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFestiveBanner} />
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[31px] relative shrink-0 w-full" data-node-id="20:56" data-name="Offers section">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between not-italic pb-[10px] pl-[16px] pr-[36px] relative shrink-0 w-full whitespace-nowrap" data-node-id="20:57" data-name="Section header">
          <p className="leading-[26px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="20:58">
            Offers
          </p>
          <p className="leading-[18px] relative shrink-0 text-[14px] text-[color:var(--text\/link,#0000e4)]" data-node-id="20:59">
            View all
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="20:60" data-name="Filter chips">
          <div className="bg-[var(--surface\/accent-subtle,#f4dad8)] content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="20:61" data-name="Chip / Filter">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I20:61;20:54">
              All
            </p>
          </div>
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" />
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" label="Train" />
          <ChipFilter className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[30px] items-center justify-center px-[12px] relative rounded-[var(--radius\/10,10px)] shrink-0" label="Hotel" />
        </div>
        <div className="content-stretch flex gap-[12px] h-[198px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="20:70" data-name="Offer cards row">
          <div className="h-full overflow-clip relative rounded-[14px] shrink-0 w-[300px]" data-node-id="277:2413" style={{ backgroundImage: "linear-gradient(138.65222348601043deg, rgb(251, 245, 235) 0%, rgb(242, 219, 199) 71.429%)" }} data-name="Card / Offer">
            <div className="absolute right-[-110px] size-[300px] top-[-40px]" data-node-id="277:2414" data-name="Art / Sunburst">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
            </div>
            <div className="absolute bottom-[16px] h-[50px] right-[14px] w-[148px]" data-node-id="277:2437" data-name="Art / Coupon ticket">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCouponTicket} />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] inset-0 items-start overflow-clip p-[14px]" data-node-id="277:2438" data-name="Body">
              <div className="bg-[rgba(255,255,255,0.75)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="277:2439" data-name="Tag">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="277:2440">
                  Bus
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="277:2441">
                Save up to Rs 300 on bus tickets
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="277:2442">
                Valid till 23 Sep 2026
              </p>
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="277:2443" data-name="Frame" />
              <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip pl-[12px] pr-[18px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="277:2444" data-name="Code">
                <div className="relative shrink-0 size-[18px]" data-node-id="277:2445" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="277:2448">
                  FESTIVE300
                </p>
              </div>
            </div>
          </div>
          <div className="h-full overflow-clip relative rounded-[14px] shrink-0 w-[300px]" data-node-id="277:2449" style={{ backgroundImage: "linear-gradient(138.65222348601043deg, rgb(251, 245, 235) 0%, rgb(242, 219, 199) 71.429%)" }} data-name="Card / Offer">
            <div className="absolute right-[-110px] size-[300px] top-[-40px]" data-node-id="277:2450" data-name="Art / Sunburst">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
            </div>
            <div className="absolute bottom-[16px] h-[50px] right-[14px] w-[148px]" data-node-id="277:2473" data-name="Art / Coupon ticket">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCouponTicket} />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] inset-0 items-start overflow-clip p-[14px]" data-node-id="277:2474" data-name="Body">
              <div className="bg-[rgba(255,255,255,0.75)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="277:2475" data-name="Tag">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="277:2476">
                  Bus
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="277:2477">
                Save up to Rs 250 on credit card
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="277:2478">
                Valid till 10 Oct 2026
              </p>
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="277:2479" data-name="Frame" />
              <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip pl-[12px] pr-[18px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="277:2480" data-name="Code">
                <div className="relative shrink-0 size-[18px]" data-node-id="277:2481" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="277:2484">
                  HDFC250
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[7px] items-center justify-center overflow-clip pt-[9px] relative shrink-0 w-full" data-node-id="165:1445" data-name="Pager">
          <div className="bg-[#c44447] content-stretch flex items-start overflow-clip px-[10px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="165:1446" data-name="Count">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[15px] not-italic relative shrink-0 text-[11px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="165:1447">
              1 / 51
            </p>
          </div>
          <div className="relative shrink-0 size-[5px]" data-node-id="165:1448" data-name="Dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
          </div>
          <div className="relative shrink-0 size-[3px]" data-node-id="165:1449" data-name="Dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
          </div>
          <div className="relative shrink-0 size-[3px]" data-node-id="165:1450" data-name="Dot">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="168:1444" data-name="Wallet">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[14.4px] px-[16px] relative shrink-0 w-full" data-node-id="168:1445" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="168:1446">
            Wallet
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="271:2405" data-name="wallet_card">
          <div className="bg-white border border-[#ededf2] border-solid content-stretch flex flex-col gap-[6px] items-start overflow-clip pb-[14px] relative rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="271:2406" data-name="Card">
            <div className="content-stretch flex items-start overflow-clip pt-[14px] px-[16px] relative shrink-0 w-full" data-node-id="271:2407" data-name="Top">
              <div className="h-[40px] relative shrink-0 w-[44px]" data-node-id="271:2410" data-name="Icon slot">
                <div className="absolute left-[-34px] size-[120px] top-[-42px]" data-node-id="271:2408" data-name="Blob">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBlob} />
                </div>
                <ArtWallet className="absolute left-0 size-[34px] top-[2px]" />
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="271:2411" data-name="Frame" />
              <div className="bg-[#f2f1f7] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="271:2412" data-name="Pill">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="271:2413">
                  Expires on 30 Sep, 2026
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic overflow-clip pb-[16px] pt-[8px] px-[16px] relative shrink-0 w-full" data-node-id="271:2414" data-name="Body">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="271:2415">
                <span className="leading-[26px] text-[#1b8a37]">₹100</span>
                <span className="leading-[26px]">{` in your wallet`}</span>
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[0px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="271:2416">
                <span className="leading-[22px] text-[16px]">{`Plan your trip before `}</span>
                <span className="font-['Inter:Bold'] font-bold leading-[22px] text-[#1d1d1d] text-[16px]">30 Sep</span>
                <span className="leading-[22px] text-[16px]">{` to avoid losing your money.`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[19.9px] relative shrink-0 w-full" data-node-id="168:1448" data-name="Previously Viewed">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[10.8px] px-[16px] relative shrink-0 w-full" data-node-id="168:1449" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="168:1450">
            Previously Viewed
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[6px] px-[16px] relative shrink-0 w-full" data-node-id="271:2417" data-name="prevviewed">
          <div className="bg-white border border-[#ededf2] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[16px] py-[14px] relative rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="271:2418" data-name="Card">
            <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="271:2419" data-name="Top">
              <LogoRedBusMark className="h-[23px] relative shrink-0 w-[36px]" />
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="271:2421" data-name="Frame" />
              <div className="bg-[#e8e9f3] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-node-id="271:2422" data-name="Pill">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="271:2423">
                  1 Bus viewed
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip relative shrink-0 text-[16px] w-full" data-node-id="271:2424" data-name="Route">
              <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-pre-wrap" data-node-id="271:2425">{`Gurugram (Gurgaon)  →  Delhi`}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="271:2426">
                Sat 5 Sep 2026
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[18.8px] relative shrink-0 w-full" data-node-id="168:1452" data-name="Book trains">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="273:2405" data-name="booktrains">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="273:2406" data-name="Heading">
            <div className="h-[39px] relative shrink-0 w-[40px]" data-node-id="273:2407" data-name="Art / Train">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtTrain} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic overflow-clip relative" data-node-id="273:2408" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="273:2409">
                Book trains for festivals
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="273:2410">
                Book now to get confirmed ticket
              </p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[14px] items-center overflow-clip pb-[14px] pt-[16px] px-[14px] relative rounded-[16px] shrink-0 w-full" data-node-id="273:2411" data-name="Panel">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="273:2412">
              <span className="leading-[22px] text-[16px]">{`Get ₹300 off using code `}</span>
              <span className="font-['Inter:Bold'] font-bold leading-[22px] text-[#1b8a37] text-[16px]">REDRAILNEW</span>
            </p>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="273:2413" data-name="Festival dates">
              <div className="flex-[1_0_0] h-[62px] min-w-px relative" data-node-id="273:2414" data-name="Date card Sep">
                <div className="[word-break:break-word] absolute bg-white border-[#c57c9e] border-[1.4px] border-solid content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-px h-[56px] items-center justify-center left-0 not-italic overflow-clip py-[8px] right-0 rounded-[10px] top-[6px] whitespace-nowrap" data-node-id="273:2415" data-name="Card">
                  <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="273:2416">
                    Sep
                  </p>
                  <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="273:2417">
                    Janmashtami
                  </p>
                </div>
                <div className="absolute h-[7px] left-[27.8%] right-[67.8%] top-[3px]" data-node-id="273:2418" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <div className="absolute bg-[#9e9ea6] h-[7px] left-[29.37%] right-[69.37%] top-px" data-node-id="273:2419" data-name="Rectangle" />
                <div className="absolute h-[7px] left-[67.8%] right-[27.8%] top-[3px]" data-node-id="273:2420" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <div className="absolute bg-[#9e9ea6] h-[7px] left-[69.37%] right-[29.37%] top-px" data-node-id="273:2421" data-name="Rectangle" />
              </div>
              <div className="flex-[1_0_0] h-[62px] min-w-px relative" data-node-id="273:2422" data-name="Date card Oct">
                <div className="[word-break:break-word] absolute bg-white border-[#5566d9] border-[1.4px] border-solid content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-px h-[56px] items-center justify-center left-0 not-italic overflow-clip py-[8px] right-0 rounded-[10px] top-[6px] whitespace-nowrap" data-node-id="273:2423" data-name="Card">
                  <p className="leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="273:2424">
                    Oct
                  </p>
                  <p className="leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="273:2425">
                    Dussehra
                  </p>
                </div>
                <div className="absolute h-[7px] left-[27.8%] right-[67.8%] top-[3px]" data-node-id="273:2426" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <div className="absolute bg-[#9e9ea6] h-[7px] left-[29.37%] right-[69.37%] top-px" data-node-id="273:2427" data-name="Rectangle" />
                <div className="absolute h-[7px] left-[67.8%] right-[27.8%] top-[3px]" data-node-id="273:2428" data-name="Ellipse">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                </div>
                <div className="absolute bg-[#9e9ea6] h-[7px] left-[69.37%] right-[29.37%] top-px" data-node-id="273:2429" data-name="Rectangle" />
              </div>
            </div>
            <div className="bg-[#f2d9d5] content-stretch flex gap-[8px] items-center justify-center overflow-clip py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="273:2430" data-name="Book trains now">
              <IconBus className="relative shrink-0 size-[20px]" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="273:2438">
                Book trains now
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] text-center w-full" data-node-id="273:2439">
              Authorised IRCTC partner
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[10.2px] relative shrink-0 w-full" data-node-id="168:1454" data-name="Coupon creator">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="281:2457" data-name="coupon">
          <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f9eacd] gap-[10px] items-center overflow-clip pb-[16px] pt-[14px] px-[16px] relative rounded-[20px] shrink-0 to-[#edc364] w-full" data-node-id="281:2458" data-name="Card / Coupon creator">
            <div className="h-[90px] relative shrink-0 w-[182px]" data-node-id="281:2459" data-name="Art / Coupon Creator">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtCouponCreator} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="281:2460">
              Create personalised coupon for your guests at zero cost
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="281:2461">
              Save upto ₹400
            </p>
            <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[13px] relative rounded-[999px] shrink-0 w-full" data-node-id="281:2462" data-name="CTA">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-pre" data-node-id="281:2463">{`Create personalised coupon  →`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[11.4px] relative shrink-0 w-full" data-node-id="168:1456" data-name="Gift">
        <div className="bg-gradient-to-r content-stretch flex flex-col from-[#e0b0ca] gap-[8px] items-center overflow-clip pb-[26px] pt-[34px] px-[20px] relative shrink-0 to-[#ecd1c0] via-1/2 via-[#f6ece5] w-full" data-node-id="281:2464" data-name="gift">
          <div className="h-[72px] relative shrink-0 w-[78px]" data-node-id="281:2465" data-name="Art / Gift box">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArtGiftBox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="281:2466">
            We have an exclusive gift for you
          </p>
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-[min-content]" data-node-id="281:2467">
            Thank you for being our loyal customer
          </p>
          <div className="bg-white content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[999px] shrink-0 w-full" data-node-id="281:2468" data-name="CTA">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="281:2469">
              View your gift
            </p>
          </div>
          <div className="absolute h-[14px] left-0 overflow-clip right-0 top-0" data-node-id="281:2470" data-name="Scallop">
            <div className="absolute inset-[0_0_14.29%_0]" data-node-id="281:2471" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[26.2px] relative shrink-0 w-full" data-node-id="168:1458" data-name="Hotels">
        <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-node-id="280:2457" data-name="hotels">
          <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="280:2458" data-name="Heading">
            <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0] left-1/2 not-italic text-[18px] text-[color:var(--text\/primary,#1d1d1d)] text-center top-[6px] w-[270px]" data-node-id="280:2459">
              <p className="mb-0">
                <span className="leading-[24px]">{`Book hotels from `}</span>
                <span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">₹399</span>
              </p>
              <p className="leading-[24px]">Only on redBus</p>
            </div>
            <div className="absolute left-[18px] size-[17px] top-[26px]" data-node-id="280:2460" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <div className="absolute left-[40px] size-[11px] top-[8px]" data-node-id="280:2462" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
            </div>
            <div className="absolute left-[342px] size-[18px] top-[14px]" data-node-id="280:2464" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
            </div>
            <div className="absolute left-[322px] size-[11px] top-[40px]" data-node-id="280:2466" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
            </div>
            <div className="absolute left-[360px] size-[9px] top-[42px]" data-node-id="280:2468" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} />
            </div>
          </div>
          <div className="content-stretch flex gap-[18px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="280:2470" data-name="Rooms">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 w-[118px]" data-node-id="280:2471" data-name="Card / Room">
              <div className="h-[107px] relative shrink-0 w-full" data-node-id="280:2472" data-name="Photo">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto} />
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[6px] items-center justify-center leading-[20px] not-italic overflow-clip pb-[10px] pt-[9px] relative shrink-0 w-full whitespace-nowrap" data-node-id="280:2473" data-name="Price">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="280:2474">
                  ₹999
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Regular'] font-normal line-through relative shrink-0 text-[#c75933] text-[14px]" data-node-id="280:2475">
                  ₹1299
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 w-[118px]" data-node-id="280:2476" data-name="Card / Room">
              <div className="h-[107px] relative shrink-0 w-full" data-node-id="280:2477" data-name="Photo">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[6px] items-center justify-center leading-[20px] not-italic overflow-clip pb-[10px] pt-[9px] relative shrink-0 w-full whitespace-nowrap" data-node-id="280:2478" data-name="Price">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="280:2479">
                  ₹1299
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Regular'] font-normal line-through relative shrink-0 text-[#c75933] text-[14px]" data-node-id="280:2480">
                  ₹2299
                </p>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] shrink-0 w-[118px]" data-node-id="280:2481" data-name="Card / Room">
              <div className="h-[107px] relative shrink-0 w-full" data-node-id="280:2482" data-name="Photo">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto2} />
              </div>
              <div className="[word-break:break-word] content-stretch flex gap-[6px] items-center justify-center leading-[20px] not-italic overflow-clip pb-[10px] pt-[9px] relative shrink-0 w-full whitespace-nowrap" data-node-id="280:2483" data-name="Price">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="280:2484">
                  ₹399
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Regular'] font-normal line-through relative shrink-0 text-[#c75933] text-[14px]" data-node-id="280:2485">
                  ₹899
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="280:2486" data-name="CTA">
            <div className="bg-[#f2d9d5] content-stretch flex items-center justify-center overflow-clip py-[13px] relative rounded-[10px] shrink-0 w-full" data-node-id="280:2487" data-name="Book hotel now">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="280:2488">
                Book hotel now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[45.1px] relative shrink-0 w-full" data-node-id="168:1460" data-name="Previously Booked">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[9.1px] px-[16px] relative shrink-0 w-full" data-node-id="172:1445" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="172:1446">
            Previously Booked
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[6px] px-[16px] relative shrink-0 w-full" data-node-id="271:2427" data-name="prevbooked">
          <div className="bg-white border border-[#ededf2] border-solid content-stretch flex gap-[10px] items-center overflow-clip pl-[14px] pr-[18px] py-[12px] relative rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="271:2428" data-name="Card">
            <LogoRedBusMark className="h-[23px] relative shrink-0 w-[36px]" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-pre" data-node-id="271:2430">{`Goa  →  Pune`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pt-[24.7px] relative shrink-0 w-full" data-node-id="168:1462" data-name="Government Buses">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[19.8px] px-[16px] relative shrink-0 w-full" data-node-id="168:1463" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="168:1464">
            Government Buses
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-node-id="276:2411" data-name="govbuses">
          <div className="bg-white border border-[#ededf2] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shrink-0 w-[330px]" data-node-id="276:2412" data-name="Card / Operator">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[14px] relative shrink-0 w-full" data-node-id="276:2413" data-name="Header">
              <div className="relative shrink-0 size-[44px]" data-node-id="276:2414" data-name="Crest">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCrest} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="276:2415" data-name="Name">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="276:2416" data-name="Row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="276:2417">
                    APSRTC
                  </p>
                  <div className="bg-[#468443] content-stretch flex gap-[3px] items-center overflow-clip pl-[6px] pr-[7px] py-[3px] relative rounded-[5px] shrink-0" data-node-id="276:2418" data-name="Rating">
                    <div className="relative shrink-0 size-[12px]" data-node-id="276:2419" data-name="Icon / Star Filled">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStarFilled} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="276:2421">
                      3.9
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="276:2422">
                  ఆంధ్రప్రదేశ్ రాష్ట్ర రోడ్డు రవా…
                </p>
              </div>
            </div>
            <div className="bg-[#ededf2] h-px relative shrink-0 w-full" data-node-id="276:2423" data-name="Rectangle" />
            <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[14px] relative shrink-0 w-full" data-node-id="276:2424" data-name="Body">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="276:2425">
                1539 services including Garuda, Garuda Plus and more
              </p>
              <div className="bg-[#f2f1f7] content-stretch flex gap-[8px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="276:2426" data-name="Partner">
                <LogoRedBusMark className="h-[20px] relative shrink-0 w-[32px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="276:2428">
                  Official booking partner of APSRTC
                </p>
              </div>
            </div>
            <div className="bg-[#f2e8e7] content-stretch flex items-start justify-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="276:2429" data-name="Footer">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="276:2430">
                24*7 customer service (Call or chat)
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#ededf2] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shrink-0 w-[330px]" data-node-id="276:2431" data-name="Card / Operator">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[14px] relative shrink-0 w-full" data-node-id="276:2432" data-name="Header">
              <div className="relative shrink-0 size-[44px]" data-node-id="276:2433" data-name="Crest">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCrest1} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="276:2434" data-name="Name">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="276:2435" data-name="Row">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="276:2436">
                    GSRTC
                  </p>
                  <div className="bg-[#468443] content-stretch flex gap-[3px] items-center overflow-clip pl-[6px] pr-[7px] py-[3px] relative rounded-[5px] shrink-0" data-node-id="276:2437" data-name="Rating">
                    <div className="relative shrink-0 size-[12px]" data-node-id="276:2438" data-name="Icon / Star Filled">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconStarFilled} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="276:2440">
                      4.1
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="276:2441">
                  ગુજરાત રાજ્ય માર્ગ વાહન વ્યવહાર…
                </p>
              </div>
            </div>
            <div className="bg-[#ededf2] h-px relative shrink-0 w-full" data-node-id="276:2442" data-name="Rectangle" />
            <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip pb-[14px] pt-[16px] px-[14px] relative shrink-0 w-full" data-node-id="276:2443" data-name="Body">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center w-full" data-node-id="276:2444">
                1450 services including Volvo, Sleeper and more
              </p>
              <div className="bg-[#f2f1f7] content-stretch flex gap-[8px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="276:2445" data-name="Partner">
                <LogoRedBusMark className="h-[20px] relative shrink-0 w-[32px]" />
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[20px] min-w-px not-italic relative text-[14px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="276:2447">
                  Official booking partner of GSRTC
                </p>
              </div>
            </div>
            <div className="bg-[#f2e8e7] content-stretch flex items-start justify-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="276:2448" data-name="Footer">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="276:2449">
                24*7 customer service (Call or chat)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start pb-[118px] pt-[27.7px] relative shrink-0 w-full" data-node-id="168:1466" data-name="What's new">
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[12.6px] px-[16px] relative shrink-0 w-full" data-node-id="168:1467" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="168:1468">{`What's new`}</p>
        </div>
        <div className="h-[202.94px] relative shrink-0 w-full" data-node-id="168:1469" data-name="whatsnew">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[432.21%] left-0 max-w-none top-[-332.21%] w-full" src={imgWhatsnew} />
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.86)] bottom-0 content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.1)] flex h-[66px] items-center justify-between left-[20px] px-[14px] right-[20px] rounded-[var(--radius\/full,999px)]" data-node-id="24:89" data-name="Nav / Tab Bar">
        <div className="bg-[var(--surface\/selected,#ededed)] content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I24:89;24:73" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I24:89;24:73;24:68" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-selected,#bd3e3e)] text-center whitespace-nowrap" data-node-id="I24:89;24:73;24:69">
            Home
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I24:89;24:76" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I24:89;24:76;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I24:89;24:76;24:65">
            My Bookings
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I24:89;24:79" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I24:89;24:79;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I24:89;24:79;24:65">
            Offers
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I24:89;24:82" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I24:89;24:82;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I24:89;24:82;24:65">
            Help
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center px-[10px] py-[4px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="I24:89;24:85" data-name="Nav / Tab Item">
          <div className="relative shrink-0 size-[32px]" data-node-id="I24:89;24:85;24:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[13px] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/nav-default,#191919)] text-center whitespace-nowrap" data-node-id="I24:89;24:85;24:65">
            My Account
          </p>
        </div>
      </div>
    </div>
  );
}