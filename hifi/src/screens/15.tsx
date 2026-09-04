const imgGlyph = "assets/cc525b8e-7104-4a98-b303-702ba7664fc0.svg";
const imgIconChevronLeft = "assets/089a1576-2ca8-4be9-b7e8-f30094a7a46a.svg";
const imgStatusIcons = "assets/bf9d88d7-1bcb-40f1-ad66-590c8c6d5c3f.svg";

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

type RowFareProps = {
  className?: string;
  label?: string;
  value?: string;
};

function RowFare({ className, label = "Onward", value = "₹1,599" }: RowFareProps) {
  return (
    <div className={className || '[word-break:break-word] content-stretch flex font-["Inter:Regular"] font-normal items-center justify-between leading-[20px] not-italic overflow-clip py-[4px] relative text-[14px] text-[color:var(--text\\/secondary,#636363)] w-[326px] whitespace-nowrap'} data-node-id="102:805" data-name="Row / Fare">
      <p className="relative shrink-0" data-node-id="102:803">
        {label}
      </p>
      <p className="relative shrink-0" data-node-id="102:804">
        {value}
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

export default function Component15ConfirmTheMove() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="137:1363" data-name="15 · Confirm the move">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="137:1364" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="137:1365" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I137:1365;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I137:1365;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="137:1366" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I137:1366;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I137:1366;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I137:1366;34:91">
              Confirm date change
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I137:1366;34:92">
              Nainital → Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px pb-[24px] pt-[13px] px-[16px] relative w-full" data-node-id="137:1388" data-name="Content">
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="137:1389" data-name="Swap">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-[color:var(--text\/tertiary,#767680)] w-full" data-node-id="137:1390" data-name="Leg">
            <p className="font-['Inter:Medium'] font-medium leading-[16px] relative shrink-0 text-[11px] w-full" data-node-id="137:1391">
              From
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="137:1392">
              Wed, 16 Sep · 23:55
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] w-full" data-node-id="137:1393">
              Seat U5 · ₹1,090
            </p>
          </div>
          <div className="content-stretch flex items-start py-[8px] relative shrink-0" data-node-id="137:1394" data-name="Arrow">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/tertiary,#767680)] whitespace-nowrap" data-node-id="137:1395">
              ↓
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-node-id="137:1396" data-name="Leg">
            <p className="font-['Inter:Medium'] font-medium leading-[16px] relative shrink-0 text-[11px] text-[color:var(--text\/tertiary,#767680)] w-full" data-node-id="137:1397">
              To
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full" data-node-id="137:1398">
              Tue, 15 Sep · 23:55
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="137:1399">
              Seat U4 · ₹1,060
            </p>
          </div>
          <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-node-id="137:1400" data-name="Change seat">
            <div className="content-stretch flex h-[44px] items-center justify-center overflow-clip pr-[10px] relative shrink-0" data-node-id="137:1401" data-name="Button / Text action">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I137:1401;97:644">
                Change seat
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.07),0px_2px_3px_rgba(0,0,0,0.05)] flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="137:1403" data-name="Fare">
          <RowFare className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[20px] not-italic overflow-clip py-[4px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full whitespace-nowrap" label="Change fee" value="₹0" />
          <RowFare className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[20px] not-italic overflow-clip py-[4px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] w-full whitespace-nowrap" label="Price difference" value="₹30 less — no refund" />
          <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-node-id="137:1411" data-name="gap">
            <div className="bg-[var(--border\/divider,#e6e6e6)] h-px relative shrink-0 w-full" data-node-id="137:1410" data-name="Divider" />
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[18px] not-italic overflow-clip py-[4px] relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="137:1412" data-name="Row / Fare">
            <p className="relative shrink-0" data-node-id="I137:1412;102:803">
              You pay now
            </p>
            <p className="relative shrink-0" data-node-id="I137:1412;102:804">
              ₹0
            </p>
          </div>
        </div>
        <div className="bg-[#f5dcce] content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[10px] shrink-0 w-full" data-node-id="372:3106" data-name="Note">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a3a2a] text-[14px] w-full" data-node-id="372:3107">
            Note: Once you confirm, this ticket cannot be cancelled or changed again. A cheaper day is not refunded.
          </p>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex gap-[16px] items-center pb-[31px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="137:1423" data-name="Action bar">
        <div className="content-stretch flex h-[44px] items-center justify-center overflow-clip pl-[4px] pr-[10px] relative shrink-0" data-node-id="227:1786" data-name="Button / Text action">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I227:1786;97:644">
            Go back
          </p>
        </div>
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Confirm change" showIcon={false} />
      </div>
    </div>
  );
}
