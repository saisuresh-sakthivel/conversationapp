import { Dialog, Text, Flex } from "@radix-ui/themes";
import { getTime } from "../utils";
function ConvDialog(props) {
  return (
    <Dialog.Content maxWidth="450px">
      <Dialog.Title>Conversation</Dialog.Title>

      {props.messages.map((message) => (
        <Flex direction="column" className="bottom-padding">
          <Text as="div" gap="2" py="10" size="2" weight="bold">
            {message.sender}
          </Text>
          <Flex justify="between">
            <Text as="div" justify="end" size="2" color="gray">
              {message.message}
            </Text>
            <Text size="2" color="cyan">
              {getTime(message.date)}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Dialog.Content>
  );
}
export default ConvDialog;
