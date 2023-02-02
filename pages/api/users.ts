import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data

let dataw = Array(100).map((i, k) => {
  id: k;
});

const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(users);
  console.log(dataw);
}
