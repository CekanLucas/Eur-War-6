import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'

dotenv.config({path:'../env'})
console.log(process.env.mongodb_connection_string)

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.mongodb_connection_string
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect()
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)
