import { Router } from 'express';
import mailer from './mailer';

export default ({ config, db }) => {
	let api = Router();

	api.post('/sendEmail', (req, res) => {
		mailer(req, res);
	});

	return api;
}
