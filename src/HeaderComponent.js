import { Link, NavLink } from "react-router-dom";
import { Flex, Text, Button } from "@radix-ui/themes";

function Headercomponent() {
  return (
    <Flex gap="2" direction="column">
      <Text as="div" size="2" p="20px" weight="bold">
        {" "}
        Conversation App
      </Text>
      <Flex gap="4" justify="start">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact" className="Header-Item">
          <Button variant="solid">Contact</Button>
        </NavLink>
        <Link href="/" size="1">
          Home
        </Link>
        <Link href="/contact" size="1">
          Contact
        </Link>
      </Flex>
    </Flex>
  );
}

export default Headercomponent;
