import { NextApiRequest, NextApiResponse } from 'next'
import { currentUser } from '@clerk/nextjs/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await currentUser()
  res.status(200).json({ user: user ? user.id : null })
}