// secondaryController.js
// Controller functions to render pages in the "latestPages", "teamPages", and "ticketPages" categories

// Render pages under the "latestPages" category
export const renderDiscover = (req, res) => {
  res.render("secondaryPages/latestPages/discover", { title: "Discover" });
};

export const renderNews = (req, res) => {
  res.render("secondaryPages/latestPages/news", { title: "News" });
};

// Render pages under the "teamPages" category
export const renderFixturesResults = (req, res) => {
  res.render("secondaryPages/teamPages/fixtures-results", {
    title: "Fixtures & Results",
  });
};

export const renderLeagueTables = (req, res) => {
  res.render("secondaryPages/teamPages/league-tables", {
    title: "League Tables",
  });
};

export const renderPlayersStaff = (req, res) => {
  res.render("secondaryPages/teamPages/players-staff", {
    title: "Players & Staff",
  });
};

// Render pages under the "ticketPages" category
export const renderMembership = (req, res) => {
  res.render("secondaryPages/ticketPages/membership", { title: "Membership" });
};

export const renderSeasonTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/season-tickets", {
    title: "Season Tickets",
  });
};

export const renderTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/tickets", { title: "Tickets" });
};
