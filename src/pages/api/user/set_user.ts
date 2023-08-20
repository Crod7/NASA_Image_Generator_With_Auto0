import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from "@/lib/MongoConnect";
import User from '@/src/models/UserModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST requests are allowed. This error is located in /src/paes/api/user/set_user.ts" });
    return;
  }

  const { user } = req.body;

  try {
    await connectMongoDB();
    const createdUser = await User.create(user);
    res.status(201).send(createdUser);
  } catch (err:any) {
    if (err.code === 11000 && err.keyPattern && err.keyValue && err.keyValue.nickname) {
      // User already exists, won't create duplicate
      res.status(200).send({ error: "User already exists.", msg: "User already exists." });
    } else {
      console.error(err);
      res.status(400).send({ err, msg: 'Something went wrong. Caught at /src/paes/api/user/set_user.ts' });
    }
  }
}
