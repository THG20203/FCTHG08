import { Router } from "express";
const router = Router();

/* Importing mainControllers */
import {
  renderIndex,
  renderAbout,
  renderContact,
  renderNews,
  renderDistribution,
  renderSustainability,
} from "../controllers/mainController.js";

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/contact", renderContact);
router.get("/news", renderNews);
router.get("/distribution", renderDistribution);
router.get("/sustainability", renderSustainability);

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
