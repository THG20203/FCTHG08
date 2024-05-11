// routes.js
// Setting up routes for an Express.js application

import { Router } from "express";
import * as mainController from "../controllers/mainController.js";
import * as secondaryController from "../controllers/secondaryController.js";

const router = Router();

// Routes for mainController
router.get("/", mainController.renderHome);
router.get("/team", mainController.renderTeam);
router.get("/latest", mainController.renderLatest);
router.get("/tickets-hospitality", mainController.renderTicketsHospitality);
router.get("/contact", mainController.renderContact);

// Routes for secondaryController
router.get("/discover", secondaryController.renderDiscover);
router.get("/news", secondaryController.renderNews);
router.get("/fixtures-results", secondaryController.renderFixturesResults);
router.get("/league-tables", secondaryController.renderLeagueTables);
router.get("/players-staff", secondaryController.renderPlayersStaff);
router.get("/membership", secondaryController.renderMembership);
router.get("/season-tickets", secondaryController.renderSeasonTickets);
router.get("/tickets", secondaryController.renderTickets);

export default router;
