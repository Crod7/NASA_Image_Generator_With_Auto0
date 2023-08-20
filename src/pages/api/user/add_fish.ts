import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from '@/lib/MongoConnect';
import User from '@/src/models/UserModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ msg: 'Only POST requests are allowed.' });
    return;
  }

  const { nickname, newString } = req.body;

  try {
    await connectMongoDB();
    // Find the user by their nickname
    const user = await User.findOne({ nickname });

    if (!user) {
      res.status(404).send({ msg: 'User not found.' });
      return;
    }

    // Check if the newString already exists in the array
    const existingIndex = user.saved_fish.indexOf(newString);

    if (existingIndex !== -1) {
      // If the newString exists, replace it in the array
      user.saved_fish[existingIndex] = newString;
    } else {
      // If the newString does not exist, add it to the array
      user.saved_fish.push(newString);
    }

    // Save the updated user data back to the database
    await user.save();

    res.status(200).send({ msg: 'String added successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Something went wrong.' });
  }
}
