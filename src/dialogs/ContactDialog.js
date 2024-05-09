/**
 * Dialogs
 * This component is used to add a new contact to the contact list.
 * It contains a form with fields for name and email.
 */
import { Dialog, Text, Flex, Button } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
function ContactDialog(props) {
  console.log("pi" + JSON.stringify(props));
  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value) {
      alert("Please fill out all fields");
      return;
    }
    props.updateContactDetails({
      name: e.target[0].value,
      email: e.target[1].value,
    });
  }
  return (
    <Dialog.Content maxWidth="450px">
      <Dialog.Title>Add Contact</Dialog.Title>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" className="bottom-padding">
          <Text as="div" gap="2" py="10" size="2" weight="bold">
            Name
          </Text>
          <TextField.Root placeholder="Please enter your name..."></TextField.Root>
        </Flex>
        <Flex direction="column" className="bottom-padding">
          <Text as="div" gap="2" py="10" size="2" weight="bold">
            Email
          </Text>
          <TextField.Root placeholder="Please enter your email..."></TextField.Root>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button>Save</Button>
        </Flex>
      </form>
    </Dialog.Content>
  );
}
export default ContactDialog;
