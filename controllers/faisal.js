module.exports = {
  homePage: async (re, res, next) => {
    res.render("index", {
      welcomeMsg: "Welcome to King Faisal Hospital Management System",
      introMsg:
        "We strive to make the Hospital experience as seamless as possible. We equip our doctors with cutting edge technologies to ensure they stay competitive in their field. Our patient's records are stored securely to help in future diagnostics and providing them with world-class services.",
    });
  },
};
