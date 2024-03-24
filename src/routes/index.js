const express = require('express');
const router = express.Router();
const CustomerRoutes = require('./CustomerRoutes');
const ItemRoutes = require('./ItemRoutes');
const OrderRoutes = require('./OrderRoutes');
const LoginRoutes = require('./LoginRoutes');  
const RegistrationRoutes = require('./RegistrationRoutes');  

const url_prefix = "/api";
router.use(`${url_prefix}/customers`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/items`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/orders`, new OrderRoutes().getRouter());
router.use(`${url_prefix}/login`, new LoginRoutes().getRouter()); // Note the parentheses after getRouter
router.use(`${url_prefix}/registration`, new RegistrationRoutes().getRouter()); // Note the parentheses after getRouter

module.exports = router;
