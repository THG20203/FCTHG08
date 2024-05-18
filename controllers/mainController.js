// mainController.js
// Controllers for main routes in the application

export const renderHome = (req, res) =>
  res.render("home", { pageStylePath: "main" });
export const renderLatest = (req, res) =>
  res.render("latest", { pageStylePath: "main" });
export const renderTeam = (req, res) =>
  res.render("team", { pageStylePath: "main" });
export const renderTicketsHospitality = (req, res) =>
  res.render("tickets-hospitality", { pageStylePath: "main" });
export const renderContact = (req, res) =>
  res.render("contact", { pageStylePath: "main" });
