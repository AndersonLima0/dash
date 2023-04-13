import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/Form/input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const handleSignIn = (values: any) => {
    console.log(values);
  };

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
        /* onSubmit={handleSubmit(handleSignIn)} */
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
