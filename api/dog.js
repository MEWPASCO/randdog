import axios from 'axios';

export default async function handler(req, res) {
  const id = req.query.id || 1;
  const w = req.query.w || 800;
  const h = req.query.h || 640;

  const imageUrl = `https://placedog.net/${w}/${h}?id=${id}`;
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Content-Disposition', `inline; filename="dog_${id}.jpg"`);
  res.status(200).send(response.data);
}
