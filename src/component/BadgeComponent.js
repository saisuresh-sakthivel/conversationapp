import { Badge } from "@radix-ui/themes";
function BadgeComponent(props) {
  const status = props.status.toLowerCase();
  const color =
    status === "open" ? "gray" : status === "closed" ? "green" : "yellow";
  return (
    <div>
      <Badge color={color}>{props.status}</Badge>
    </div>
  );
}
export default BadgeComponent;
