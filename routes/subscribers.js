const express = require("express");
const router = express.Router();
const getSubscriberM = require("../middleware/getSubscriber");
const Subscriber = require("../models/subscriber");
const createSubscriber = require("./fun/createSubscriber");
const getAll = require("./fun/getAll");
const getSubscriber = require("./fun/getSubscriber");
const deleteSubscriber = require("./fun/deleteSubscriber");

router.get("/", getAll);

router.get("/:id", getSubscriberM, getSubscriber);
router.post("/", createSubscriber);
router.patch("/:id", getSubscriberM, (req, res) => {});
router.delete("/:id", getSubscriberM, deleteSubscriber);

module.exports = router;
