const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function S9NoOtherDaysChangeDay() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="808:5029" data-name="S9 · No other days · Change day">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="808:5030" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="808:5031" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I808:5031;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I808:5031;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="808:5032" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I808:5032;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I808:5032;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I808:5032;34:91">
              Change day
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I808:5032;34:92">
              Nainital → Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="808:5033" data-name="Content">
        <div className="bg-[var(--colour\/neutral\/150,#e9eaf6)] content-stretch flex flex-col items-start p-[16px] relative rounded-[var(--radius\/12,12px)] shrink-0 w-full" data-node-id="808:5034" data-name="Your booking">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="808:5035">
            Your booking
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="808:5036" data-name="gap" />
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold'] font-bold items-center justify-between leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="808:5037" data-name="Row">
            <p className="relative shrink-0" data-node-id="808:5038">
              Wed, 16 Sep · 23:55
            </p>
            <p className="relative shrink-0" data-node-id="808:5039">
              ₹1,090
            </p>
          </div>
          <div className="h-[4px] relative shrink-0 w-full" data-node-id="808:5040" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#636363)] w-full" data-node-id="808:5041">
            Laxmi Holidays Pvt Ltd · Seat U5
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="808:5117" data-name="Blank state">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center w-full" data-node-id="808:5118">
            No other days to pick
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[16px] text-center w-full" data-node-id="808:5119">
            There is no other day in your range.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[16px] text-center w-full" data-node-id="808:5120">
            Your Wed, 16 Sep booking is safe. Nothing was charged.
          </p>
          <div className="content-stretch flex flex-col items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="808:5121" data-name="Actions">
            <div className="bg-[#c54646] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="808:5122" data-name="Button / Show all returns">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="808:5123">
                Keep my booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
