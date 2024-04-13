import { DataSource } from "typeorm"


const AppDataSource = new DataSource({ // createConnection()
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "docker",
    password: "ignite",
    database: "rentx"
})  // CreateConnection

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })