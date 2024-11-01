import { NextApiRequest, NextApiResponse } from 'next'

type ReturnedData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnedData>
) {
  try {
    if (req.method === 'POST') {
      // Set the JWT cookie with an empty value and an expiry date in the past to remove it
      res.setHeader('Set-Cookie', `token=; Path=/; HttpOnly; Max-Age=0;`);
      res.status(200).json({ message: 'Ok' })
    }
  } catch (_e) {
    res.status(500).json({ message: 'Unexpected error' })
  }
}
