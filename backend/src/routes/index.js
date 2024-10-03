const express = require("express");
const router = express.Router();

//------------------------------------------------------------------------------
// import Routes
//------------------------------------------------------------------------------
const logo = require("./logoRoutes");
const favicon = require("./faviconRoutes");
const banner = require("./bannerRoutes");
const about = require("./aboutRoutes");
const contact = require("./contactRoutes");
const highlightProject = require("./highlightProjectRoute");
const whyChooseSection = require("./whychooseSectonRoute");
const whychoose = require("./whychooseRoute");
const gallery = require("./galleryRoute");
const featureProject = require("./featureProjectRoutes");
const businessInfo = require("./businessInfoRoutes");
const seo = require("./seoRoutes");
const projects = require("./projectRoute");
const privacy = require("./privacyRoute");
const director = require("./directorRoute");
const contactMsg = require("./contactMsgRoute");
const user = require("./userRoutes");

//------------------------------------------------------------------------------
// use Routes
//------------------------------------------------------------------------------
router.use("/logo", logo);
router.use("/favicon", favicon);
router.use("/banner", banner);
router.use("/about", about);
router.use("/contact", contact);
router.use("/highlightProject", highlightProject);
router.use("/whychooseSection", whyChooseSection);
router.use("/whychoose", whychoose);
router.use("/gallery", gallery);
router.use("/featureProject", featureProject);
router.use("/businessInfo", businessInfo);
router.use("/seo", seo);
router.use("/projects", projects);
router.use("/privacy", privacy);
router.use("/director", director);
router.use("/contactMsg", contactMsg);
router.use("/user", user);

module.exports = router;
