// mainController.js
// Controllers for main routes in the application

export const renderHome = (req, res) =>
  res.render("home", { pageStylePath: "main", pageStyle: "home" });
export const renderLatest = (req, res) =>
  res.render("latest", { pageStylePath: "main", pageStyle: "latest" });
export const renderTeam = (req, res) =>
  res.render("team", { pageStylePath: "main", pageStyle: "team" });
export const renderTicketsHospitality = (req, res) =>
  res.render("tickets-hospitality", {
    pageStylePath: "main",
    pageStyle: "tickets-hospitality",
  });
export const renderContact = (req, res) =>
  res.render("contact", { pageStylePath: "main", pageStyle: "contact" });
