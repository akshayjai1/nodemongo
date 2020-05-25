const Subscriber = require("../../models/subscriber");

const getAll = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = getAll;
