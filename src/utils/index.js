export function sortdata(objs, key) {
  return objs.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
}
export function getTime(param) {
  console.log(param);
  let time = new Date(parseInt(param));
  let hours = time.getHours();
  let meridian = hours > 12 ? "PM" : "AM";
  return (hours % 12) + ":" + time.getMinutes() + " " + meridian;
}
