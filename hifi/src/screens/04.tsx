const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgGlyph = "assets/bcc6e14f-b712-4771-a1ab-448095b8f097.svg";
const imgIconLocate = "assets/dd68770f-c248-405b-a0bc-4ca2fdee967d.svg";
const imgRadio = "assets/7ec2e7eb-f72f-4d9d-b3d6-4a8be6e38d91.svg";

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

export default function Component04BoardDropBoarding() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="67:232" data-name="04 · Board & drop · boarding">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="67:233" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[8px] pl-[27px] pr-[14px] pt-[18px] relative shrink-0 w-full" data-node-id="67:234" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I67:234;13:3">
            9:41
          </p>
          <div className="h-[14px] relative shrink-0 w-[79px]" data-node-id="I67:234;13:4" data-name="Status icons">
            <div className="absolute inset-[-1.3%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgStatusIcons} />
            </div>
          </div>
        </div>
        <div className="h-[63px] relative shrink-0 w-full" data-node-id="67:247" data-name="Nav / Top Bar">
          <div className="-translate-y-1/2 absolute bg-[var(--surface\/default,white)] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] left-[13px] rounded-[var(--radius\/full,999px)] size-[38px] top-1/2" data-node-id="I67:247;34:88" data-name="Back">
            <IconChevronLeft className="absolute left-[9px] size-[20px] top-[9px]" />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-1/2 not-italic text-center top-1/2 w-[246px] whitespace-nowrap" data-node-id="I67:247;34:90" data-name="Titles">
            <p className="font-['Inter:Bold'] font-bold leading-[22px] overflow-hidden relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1d1d1d)] text-ellipsis w-full" data-node-id="I67:247;34:91">{`Select board & drop points`}</p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I67:247;34:92">
              ISBT Kashmiri Gate, Delhi → Nainital
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="561:3959" data-name="Tabs">
        <div className="[word-break:break-word] bg-[#eeeef3] content-stretch flex gap-[4px] items-start leading-[normal] not-italic overflow-clip p-[4px] relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="561:3960" data-name="Track">
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]" data-node-id="561:3961" data-name="Tab / Boarding Points">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[15px]" data-node-id="561:3962">
              Boarding Points
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="561:3963">
              Select location
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[12px]" data-node-id="561:3964" data-name="Tab / Dropping Points">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[15px]" data-node-id="561:3965">
              Dropping Points
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="561:3966">
              Select location
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="569:3959" data-name="Find">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] w-full" data-node-id="561:3968">
          Find the closest boarding point to
        </p>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="561:3969" data-name="Search row">
          <div className="bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px overflow-clip px-[16px] py-[14px] relative rounded-[26px]" data-node-id="561:3970" data-name="Search field">
            <div className="relative shrink-0 size-[20px]" data-node-id="569:3960" data-name="Icon / Search">
              <div className="absolute left-0 size-[20px] top-0" data-node-id="I569:3960;13:16" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#636363] text-[15px] whitespace-nowrap" data-node-id="561:3972">{`Search for an 'area'`}</p>
          </div>
          <div className="bg-white border border-[#e4e4e4] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[26px] shrink-0 size-[52px]" data-node-id="561:3973" data-name="Locate">
            <div className="relative shrink-0 size-[24px]" data-node-id="569:3964" data-name="Icon / Locate">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLocate} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[24px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="561:3967" data-name="Content">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="562:3939" data-name="Preferred boarding point">
          <div className="bg-gradient-to-r content-stretch flex from-[#8cde8c] items-start overflow-clip px-[16px] py-[14px] relative shrink-0 to-white w-full" data-node-id="562:3940" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] whitespace-nowrap" data-node-id="562:3941">
              Your preferred boarding point
            </p>
          </div>
          <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="562:3942" data-name="Point / Isbt Kashmiri Gate Metro Gate No.5">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="562:3943" data-name="When">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="562:3944">
                23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="562:3945">
                10 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="562:3946" data-name="Info">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="562:3947">
                Isbt Kashmiri Gate Metro Gate No.5
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="562:3948">
                Kashmiri Gate Metro Gate No.5
              </p>
            </div>
            <div className="relative shrink-0 size-[26px]" data-node-id="562:3949" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="562:3950" data-name="All boarding points">
          <div className="content-stretch flex items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="562:3951" data-name="Card head">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] whitespace-nowrap" data-node-id="562:3952">
              All boarding points in Delhi
            </p>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="562:3953" data-name="Divider" />
          <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="562:3954" data-name="Point / Isbt Kashmiri Gate Metro Gate No.5">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="562:3955" data-name="When">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="562:3956">
                23:55
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="562:3957">
                10 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="562:3958" data-name="Info">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="562:3959">
                Isbt Kashmiri Gate Metro Gate No.5
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="562:3960">
                Kashmiri Gate Metro Gate No.5
              </p>
            </div>
            <div className="relative shrink-0 size-[26px]" data-node-id="562:3961" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="562:3962" data-name="Divider" />
          <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="562:3963" data-name="Point / Anand Vihar ITC Lounge">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="562:3964" data-name="When">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="562:3965">
                00:39
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="562:3966">
                11 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="562:3967" data-name="Info">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="562:3968">
                Anand Vihar ITC Lounge
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="562:3969">
                ITC Lounge Metro Pillar No 215 Opp-Anand Vihar ISBT
              </p>
            </div>
            <div className="relative shrink-0 size-[26px]" data-node-id="562:3970" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="562:3971" data-name="Divider" />
          <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="562:3972" data-name="Point / Noida">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="562:3973" data-name="When">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="562:3974">
                01:00
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="562:3975">
                11 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="562:3976" data-name="Info">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="562:3977">
                Noida
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="562:3978">
                Sector 62 Noida Near Foot Over Bridge ,Towards To Hapur (UP)
              </p>
            </div>
            <div className="relative shrink-0 size-[26px]" data-node-id="562:3979" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
          <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id="562:3980" data-name="Divider" />
          <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id="562:3981" data-name="Point / ABES Engineer College Gaziabad">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id="562:3982" data-name="When">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id="562:3983">
                01:10
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="562:3984">
                11 Sep
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="562:3985" data-name="Info">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id="562:3986">
                ABES Engineer College Gaziabad
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id="562:3987">
                NH-24, Ghaziabad, Uttar Pradesh
              </p>
            </div>
            <div className="relative shrink-0 size-[26px]" data-node-id="562:3988" data-name="Radio">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
