const express = require('express');
const router = express.Router();
const CustomerRoutes = require('./CustomerRoutes');
const ItemRoutes = require('./ItemRoutes');
const OrderRoutes = require('./OrderRoutes');
const RegistrationRoutes = require('./RegistrationRoutes');  // Include the LoginRoutes
const PostRoutes = require('./PostRoutes'); // Include the PostRoutes

const url_prefix = "/api";
router.use(`${url_prefix}/customers`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/items`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/orders`, new OrderRoutes().getRouter);
router.use(`${url_prefix}/registrations`, new RegistrationRoutes().getRouter()); // Mount the RegistrationRoutes
router.use(`${url_prefix}/posts`, new PostRoutes().getRouter()); // Mount the PostRoutes

module.exports = router; 
