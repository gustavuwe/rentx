import { DataSource } from "typeorm"


const AppDataSource = new DataSource({ // createConnection()
    type: "postgres",
    port: 5432,
    host: "172.22.86.189",
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    
})  // CreateConnection

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource