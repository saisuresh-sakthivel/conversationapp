/**
 * @file Contact.js is a container component that renders the Contact page.
 * This component displays the list of contacts and provides an option to add a new contact.
 * It uses the Headercomponent to render the header.
 * It uses the ContactDialog component to display the dialog for adding a new contact.
 * It uses the contacts data to display the list of contacts.
 */
import {
  Card,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Dialog,
} from "@radix-ui/themes";
import Headercomponent from "../component/HeaderComponent";
import { contacts } from "../data";
import { useState } from "react";
import ContactDialog from "../dialogs/ContactDialog";

function Contact() {
  console.log(contacts);
  const [contactDetails, setContactDetails] = useState(contacts);
  const [open, setOpen] = useState(false);
  const updateContactDetails = async (newContact) => {
    await setContactDetails([...contactDetails, newContact]);
    openDialog(false);
  };
  const openDialog = (param = true) => {
    setOpen(param);
  };

  return (
    <div>
      <Flex gap="2" justify="center" p="10px" size="100px" my="10px">
        <Heading as="h1" size="9">
          Contact
        </Heading>
      </Flex>
      <Headercomponent page="contact" key="Contact" />
      <Flex justify="end" p="20px">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <Button variant="solid" onClick={openDialog}>
              Add Contact
            </Button>
          </Dialog.Trigger>
          <ContactDialog
            updateContactDetails={updateContactDetails}
          ></ContactDialog>
        </Dialog.Root>
      </Flex>
      <Flex justify="center" wrap="wrap" p="20px">
        {contactDetails.map((item) => {
          return (
            <Card m="20px" width="200px">
              <Flex gap="3" align="center">
                <Box>
                  <div>&#9993;</div>
                </Box>
                <Box>
                  <Text as="div" size="2" weight="bold">
                    {item.name}
                  </Text>
                  <Text as="div" size="2" color="gray">
                    {item.email}
                  </Text>
                </Box>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
}
export default Contact;
