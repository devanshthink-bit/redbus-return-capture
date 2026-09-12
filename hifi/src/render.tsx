import S01 from "./screens/01";
import S01A from "./screens/01a";
import S02 from "./screens/02";
import S03 from "./screens/03";
import S03A from "./screens/03a";
import S03B from "./screens/03b";
import S04 from "./screens/04";
import S04A from "./screens/04a";
import S05 from "./screens/05";
import S05A from "./screens/05a";
import S05B from "./screens/05b";
import S06 from "./screens/06";
import S06A from "./screens/06a";
import S06B from "./screens/06b";
import S07 from "./screens/07";
import S08 from "./screens/08";
import S08A from "./screens/08a";
import S08B from "./screens/08b";
import S08C from "./screens/08c";
import S09 from "./screens/09";
import S09A from "./screens/09a";
import S09B from "./screens/09b";
import S11 from "./screens/11";
import S11A from "./screens/11a";
import S12 from "./screens/12";
import S12A from "./screens/12a";
import S13 from "./screens/13";
import S14 from "./screens/14";
import S15 from "./screens/15";
import S16 from "./screens/16";
import S17 from "./screens/17";
import S18 from "./screens/18";
import S19 from "./screens/19";
import S19A from "./screens/19a";
import S20 from "./screens/20";
import S21 from "./screens/21";
import S21A from "./screens/21a";
import S22 from "./screens/22";
import ST1 from "./screens/S1";
import ST2 from "./screens/S2";
import ST3 from "./screens/S3";
import ST4 from "./screens/S4";
import ST5 from "./screens/S5";
import ST6 from "./screens/S6";
import ST7 from "./screens/S7";
import ST8 from "./screens/S8";
import ST9 from "./screens/S9";
import ST10 from "./screens/S10";
import ST11 from "./screens/S11";
import ST12A from "./screens/S12a";
import ST12B from "./screens/S12b";

export const SCREENS = [
  { id: "01", name: '01 · Home', C: S01 },
  { id: "01a", name: '01a · Select date', C: S01A },
  { id: "02", name: '02 · Outbound bus list', C: S02 },
  { id: "03", name: '03 · Outbound seat map', C: S03 },
  { id: "03a", name: '03a · Seat map · sheet full', C: S03A },
  { id: "03b", name: '03b · Seat map · seat selected', C: S03B },
  { id: "04", name: '04 · Board & drop · boarding', C: S04 },
  { id: "04a", name: '04a · Board & drop · dropping', C: S04A },
  { id: "05", name: '05 · Return · pick your days', C: S05 },
  { id: "05a", name: '05a · Return · window chosen', C: S05A },
  { id: "05b", name: '05b · Return · one day picked', C: S05B },
  { id: "06", name: '06 · Your return · pick a day', C: S06 },
  { id: "06a", name: '06a · Your return · day chosen', C: S06A },
  { id: "06b", name: '06b · Your return · day cannot change', C: S06B },
  { id: "07", name: '07 · Choose your bus', C: S07 },
  { id: "08", name: '08 · Review your trip', C: S08 },
  { id: "08a", name: '08a · Return seat', C: S08A },
  { id: "08b", name: '08b · Return points', C: S08B },
  { id: "08c", name: '08c · Return dropping', C: S08C },
  { id: "09", name: '09 · Pay', C: S09 },
  { id: "09a", name: '09a · Booking details', C: S09A },
  { id: "09b", name: '09b · Please wait', C: S09B },
  { id: "11", name: '11 · Ticket details', C: S11 },
  { id: "11a", name: '11a · Change of plans', C: S11A },
  { id: "12", name: '12 · My Bookings', C: S12 },
  { id: "12a", name: '12a · My Bookings · empty', C: S12A },
  { id: "13", name: '13 · Change day', C: S13 },
  { id: "14", name: '14 · Move · buses', C: S14 },
  { id: "15", name: '15 · Confirm the move', C: S15 },
  { id: "16", name: '16 · Return moved', C: S16 },
  { id: "17", name: '17 · Profile', C: S17 },
  { id: "18", name: '18 · Review and cancel', C: S18 },
  { id: "19", name: '19 · Refund details', C: S19 },
  { id: "19a", name: '19a · Why cancel', C: S19A },
  { id: "20", name: '20 · Ticket cancelled', C: S20 },
  { id: "21", name: '21 · Filter Buses', C: S21 },
  { id: "21a", name: '21a · Filter Buses · AI', C: S21A },
  { id: "22", name: '22 · No buses', C: S22 },
  { id: "S1", name: 'S1 · Route has none · Review your trip', C: ST1 },
  { id: "S2", name: 'S2 · None in window · Your return', C: ST2 },
  { id: "S3", name: 'S3 · Return seat gone · Review your trip', C: ST3 },
  { id: "S4", name: 'S4 · Past cutoff · Ticket details', C: ST4 },
  { id: "S5", name: 'S5 · Already moved · Ticket details', C: ST5 },
  { id: "S6", name: 'S6 · Loading · Your return', C: ST6 },
  { id: "S7", name: 'S7 · Can’t check · Your return', C: ST7 },
  { id: "S8", name: 'S8 · Offline · Pick your days', C: ST8 },
  { id: "S9", name: 'S9 · No other days · Change day', C: ST9 },
  { id: "S10", name: 'S10 · Seat lost mid-swap · Confirm the move', C: ST10 },
  { id: "S11", name: 'S11 · Return dropped · Ticket details', C: ST11 },
  { id: "S12a", name: 'S12a · Six passengers · Review your trip', C: ST12A },
  { id: "S12b", name: 'S12b · Six passengers · Ticket details', C: ST12B },
];
