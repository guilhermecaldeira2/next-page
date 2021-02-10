import { connectToDatabase } from "../../config/mongodb";

export default async (req, res) => {
  const slug = req.query.id;

  if (!slug) return res.json("Página não encontrada!");

  const { db, client } = await connectToDatabase();

  if (client.isConnected()) {
    const pageViewBySlug = await db.collection("viewers").findOne({ slug });

    let total = 0;
    if (pageViewBySlug) {
      total = pageViewBySlug.total + 1;
      await db.collection("viewers").updateOne({ slug }, { $set: { total } });
    } else {
      total = 1;
      await db.collection("viewers").insertOne({ slug, total });
    }

    return res.status(200).json({ total });
  }

  return res.status(500).json({ error: "client DB is not connected" });
};
