import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res){
  const { db } = await connectToDatabase();
  const data = await db.collection("healthProviders").aggregate([
      {
          $search: {
              search: {
                  query: req.query.term,
                  path: ["provider_name", "state"] //searchable terms
              }
          }
      }, 
      {
        $project: {
            provider_name: 1, // only returns these values
            state: 1
        }
      },
      
      {
          $limit: 50
      }
  ]).toArray()

  console.log(data)
  res.json(data);

}