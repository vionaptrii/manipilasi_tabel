// api/data.js
let savedData = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    savedData = req.body;
    res.status(200).json({ message: 'Data tersimpan' });
  } else if (req.method === 'GET') {
    res.status(200).json(savedData);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
