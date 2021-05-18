import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gean Lucas</Text>
        <Text color="gray.300" fontSize="small">
          gean.lfpsa@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gean Lucas" src="https://github.com/legeannd.png" />
    </Flex>
  );
}