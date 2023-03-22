import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}


export default function Profile({showProfileData = true} : ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box>
        <Text mr="4" align="center">
          Anderson Lima
        </Text>
        <Text color="gray.300" fontSize="small">
          andersonlimaf566@gmail.com
        </Text>
      </Box>
      )}
      <Avatar
        size="md"
        name="Anderson Lima"
        src="http://github.com/AndersonLima0.png"
        ml="2"
      />
    </Flex>
  );
}
