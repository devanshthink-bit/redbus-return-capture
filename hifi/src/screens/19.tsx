const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";

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

export default function Component19RefundDetails() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="784:4448" data-name="19 · Refund details">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="784:4449" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="784:4450" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I784:4450;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I784:4450;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="784:4451" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I784:4451;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I784:4451;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I784:4451;34:91">
              Refund details
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I784:4451;34:92">
              Ticket #TV9Q92193734
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px pb-[24px] pt-[13px] px-[16px] relative w-full" data-node-id="784:4452" data-name="Content">
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip pb-[14px] pt-[12px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="784:4546" data-name="Leg strip">
          <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] text-center w-full" data-node-id="784:4547">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="784:4548" data-name="Route row">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="784:4549" data-name="From">
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="784:4550">
                Wed, 16 Sep · 23:55
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4551">
                Nainital
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="784:4552">
              →
            </p>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end min-w-px overflow-clip relative text-right" data-node-id="784:4553" data-name="To">
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="784:4554">
                Thu, 17 Sep · 08:00
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4555">
                Delhi
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip pb-[16px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0 text-[#1d1d1d] w-full" data-node-id="784:4556" data-name="Seats to be cancelled">
          <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[15px] w-full" data-node-id="784:4557">
            Seats to be cancelled:
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] w-full" data-node-id="784:4558">
            U5 (Devansh Somvanshi)
          </p>
        </div>
        <div className="[word-break:break-word] bg-white content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[18px] relative rounded-[16px] shrink-0 w-full" data-node-id="784:4559" data-name="View cancellation policy">
          <p className="flex-[1_0_0] min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="784:4560">
            View cancellation policy
          </p>
          <p className="relative shrink-0 text-[#636363] text-[18px] whitespace-nowrap" data-node-id="784:4561">
            ›
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="784:4562" data-name="Refund breakup">
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[24px] not-italic overflow-clip p-[16px] relative shrink-0 text-white w-full" data-node-id="784:4563" data-name="Refund amount">
            <p className="flex-[1_0_0] min-w-px relative text-[17px]" data-node-id="784:4564">
              Refund amount
            </p>
            <p className="relative shrink-0 text-[19px] whitespace-nowrap" data-node-id="784:4565">
              ₹763.00
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4566" data-name="Row / Total Paid">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="784:4567">
              Total Paid
            </p>
            <p className="relative shrink-0 whitespace-nowrap" data-node-id="784:4568">
              ₹1,090.00
            </p>
          </div>
          <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-node-id="784:4569" data-name="Divider" />
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4570" data-name="Row / Total deductions">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="784:4571">
              Total deductions
            </p>
            <p className="relative shrink-0 whitespace-nowrap" data-node-id="784:4572">
              ₹327.00
            </p>
          </div>
          <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-node-id="784:4573" data-name="Divider" />
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="784:4574" data-name="Row / Cancellation Charges (incl GST)">
            <p className="flex-[1_0_0] min-w-px relative" data-node-id="784:4575">
              Cancellation Charges (incl GST)
            </p>
            <p className="relative shrink-0 whitespace-nowrap" data-node-id="784:4576">
              ₹327.00
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="784:4577">
          redBus doesn’t charge cancellation processing fees; any deductions follow the bus operator’s policy.
        </p>
      </div>
      <div className="bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex items-center pb-[31px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="784:4474" data-name="Action bar">
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Proceed" showIcon={false} />
      </div>
    </div>
  );
}
