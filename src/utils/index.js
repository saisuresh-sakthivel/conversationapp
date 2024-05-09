export function sortdata(objs, key) {
  return objs.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
}
export function getTime(param) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(param);
  let time = new Date(parseInt(param));
  let day = time.getDate();
  let month = monthNames[time.getMonth()];
  let hours = time.getHours();
  let minutes = time.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let meridian = hours > 12 ? "PM" : "AM";
  return (
    month +
    " " +
    day +
    " (" +
    (hours % 12) +
    ":" +
    minutes +
    " " +
    meridian +
    ")"
  );
}
