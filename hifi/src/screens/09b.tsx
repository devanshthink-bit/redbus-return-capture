const imgLogoRedBusMark = "assets/24678315-8076-42a5-adf4-048efb56feb5.png";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgTrack = "assets/1c105ba5-371c-415f-9a70-e06b68450be5.svg";
const imgElapsed = "assets/0a681be4-e485-4182-9571-ed400acd3939.svg";

function LogoRedBusMark({ className }: { className?: string }) {
  return (
    <div className={className || "h-[23px] relative w-[36px]"} data-node-id="270:2405" data-name="Logo / redBus mark">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoRedBusMark} />
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

function ButtonBack({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--surface\\/default,white)] overflow-clip relative rounded-[var(--radius\\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] size-[38px]"} data-node-id="34:86" data-name="Button / Back">
      <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
    </div>
  );
}

export default function Component09BPleaseWait() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="725:4130" data-name="09b · Please wait">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="725:4131" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="725:4132" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I725:4132;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I725:4132;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[75px] overflow-clip relative shrink-0 w-full" data-node-id="727:4171" data-name="Nav / Top Bar">
          <ButtonBack className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] left-[13px] overflow-clip rounded-[var(--radius\/full,999px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] size-[38px] top-1/2" />
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic overflow-clip text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I727:4171;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I727:4171;34:91">
              Please wait
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I727:4171;34:92">
              Pay ₹2,919
            </p>
          </div>
          <div className="absolute bottom-0 content-stretch flex items-center justify-end overflow-clip right-[8px] top-0 w-[120px]" data-node-id="I727:4171;56:226" data-name="Trailing slot">
            <div className="bg-[var(--surface\/default,white)] content-stretch flex flex-col gap-[5px] items-center overflow-clip pb-[10px] pt-[8px] px-[14px] relative rounded-[var(--radius\/20,20px)] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0" data-node-id="I727:4171;53:196" data-name="Trailing">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] whitespace-nowrap" data-node-id="I727:4171;53:196;108:981">
                07:10
              </p>
              <div className="bg-[var(--border\/divider,#e6e6e6)] h-[2.5px] overflow-clip relative rounded-[2px] shrink-0 w-[42px]" data-node-id="I727:4171;53:196;108:982" data-name="Track">
                <div className="absolute bg-[var(--text\/warning,#a45729)] h-[2.5px] left-0 rounded-[2px] top-0 w-[4px]" data-node-id="I727:4171;53:196;108:983" data-name="Elapsed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#c85a14] content-stretch flex items-start overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="725:4157" data-name="Warning">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[16px] text-white" data-node-id="725:4158">
          Please do not go back or close this screen until payment is complete
        </p>
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip pb-[40px] pt-[22px] px-[16px] relative shrink-0 w-full" data-node-id="725:4159" data-name="Body">
        <LogoRedBusMark className="h-[34px] relative shrink-0 w-[54px]" />
        <div className="h-[10px] relative shrink-0 w-full" data-node-id="725:4161" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] text-center w-[min-content]" data-node-id="725:4162">
          Complete payment of ₹2,919
        </p>
        <div className="h-[18px] relative shrink-0 w-full" data-node-id="725:4163" data-name="gap" />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="725:4164" data-name="Divider" />
        <div className="h-[44px] relative shrink-0 w-full" data-node-id="725:4165" data-name="gap" />
        <div className="relative shrink-0 size-[228px]" data-node-id="725:4166" data-name="Ring">
          <div className="absolute left-0 size-[228px] top-0" data-node-id="725:4167" data-name="Track">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrack} />
          </div>
          <div className="absolute left-0 size-[228px] top-0" data-node-id="725:4168" data-name="Elapsed">
            <div className="absolute bottom-[83.32%] left-1/2 right-[19.56%] top-0">
              <img alt="" className="block max-w-none size-full" src={imgElapsed} />
            </div>
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[48px] left-[114px] not-italic text-[#ec3535] text-[40px] text-center top-[90px] w-[228px]" data-node-id="725:4169">
            07:10
          </p>
        </div>
        <div className="h-[36px] relative shrink-0 w-full" data-node-id="725:4170" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center w-[min-content]" data-node-id="725:4171">
          Complete payment before transaction expires
        </p>
      </div>
    </div>
  );
}
