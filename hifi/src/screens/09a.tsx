const imgButtonClose = "assets/4526b244-b8f0-4e89-95f9-e3629f7a78de.svg";
const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgDot = "assets/e3ba5a6c-19af-4a5b-b8da-896debdd44bc.svg";
const imgRail = "assets/600465f5-c4dd-470c-8b4e-c9d14774ced1.svg";

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

export default function Component09ABookingDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="704:4096" data-name="09a · Booking details">
      <div className="bg-[#f2f2f7] h-[300px] overflow-clip relative shrink-0 w-full" data-node-id="704:4097" data-name="Backdrop">
        <div className="absolute bg-[#fcfcff] content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[390px]" data-node-id="704:4098" data-name="Header">
          <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="704:4099" data-name="Status Bar / Light">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I704:4099;13:3">
              9:41
            </p>
            <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I704:4099;13:4" data-name="Status icons">
              <div className="absolute inset-[-1.3%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
              </div>
            </div>
          </div>
          <div className="h-[63px] relative shrink-0 w-full" data-node-id="704:4100" data-name="Nav / Top Bar">
            <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I704:4100;34:88" data-name="Back">
              <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-1/2 w-[246px]" data-node-id="I704:4100;34:90" data-name="Titles">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="I704:4100;34:91">
                Pay ₹2,919
              </p>
            </div>
            <div className="absolute bottom-0 content-stretch flex items-center justify-end right-[8px] top-0 w-[120px]" data-node-id="I704:4100;56:226" data-name="Trailing slot">
              <div className="bg-[var(--surface\/default,white)] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex flex-col gap-[5px] items-center pb-[10px] pt-[8px] px-[14px] relative rounded-[var(--radius\/20,20px)] shrink-0" data-node-id="I704:4100;53:196" data-name="Trailing">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/warning,#a45729)] whitespace-nowrap" data-node-id="I704:4100;53:196;108:981">
                  07:55
                </p>
                <div className="bg-[var(--border\/divider,#e6e6e6)] h-[2.5px] relative rounded-[2px] shrink-0 w-[42px]" data-node-id="I704:4100;53:196;108:982" data-name="Track">
                  <div className="absolute bg-[var(--text\/warning,#a45729)] h-[2.5px] left-0 rounded-[2px] top-0 w-[4px]" data-node-id="I704:4100;53:196;108:983" data-name="Elapsed" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--surface\/default,white)] content-stretch flex flex-col items-start left-0 p-[16px] top-[110px] w-[390px]" data-node-id="704:4101" data-name="Review booking">
          <div className="[word-break:break-word] content-stretch flex items-start justify-between not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="704:4102" data-name="Heading row">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="704:4103" data-name="Heading">
              <p className="font-['Inter:Bold'] font-bold leading-[26px] relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1d1d1d)]" data-node-id="704:4104">
                Review booking
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#636363)]" data-node-id="704:4105">
                1 Passenger
              </p>
            </div>
            <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/link,#0000e4)]" data-node-id="704:4106">
              View details
            </p>
          </div>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="704:4107" data-name="gap" />
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="704:4108" data-name="Delhi → Nainital">
            <p className="font-['Inter:Regular'] font-normal relative shrink-0" data-node-id="704:4109">
              Delhi → Nainital
            </p>
            <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="704:4110">
              Thu, 10 Sep · 23:55
            </p>
          </div>
          <div className="h-[10px] relative shrink-0 w-full" data-node-id="704:4111" data-name="gap" />
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] w-full whitespace-nowrap" data-node-id="704:4112" data-name="Nainital → Delhi">
            <p className="font-['Inter:Regular'] font-normal relative shrink-0" data-node-id="704:4113">
              Nainital → Delhi
            </p>
            <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="704:4114">
              Mon, 14 Sep · 23:55
            </p>
          </div>
          <div className="h-[14px] relative shrink-0 w-full" data-node-id="704:4115" data-name="gap" />
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="704:4116" data-name="Info chips">
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="704:4117" data-name="Chip / Trip info">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="704:4118">
                Trip info
              </p>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="704:4119" data-name="Chip / Cancellation policy">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="704:4120">
                Cancellation policy
              </p>
            </div>
            <div className="bg-[var(--surface\/default,white)] border border-[var(--border\/default,#b0b0b0)] border-solid content-stretch flex h-[34px] items-center justify-center px-[13px] relative rounded-[var(--radius\/10,10px)] shrink-0" data-node-id="704:4121" data-name="Chip / Passengers">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1d1d1d)] whitespace-nowrap" data-node-id="704:4122">
                Passengers
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.45)] h-[300px] left-0 top-0 w-[390px]" data-node-id="704:4123" data-name="Scrim" />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[28px] pt-[20px] px-[16px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full" data-node-id="704:4124" data-name="Sheet">
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="704:4125" data-name="Title row">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[28px] min-w-px not-italic relative text-[#1d1d1d] text-[22px]" data-node-id="704:4126">
            Review booking details
          </p>
          <ButtonClose className="relative shrink-0 size-[36px]" />
        </div>
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4131" data-name="gap" />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="704:4132" data-name="Leg · ONWARD">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] w-[min-content]" data-node-id="704:4133">
            ONWARD · THU, 10 SEP
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="704:4134" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-[min-content]" data-node-id="704:4135">
            Laxmi Holidays Pvt Ltd
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4136">
            1 Seat · Bharat Benz A/C Seater /Sleeper (2+1)
          </p>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4137" data-name="gap" />
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4122" data-name="Timeline">
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4123" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px]" data-node-id="704:4140" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px] w-[49px]" data-node-id="704:4141">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-[42px]" data-node-id="704:4142">
                  10 Sep
                </p>
              </div>
              <div className="relative self-stretch shrink-0 w-[12px]" data-node-id="714:4124" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[-1px] left-1/2 rounded-[2px] top-[11px] w-[3px]" data-node-id="714:4125" data-name="Line" />
                <div className="-translate-x-1/2 absolute left-1/2 size-[11px] top-[6px]" data-node-id="714:4126" data-name="Dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic pb-[16px] relative self-stretch" data-node-id="704:4146" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4147">
                  Isbt Kashmiri Gate Metro Gate No.5
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4148">
                  Kashmiri Gate Metro Gate No.5
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[56px] items-center overflow-clip relative shrink-0 w-full" data-node-id="714:4127" data-name="Duration">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-[62px]" data-node-id="704:4150" data-name="When">
                <p className="relative shrink-0 w-[48px]" data-node-id="704:4151">
                  Approx.
                </p>
                <p className="relative shrink-0 w-[39px]" data-node-id="704:4152">
                  8h 5m
                </p>
              </div>
              <div className="h-full relative shrink-0 w-[12px]" data-node-id="714:4128" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[10px] left-1/2 rounded-[2px] top-0 w-[3px]" data-node-id="714:4129" data-name="Line" />
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="714:4130" data-name="Info" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4131" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px]" data-node-id="704:4157" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px] w-[52px]" data-node-id="704:4158">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-[40px]" data-node-id="704:4159">
                  11 Sep
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[12px]" data-node-id="714:4132" data-name="Rail">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRail} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic relative self-stretch" data-node-id="704:4163" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4164">
                  Nainital Mall Road
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4165">
                  Tallital Bus Stand ( Drop By Cab Or Mini Bus From Haldwani To Nainital )
                </p>
              </div>
            </div>
          </div>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4166" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="704:4167">
            Seat details
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4168">
            1 Seat
          </p>
          <div className="h-[10px] relative shrink-0 w-full" data-node-id="704:4169" data-name="gap" />
          <div className="bg-[#d0f1d3] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="704:4170" data-name="Seat pill">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#174d26] text-[15px] w-[120px]" data-node-id="704:4171">
              U4 - Upper deck
            </p>
          </div>
        </div>
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4173" data-name="gap" />
        <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="704:4172" data-name="Divider" />
        <div className="h-[22px] relative shrink-0 w-full" data-node-id="704:4174" data-name="gap" />
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="704:4175" data-name="Leg · RETURN">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#8a8a95] text-[12px] tracking-[0.96px] w-[min-content]" data-node-id="704:4176">
            RETURN · MON, 14 SEP
          </p>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="704:4177" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[18px] w-[min-content]" data-node-id="704:4178">
            Laxmi Holidays Pvt Ltd
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4179">
            1 Seat · Bharat Benz A/C Seater /Sleeper (2+1)
          </p>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4180" data-name="gap" />
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4134" data-name="Timeline">
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4135" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px]" data-node-id="704:4183" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px] w-[49px]" data-node-id="704:4184">
                  23:55
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-[42px]" data-node-id="704:4185">
                  14 Sep
                </p>
              </div>
              <div className="relative self-stretch shrink-0 w-[12px]" data-node-id="714:4136" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[-1px] left-1/2 rounded-[2px] top-[11px] w-[3px]" data-node-id="714:4137" data-name="Line" />
                <div className="-translate-x-1/2 absolute left-1/2 size-[11px] top-[6px]" data-node-id="714:4138" data-name="Dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic pb-[16px] relative self-stretch" data-node-id="704:4189" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4190">
                  Nainital Bus Stand
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4191">
                  Tallital, near the boat house
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[56px] items-center overflow-clip relative shrink-0 w-full" data-node-id="714:4139" data-name="Duration">
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13px] w-[62px]" data-node-id="704:4193" data-name="When">
                <p className="relative shrink-0 w-[48px]" data-node-id="704:4194">
                  Approx.
                </p>
                <p className="relative shrink-0 w-[39px]" data-node-id="704:4195">
                  8h 5m
                </p>
              </div>
              <div className="h-full relative shrink-0 w-[12px]" data-node-id="714:4140" data-name="Rail">
                <div className="-translate-x-1/2 absolute bg-[#d6d6da] bottom-[10px] left-1/2 rounded-[2px] top-0 w-[3px]" data-node-id="714:4141" data-name="Line" />
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="714:4142" data-name="Info" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="714:4143" data-name="Stop">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[62px]" data-node-id="704:4200" data-name="When">
                <p className="font-['Inter:Bold'] font-bold leading-[23px] relative shrink-0 text-[#1d1d1d] text-[17px] w-[52px]" data-node-id="704:4201">
                  08:00
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[18px] relative shrink-0 text-[#636363] text-[13px] w-[42px]" data-node-id="704:4202">
                  15 Sep
                </p>
              </div>
              <div className="h-[18px] relative shrink-0 w-[12px]" data-node-id="714:4144" data-name="Rail">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRail} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic relative self-stretch" data-node-id="704:4206" data-name="Info">
                <p className="font-['Inter:Bold'] font-bold leading-[22px] relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="704:4207">
                  ISBT Kashmiri Gate
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="704:4208">
                  Gate Number 4 — where you started
                </p>
              </div>
            </div>
          </div>
          <div className="h-[18px] relative shrink-0 w-full" data-node-id="704:4209" data-name="gap" />
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[23px] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[17px] w-[min-content]" data-node-id="704:4210">
            Seat details
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#636363] text-[15px] w-[min-content]" data-node-id="704:4211">
            1 Seat
          </p>
          <div className="h-[10px] relative shrink-0 w-full" data-node-id="704:4212" data-name="gap" />
          <div className="bg-[#d0f1d3] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="704:4213" data-name="Seat pill">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#174d26] text-[15px] w-[120px]" data-node-id="704:4214">
              U4 - Upper deck
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
