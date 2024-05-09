import {
  Table,
  Badge,
  Flex,
  Dialog,
  Card,
  Button,
  Box,
} from "@radix-ui/themes";
import ConvDialog from "../dialogs/ConvDialog";
import { conversation } from "../data";
import { useEffect, useState } from "react";
import { sortdata } from "../utils";

import Headercomponent from "../HeaderComponent";
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
      <Headercomponent />
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
                    <Badge color="green">{item.status}</Badge>
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
