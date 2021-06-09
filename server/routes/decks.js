import express from 'express';

import { createDeck, addCard, removeCard } from '../controllers/decks.js';

const router = express.Router();

router.patch('/create', createDeck);

router.get('/addCard', addCard);

router.get('/removeCard', removeCard);

export default router;
