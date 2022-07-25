import { createConnections, Connection } from "typeorm";

createConnections()
    .then((connection: Connection[]) => {
        console.log("Connections created");
    })
    .catch((error) => {
        console.log("Error creating connections");
        console.log(error);
    });
