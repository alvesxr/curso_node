class home {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}
export default new home();
