// mainController.js
// Controllers for main routes in the application

export const renderHome = (req, res) => res.render("home");
export const renderLatest = (req, res) => res.render("latest");
export const renderTeam = (req, res) => res.render("team");
export const renderTicketsHospitality = (req, res) =>
  res.render("tickets-hospitality");
export const renderContact = (req, res) => res.render("contact");
