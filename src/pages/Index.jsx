import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Grid, Container } from "@chakra-ui/react";
import { FaGlobe, FaGift, FaSmile } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="purple.100" py={20}>
        <Container maxW="container.lg">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Discover a World of Sweets
              </Heading>
              <Text fontSize="xl" mb={8}>
                Indulge in exotic candies from every corner of the globe.
              </Text>
              <Button colorScheme="purple" size="lg">
                Shop Now
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1501514799070-290ae1c889fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3NvcnRlZCUyMGludGVybmF0aW9uYWwlMjBjYW5kaWVzfGVufDB8fHx8MTcxMjg0NzUyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Candy" w={400} />
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Flex direction="column" alignItems="center">
              <FaGlobe size={48} color="purple" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                International Selection
              </Heading>
              <Text textAlign="center">Choose from a curated collection of unique sweets from around the world.</Text>
            </Flex>
            <Flex direction="column" alignItems="center">
              <FaGift size={48} color="purple" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Gift Baskets
              </Heading>
              <Text textAlign="center">Surprise your loved ones with a delightful assortment of international candies.</Text>
            </Flex>
            <Flex direction="column" alignItems="center">
              <FaSmile size={48} color="purple" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Fun for All Ages
              </Heading>
              <Text textAlign="center">Discover a joyful treat that will bring a smile to everyone's face.</Text>
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* Featured Candies Section */}
      <Box bg="purple.50" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Featured Candies
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1528164344705-47542687000d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGtpdCUyMGthdHxlbnwwfHx8fDE3MTI4NDc1Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Japanese Kit Kat" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                Japanese Kit Kat
              </Heading>
              <Text>Unique flavors like matcha, sakura, and sweet potato.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1620941601872-d37f560f3887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBoYXJpYm8lMjBndW1teSUyMGJlYXJzfGVufDB8fHx8MTcxMjg0NzUyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="German Haribo Gummy Bears" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                German Haribo Gummy Bears
              </Heading>
              <Text>The original gummy bears in a variety of fruity flavors.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1499195333224-3ce974eecb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwc3BpY3klMjB0YW1hcmluZCUyMGNhbmR5fGVufDB8fHx8MTcxMjg0NzUyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mexican Spicy Tamarind Candy" mb={4} />
              <Heading as="h4" size="md" mb={2}>
                Mexican Spicy Tamarind Candy
              </Heading>
              <Text>A sweet and spicy treat with a kick of chili powder.</Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
