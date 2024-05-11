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

/* router.get for mainControllers */
router.get("/", renderHome);
router.get("/about", renderTeam);
router.get("/latest", renderLatest);
router.get("/tickets&hospitality", renderTicketsHospitality);
router.get("/contact", renderContact);

/* router.get for secondaryControllers */
router.get("/discover", renderDiscover);
router.get("/news", renderNews);
router.get("/fixtures&results", renderFixturesResults);
router.get("/leagueTables", renderLeagueTables);
router.get("/players&staff", renderPlayersStaff);
router.get("/membership", renderMembership);
router.get("/seasonTickets", renderSeasonTickets);
router.get("/tickets", renderTickets);

export default router;

/* 
Routes in an Express.js application are fundamentally important because 
they dictate how an application responds to various HTTP requests 
at specific URLs (or paths). */

/* 
1. URL Matching: Each route specifies a pattern to match against the incoming request URL.
2. HTTP Methods: Routes are also defined with specific HTTP methods like GET, POST, PUT, DELETE, 
etc., which correspond to CRUD (Create, Read, Update, Delete) operations.
3. Middleware Functions: When a route is matched, Express executes one or more middleware 
functions defined for that route. These functions can execute any code, make changes to 
the request and the response objects, end the request-response cycle, and call the 
next middleware function. 
*/
