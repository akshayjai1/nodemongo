const getSubscriber = (req, res) => {
  res.send(res.subscriber);
};
module.exports = getSubscriber;
