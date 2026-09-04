const imgGlyph = "assets/a31b083e-5869-4520-873f-2e010402ad31.svg";
const imgIconChevronLeft = "assets/03f55826-396e-4e7d-a18b-c766df9374eb.svg";
const imgStatusIcons = "assets/5e782c3e-f5bf-4fcb-8797-0dcc6ea1cce7.svg";
const imgRadio = "assets/81f28444-20fa-47e9-aa7e-9ac80252d508.svg";

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

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function Component08BReturnPoints() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="423:3252" data-name="08b · Return points">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="423:3253" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="423:3254" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I423:3254;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I423:3254;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="423:3255" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I423:3255;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I423:3255;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I423:3255;34:91">{`Select board & drop points`}</p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I423:3255;34:92">
              Nainital → Delhi · Thu, 17 Sep
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[14px] items-start pb-[331px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="423:3256" data-name="Content">
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="423:3257" data-name="Boarding point in ISBT Kashmiri Gate, Delhi">
          <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex h-[43px] items-center overflow-clip px-[17px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="423:3258" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:3259">
              Boarding point in Nainital
            </p>
          </div>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="423:3260" data-name="Divider" />
          <div className="bg-gradient-to-r content-stretch flex from-[15%] from-white gap-[12px] items-start overflow-clip pb-[11px] pt-[7px] px-[16px] relative rounded-bl-[var(--radius\/16,16px)] rounded-br-[var(--radius\/16,16px)] shrink-0 to-[#f3e6e3] w-full" data-node-id="423:3261" data-name="Row / Boarding point">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic pt-[2px] relative shrink-0 w-[52px] whitespace-nowrap" data-node-id="I423:3261;65:233" data-name="When">
              <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I423:3261;65:234">
                23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="I423:3261;65:235">
                17 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-[217.3px]" data-node-id="I423:3261;65:236" data-name="Point">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] w-full" data-node-id="I423:3261;65:237">
                Nainital Bus Stand
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] w-full" data-node-id="I423:3261;65:238">
                Tallital, near the boat house
              </p>
            </div>
            <div className="-translate-y-1/2 absolute right-[16px] size-[25px] top-1/2" data-node-id="I423:3261;65:239" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start relative rounded-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="423:3262" data-name="Dropping point in Nainital">
          <div className="bg-[var(--surface\/panel,#fafafa)] content-stretch flex h-[43px] items-center overflow-clip px-[17px] relative rounded-tl-[var(--radius\/16,16px)] rounded-tr-[var(--radius\/16,16px)] shrink-0 w-full" data-node-id="423:3263" data-name="Card header">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="423:3264">
              Dropping point in Delhi
            </p>
          </div>
          <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="423:3265" data-name="Divider" />
          <div className="bg-gradient-to-r content-stretch flex from-[15%] from-white gap-[12px] items-start overflow-clip pb-[11px] pt-[7px] px-[16px] relative rounded-bl-[var(--radius\/16,16px)] rounded-br-[var(--radius\/16,16px)] shrink-0 to-[#f3e6e3] w-full" data-node-id="423:3266" data-name="Row / Boarding point">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic pt-[2px] relative shrink-0 w-[52px] whitespace-nowrap" data-node-id="I423:3266;65:233" data-name="When">
              <p className="font-['Inter:Bold'] font-bold leading-[20px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="I423:3266;65:234">
                08:00
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)]" data-node-id="I423:3266;65:235">
                18 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-[color:var(--text\/primary,#1d1d1d)] w-[217.3px]" data-node-id="I423:3266;65:236" data-name="Point">
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] w-full" data-node-id="I423:3266;65:237">
                ISBT Kashmiri Gate
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] w-full" data-node-id="I423:3266;65:238">
                Gate Number 4 — where you started
              </p>
            </div>
            <div className="-translate-y-1/2 absolute right-[16px] size-[25px] top-1/2" data-node-id="I423:3266;65:239" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t bottom-0 content-stretch flex flex-col items-start left-0 pb-[31px] pt-[20px] px-[16px] right-0" data-node-id="423:3267" data-name="Action bar">
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[10px] h-[48px] items-center justify-center px-[20px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-full" label="Proceed" showIcon={false} />
      </div>
    </div>
  );
}
