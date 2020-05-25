const deleteSubscriber = async (req, res) => {
  try {
    const result = await res.subscriber.remove();
    res.json({ message: "subscriber deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = deleteSubscriber;
