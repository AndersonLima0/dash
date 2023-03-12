import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vw" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" //8 == 32px no chakra
        borderRadius={8} //8px normais
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="emal" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
