const express = require('express');
const router = express.Router();
const CustomerRoutes = require('./CustomerRoutes');
const ItemRoutes = require('./ItemRoutes');
const OrderRoutes = require('./OrderRoutes');
const UserRoutes = require('./UserRoutes');

const url_prefix = "/api";
router.use(`${url_prefix}/customers`, new CustomerRoutes().getRouter());
router.use(`${url_prefix}/items`, new ItemRoutes().getRouter());
router.use(`${url_prefix}/orders`, new OrderRoutes().getRouter);
router.use(`${url_prefix}/users`, UserRoutes);
module.exports = router;