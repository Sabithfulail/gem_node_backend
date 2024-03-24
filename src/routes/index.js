const express = require('express');
const router = express.Router();
const CustomerRoutes = require('./CustomerRoutes');
const ItemRoutes = require('./ItemRoutes');
const OrderRoutes = require('./OrderRoutes');
const LoginRoutes = require('./LoginRoutes');  // Include the LoginRoutes
const RegistrationRoutes = require('./RegistrationRoutes');  // Include the LoginRoutes

const url_prefix = "/api";
router.use(`${url_prefix}/customers`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/items`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/orders`, new OrderRoutes().getRouter);
//login api created
router.use(`${url_prefix}/logins`, new LoginRoutes().getRouter); // Mount the LoginRoutes
router.use(`${url_prefix}/registration`, new RegistrationRoutes().getRouter); // Mount the LoginRoutes
module.exports = router; 
