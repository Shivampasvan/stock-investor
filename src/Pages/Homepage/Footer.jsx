import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
  } from "@chakra-ui/react";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import TwitterIcon from "@mui/icons-material/Twitter";
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <>
        <Box
          bg={useColorModeValue("rgb(27,32,40)", "rgb(27,32,40)")}
          color={useColorModeValue("whiteAlpha.700", "whiteAlpha.700")}
          mt={100}
        >
          <Container as={Stack} maxW={"6xl"} py={100}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
  
              <Stack align={"flex-start"}>
                <ListHeader>Company</ListHeader>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Portfolio</Link>
                <Link href={"#"}>Contact Us</Link>
              </Stack>
  
              <Stack align={"flex-start"}>
                <ListHeader>Help</ListHeader>
                <Link href={"#"}>Customer Support</Link>
                <Link href={"#"}>Delivery Details</Link>
                <Link href={"#"}>Terms & Condition</Link>
                <Link href={"#"}>Privacy Policy</Link>
              </Stack>
  
              <Stack align={"flex-start"}>
                <ListHeader>Resources</ListHeader>
                <Link href={"#"}>Modules</Link>
                <Link href={"#"}>Blogs</Link>
              </Stack>
            </SimpleGrid>
          </Container>
  
          <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.400", "gray.700")}
            // pb={50}
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ md: "space-between" }}
              align={{ md: "center" }}
            >
              
              <Text>
                © Copyright 2023, All Rights Reserved by Fundfuelz.
              </Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <TwitterIcon />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <YouTubeIcon />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <InstagramIcon />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Box>
      </>
    );
  }