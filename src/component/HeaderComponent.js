/**
 * Header component
 * @name HeaderComponent
 * @fileoverview This file contains the HeaderComponent.
 * This component is used to display the header.
 * It contains the navigation links to Home and Contact page.
 * It also highlights the current page.
 * It is used in the Contact and TableView components.
 */
import { Link, NavLink } from "react-router-dom";
import { Flex, Text, Button } from "@radix-ui/themes";

function Headercomponent({ page }) {
  return (
    <Flex gap="4" justify="start">
      <NavLink to="/">
        <Button variant={page == "home" ? "soft" : "solid"}>Home</Button>
      </NavLink>
      <NavLink to="/contact">
        <Button variant={page == "contact" ? "soft" : "solid"}>Contact</Button>
      </NavLink>
    </Flex>
  );
}

export default Headercomponent;
