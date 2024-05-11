// routes.js
// Setting up routes for an Express.js application, importing controller functions and defining routes

import { Router } from "express";
const router = Router();

/* Importing mainControllers */
import {
  renderHome,
  renderTeam,
  renderLatest,
  renderTicketsHospitality,
  renderContact,
} from "../controllers/mainController.js";

/* Importing secondaryControllers */
import {
  renderDiscover,
  renderNews,
  renderFixturesResults,
  renderLeagueTables,
  renderPlayersStaff,
  renderMembership,
  renderSeasonTickets,
  renderTickets,
} from "../controllers/secondaryController.js";

/* Define routes for mainControllers */
router.get("/", renderHome);
router.get("/about", renderTeam);
router.get("/latest", renderLatest);
router.get("/tickets-hospitality", renderTicketsHospitality);
router.get("/contact", renderContact);

/* Define routes for secondaryControllers */
router.get("/discover", renderDiscover);
router.get("/news", renderNews);
router.get("/fixtures-results", renderFixturesResults);
router.get("/league-tables", renderLeagueTables);
router.get("/players-staff", renderPlayersStaff);
router.get("/membership", renderMembership);
router.get("/season-tickets", renderSeasonTickets);
router.get("/tickets", renderTickets);

export default router;
