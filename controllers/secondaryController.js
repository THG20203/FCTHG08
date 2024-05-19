// secondaryController.js
// Controller functions to render pages in the "latestPages", "teamPages", and "ticketPages" categories

// Render pages under the "latestPages" category
export const renderDiscover = (req, res) => {
  res.render("secondaryPages/latestPages/discover", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "discover",
  });
};

export const renderNews = (req, res) => {
  res.render("secondaryPages/latestPages/news", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "news",
  });
};

// Render pages under the "teamPages" category
export const renderFixturesResults = (req, res) => {
  res.render("secondaryPages/teamPages/fixtures-results", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "fixtures-results",
  });
};

export const renderLeagueTables = (req, res) => {
  res.render("secondaryPages/teamPages/league-tables", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "league-tables",
  });
};

export const renderPlayersStaff = (req, res) => {
  res.render("secondaryPages/teamPages/players-staff", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "players-staff",
  });
};

// Render pages under the "ticketPages" category
export const renderMembership = (req, res) => {
  res.render("secondaryPages/ticketPages/membership", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "membership",
  });
};

export const renderSeasonTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/season-tickets", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "season-tickets",
  });
};

export const renderTickets = (req, res) => {
  res.render("secondaryPages/ticketPages/tickets", {
    pageStylePath: "secondary",
    scriptsPath: "secondary",
    pageStyle: "tickets",
  });
};
