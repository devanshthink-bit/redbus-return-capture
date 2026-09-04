const imgButtonAppleWallet = "assets/659c7bb8-9409-4f1d-b898-52b40a84583f.png";
const imgIconInfo = "assets/1fdfa7c9-d103-4495-bc2c-f6b058ff57ef.svg";
const imgArtSunburst = "assets/01e0f6b4-662f-4690-b432-910730615cf3.svg";
const imgFrame = "assets/c5419b2e-7977-459a-acdc-4614635f0d6e.svg";
const imgArtSeatGuarantee = "assets/3261565a-7041-41ed-ad37-ce3e63674d9a.svg";
const imgButtonShare = "assets/558e3462-c687-46b7-83db-6b403887b714.svg";
const imgButtonSupport = "assets/706d4bea-9333-4123-a98c-9a42f24c0a8c.svg";
const imgButtonClose = "assets/81890823-36d2-4ecf-9cd5-bf7bf13f4b0f.svg";
const imgStatusIcons = "assets/698f1e5e-6438-4ef2-a4b2-eb0a238e955a.svg";
const imgMarker = "assets/6280aa85-f461-44e4-9003-fd9bae23d7bd.svg";
const imgMarker1 = "assets/0fe5f521-57cd-4fcb-a648-995e3f7228ef.svg";
const imgDashes = "assets/8849d02a-2d02-4ed6-8c36-a95bc7bb0916.svg";
const imgNotch = "assets/70f3dac5-525f-4be5-93af-b2bfddace60f.svg";
const imgGlyph = "assets/edce27a9-3c0c-4a11-9460-bdf39d04e716.svg";

function ButtonAppleWallet({ className }: { className?: string }) {
  return (
    <div className={className || "h-[53.33px] relative w-[370px]"} data-node-id="121:1330" data-name="Button / Apple Wallet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgButtonAppleWallet} />
    </div>
  );
}

function IconInfo({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[26.67px]"} data-node-id="121:1329" data-name="Icon / Info">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfo} />
    </div>
  );
}

function ArtSeatGuarantee({ className }: { className?: string }) {
  return (
    <div className={className || "bg-gradient-to-r from-[#a3e4ad] h-[44.67px] overflow-clip relative to-[#d7f2da] w-[402px]"} data-node-id="121:1325" data-name="Art / Seat Guarantee">
      <div className="absolute right-[-80px] size-[230px] top-[-100px]" data-node-id="289:2611" data-name="Art / Sunburst">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSunburst} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[20px] left-[16px] not-italic text-[16px] text-[color:var(--text\/primary,#1d1d1d)] top-[calc(50%-13px)] whitespace-nowrap" data-node-id="289:2634">
        Seat Guarantee with redBus
      </p>
      <div className="-translate-y-1/2 absolute right-[16px] size-[30px] top-[calc(50%-2px)]" data-node-id="289:2635" data-name="Frame">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArtSeatGuarantee} />
    </div>
  );
}

function ButtonShare({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1328" data-name="Button / Share">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonShare} />
    </div>
  );
}

function ButtonSupport({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1327" data-name="Button / Support">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonSupport} />
    </div>
  );
}

function ButtonClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1326" data-name="Button / Close">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonClose} />
    </div>
  );
}

