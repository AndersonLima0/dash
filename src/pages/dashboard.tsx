import { Header } from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vw">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
