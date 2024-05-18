// secondaryController.js
// Controller functions to render pages in the "latestPages", "teamPages", and "ticketPages" categories

// Render pages under the "latestPages" category
export const renderDiscover = (req, res) => {
  res.render("secondaryPages/latestPages/discover", {
    pageStylePath: "secondary",
    pageStyle: "discover",
  });
};

export const renderNews = (req, res) => {
  res.render("secondaryPages/latestPages/news", {
    pageStylePath: "secondary",
    pageStyle: "news",
  });
};

// Render pages under the "teamPages" category
export const renderFixturesResults = (req, res) => {
  res.render("secondaryPages/teamPages/fixtures-results", {
    pageStylePath: "secondary",
    pageStyle: "fixtures-results",
  });
};

export const renderLeagueTables = (req, res) => {
  res.render("secondaryPages/teamPages/league-tables", {
    pageStylePath: "secondary",
    pageStyle: "league-tables",
  });
};

export const renderPlayersStaff = (req, res) => {
  res.render("secondaryPages/teamPages/players-staff", {
    pageStylePath: "secondary",
    pageStyle: "players-staff",
  });
};

// Render pages under the "ticketPages" category
export const renderMembership = (req, res) => {
  res.render("secondaryPages/ticketPages/membership", {
    pageStylePath: "secondary",
    pageStyle: "membership",
  });
};

export const renderSeasonTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/season-tickets", {
    pageStylePath: "secondary",
    pageStyle: "season-tickets",
  });
};

export const renderTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/tickets", {
    pageStylePath: "secondary",
    pageStyle: "tickets",
  });
};
