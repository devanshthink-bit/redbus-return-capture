const imgIconChevronLeft = "assets/c52a55a0-4bd0-4f7a-a9fa-205a96aa0d14.svg";
const imgStatusIcons = "assets/091fbdca-8e2e-4f59-80c8-bfdc341f332f.svg";
const imgRadio = "assets/dd06d781-bbf7-47a4-8851-4cfe56297529.svg";

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="33:93" data-name="Icon / Chevron Left">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconChevronLeft} />
    </div>
  );
}

type PointProps = { id: string; time: string; date: string; name: string; addr: string; warn?: string; ids: string[] };

function Point({ id, time, date, name, addr, warn, ids }: PointProps) {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[14px] relative shrink-0 w-full" data-node-id={id} data-name={"Point / " + name}>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[62px] whitespace-nowrap" data-node-id={ids[0]} data-name="When">
        <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px]" data-node-id={ids[1]}>{time}</p>
        <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id={ids[2]}>{date}</p>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id={ids[3]} data-name="Info">
        <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[16px] w-full" data-node-id={ids[4]}>{name}</p>
        <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[14px] w-full" data-node-id={ids[5]}>{addr}</p>
        {warn && <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a45729] text-[14px] w-full" data-node-id={ids[6]}>{warn}</p>}
      </div>
      <div className="relative shrink-0 size-[24px]" data-node-id={ids[warn ? 7 : 6]} data-name="Radio">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRadio} />
      </div>
    </div>
  );
}

function Divider({ id }: { id: string }) {
  return <div className="bg-[#e4e4e4] h-px relative shrink-0 w-full" data-node-id={id} data-name="Divider" />;
}

export default function Component04BoardDropBoarding() {
  return (
    <div className="bg-[#f0eff5] content-stretch flex flex-col items-start relative size-full" data-node-id="67:232" data-name="04 · Board &amp; drop · boarding">
      <div className="bg-[#fcfcff] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="67:233" data-name="Header">
        <div className="content-stretch flex h-[47px] items-center justify-between pb-[14px] pl-[27px] pr-[14px] pt-[12px] relative shrink-0 w-full" data-node-id="67:234" data-name="Status Bar / Light">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1d1d1d)] tracking-[-0.4px] whitespace-nowrap" data-node-id="I67:234;13:3">9:41</p>
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
            <p className="font-['Inter:Regular'] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#636363)] text-ellipsis w-full" data-node-id="I67:247;34:92">ISBT Kashmiri Gate, Delhi → Nainital</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="561:3959" data-name="Tabs">
        <div className="[word-break:break-word] bg-[#eeeef3] content-stretch flex items-start leading-[normal] not-italic overflow-clip relative rounded-[12px] shrink-0 w-full whitespace-nowrap" data-node-id="561:3960" data-name="Track">
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]" data-node-id="561:3961" data-name="Tab / Boarding Points">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[15px]" data-node-id="561:3962">Boarding Points</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="561:3963">Select location</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[12px]" data-node-id="561:3964" data-name="Tab / Dropping Points">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1d1d1d] text-[15px]" data-node-id="561:3965">Dropping Points</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#636363] text-[13px]" data-node-id="561:3966">Select location</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[24px] pt-[16px] px-[16px] relative shrink-0 w-full" data-node-id="561:3967" data-name="Content">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] whitespace-nowrap" data-node-id="561:3968">Find the closest boarding point to</p>
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="561:3969" data-name="Search row">
          <div className="[word-break:break-word] bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-[1_0_0] font-['Inter:Regular'] font-normal gap-[10px] items-center leading-[normal] min-w-px not-italic overflow-clip px-[16px] py-[14px] relative rounded-[26px] text-[#636363] whitespace-nowrap" data-node-id="561:3970" data-name="Search field">
            <p className="relative shrink-0 text-[18px]" data-node-id="561:3971">⌕</p>
            <p className="relative shrink-0 text-[15px]" data-node-id="561:3972">{`Search for an 'area'`}</p>
          </div>
          <div className="bg-white border border-[#e4e4e4] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[26px] shrink-0 size-[52px]" data-node-id="561:3973" data-name="Locate">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] whitespace-nowrap" data-node-id="561:3974">◉</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="562:3939" data-name="Preferred boarding point">
          <div className="bg-gradient-to-r content-stretch flex from-[#8cde8c] items-start overflow-clip px-[16px] py-[14px] relative shrink-0 to-white w-full" data-node-id="562:3940" data-name="Strip">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] whitespace-nowrap" data-node-id="562:3941">Your preferred boarding point</p>
          </div>
          <Point id="562:3942" time="23:55" date="10 Sep" name="Isbt Kashmiri Gate Metro Gate No.5" addr="Kashmiri Gate Metro Gate No.5 ,Kashmiri Gate Metro Gate No.5" ids={["562:3943","562:3944","562:3945","562:3946","562:3947","562:3948","562:3949"]} />
        </div>
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="562:3950" data-name="All boarding points">
          <div className="content-stretch flex items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="562:3951" data-name="Card head">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1d] text-[15px] whitespace-nowrap" data-node-id="562:3952">All boarding points in Delhi</p>
          </div>
          <Divider id="562:3953" />
          <Point id="562:3954" time="23:55" date="10 Sep" name="Isbt Kashmiri Gate Metro Gate No.5" addr="Kashmiri Gate Metro Gate No.5 ,Kashmiri Gate Metro Gate No.5" ids={["562:3955","562:3956","562:3957","562:3958","562:3959","562:3960","562:3961"]} />
          <Divider id="562:3962" />
          <Point id="562:3963" time="00:39" date="11 Sep" name="Anand Vihar ITC Lounge" addr="ITC Lounge Metro Pillar No 215 Opp-Anand Vihar ISBT" ids={["562:3964","562:3965","562:3966","562:3967","562:3968","562:3969","562:3970"]} />
          <Divider id="562:3971" />
          <Point id="562:3972" time="01:00" date="11 Sep" name="Noida" addr="Sector 62 Noida Near Foot Over Bridge ,Towards To Hapur (UP)" ids={["562:3973","562:3974","562:3975","562:3976","562:3977","562:3978","562:3979"]} />
          <Divider id="562:3980" />
          <Point id="562:3981" time="01:10" date="11 Sep" name="ABES Engineer College Gaziabad" addr="NH-24, Ghaziabad, Uttar Pradesh" ids={["562:3982","562:3983","562:3984","562:3985","562:3986","562:3987","562:3988"]} />
        </div>
      </div>
    </div>
  );
}
