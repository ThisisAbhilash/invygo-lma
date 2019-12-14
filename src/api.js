const dummyData = [
  {   
    "bookingId" : 1477,
    "forceReturn" : false, 
    "deliveryAddress" : {
        "longitude" : 55.2452567, 
        "latitude" : 25.2016428, 
        "companyAddress" : "Jumeirah - Dubai - United Arab Emirates", 
        "addressName" : "Jumeirah"
    }, 
    "returnPickUpAddress" : {
        "longitude" : null, 
        "latitude" : null, 
        "companyAddress" : null, 
        "addressName" : null
    }, 
    "returnPickUp" : false, 
    "delivery" : true, 
    "pendingAmount" : 0, 
    "currentStatus" : "RETURN_REQUEST_ACCEPTED",
    brandName: 'Nissan',
    carName: 'Kicks',
    year: '2019',
    plateNumber: 'DXB 11 12345',
    countryCode: '971',
    mobile: '1234567890',
    customerName: 'Test User 1',
    bookingDateTime : "2019-12-15T04:00:00.000+0000",
    returnDateTime : "2020-01-30T04:00:00.000+0000",

},
{ 
    "bookingId" : 176, 
    "deliveryAddress" : {
        "longitude" : 55.3647019, 
        "latitude" : 25.2278918, 
        "companyAddress" : "31 5th Street - Dubai - United Arab Emirates", 
        "addressName" : "31"
    }, 
    "returnPickUpAddress" : {
      "longitude" : 55.3647019, 
      "latitude" : 25.2278918, 
      "companyAddress" : "31 5th Street - Dubai - United Arab Emirates", 
      "addressName" : "31"
    }, 
    "returnPickUp" : true, 
    "delivery" : true, 
    "pendingAmount" : 0, 
    "currentStatus" : "PENDING", 
    brandName: 'Nissan',
    carName: 'Kicks',
    year: '2019',
    plateNumber: 'DXB 11 12345',
    countryCode: '971',
    mobile: '1234567890',
    customerName: 'Test User 2',
    bookingDateTime : "2019-12-15T04:00:00.000+0000",
    returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
    "bookingId" : 175, 
    "forceReturn" : false, 
    "deliveryAddress" : {
        "longitude" : 55.2707828, 
        "latitude" : 25.2048493, 
        "companyAddress" : "Dubai - United Arab Emirates", 
        "addressName" : "Dubai"
    }, 
    "returnPickUpAddress" : {
        "longitude" : null, 
        "latitude" : null, 
        "companyAddress" : null, 
        "addressName" : null
    }, 
    "returnPickUp" : false, 
    "delivery" : true, 
    "pendingAmount" : 0,  
    brandName: 'Nissan',
    carName: 'Kicks',
    year: '2019',
    plateNumber: 'DXB 11 12345',
    countryCode: '971',
    mobile: '1234567890',
    customerName: 'Test User 3',
    bookingDateTime : "2019-12-15T04:00:00.000+0000",
    returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
    "bookingId" : 1075,  
    "forceReturn" : false, 
    "deliveryAddress" : {
        "longitude" : 55.2707828, 
        "latitude" : 25.2048493, 
        "companyAddress" : "Dubai - United Arab Emirates", 
        "addressName" : "Dubai"
    }, 
    "returnPickUpAddress" : {
        "longitude" : null, 
        "latitude" : null, 
        "companyAddress" : null, 
        "addressName" : null
    }, 
    "returnPickUp" : false, 
    "delivery" : true, 
    "pendingAmount" : 170,  
    brandName: 'Nissan',
    carName: 'Kicks',
    year: '2019',
    plateNumber: 'DXB 11 12345',
    countryCode: '971',
    mobile: '1234567890',
    customerName: 'Test User 4',
    bookingDateTime : "2019-12-15T04:00:00.000+0000",
    returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
    "bookingId" : 1375,  
    "forceReturn" : false, 
    "deliveryAddress" : {
        "longitude" : 55.2707828, 
        "latitude" : 25.2048493, 
        "companyAddress" : "Dubai - United Arab Emirates", 
        "addressName" : "Dubai"
    }, 
    "returnPickUpAddress" : {
      "longitude" : 55.2707828, 
      "latitude" : 25.2048493, 
      "companyAddress" : "Dubai - United Arab Emirates", 
      "addressName" : "Dubai"
    }, 
    "returnPickUp" : true, 
    "delivery" : true, 
    "pendingAmount" : 170,  
    brandName: 'Nissan',
    carName: 'Kicks',
    year: '2019',
    plateNumber: 'DXB 11 12345',
    countryCode: '971',
    mobile: '1234567890',
    customerName: 'Test User 5',
    bookingDateTime : "2019-12-15T04:00:00.000+0000",
    returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{   
  "bookingId" : 1477,
  "forceReturn" : false, 
  "deliveryAddress" : {
      "longitude" : 55.2452567, 
      "latitude" : 25.2016428, 
      "companyAddress" : "Jumeirah - Dubai - United Arab Emirates", 
      "addressName" : "Jumeirah"
  }, 
  "returnPickUpAddress" : {
      "longitude" : null, 
      "latitude" : null, 
      "companyAddress" : null, 
      "addressName" : null
  }, 
  "returnPickUp" : false, 
  "delivery" : true, 
  "pendingAmount" : 0, 
  "currentStatus" : "RETURN_REQUEST_ACCEPTED",
  brandName: 'Nissan',
  carName: 'Kicks',
  year: '2019',
  plateNumber: 'DXB 11 12345',
  countryCode: '971',
  mobile: '1234567890',
  customerName: 'Test User 1',
  bookingDateTime : "2019-12-15T04:00:00.000+0000",
  returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{ 
  "bookingId" : 176, 
  "deliveryAddress" : {
      "longitude" : 55.3647019, 
      "latitude" : 25.2278918, 
      "companyAddress" : "31 5th Street - Dubai - United Arab Emirates", 
      "addressName" : "31"
  }, 
  "returnPickUpAddress" : {
    "longitude" : 55.3647019, 
    "latitude" : 25.2278918, 
    "companyAddress" : "31 5th Street - Dubai - United Arab Emirates", 
    "addressName" : "31"
  }, 
  "returnPickUp" : true, 
  "delivery" : true, 
  "pendingAmount" : 0, 
  "currentStatus" : "PENDING", 
  brandName: 'Nissan',
  carName: 'Kicks',
  year: '2019',
  plateNumber: 'DXB 11 12345',
  countryCode: '971',
  mobile: '1234567890',
  customerName: 'Test User 2',
  bookingDateTime : "2019-12-15T04:00:00.000+0000",
  returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
  "bookingId" : 175, 
  "forceReturn" : false, 
  "deliveryAddress" : {
      "longitude" : 55.2707828, 
      "latitude" : 25.2048493, 
      "companyAddress" : "Dubai - United Arab Emirates", 
      "addressName" : "Dubai"
  }, 
  "returnPickUpAddress" : {
      "longitude" : null, 
      "latitude" : null, 
      "companyAddress" : null, 
      "addressName" : null
  }, 
  "returnPickUp" : false, 
  "delivery" : true, 
  "pendingAmount" : 0,  
  brandName: 'Nissan',
  carName: 'Kicks',
  year: '2019',
  plateNumber: 'DXB 11 12345',
  countryCode: '971',
  mobile: '1234567890',
  customerName: 'Test User 3',
  bookingDateTime : "2019-12-15T04:00:00.000+0000",
  returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
  "bookingId" : 1075,  
  "forceReturn" : false, 
  "deliveryAddress" : {
      "longitude" : 55.2707828, 
      "latitude" : 25.2048493, 
      "companyAddress" : "Dubai - United Arab Emirates", 
      "addressName" : "Dubai"
  }, 
  "returnPickUpAddress" : {
      "longitude" : null, 
      "latitude" : null, 
      "companyAddress" : null, 
      "addressName" : null
  }, 
  "returnPickUp" : false, 
  "delivery" : true, 
  "pendingAmount" : 170,  
  brandName: 'Nissan',
  carName: 'Kicks',
  year: '2019',
  plateNumber: 'DXB 11 12345',
  countryCode: '971',
  mobile: '1234567890',
  customerName: 'Test User 4',
  bookingDateTime : "2019-12-15T04:00:00.000+0000",
  returnDateTime : "2020-01-30T04:00:00.000+0000",
},
{  
  "bookingId" : 1375,  
  "forceReturn" : false, 
  "deliveryAddress" : {
      "longitude" : 55.2707828, 
      "latitude" : 25.2048493, 
      "companyAddress" : "Dubai - United Arab Emirates", 
      "addressName" : "Dubai"
  }, 
  "returnPickUpAddress" : {
    "longitude" : 55.2707828, 
    "latitude" : 25.2048493, 
    "companyAddress" : "Dubai - United Arab Emirates", 
    "addressName" : "Dubai"
  }, 
  "returnPickUp" : true, 
  "delivery" : true, 
  "pendingAmount" : 170,  
  brandName: 'Nissan',
  carName: 'Kicks',
  year: '2019',
  plateNumber: 'DXB 11 12345',
  countryCode: '971',
  mobile: '1234567890',
  customerName: 'Test User 5',
  bookingDateTime : "2019-12-15T04:00:00.000+0000",
  returnDateTime : "2020-01-30T04:00:00.000+0000",
}
]
export const apiSendOtp = mobile => new Promise((resolve) => setTimeout(() => resolve(1), 2000));

export const apiLogin = (mobile, otp) => {
  // api call to login
  // mock now
  console.log(mobile, otp);
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      name: 'Driver 1', token: 'test_token', role: ['driver'], mobile, dealer: 'Paramount Gulf LLC'
    }), 2000);
  })
}

export const fetchActivities = (activeDate) => {
  // api call to fetch activities
  // mock now
  console.log('activeDate ', activeDate);
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyData), 2000);
  })
}