export default function Component11TicketDetails() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="127:1300" data-name="11 · Ticket details">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="127:1301" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="127:1302" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I127:1302;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I127:1302;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="127:1315" data-name="Nav">
          <ButtonClose className="-translate-y-1/2 absolute left-[12px] size-[44px] top-1/2" />
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[200px]" data-node-id="127:1317" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="127:1318">
              Ticket details
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="127:1319">
              Ticket #TV9Q92193734
            </p>
          </div>
          <ButtonSupport className="-translate-y-1/2 absolute right-[64px] size-[44px] top-1/2" />
          <ButtonShare className="-translate-y-1/2 absolute right-[12px] size-[44px] top-1/2" />
        </div>
      </div>
      <ArtSeatGuarantee className="bg-gradient-to-r from-[#a3e4ad] h-[43.337px] overflow-clip relative shrink-0 to-[#d7f2da] w-[390px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="127:1323" data-name="Content">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="127:1324" data-name="Return ticket">
          <div className="bg-[var(--surface\/accent,#c54646)] content-stretch flex flex-col items-start overflow-clip pl-[16px] pr-[18px] py-[18px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="I127:1324;113:1008" data-name="Journey">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I127:1324;113:1009" data-name="From">
              <div className="relative shrink-0 size-[22px]" data-node-id="I127:1324;113:1010" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I127:1324;113:1013" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I127:1324;113:1014">
                  Nainital
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I127:1324;113:1015">
                  Nainital Bus Stand
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I127:1324;113:1016" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I127:1324;113:1017">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I127:1324;113:1018">
                  Mon, 14 Sep
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center pl-[22px] py-[14px] relative shrink-0 w-full" data-node-id="I127:1324;113:1019" data-name="Duration">
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I127:1324;113:1020" data-name="Rule" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic opacity-95 relative shrink-0 text-[16px] text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I127:1324;113:1021">
                8h 5m
              </p>
              <div className="bg-[rgba(255,255,255,0.45)] flex-[1_0_0] h-px min-w-px relative" data-node-id="I127:1324;113:1022" data-name="Rule" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I127:1324;113:1023" data-name="To">
              <div className="relative shrink-0 size-[22px]" data-node-id="I127:1324;113:1024" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker1} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I127:1324;113:1027" data-name="Place">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I127:1324;113:1028">
                  Delhi
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[22px] opacity-85 relative shrink-0 text-[16px]" data-node-id="I127:1324;113:1029">
                  ISBT Kashmiri Gate
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end not-italic relative shrink-0 text-[color:var(--text\/on-accent,white)] whitespace-nowrap" data-node-id="I127:1324;113:1030" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px]" data-node-id="I127:1324;113:1031">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] opacity-90 relative shrink-0 text-[14px]" data-node-id="I127:1324;113:1032">
                  Tue, 15 Sep
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-node-id="I127:1324;113:1033" data-name="Passenger">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I127:1324;113:1034" data-name="Text">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px]" data-node-id="I127:1324;113:1035">
                LAXMI HOLIDAYS PVT LTD
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px]" data-node-id="I127:1324;113:1036">
                Devansh Somvanshi
              </p>
            </div>
            <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[var(--radius\/8,8px)] shrink-0" data-node-id="I127:1324;113:1037" data-name="Seat badge">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] whitespace-nowrap" data-node-id="I127:1324;113:1038">
                U2
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center pb-[18px] pt-[4px] relative shrink-0 w-full" data-node-id="I127:1324;126:1296" data-name="Tear off">
            <div className="h-[22px] relative shrink-0 w-full" data-node-id="I127:1324;126:1297" data-name="Perforation">
              <div className="absolute h-0 left-[24px] top-[11px] w-[310px]" data-node-id="I127:1324;126:1298" data-name="Dashes">
                <div className="absolute inset-[-1.5px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgDashes} />
                </div>
              </div>
              <div className="absolute left-[-11px] size-[22px] top-0" data-node-id="I127:1324;126:1299" data-name="Notch">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
              </div>
              <div className="absolute left-[347px] size-[22px] top-0" data-node-id="I127:1324;126:1300" data-name="Notch">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotch} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)] text-center w-full" data-node-id="I127:1324;126:1301">
              Ticket details
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-center w-[min-content]" data-node-id="127:1362">
          Bus number and tracking details will be shared on the day of journey on +*********499
        </p>
        <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/subtle,#e4e4e4)] border-solid content-stretch flex gap-[14px] items-center p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="127:1363" data-name="Change trip details">
          <IconInfo className="relative shrink-0 size-[26.67px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="127:1365" data-name="Text">
            <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] underline" data-node-id="127:1366">
              Change trip details
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)]" data-node-id="127:1367">
              Boarding and dropping point
            </p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="127:1368" data-name="Icon / Chevron Right">
            <div className="absolute left-0 size-[20px] top-0" data-node-id="I127:1368;116:1172" data-name="glyph">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex gap-[12px] items-center p-[16px] relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="127:1371" data-name="Change day">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="I127:1371;116:1175" data-name="Text">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Bold'] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-[min-content]" data-node-id="I127:1371;116:1176">
              <p className="leading-[22px]">Change your return day</p>
            </a>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] min-w-full not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-[min-content]" data-node-id="I127:1371;116:1177">
              Any date, earlier or later. Pay only the price difference.
            </p>
            <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[var(--radius\/4,4px)] shrink-0" data-node-id="I127:1371;116:1178" data-name="Balance">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="I127:1371;116:1179">
                1 change left
              </p>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I127:1371;116:1180" data-name="Icon / Chevron Right">
            <div className="absolute left-0 size-[20px] top-0" data-node-id="I127:1371;116:1180;116:1172" data-name="glyph">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
            </div>
          </div>
        </div>
        <ButtonAppleWallet className="h-[51.6px] relative shrink-0 w-[358px]" />
      </div>
    </div>
  );
}
