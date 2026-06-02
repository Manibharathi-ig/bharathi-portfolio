import { Router } from "express";
import { createContact, getContacts, getContactById, deleteContact, updateContactStatus } from "../controllers/contactController";

const router = Router();

router.post("/", createContact);

router.get("/", getContacts);

router.get("/:id", getContactById);

router.patch("/:id/status", updateContactStatus);

router.delete("/:id", deleteContact);

export default router;