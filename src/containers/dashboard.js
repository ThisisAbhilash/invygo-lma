import React, { useState } from "react";
import { Box, Flex, Tabs, Tab, TabList, Button, Text, Code, Divider, 
  Accordion, AccordionItem, AccordionHeader, AccordionIcon, AccordionPanel, 
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent, Heading,
  AlertDialogOverlay, Stack } from "@chakra-ui/core";
import { FaUser, FaCar, FaBookmark, FaWhatsappSquare } from 'react-icons/fa';
import { GiSandsOfTime } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import moment from 'moment';
import { fetchActivities } from "../api";
import { getUserDetails, logout, isLoggedIn } from "../auth";
import { Redirect } from 'react-router-dom';

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeDate, setActiveDate] = useState(moment());
  const [activities, setActivities] = useState([]);
  const [alertOpen, toggleAlertOpen] = useState({ status: false, bookingId: null });
  const onAlertClose = () => toggleAlertOpen({ status: false, bookingId: null });
  const cancelRef = React.useRef();

  const user = getUserDetails();

  React.useEffect(() => {
    fetchActivities(moment(activeDate).format('YYYY-MM-DD'))
      .then(setActivities);
  }, [activeDate]);

  if (!isLoggedIn()) {
    return (<Redirect to='/' />)
  }
  
  return (
    <Flex flexDirection="column" mt='2'>
      <Box>
        <Tabs defaultIndex={0} isFitted variant="enclosed" onChange={index => setTabIndex(index)} color="white" bg={'#ccc'}>
          <TabList>
            <Tab><Box as={FaCar} size="26px" mr='2' /> Activities</Tab>
            <Tab><Box as={FaUser} size="26px" mr='2' /> Profile</Tab>
          </TabList>
        </Tabs>
        {tabIndex === 0 && 
          <>
            <Flex justifyContent='space-around' mt='4'>
              <Button variantColor="teal" mr='2' onClick={() => setActiveDate(moment(activeDate).subtract(1, 'day'))}> prev </Button>
              <Text mr='2' fontSize="16px">
                {moment(activeDate).format('ddd, DD MMM YYYY')}
              </Text>
              <Button variantColor="teal" onClick={() => setActiveDate(moment(activeDate).add(1, 'day'))}>next</Button>
            </Flex>
            <Divider />
            {!activities.length && <Code mb='5'>No activities yet for the day ! 😄</Code>}
            {activities.length > 0 && 
              <>
                <Heading size="xs" ml='4' mb='5'>Showing {activities.length} activities ...</Heading>
                <Stack spacing={8}>
                  {activities.map((o, index) => {
                    const { bookingId, customerName, deliveryAddress, returnPickUpAddress, countryCode, mobile, 
                      returnPickUp, brandName, carName, plateNumber, pendingAmount, bookingDateTime } = o;
                    const { longitude, latitude, companyAddress, addressName } = returnPickUp ? returnPickUpAddress : deliveryAddress;
                    return (
                        <Box p={3} w="100%" shadow="md" borderWidth="1px" key={index}>
                          <Flex flexDirection="row" justifyContent="space-even">
                            <Box as={FaBookmark} size="14px" mr='2' /> <Text fontSize='14px'>Booking No. {bookingId}</Text>
                            <Box as={FaCar} color={returnPickUp ? 'red.400' : 'green.400'} size="14px" ml='4' mr='2' /> <Text fontSize='14px'>{returnPickUp ? 'Pick Up' : 'Delivery'}</Text>
                            <Box as={GiSandsOfTime} size="14px" ml='4' mr='2' /> <Text fontSize='14px'>{moment(bookingDateTime).format('HH:mm')} - {moment(bookingDateTime).add(3, 'h').format('HH:mm')}</Text>
                          </Flex>
                          <Text mt={2}>Customer Name : {customerName}</Text>
                          <Text mt={2}>
                            Mobile : {countryCode}-{mobile}
                            <a href={`tel:${countryCode}${mobile}`}><Box as={FiPhoneCall} color={'teal.400'} size="18px" ml='3' /></a>
                            <a href={` https://wa.me/${countryCode}${mobile}`}><Box as={FaWhatsappSquare} color={'green.400'} size="18px" ml='5' /></a>
                          </Text>
                          <Text mt={2}>Customer Address : <a href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}>{addressName}, {companyAddress}</a></Text>
                          <Text mt={2}>{brandName}, {carName} - {plateNumber}</Text>
                          {returnPickUp && <Text mt={2} color="red.500">Pending Amount :- AED {pendingAmount}</Text>}
                          <Button variantColor="teal" mr='3' onClick={() => toggleAlertOpen({ status: true, bookingId: bookingId })}>{returnPickUp ? 'Car Picked' : 'Car Delivered'}</Button>
                        </Box>
                    );
                  })}
                </Stack>
              </>
            }       
          </>
        }
        {tabIndex === 1 && 
          <>
          <Box p={5} shadow="md" borderWidth="1px">
            <Text mt={4}>Name : {user.name}</Text>
            <Text mt={4}>Mobile : {user.mobile}</Text>
            <Text mt={4}>Dealer : {user.dealer}</Text>
            <Button variantColor="teal" onClick={logout}>Log out</Button>
          </Box>
          </>
        }
      </Box>
      <AlertDialog
        isOpen={alertOpen.status}
        leastDestructiveRef={cancelRef}
        onClose={onAlertClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Confirm Activity
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onAlertClose}>
              Cancel
            </Button>
            <Button variantColor="green" onClick={onAlertClose} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
}