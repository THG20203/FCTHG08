/* Latest Pages */
export function renderDiscover(req, res) {
  res.render("discover");
}

export function renderNews(req, res) {
  res.render("news");
}

/* Team Pages */
export function renderFixturesResults(req, res) {
  res.render("fixtures&results");
}

export function renderLeagueTables(req, res) {
  res.render("leagueTables");
}

export function renderPlayersStaff(req, res) {
  res.render("players&staff");
}

/* Ticket Pages */
export function renderMembership(req, res) {
  res.render("membership");
}

export function renderSeasonTickets(req, res) {
  res.render("seasonTickets");
}

export function renderTickets(req, res) {
  res.render("tickets");
}
