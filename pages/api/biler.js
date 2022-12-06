import { biler } from '../../data/biler';

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(biler);
	} else if (req.method === 'POST') {
		const data = req.body.dataToPost;
	}
}
