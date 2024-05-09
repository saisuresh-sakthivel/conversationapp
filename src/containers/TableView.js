/**
 * @file TableView.js
 * @name TableView
 * @fileoverview This file contains the TableView component.
 * This component displays the list of conversations.
 * It uses the Headercomponent to render the header.
 * It uses the ConvDialog component to display the dialog for a conversation.
 */
import { Table, Flex, Dialog, Card, Button, Heading } from "@radix-ui/themes";
import ConvDialog from "../dialogs/ConvDialog";
import { conversation } from "../data";
import BadgeComponent from "../component/BadgeComponent";
import { useState } from "react";

import Headercomponent from "../component/HeaderComponent";
function TableView() {
  const [conversationData, setConversationData] = useState(conversation);

  const sortData = (key) => {
    // Sort the data based on the 'name' property
    const sortedData = [...conversationData].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setConversationData(sortedData); // Update the state with the sorted array
  };
  return (
    <Flex direction="column" gap="6">
      <Flex gap="2" justify="center" p="10px" size="100px" my="10px">
        <Heading as="h1" size="9">
          Conversation App
        </Heading>
      </Flex>
      <Headercomponent page="home" key="Home" />
      <Flex justify="start">
        <Card>
          <Flex gap="20px" justify="start">
            <div className="label">Sort By : </div>
            <Button onClick={() => sortData("name")}>Name</Button>
            <Button onClick={() => sortData("status")}>Status</Button>
          </Flex>
        </Card>
      </Flex>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Subject</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {conversationData.map((item) => (
            <Dialog.Root>
              <Dialog.Trigger>
                <Table.Row className="box" key={item.id}>
                  <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.subject}</Table.Cell>
                  <Table.Cell>
                    <BadgeComponent status={item.status} />
                  </Table.Cell>
                </Table.Row>
              </Dialog.Trigger>
              <ConvDialog {...item}> </ConvDialog>
            </Dialog.Root>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}
export default TableView;
