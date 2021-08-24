import React from 'react';
import useSWR from 'swr';
import { Flex, Box, Heading, VStack } from '@chakra-ui/layout';

export default function DashboardPage() {
  const {
    data,
    isValidating: dashboardIsLoading,
    error: dashboardFetchError,
  } = useSWR(`/api/galleries`);

  console.log(data);

  if (dashboardIsLoading) {
    return <h1>Loading dashboard...</h1>;
  }

  if (dashboardFetchError) {
    return <h1>Error loading the dashboard</h1>;
  }

  return (
    <Box
      m="0 auto"
      p={5}
      maxWidth={{
        sm: '100%',
        md: '100%',
        lg: '40em',
        xl: '50em',
        '2xl': '74em',
      }}
    >
      <Heading size="xl" mb={3}>
        dashboard
      </Heading>
      <VStack spacing={5}>
        {data?.map((item: any) => (
          <Flex
            key={item.id}
            width="100%"
            direction="row"
            radius={10}
            boxShadow="base"
            p={3}
          >
            <Heading size="md">{item.name}</Heading>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}