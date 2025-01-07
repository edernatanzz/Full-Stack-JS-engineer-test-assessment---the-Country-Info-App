import { Router } from "express";
import countryController from "../controllers/countryController";


const router = Router();
router.get('/countries', countryController.getAvailableCountries)
router.get('/countries/:countryCode', countryController.getCountryInfo);

export default router;