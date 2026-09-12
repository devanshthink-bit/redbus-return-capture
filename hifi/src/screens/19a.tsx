const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgButtonClose = "assets/c64afe43-e3fd-4f38-85a3-e0e214e0d367.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgRadio = "assets/8673579d-eca4-4207-974d-e4b2defafcdc.svg";

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

function ButtonClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[44px]"} data-node-id="121:1326" data-name="Button / Close">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonClose} />
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

export default function Component19AWhyCancel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="785:4429" data-name="19a · Why cancel">
      <div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-node-id="785:4430" data-name="Backdrop">
        <div className="absolute bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col h-[844px] items-start left-0 overflow-x-clip overflow-y-auto top-0 w-[390px]" data-node-id="785:4431" data-name="Refund details · behind">
          <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="785:4432" data-name="Header">
            <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="785:4433" data-name="Status Bar / Light">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I785:4433;13:3">
                9:41
              </p>
              <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I785:4433;13:4" data-name="Status icons">
                <div className="absolute inset-[-1.3%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
                </div>
              </div>
            </div>
            <div className="h-[63px] relative shrink-0 w-full" data-node-id="785:4434" data-name="Nav / Top Bar">
              <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I785:4434;34:88" data-name="Back">
                <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I785:4434;34:90" data-name="Titles">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I785:4434;34:91">
                  Refund details
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I785:4434;34:92">
                  Ticket #TV9Q92193734
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px pb-[24px] pt-[13px] px-[16px] relative w-full" data-node-id="785:4435" data-name="Content">
            <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip pb-[14px] pt-[12px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="785:4436" data-name="Leg strip">
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] text-center w-full" data-node-id="785:4437">
                Laxmi Holidays Pvt Ltd
              </p>
              <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="785:4438" data-name="Route row">
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="785:4439" data-name="From">
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="785:4440">
                    Wed, 16 Sep · 23:55
                  </p>
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="785:4441">
                    Nainital
                  </p>
                </div>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="785:4442">
                  →
                </p>
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end min-w-px overflow-clip relative text-right" data-node-id="785:4443" data-name="To">
                  <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="785:4444">
                    Thu, 17 Sep · 08:00
                  </p>
                  <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="785:4445">
                    Delhi
                  </p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip pb-[16px] pt-[14px] px-[16px] relative rounded-[16px] shrink-0 text-[#1d1d1d] w-full" data-node-id="785:4446" data-name="Seats to be cancelled">
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[15px] w-full" data-node-id="785:4447">
                Seats to be cancelled:
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] w-full" data-node-id="785:4448">
                U5 (Devansh Somvanshi)
              </p>
            </div>
            <div className="[word-break:break-word] bg-white content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[18px] relative rounded-[16px] shrink-0 w-full" data-node-id="785:4449" data-name="View cancellation policy">
              <p className="flex-[1_0_0] min-w-px relative text-[#1d1d1d] text-[16px]" data-node-id="785:4450">
                View cancellation policy
              </p>
              <p className="relative shrink-0 text-[#636363] text-[18px] whitespace-nowrap" data-node-id="785:4451">
                ›
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="785:4452" data-name="Refund breakup">
              <div className="[word-break:break-word] bg-[#262626] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[24px] not-italic overflow-clip p-[16px] relative shrink-0 text-white w-full" data-node-id="785:4453" data-name="Refund amount">
                <p className="flex-[1_0_0] min-w-px relative text-[17px]" data-node-id="785:4454">
                  Refund amount
                </p>
                <p className="relative shrink-0 text-[19px] whitespace-nowrap" data-node-id="785:4455">
                  ₹763.00
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="785:4456" data-name="Row / Total Paid">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="785:4457">
                  Total Paid
                </p>
                <p className="relative shrink-0 whitespace-nowrap" data-node-id="785:4458">
                  ₹1,090.00
                </p>
              </div>
              <div className="bg-[#e6e6e6] relative shrink-0 size-px" data-node-id="785:4459" data-name="Divider" />
              <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="785:4460" data-name="Row / Total deductions">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="785:4461">
                  Total deductions
                </p>
                <p className="relative shrink-0 whitespace-nowrap" data-node-id="785:4462">
                  ₹327.00
                </p>
              </div>
              <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-node-id="785:4463" data-name="Divider" />
              <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal gap-[8px] items-center leading-[22px] not-italic overflow-clip px-[16px] py-[14px] relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="785:4464" data-name="Row / Cancellation Charges (incl GST)">
                <p className="flex-[1_0_0] min-w-px relative" data-node-id="785:4465">
                  Cancellation Charges (incl GST)
                </p>
                <p className="relative shrink-0 whitespace-nowrap" data-node-id="785:4466">
                  ₹327.00
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="785:4467">
              redBus doesn’t charge cancellation processing fees; any deductions follow the bus operator’s policy.
            </p>
          </div>
          <div className="bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex items-center pb-[31px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="785:4468" data-name="Action bar">
            <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="Proceed" showIcon={false} />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.45)] h-[844px] left-0 top-0 w-[390px]" data-node-id="785:4470" data-name="Scrim" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip pb-[28px] pt-[20px] px-[16px] rounded-tl-[20px] rounded-tr-[20px] top-[210px] w-[390px]" data-node-id="785:4471" data-name="Sheet">
        <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="785:4472" data-name="Title row">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[26px] min-w-px not-italic relative text-[#1d1d1d] text-[19px]" data-node-id="785:4473">
            Help us know why you want to cancel
          </p>
          <ButtonClose className="relative shrink-0 size-[36px]" />
        </div>
        <div className="h-[12px] relative shrink-0 w-px" data-node-id="785:4478" data-name="gap" />
        <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4479" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4480">
            Change of plans (Date/time/passengers changed)
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4481" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4482" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4483">
            Made an error while booking
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4484" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4485" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4486">
            Missed applying discount
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4487" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4488" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4489">
            Booked ticket from somewhere else
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4490" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4491" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4492">
            Traveling using alternate modes (Train, car, air etc.)
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4493" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4494" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4495">
            The bus is delayed
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4496" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4497" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4498">
            The bus is cancelled
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4499" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="border-[#e6e6e6] border-solid border-t content-stretch flex gap-[12px] items-center overflow-clip px-[2px] py-[14px] relative shrink-0 w-full" data-node-id="785:4500" data-name="Reason">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#1d1d1d] text-[16px]" data-node-id="785:4501">
            Other
          </p>
          <div className="relative shrink-0 size-[24px]" data-node-id="785:4502" data-name="Radio">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-px" data-node-id="785:4503" data-name="gap" />
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer flex gap-[10px] h-[46px] items-center justify-center overflow-clip px-[20px] relative rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" label="Cancel ticket" showIcon={false} />
      </div>
    </div>
  );
}
