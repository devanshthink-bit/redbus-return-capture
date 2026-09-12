const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function S7CantCheckYourReturn() {
  return (
    <div className="bg-[var(--surface\/page,#f2f2f7)] content-stretch flex flex-col items-start relative size-full" data-node-id="808:4822" data-name="S7 · Can’t check · Your return">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="808:4823" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="808:4824" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I808:4824;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I808:4824;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="808:4825" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I808:4825;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I808:4825;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I808:4825;34:91">
              Your return
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I808:4825;34:92">
              Nainital → Delhi · Fri, 11 – Thu, 17 Sep
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I808:4825;56:226" data-name="Trailing slot">
            <div className="content-stretch flex h-[52px] items-center justify-center px-[10px] relative shrink-0" data-node-id="I808:4825;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/accent,#c54646)] whitespace-nowrap" data-node-id="I808:4825;53:196;97:644">
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[135px] pt-[13px] px-[16px] relative shrink-0 w-full" data-node-id="808:4826" data-name="Content">
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full" data-node-id="808:4889" data-name="Blank state">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center w-full" data-node-id="808:4890">
            We couldn’t check those days
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[16px] text-center w-full" data-node-id="808:4891">
            Nothing was charged. Your onward trip is not affected.
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[16px] relative shrink-0 w-full" data-node-id="808:4893" data-name="Actions">
            <div className="bg-[#c54646] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="808:4894" data-name="Button / Show all returns">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="808:4895">
                Try again
              </p>
            </div>
            <div className="bg-white border border-[#767680] border-solid content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] relative rounded-[24px] shrink-0 w-full" data-node-id="808:4896" data-name="Button / Pick other days">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] whitespace-nowrap" data-node-id="808:4897">
                Continue without a return
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
