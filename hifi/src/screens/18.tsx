const imgGlyph = "assets/f987e112-3f21-4093-9c91-abca9b06aa32.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgAvatar = "assets/6250385b-1df1-4ba2-9701-acf2c10b23e7.svg";

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

export default function Component18ReviewAndCancel() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="784:4387" data-name="18 · Review and cancel">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="784:4388" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="784:4389" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I784:4389;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I784:4389;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="784:4390" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I784:4390;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I784:4390;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I784:4390;34:91">
              Review and cancel
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I784:4390;34:92">
              Ticket #TV9Q92193734
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px pb-[24px] pt-[13px] px-[16px] relative w-full" data-node-id="784:4391" data-name="Content">
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip pb-[14px] pt-[12px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="784:4527" data-name="Leg strip">
          <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] text-center w-full" data-node-id="784:4528">
            Laxmi Holidays Pvt Ltd
          </p>
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="784:4529" data-name="Route row">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-node-id="784:4530" data-name="From">
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="784:4531">
                Wed, 16 Sep · 23:55
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4532">
                Nainital
              </p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] whitespace-nowrap" data-node-id="784:4533">
              →
            </p>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end min-w-px overflow-clip relative text-right" data-node-id="784:4534" data-name="To">
              <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-full" data-node-id="784:4535">
                Thu, 17 Sep · 08:00
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="784:4536">
                Delhi
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[18px] relative rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.07)] shrink-0 w-full" data-node-id="784:4537" data-name="Passenger for cancellation">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-full" data-node-id="784:4538">
            Passenger for cancellation
          </p>
          <div className="bg-white content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-node-id="784:4539" data-name="Passenger">
            <div className="relative shrink-0 size-[44px]" data-node-id="784:4540" data-name="Avatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatar} />
            </div>
            <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px not-italic overflow-clip relative" data-node-id="784:4541" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[18px] relative shrink-0 text-[#2e5c2a] text-[13px] w-full" data-node-id="784:4542">
                Primary passenger
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[#1d1d1d] text-[17px] w-full" data-node-id="784:4543">
                Devansh Somvanshi
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[15px] w-full" data-node-id="784:4544">
                Male, 29 Years
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] whitespace-nowrap" data-node-id="784:4545">
              Seat: U5
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface\/default,white)] border-[var(--border\/divider,#e6e6e6)] border-solid border-t content-stretch flex items-center pb-[31px] pt-[20px] px-[16px] relative shrink-0 w-full" data-node-id="784:4413" data-name="Action bar">
        <ButtonPrimary className="bg-[var(--surface\/accent,#c54646)] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-[1_0_0] gap-[10px] h-[48px] items-center justify-center min-w-px px-[20px] relative rounded-[var(--radius\/full,999px)]" label="View refund details" showIcon={false} />
      </div>
    </div>
  );
}
