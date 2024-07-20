import {Client, ClientConfig} from "pg"

const config: ClientConfig = {
  connectionString: process.env.DATABASE_URL
}

export const client = new Client(config)

client.connect((err: Error) => {
  if(err != null) {
    console.error("Couldn't connect to database")
  } else {
    console.log("Connected to database successfully");
  }
})