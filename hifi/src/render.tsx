import S01 from "./screens/01";
import S02 from "./screens/02";
import S03 from "./screens/03";
import S03A from "./screens/03a";
import S03B from "./screens/03b";
import S04 from "./screens/04";
import S05 from "./screens/05";
import S05A from "./screens/05a";
import S05B from "./screens/05b";
import S06 from "./screens/06";
import S06A from "./screens/06a";
import S07 from "./screens/07";
import S08 from "./screens/08";
import S08A from "./screens/08a";
import S08B from "./screens/08b";
import S09 from "./screens/09";
import S10 from "./screens/10";
import S11 from "./screens/11";
import S12 from "./screens/12";
import S13 from "./screens/13";
import S14 from "./screens/14";
import S15 from "./screens/15";
import S16 from "./screens/16";

export const SCREENS = [
  { id: "01", name: '01 · Home', C: S01 },
  { id: "02", name: '02 · Outbound bus list', C: S02 },
  { id: "03", name: '03 · Outbound seat map', C: S03 },
  { id: "03a", name: '03a · Seat map · sheet collapsed', C: S03A },
  { id: "03b", name: '03b · Seat map · sheet full', C: S03B },
  { id: "04", name: '04 · Boarding & dropping points', C: S04 },
  { id: "05", name: '05 · Return · pick your days', C: S05 },
  { id: "05a", name: '05a · Return · window chosen', C: S05A },
  { id: "05b", name: '05b · Return · one day picked', C: S05B },
  { id: "06", name: '06 · Your return · pick a day', C: S06 },
  { id: "06a", name: '06a · Your return · day chosen', C: S06A },
  { id: "07", name: '07 · Choose your bus', C: S07 },
  { id: "08", name: '08 · Review your trip', C: S08 },
  { id: "08a", name: '08a · Return seat', C: S08A },
  { id: "08b", name: '08b · Return points', C: S08B },
  { id: "09", name: '09 · Pay', C: S09 },
  { id: "10", name: '10 · Booking confirmed', C: S10 },
  { id: "11", name: '11 · Ticket details', C: S11 },
  { id: "12", name: '12 · My Bookings', C: S12 },
  { id: "13", name: '13 · Change day', C: S13 },
  { id: "14", name: '14 · Move · buses', C: S14 },
  { id: "15", name: '15 · Confirm the move', C: S15 },
  { id: "16", name: '16 · Return moved', C: S16 },
];
